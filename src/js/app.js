$(document).ready(function() {

  // Bind events to tech filter anchors
  $('.tech-filter-languages').click(function(e) {
    e.preventDefault();
    $('.tech-filter a').removeClass('active');
    $(this).addClass('active');
    showTech('language');
  });

  $('.tech-filter-frameworks').click(function(e) {
    e.preventDefault();
    $('.tech-filter a').removeClass('active');
    $(this).addClass('active');
    showTech('framework');
  });

  $('.tech-filter-databases').click(function(e) {
    e.preventDefault();
    showTech('database');
    $('.tech-filter a').removeClass('active');
    $(this).addClass('active');
  });

  $('.tech-filter-tools').click(function(e) {
    e.preventDefault();
    showTech('tool');
    $('.tech-filter a').removeClass('active');
    $(this).addClass('active');
  });

  $('.tech-filter-all').click(function(e) {
    e.preventDefault();
    showTech();
    $('.tech-filter a').removeClass('active');
    $(this).addClass('active');
  });



  // Main animation sequence on page load
  setTimeout(function() {
    animateHeader();
  }, 3000);

  // Displays all tech icons
  showTech();
});
