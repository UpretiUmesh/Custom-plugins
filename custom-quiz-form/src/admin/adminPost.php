<?php

class MultiQuizManager
{
    public function __construct()
    {
        add_action('init', [$this, 'register_quiz_post_type']);
        add_action('admin_menu', [$this, 'add_admin_menu']);
        add_action('admin_post_save_multi_quiz', [$this, 'save_quiz_data']);
    }

    /**
     * Register Custom Post Type for Quizzes
     */
    public function register_quiz_post_type()
    {
        register_post_type('multi_quiz', [
            'labels' => [
                'name' => __('Quizzes', 'multi-quiz'),
                'singular_name' => __('Quiz', 'multi-quiz'),
            ],
            'public' => false,
            'show_ui' => true,
            'menu_icon' => 'dashicons-welcome-learn-more',
            'supports' => ['title'],
        ]);
    }

    /**
     * Add Admin Menu Page
     */
    public function add_admin_menu()
    {
        add_menu_page(
            'Multi-Quiz Manager',
            'Multi-Quiz',
            'manage_options',
            'multi-quiz',
            [$this, 'admin_page'],
            'dashicons-welcome-learn-more'
        );
    }

    /**
     * Handle Saving Quiz Data
     */
    public function save_quiz_data()
    {
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized access');
        }

        if (isset($_POST['quiz_data'])) {
            foreach ($_POST['quiz_data'] as $quiz_id => $quiz) {
                $quiz_title = sanitize_text_field($quiz['title']);
                $quiz_questions = json_encode($quiz['questions']);

                if (!empty($quiz['post_id']) && get_post_status($quiz['post_id'])) {
                    // Update existing quiz
                    wp_update_post([
                        'ID' => intval($quiz['post_id']),
                        'post_title' => $quiz_title,
                        'post_type' => 'multi_quiz',
                        'post_status' => 'publish',
                    ]);
                    update_post_meta($quiz['post_id'], '_quiz_questions', $quiz_questions);
                } else {
                    // Insert new quiz
                    $new_quiz_id = wp_insert_post([
                        'post_title' => $quiz_title,
                        'post_type' => 'multi_quiz',
                        'post_status' => 'publish',
                    ]);
                    update_post_meta($new_quiz_id, '_quiz_questions', $quiz_questions);
                }
            }
        }

        wp_redirect(admin_url('admin.php?page=multi-quiz&message=saved'));
        exit;
    }

    /**
     * Admin Page UI
     */
    public function admin_page()
    {
        $quizzes = get_posts(['post_type' => 'multi_quiz', 'posts_per_page' => -1]);
?>
        <div class="wrap">
            <h1>Multi-Quiz Manager</h1>
            <form method="post" action="<?php echo admin_url('admin-post.php'); ?>">
                <input type="hidden" name="action" value="save_multi_quiz">
                <div id="quiz-container">
                    <?php foreach ($quizzes as $quiz) :
                        $questions = json_decode(get_post_meta($quiz->ID, '_quiz_questions', true), true);
                    ?>
                        <div class="quiz-block">
                            <input type="hidden" name="quiz_data[<?php echo $quiz->ID; ?>][post_id]" value="<?php echo $quiz->ID; ?>">
                            <h2>Quiz Title: <input type="text" name="quiz_data[<?php echo $quiz->ID; ?>][title]" value="<?php echo esc_attr($quiz->post_title); ?>" required></h2>
                            <button type="button" class="remove-quiz">Remove Quiz</button>
                            <table class="questions-table">
                                <thead>
                                    <tr>
                                        <th>Question</th>
                                        <th>Options</th>
                                        <th>Correct Answer(s)</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($questions as $q_index => $question) : ?>
                                        <tr>
                                            <td><input type="text" name="quiz_data[<?php echo $quiz->ID; ?>][questions][<?php echo $q_index; ?>][question]" value="<?php echo esc_attr($question['question']); ?>" required></td>
                                            <td>
                                                <div class="options-container">
                                                    <?php foreach ($question['options'] as $opt_index => $option) : ?>
                                                        <div>
                                                            <input type="text" name="quiz_data[<?php echo $quiz->ID; ?>][questions][<?php echo $q_index; ?>][options][<?php echo $opt_index; ?>]" value="<?php echo esc_attr($option); ?>" required>
                                                        </div>
                                                    <?php endforeach; ?>
                                                </div>
                                            </td>
                                            <td>
                                                <select name="quiz_data[<?php echo $quiz->ID; ?>][questions][<?php echo $q_index; ?>][correct_answers][]" multiple>
                                                    <?php foreach ($question['options'] as $option) : ?>
                                                        <option value="<?php echo esc_attr($option); ?>" <?php echo (in_array($option, $question['correct_answers'])) ? 'selected' : ''; ?>>
                                                            <?php echo esc_html($option); ?>
                                                        </option>
                                                    <?php endforeach; ?>
                                                </select>
                                            </td>
                                            <td><button type="button" class="remove-question">Remove</button></td>
                                        </tr>
                                    <?php endforeach; ?>
                                </tbody>
                            </table>
                        </div>
                    <?php endforeach; ?>
                </div>
                <button type="button" id="add-quiz">Add Quiz</button>
                <input type="submit" value="Save Quizzes" class="button button-primary">
            </form>
        </div>
<?php
    }
}
