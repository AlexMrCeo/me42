/**
 * my42 - Task Interactivity
 * Lightweight task checkbox functionality
 * No persistence, visual feedback only
 */

(function() {
    'use strict';

    // Feedback messages (subtle, not gamified)
    const FEEDBACK_MESSAGES = [
        '+3 alignment',
        '+2 focus',
        '+4 momentum',
        '+5 progress',
        '+3 clarity'
    ];

    /**
     * Get random feedback message
     */
    function getRandomFeedback() {
        return FEEDBACK_MESSAGES[Math.floor(Math.random() * FEEDBACK_MESSAGES.length)];
    }

    /**
     * Show ephemeral feedback near task
     */
    function showFeedback(taskRow, message) {
        // Remove any existing feedback
        const existingFeedback = taskRow.querySelector('.task-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        // Create feedback element
        const feedback = document.createElement('span');
        feedback.className = 'task-feedback positive';
        feedback.textContent = message;
        taskRow.appendChild(feedback);

        // Auto-remove after animation completes
        setTimeout(() => {
            feedback.remove();
        }, 1200);
    }

    /**
     * Handle task checkbox toggle
     */
    function handleTaskToggle(checkbox) {
        const taskRow = checkbox.closest('.task-row');
        if (!taskRow) return;

        const isCompleted = checkbox.checked;

        if (isCompleted) {
            // Mark as completed
            taskRow.classList.add('task--completed');
            showFeedback(taskRow, getRandomFeedback());
        } else {
            // Undo completion
            taskRow.classList.remove('task--completed');
        }
    }

    /**
     * Initialize task interactivity
     */
    function initTaskInteractivity() {
        // Find all task checkboxes
        const taskCheckboxes = document.querySelectorAll('.task-row input[type="checkbox"]');

        taskCheckboxes.forEach(checkbox => {
            // Preserve existing checked state and apply completed class
            if (checkbox.checked) {
                const taskRow = checkbox.closest('.task-row');
                if (taskRow) {
                    taskRow.classList.add('task--completed');
                }
            }

            // Add click handler
            checkbox.addEventListener('change', function() {
                handleTaskToggle(this);
            });
        });
    }

    /**
     * Initialize mobile menu toggle
     */
    function initMobileMenu() {
        const menuToggle = document.querySelector('.app-header-menu-toggle');
        const navContainer = document.querySelector('.app-header-nav-container');

        if (!menuToggle || !navContainer) return;

        menuToggle.addEventListener('click', function() {
            navContainer.classList.toggle('active');
            const isOpen = navContainer.classList.contains('active');
            menuToggle.textContent = isOpen ? 'Close' : 'Menu';
        });

        // Close menu when clicking a link
        const navLinks = navContainer.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navContainer.classList.remove('active');
                menuToggle.textContent = 'Menu';
            });
        });
    }

    /**
     * Initialize KPI tooltip toggle on mobile
     */
    function initKpiTooltips() {
        // Only for mobile (max-width: 640px)
        if (window.innerWidth > 640) return;

        const kpiCards = document.querySelectorAll('.kpi-card');
        kpiCards.forEach(card => {
            card.addEventListener('click', function() {
                // Toggle active state
                this.classList.toggle('active');

                // Close other tooltips
                kpiCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('active');
                    }
                });
            });
        });
    }

    /**
     * Initialize all interactivity
     */
    function initAll() {
        initTaskInteractivity();
        initMobileMenu();
        initKpiTooltips();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
})();
