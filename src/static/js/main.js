/**
 * Executes on page charge
 */
document.addEventListener("DOMContentLoaded", function(event) {
    renderBasicContent();
});

/**
 * Renders basic content: grid structure and title
 */
function renderBasicContent() {
    new GridPage(TITLE_DIV_CONTAINER_ID, CONTENT_DIV_CONTAINER_ID).render();
    new Title(LOGO_URL, MAIN_TITLE, TITLE_DIV_CONTAINER_ID).render();
}
