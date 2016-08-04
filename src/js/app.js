$(document).ready(function() {
  // Main animation sequence on page load
  setTimeout(function() {
    animateHeader();
  }, 3000);

  // Render the first project
  setActiveProject(0);
  renderProjectDetails(projects[activeProject]);

  // Displays all tech icons
  renderTechIcons('all');
});
