<?php

class Init
{
    public function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'enqueue_bootstrap']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_bootstrap']);
        $this->callFiles();
    }
    function enqueue_bootstrap()
    {
        $version = time();
        wp_enqueue_style('quiz-style', QUIZ_PLUGIN_URL . 'src/assets/css/quiz.css');
        wp_enqueue_script('quiz-js', QUIZ_PLUGIN_URL . 'src/assets/js/quiz.js', array('jquery'), $version, true);
        wp_localize_script('quiz-js', 'quiz_ajax_obj', [
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('quiz_nonce')
        ]);

        wp_enqueue_style('bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', array('jquery'), null, true);
    }
    public function callFiles()
    {
        require_once QUIZE_DIR_PATH . '/src/admin/adminMenu.php';
        require_once QUIZE_DIR_PATH . '/src/frontend/quizForm.php';
        require_once QUIZE_DIR_PATH . '/src/includes/database.php';
        require_once QUIZE_DIR_PATH . '/src/admin/class-quiz-results-table.php';

        new QuizForm();
        new AdminMenu();
        new Database();
    }
}
