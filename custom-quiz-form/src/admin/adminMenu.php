<?php
require_once QUIZE_DIR_PATH . '/src/admin/class-quiz-results-table.php';
class AdminMenu
{
    public function __construct()
    {
        add_action('admin_menu', [$this, 'multi_quiz_add_menu']);
        add_action('admin_init', [$this, 'multi_quiz_save_data']);
    }
    function multi_quiz_add_menu()
    {
        add_menu_page(
            'Multi-Quiz',
            'Multi-Quiz',
            'manage_options',
            'multi-quiz',
            array($this, 'multi_quiz_admin_page'),
            'dashicons-clipboard', // Add the icon here (not in submenu)
            20
        );

        add_submenu_page(
            'multi-quiz', // Must match the parent slug
            'Quiz Results',
            'Quiz Results', // Visible name in menu
            'manage_options',
            'quiz-results',
            array($this, 'display_quiz_results')
        );
    }
    function multi_quiz_save_data()
    {
        if (isset($_POST['quiz_data'])) {
            update_option('multi_quiz_data', json_encode($_POST['quiz_data']));
        }
    }
    function multi_quiz_admin_page()
    {
        $saved_data = json_decode(get_option('multi_quiz_data', '[]'), true);

?>
        <div class="wrap">
            <h1>Multi-Quiz Creator</h1>
            <form method="post">
                <div id="quiz-container">
                    <?php if (!empty($saved_data)) : ?>
                        <?php foreach ($saved_data as $quiz_index => $quiz) : ?>
                            <div class="quiz-block">
                                <?php
                                if (isset($quiz['title'])) {
                                    echo '<h2> ' . $quiz['title'] . ' </h2>';
                                } else {
                                    echo '<h2>Quiz <span class="quiz-number">' . ($quiz_index + 1) . '</span></h2>';
                                }
                                ?>


                                <input type="text" name="quiz_data[<?php echo $quiz_index; ?>][title]" value="<?php echo esc_attr($quiz['title']); ?>" placeholder="Quiz Title" required>
                                <button type="button" class="remove-quiz">Remove Quiz</button>
                                <table class="questions-table">
                                    <thead>
                                        <tr>
                                            <th>Question</th>
                                            <th>Options</th>
                                            <!-- <th>Points</th> -->
                                            <th>Correct Answer(s)</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php if (!empty($quiz['questions'])) : ?>
                                            <?php foreach ($quiz['questions'] as $q_index => $question) : ?>
                                                <tr>
                                                    <td><input type="text" name="quiz_data[<?php echo $quiz_index; ?>][questions][<?php echo $q_index; ?>][question]" value="<?php echo esc_attr($question['question']); ?>" required></td>
                                                    <td>
                                                        <div class="options-container">
                                                            <?php if (!empty($question['options'])) : ?>
                                                                <?php foreach ($question['options'] as $opt_index => $option) : ?>
                                                                    <div>
                                                                        <input type="text" name="quiz_data[<?php echo $quiz_index; ?>][questions][<?php echo $q_index; ?>][options][<?php echo $opt_index; ?>]" value="<?php echo esc_attr($option); ?>" required>
                                                                        <select name="quiz_data[<?php echo $quiz_index; ?>][questions][<?php echo $q_index; ?>][points][<?php echo $opt_index; ?>]" required>
                                                                            <option value="1" <?php echo (isset($question['points'][$opt_index]) && $question['points'][$opt_index] == 1) ? 'selected' : ''; ?>>A (Low Burden)</option>
                                                                            <option value="2" <?php echo (isset($question['points'][$opt_index]) && $question['points'][$opt_index] == 2) ? 'selected' : ''; ?>>B (Moderate Burden)</option>
                                                                            <option value="3" <?php echo (isset($question['points'][$opt_index]) && $question['points'][$opt_index] == 3) ? 'selected' : ''; ?>>C (Significant Burden)</option>
                                                                            <option value="4" <?php echo (isset($question['points'][$opt_index]) && $question['points'][$opt_index] == 4) ? 'selected' : ''; ?>>D (Overwhelmed/High Burden)</option>
                                                                        </select>
                                                                        <button type="button" class="remove-option">✖</button>
                                                                    </div>
                                                                <?php endforeach; ?>
                                                            <?php endif; ?>
                                                        </div>
                                                        <button type="button" class="add-option">Add Option</button>
                                                    </td>
                                                    <td>
                                                        <select name="quiz_data[<?php echo $quiz_index; ?>][questions][<?php echo $q_index; ?>][correct_answers][]" multiple>
                                                            <?php foreach ($question['options'] as $opt_index => $option) : ?>
                                                                <option value="<?php echo esc_attr($option); ?>" <?php echo (isset($question['correct_answers']) && in_array($option, $question['correct_answers'])) ? 'selected' : ''; ?>>
                                                                    <?php echo esc_html($option); ?>
                                                                </option>
                                                            <?php endforeach; ?>
                                                        </select>
                                                    </td>
                                                    <td><button type="button" class="remove-question">Remove</button></td>
                                                </tr>
                                            <?php endforeach; ?>
                                        <?php endif; ?>
                                    </tbody>
                                </table>
                                <button type="button" class="add-question">Add Question</button>
                            </div>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
                <button type="button" id="add-quiz">Add Quiz</button>
                <input type="submit" value="Save Quizzes" class="button button-primary">
            </form>
        </div>
    <?php
    }

    function display_quiz_results()
    {
        $quizTable = new Quiz_Results_Table();
        $quizTable->prepare_items();
    ?>
        <div class="wrap">
            <h1>Quiz Results</h1>
            <form method="post">
                <?php $quizTable->display(); ?> <!-- This is the correct way to display the table -->
            </form>
        </div>
<?php
    }
}
