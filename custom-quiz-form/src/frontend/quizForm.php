<?php
class QuizForm
{
    public function __construct()
    {
        add_shortcode('multi_quiz', [$this, 'display_multi_quiz']);
        add_shortcode('quiz_results', [$this, 'display_quiz_results']);

        add_action('wp_ajax_handle_quiz_submission', [$this, 'handle_quiz_submission']);
        add_action('wp_ajax_nopriv_handle_quiz_submission', [$this, 'handle_quiz_submission']);

        session_start(); // Start the session to track the current question
    }
    // Quiz Conditions
    function quizConditions()
    {

        // Initialize session values if not set
        if (!isset($_SESSION['show_user_details'])) {
            $_SESSION['show_user_details'] = false;
        }
        // Number of questions per page
        if (!isset($_SESSION['display_all_questions'])) {
            $_SESSION['display_all_questions'] = isset($_POST['display_all']) ? true : false;
        }

        $questions_per_page = $_SESSION['display_all_questions'] ? PHP_INT_MAX : 11;

        // Handle form submission action
        if (isset($_POST['submit_value'])) {
            $action = $_POST['submit_value'];

            // Save answers to session before navigation
            if (isset($_POST['quiz_answers']) && is_array($_POST['quiz_answers'])) {
                $_SESSION['quiz_answers'] = $_POST['quiz_answers'];
            }

            if ($action == 'next') {
                $_SESSION['show_user_details'] = true;
            } elseif ($action == 'previous') {
                $_SESSION['show_user_details'] = false;
            } elseif ($action == 'submit') {
                // Process quiz results
                $formData = $this->process_quiz_results();
                if (isset($_POST['username']) && isset($_POST['email'])) {
                    $_SESSION['user_info'] = [
                        'username' => sanitize_text_field($_POST['username']),
                        'email' => sanitize_email($_POST['email']),
                    ];
                }
                session_unset();
                session_destroy();
                wp_send_json_success(['message' => 'Quiz completed successfully.', 'form_html' => $formData]);
                return;
            } elseif ($action == 'Final Submit') {
                $getID = '';
                $this->set_data_to_admin($getID);
                $formData = '  <!-- thank-you-wrapper -->
                                <section class="thank-you-wrapper">
                                    <div class="container">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div class="thank-you-page-content">
                                            <h1>Your submission is received and we will contact you soon!</h1>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </section>
                                <!-- thank-you-wrapper -->';
                wp_send_json_success(['message' => 'Quiz completed successfully.', 'form_html' => $formData]);
            }
        }

        return $questions_per_page;
    }
    // Display Quiz Steps ShortCode
    function display_multi_quiz()
    {
        // ob_start();
        if (!isset($_SESSION['current_question'])) {
            $_SESSION['current_question'] = 0; // Start from the first question set
        }

        $output = "<form method='POST' class='quiz-form' id='quiz-form'>";

        // Fetch quiz data from the database
        $quiz_data = json_decode(get_option('multi_quiz_data', '[]'), true);

        if (empty($quiz_data)) {
            $output .= "<p>No quiz data available.</p>";
            return;
        }

        $quiz = $quiz_data[0]; // Assume a single quiz
        $total_questions = count($quiz['questions']);
        $current_question = $_SESSION['current_question'];
        $questions_per_page = $this->quizConditions();

        if ($_SESSION['show_user_details']) {
            // Show the name & email input fields
            $output .= $this->contactForm();
        } else {
            // Display six questions per page
            $output .= $this->currentQuestion($current_question, $questions_per_page, $total_questions, $quiz);
            $output .= $this->quizNavigation();
        }
        $output .= "</form>";
        // $quiz_output = ob_get_clean();
        return $output;
    }
    // Display Quiz Steps AjaxHandler
    function handle_quiz_submission()
    {
        ob_start();

        // Verify nonce for security
        if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'quiz_nonce')) {
            wp_send_json_error(['message' => 'Nonce verification failed']);
        }
        if (!isset($_SESSION['current_question'])) {
            $_SESSION['current_question'] = 0; // Start from the first question set
        }

        $quiz_data = json_decode(get_option('multi_quiz_data', '[]'), true);
        if (empty($quiz_data)) {
            wp_send_json_error(['message' => 'No quiz data available.']);
            return;
        }
        $quiz = $quiz_data[0];
        $total_questions = count($quiz['questions']);
        $current_question = $_SESSION['current_question'];
        $questions_per_page = $this->quizConditions();

        $form_html = "<form method='POST' class='quiz-form' id='quiz-form'>";

        if ($_SESSION['show_user_details']) {
            $form_html .= $this->contactForm();
        } else {
            // Display six questions per page
            $form_html .= $this->currentQuestion($current_question, $questions_per_page, $total_questions, $quiz);
            $form_html .= $this->quizNavigation();
        }

        $form_html .= "</form>";
        wp_send_json_success(['form_html' => $form_html]);
        return ob_get_clean();
    }
    // Contact Details
    function contactForm()
    {
        $form_html = '
        <div class="quiz-form-wrap">
        <img src="https://tx.hydroprosolutions.com/wp-content/uploads/2025/03/quizimg.png">
        <div>
        <h3 class="custom_form_text text-center">For Your Quiz Results,
                Enter Your Name and Email</h3>
                        <div class=" result-mail-sec contact_details">
                            <div class="col">
                                <input type="text" class="form-control" id="username" name="username" placeholder="Name">
                                <div class="error-message"></div>
                            </div>
                            <div class="col">
                                <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                                <div class="error-message"></div>
                            </div>
                             <div class="col">
                                <input type="text" class="form-control" id="utility_name" name="utility_name" placeholder="Utility Name">
                                <div class="error-message"></div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone ">
                                <div class="error-message"></div>
                            </div>
                        </div>';
        $form_html .= "<div class='quiz-navigation'>";
        $form_html .= "<input type='submit' class='custom_submitinputpre' name='previous' value='previous'></input>";
        $form_html .= "<input class='custom_submitinput submit-result-btn' type='submit' name='submit' value='submit'></input>";
        $form_html .= "</div>";
        $form_html .= "</div></div>";

        return $form_html;
    }
    // Quiz Navigation
    function quizNavigation()
    {
        $form_html = "<div class='quiz-navigation'>";
        // Navigation buttons
        if ($_SESSION['show_user_details']) {
            // Show "Back to Quiz" button when the user is on the name/email input step
            $form_html .= "<input type='submit' class='custom_submitinputpre' name='previous' value='previous'></input>";
            $form_html .= "<input class='custom_submitinput' type='submit' name='submit' value='submit'></input>";
        } else {
            $form_html .= "<input type='submit' class='custom_submitinput' name='next' value='next'></input>";
        }
        $form_html .= "</div>";

        return $form_html;
    }
    // Quiz Question And Answer
    function currentQuestion($current_question, $questions_per_page, $total_questions, $quiz)
    {
        $qusForm = '';
        for ($i = $current_question; $i < min($current_question + $questions_per_page, $total_questions); $i++) {
            $question = $quiz['questions'][$i];
            $question_number = str_pad($i + 1, 2, '0', STR_PAD_LEFT);

            $qusForm .= "<fieldset class='question steps-sec' id='question-{$i}'>";
            $qusForm .= "<legend><strong>{$question_number} </strong>" . esc_html($question['question']) . "</legend>";

            $is_multiple = isset($question['correct_answers']) && count($question['correct_answers']) > 1 ? 'checkbox' : 'radio';
            $qusForm .= "<div class='single-option'>";
            foreach ($question['options'] as $option_index => $option) {
                $option_value = chr(65 + $option_index); // A, B, C, D (ASCII 65-68)
                $checked = in_array($option_value, $_SESSION['quiz_answers'][$i] ?? []) ? 'checked' : '';
                $activeClass = !empty($checked) ? 'class="active"' : '';
                $qusForm .= "<label {$activeClass}><input type='{$is_multiple}' name='quiz_answers[{$i}][]' value='{$option_value}' {$checked} > {$option}</label><br>";
            }
            $qusForm .= "</div>";
            $qusForm .= "<div class='error-message'></div>"; // Error message container
            $qusForm .= "</fieldset>";
        }
        return $qusForm;
    }
    // Quiz Process Results
    function process_quiz_results()
    {
        // Fetch all answers stored in session
        $total_score = 0;
        $answer = [];
        $username = $_POST['username'];  // For now, use static data, replace with dynamic data if needed
        $email = $_POST['email'];
        $phoneNumber = $_POST['phone'];
        $utility_name = $_POST['utility_name'];
        $zipCode = $_POST['zipcode'];
        foreach ($_SESSION['quiz_answers'] as $keSes => $valSees) {
            foreach ($valSees as $key => $val) {
                $answer[$keSes] = $val;
            }
        }

        $total_score = $this->get_answer_points($answer);
        // Categorize user based on total score
        $burden_category = $this->categorize_user($total_score);

        // Debugging: Output the burden_category structure

        // Check if the burden_category is set and has the expected keys
        if (isset($burden_category['burden_level'], $burden_category['description'], $burden_category['progress'])) {

            // Save quiz results in the database
            $getId = $this->save_quiz_results($username, $email, $answer, $total_score, $burden_category['burden_level'], $burden_category['description']);
            $this->send_quiz_email($username, $email, $total_score, $burden_category['burden_level'], $burden_category['description']);
            $this->set_data_to_admin($getId);
            $progressBar = '';
            if (!empty($burden_category['progress'])) {
                $progressBar = "<div class='progress-container'><div class='progress-bar' style='width: " . $burden_category['progress'] . "%'><div class='text-center'>" . $burden_category['progress'] . "%</div></div></div>";
            }
            // Display results to the user
            // $fromData = "<span> Mostly: $total_score's </span>";
            $fromData = "<div class='final-result-sec'> <img src=" . $burden_category['levelIcon'] . ">";
            $fromData .= "<h3>" . $burden_category['burden_level'] . "</h3>";
            $fromData .= "<p>" . $burden_category['description'] . "</p>";
            $fromData .= $progressBar;
            // $fromData .=  "<a href='schedule-consultation.php' class='cta-button'>Schedule a Consultation</a>";
            // $fromData .= "<a href='/view-result/?id=" . $getId . "' class='cta-button'>View Result</a>";
            $fromData .= "</div>";
            $fromData .= $this->result_Form_contact($username, $email, $phoneNumber, $getId);
        } else {
            // If there's an issue with the burden_category data, show an error
            $fromData = "<p>Error: Unable to retrieve the burden category details. Please try again later.</p>";
        }
        return $fromData;
    }
    // Quiz Answer Points
    function get_answer_points($answers)
    {
        $points_count = [
            'A' => 0,
            'B' => 0,
            'C' => 0,
            'D' => 0
        ];

        if (is_array($answers)) {
            foreach ($answers as $answer) {
                $point = $this->get_point_for_single_answer($answer);
                if ($point > 0) {
                    $key = array_search($point, ['A' => 1, 'B' => 2, 'C' => 3, 'D' => 4]);
                    if ($key) {
                        $points_count[$key]++;
                    }
                }
            }
        } else {
            $point = $this->get_point_for_single_answer($answers);
            if ($point > 0) {
                $key = array_search($point, ['A' => 1, 'B' => 2, 'C' => 3, 'D' => 4]);
                if ($key) {
                    $points_count[$key]++;
                }
            }
        }
        // Find the highest count
        $max_choice = array_search(max($points_count), $points_count);

        return isset($max_choice) ? $max_choice : 0;
    }
    // Quiz Points For Single Answer
    function get_point_for_single_answer($answer)
    {
        if (is_array($answer)) {
            $answer = $answer[0];
        }
        $points = [
            'A' => 1, // Low Burden
            'B' => 2, // Moderate Burden
            'C' => 3, // Significant Burden
            'D' => 4  // Overwhelmed/High Burden
        ];

        return isset($points[$answer]) ? $points[$answer] : 0;
    }
    // Quiz Points
    function categorize_user($total_score)
    {
        if ($total_score == 'A') {
            $burden_level = 'Your Water Utility is in Trouble!';
            $description = "Your utility is facing serious operational challenges. From meter reading inefficiencies to NRW (non-revenue water) concerns, staff turnover, and cybersecurity risks, these issues can add up to major financial and service problems. Investing in modern metering technology, automation, and data-driven decision-making could significantly improve your utility’s efficiency and resilience. Now’s the time to take action before these challenges escalate. HydroPro Solutions can help you find the right solutions to address these challenges—contact us today to get started!";
            $levelIcon = "https://tx.hydroprosolutions.com/wp-content/uploads/2025/03/Frame-4.png";
            $progress = '';
        } elseif ($total_score == 'B') {
            $burden_level = 'Your Utility is Managing, but Challenges Exist';
            $description = "Your utility is doing okay, but there’s room for improvement. While you may not be in crisis mode, inefficiencies in meter reading, data collection, and infrastructure management could be holding you back. Addressing NRW, enhancing automation, and providing better training for staff could help strengthen your utility for the long run. Staying ahead of these issues now can prevent bigger problems down the road. HydroPro Solutions offers expert guidance and technology to help your utility stay ahead—reach out to see how we can support you!";
            $levelIcon = "https://tx.hydroprosolutions.com/wp-content/uploads/2025/03/Frame-3.png";
            $progress = '';
        } elseif ($total_score == "C") {
            $burden_level = 'Your Utility is Thriving!';
            $description = "Congratulations! Your utility appears to be operating efficiently with modern infrastructure, strong data insights, and minimal staffing or operational challenges. Staying proactive with technology, cybersecurity, and continuous improvement will help ensure long-term success. HydroPro Solutions can help you maintain and build on this success—let’s discuss how we can support your future goals! Keep up the great work!";
            $progress = '';
            $levelIcon = "https://tx.hydroprosolutions.com/wp-content/uploads/2025/03/Frame-2.png";
        } elseif ($total_score == 'D') {
            $burden_level = '';
            $description = "";
            $progress = '';
            $levelIcon = "";
        } else {
            $burden_level = 'Invalid Score';
            $description = 'The score provided is outside the expected range.';
            $progress = 0;
            $levelIcon = "";
        }

        return [
            'burden_level' => $burden_level,
            'description' => $description,
            'progress' => $progress,
            'levelIcon' => $levelIcon
        ];
    }
    // Quiz Result Save
    function save_quiz_results($name, $email, $answers, $total_score, $burden_level, $description)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'quiz_results';

        $wpdb->insert(
            $table_name,
            [
                'name' => sanitize_text_field($name),
                'email' => sanitize_email($email),
                'answers' => maybe_serialize($answers), // Store as serialized array
                'total_score' => sanitize_text_field($total_score),
                'burden_level' => sanitize_text_field($burden_level),
                'description' => sanitize_textarea_field($description),
            ],
            ['%s', '%s', '%s', '%s', '%s', '%s']
        );
        return $wpdb->insert_id;
    }
    // Quiz Send Email
    function send_quiz_email($name, $email, $total_score, $burden_level, $description)
    {
        $toEmail = [
            $email
        ];
        $subject = "Is Your Utility in Trouble? Quiz Results";

        $site_url = get_site_url();

        // Dynamic logo with fallback
        $logo_url = wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full')
            ?: $site_url . '/wp-content/uploads/2022/06/tx-logo-rework.png';

        $logo = "<img src='{$logo_url}' alt='HydroPro Solutions' style='max-width: 150px; height: auto; display: block; margin: 0 auto;' />";

        $message = "
            <h2>Hi $name,</h2>
            <p>Thank you for completing the quiz! Here are your results:</p>
            <p><strong>Burden Level:</strong> $burden_level</p>
            <p>$description</p>
            </br>
            <p>Thank you!</p>
            <p>HydroPro Solutions</p>
            <p>Call or Email Us Today!</p> 
            <p>512-996-8944</p>
            <p>house@hydroprosolutions.com</p>
            <hr>
            <div style='text-align: center;'>
                $logo
                <p><a href='$site_url'>$site_url</a></p>
            </div>
        ";

        $headers = ['Content-Type: text/html; charset=UTF-8', 'From: Your Business <no-reply@yourwebsite.com>'];

        wp_mail($toEmail, $subject, $message, $headers);
    }
    function update_quiz_results()
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'quiz_results';

        $wpdb->update(
            $table_name,
            [
                'name' => sanitize_text_field($name),
                'email' => sanitize_email($email),
                'answers' => maybe_serialize($answers), // Store as serialized array
                'total_score' => sanitize_text_field($total_score),
                'burden_level' => sanitize_text_field($burden_level),
                'description' => sanitize_textarea_field($description),
            ],
            ['id' => absint($id)], // WHERE condition
            ['%s', '%s', '%s', '%s', '%s', '%s'], // Data format
            ['%d'] // WHERE format
        );

        // return $wpdb->rows_affected; // Returns number of rows updated
    }


    // Display Quiz Results
    // call Mail function
    public function display_quiz_results($getId, $zipCode, $phoneNumber, $utility_name)
    {
        // ob_start();
        $id = empty($_REQUEST['getID']) ? $getId : $_REQUEST['getID'];
        global $wpdb;
        $table_name = $wpdb->prefix . 'quiz_results';

        // Fetch result from the database
        $result = $wpdb->get_row(
            $wpdb->prepare("SELECT id, name, email, total_score, burden_level, description, answers FROM $table_name WHERE id = %d", $id)
        );
        if (!$result) {
            echo "<p>No quiz results found.</p>";
            return;
        }

        $answers = unserialize($result->answers);
        $name =  empty($_REQUEST['getID']) ? esc_html($result->name) : $_REQUEST['username'];
        $email = empty($_REQUEST['getID']) ? esc_html($result->email) : $_REQUEST['email'];
        $total_score = esc_html($result->total_score);
        $burden_level = esc_html($result->burden_level);
        $description = esc_html($result->description);

        // Display result data
        // echo '<div class="quiz-results">';
        // echo '<h2>Quiz Results</h2>';
        // echo '<div class="quiz-details">';
        // echo "<strong>Name:</strong> $name <br>";
        // echo "<strong>Email:</strong> $email <br>";
        // echo "<strong>Total Score:</strong> $total_score <br>";
        // echo "<strong>Burden Level:</strong> $burden_level <br>";
        // echo "<strong>Description:</strong> $description <br>";
        // echo '</div>'; // End quiz-details

        $quiz_data = json_decode(get_option('multi_quiz_data', '[]'), true);
        if (empty($quiz_data)) {
            echo "<p>No quiz data available.</p>";
            return;
        }

        $email_content = $this->prepare_quiz_email_content($name, $email, $total_score, $burden_level, $description, $quiz_data, $answers);
        $this->send_quiz_results_email($email_content, $name, $email, $total_score, $burden_level, $description, $phoneNumber, $zipCode, $utility_name);

        // echo '</div>'; // End quiz-results div
        // return ob_get_clean();
    }
    private function prepare_quiz_email_content($name, $email, $total_score, $burden_level, $description, $quiz_data, $answers)
    {
        $email_content = '';

        foreach ($quiz_data as $quiz_index => $quiz) {


            foreach ($quiz['questions'] as $q_index => $question) {
                $question_number = str_pad($q_index + 1, 2, '0', STR_PAD_LEFT);
                $email_content .= "<fieldset class='question steps-sec' id='quiz-{$quiz_index}'>";
                $email_content .= "<legend><strong>{$question_number} </strong> " . esc_html($question['question']) . "</legend>";
                $email_content .= "<div class='single-option'>";

                $is_multiple = isset($question['correct_answers']) && count($question['correct_answers']) > 1 ? 'checkbox' : 'radio';
                $question_answer = isset($answers[$q_index]) ? (array) $answers[$q_index] : [];
                $question_answer = array_map('strval', $question_answer); // Ensure all answers are strings

                // Skip question if there is no recorded answer
                if (empty($question_answer))
                    continue;

                foreach ($question['options'] as $option_index => $option) {
                    $option_value = chr(65 + $option_index); // A, B, C, D (ASCII 65-68)
                    $is_checked = in_array($option_value, $question_answer) ? 'checked' : '';
                    $add_class = $is_checked ? 'class="active-result"' : 'not-checked';
                    $email_content .= "<label {$add_class}><input type='{$is_multiple}' name='quiz_answers[{$quiz_index}_{$q_index}][]' value='{$option_value}'  {$is_checked}> " . esc_html($option) . "</label><br>";
                }
                $email_content .= "</div>"; // End options div
                $email_content .= "</fieldset>"; // End question-fieldset div
            }
        }
        return $email_content;
    }
    private function send_quiz_results_email($email_content, $name, $email, $total_score, $burden_level, $description, $phoneNumber, $zipCode, $utility_name)
    {
        $admin_email = get_option('admin_email');
        $subject = "Quiz Results for {$name}";
        $headers = ['Content-Type: text/html; charset=UTF-8'];
        // <strong>ZipCode:</strong> $zipCode<br>
        $full_email_content = "<p><strong>Name:</strong> $name<br>
                              <strong>Email:</strong> $email<br>
                              <strong>Utility Name:</strong> $utility_name<br>
                              <strong>Phone Number:</strong> $phoneNumber<br>
                              <strong>ZipCode:</strong> $zipCode<br>
                              <strong>Total Score:</strong> $total_score<br>
                              <strong>Burden Level:</strong> $burden_level<br>
                              <strong>Description:</strong> $description</p>";

        $full_email_content .= $email_content;

        wp_mail($admin_email, $subject, $full_email_content, $headers);
    }
    function result_Form_contact($name, $email, $phoneNumber, $getID)
    {

        $form_rs = "<p class='text-center'>Do you want to address the problems your utility is facing? Reach out to HydroPro Solutions today! We'd love to have a conversation with you about the right solutions for your utility.</p>";
        $form_rs .= "
        <input type='hidden' name='getID' value=$getID>
       <div class='result-half-div'> 
       <input type='text' class='form-control' id='username' name='username' value=$name>
        <div class='error-message'></div>
        <input type='email' class='form-control' id='email' name='email' value=$email>
        <div class='error-message'></div>
       </div>
        <div class='result-half-div'> 
        <input type='text' class='form-control' id='phone' name='phone' value=$phoneNumber>
        <div class='error-message'></div>
       <input type='text' class='form-control' id='zipcode' name='zipcode' placeholder='zipcode'>
        <div class='error-message'></div>
       </div>
       <div class='additional-custom'>
       <input type='textarea' class='form-control' id='additionatl-field' name='additionatl-field' placeholder='Any information you`d like to provide.'>
       </div>
       <input type='submit' class='button_success_quiz' name='success' value='Final Submit'/>";
        return $form_rs;
    }
    function set_data_to_admin($getID)
    {

        $getId = empty($getID) ? $_POST['getID'] : $getID;
        $zipCode = $_POST['zipcode'];
        $phoneNumber = $_POST['phone'];
        $utility_name = $_POST['utility_name'];
        $this->display_quiz_results($getId, $zipCode, $phoneNumber, $utility_name);
    }
}
