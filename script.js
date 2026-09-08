/**
 * Portfolio Dynamic Script
 * Handles project rendering, image fallbacks, and scroll animations.
 */
(function () {
    'use strict';

    /**
     * Helper to safely escape HTML strings
     */
    function escapeHtml(str) {
        if (!str && str !== 0) return '';
        var div = document.createElement('div');
        div.textContent = String(str);
        return div.innerHTML;
    }

    /**
     * Renders an individual project card element
     */
    function createProjectCard(project) {
        var card = document.createElement('article');
        card.className = 'project-card fade-up';
        if (project.featured) {
            card.classList.add('project-featured');
        }
        if (project.id) {
            card.id = 'project-' + escapeHtml(project.id);
        }

        // 1. Icon Element
        var iconHtml = '';
        if (project.icon && project.icon.type === 'fontawesome') {
            iconHtml = '<i class="' + escapeHtml(project.icon.src) + '" aria-hidden="true"></i>';
        } else if (project.icon && project.icon.type === 'image' && project.icon.src) {
            var altText = escapeHtml(project.icon.alt || project.name + ' logo');
            var imgSrc = escapeHtml(project.icon.src);
            iconHtml = '<img src="' + imgSrc + '" alt="' + altText + '" onerror="this.onerror=null; this.parentElement.innerHTML=\'<i class=\\\'fa-solid fa-cube\\\' aria-hidden=\\\'true\\\'></i>\';">';
        } else {
            iconHtml = '<i class="fa-solid fa-cube" aria-hidden="true"></i>';
        }

        // 2. Meta Badges (Status, Year, Featured)
        var metaBadgesHtml = '';
        if (project.featured) {
            metaBadgesHtml += '<span class="badge badge-featured"><i class="fa-solid fa-star"></i> Featured</span>';
        }
        if (project.status) {
            var statusLabel = escapeHtml(project.status.charAt(0).toUpperCase() + project.status.slice(1));
            metaBadgesHtml += '<span class="badge badge-status status-' + escapeHtml(project.status.toLowerCase()) + '">' +
                '<span class="status-pulse-dot"></span>' + statusLabel + '</span>';
        }
        if (project.year) {
            metaBadgesHtml += '<span class="badge badge-year">' + escapeHtml(project.year) + '</span>';
        }

        // 3. Tags & Technology Badges
        var badgesHtml = '';
        var badgesList = [];
        if (Array.isArray(project.technologies)) {
            project.technologies.forEach(function (tech) {
                badgesList.push('<span class="tech-pill"><i class="fa-solid fa-microchip"></i> ' + escapeHtml(tech) + '</span>');
            });
        }
        if (Array.isArray(project.tags)) {
            project.tags.forEach(function (tag) {
                badgesList.push('<span class="tag-pill">' + escapeHtml(tag) + '</span>');
            });
        }
        if (badgesList.length > 0) {
            badgesHtml = '<div class="project-tags-container">' + badgesList.join('') + '</div>';
        }

        // 4. Action Buttons (Clean & Conditional)
        var buttonsHtml = '';
        if (project.links && typeof project.links === 'object') {
            var links = project.links;

            // Website link
            if (links.website && typeof links.website === 'string' && links.website.trim() !== '') {
                var isInternal = links.website.startsWith('/') || links.website.startsWith('#');
                buttonsHtml += '<a href="' + escapeHtml(links.website) + '" class="btn btn-secondary"' +
                    (!isInternal ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' +
                    '<i class="fa-solid fa-globe"></i> Website' +
                    '<i class="fa-solid fa-arrow-up-right-from-square btn-arrow"></i></a>';
            }

            // Google Play link
            if (links.playStore && typeof links.playStore === 'string' && links.playStore.trim() !== '') {
                buttonsHtml += '<a href="' + escapeHtml(links.playStore) + '" class="btn btn-primary" target="_blank" rel="noopener noreferrer">' +
                    '<i class="fa-brands fa-google-play"></i> Google Play</a>';
            }

            // Apple App Store link
            if (links.appStore && typeof links.appStore === 'string' && links.appStore.trim() !== '') {
                buttonsHtml += '<a href="' + escapeHtml(links.appStore) + '" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">' +
                    '<i class="fa-brands fa-apple"></i> App Store</a>';
            }

            // GitHub repo link
            if (links.github && typeof links.github === 'string' && links.github.trim() !== '') {
                buttonsHtml += '<a href="' + escapeHtml(links.github) + '" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">' +
                    '<i class="fa-brands fa-github"></i> GitHub</a>';
            }
        }

        var buttonsContainerHtml = buttonsHtml ? '<div class="project-actions">' + buttonsHtml + '</div>' : '';

        // Card Assembly with refined UX layout
        card.innerHTML =
            '<div class="card-glow-layer"></div>' +
            '<div class="project-top-row">' +
                '<div class="project-icon-wrapper">' +
                    '<div class="project-icon">' + iconHtml + '</div>' +
                '</div>' +
                '<div class="project-meta-badges">' + metaBadgesHtml + '</div>' +
            '</div>' +
            '<div class="project-body">' +
                '<h3 class="project-title">' + escapeHtml(project.name) + '</h3>' +
                '<p class="project-desc">' + escapeHtml(project.description) + '</p>' +
                badgesHtml +
            '</div>' +
            buttonsContainerHtml;

        return card;
    }

    /**
     * Renders all projects into the projects grid
     */
    function renderProjects() {
        var grid = document.getElementById('projects-grid');
        if (!grid) return;

        var projects = window.PROJECTS;
        if (!Array.isArray(projects) || projects.length === 0) {
            grid.innerHTML = '<p class="no-projects">No projects to display at the moment.</p>';
            return;
        }

        // Clear existing content (e.g. noscript or placeholder)
        grid.innerHTML = '';

        projects.forEach(function (project) {
            var card = createProjectCard(project);
            grid.appendChild(card);
        });
    }

    /**
     * Initialize smooth scroll fade-up animations
     */
    function initScrollAnimations() {
        var elements = document.querySelectorAll('.fade-up');

        if (!('IntersectionObserver' in window)) {
            elements.forEach(function (el) {
                el.classList.add('visible');
            });
            return;
        }

        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -40px 0px',
            threshold: 0.1
        };

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elements.forEach(function (el) {
            observer.observe(el);
        });
    }

    // Initialize when DOM is ready
    function init() {
        renderProjects();
        initScrollAnimations();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
