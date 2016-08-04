/**
 * Renders a list of technologies that matches the filter parametter.
 * Removes the old elements and replaces the with a new list.
 * @param {string} filter
 */
function renderTechIcons(filter) {
  var items = [];

  // Select relevant techs based on filter
  if (filter === 'all') {
    // Grab all techs
    items = tech;
  } else {
    // Otherwise only grab those that matches the filter
    for (var i = 0; i < tech.length; i++) {
      if (tech[i].type === filter) {
        items.push(tech[i]);
      }
    }
  }

  // Build new DOM elements based on selection
  var elements = '';
  for (var j = 0; j < items.length; j++) {
    elements += '<a href="#"><img src="images/' + items[j].image + '" alt="' + items[j].name + '"></a>';
  }

  // Replace the old DOM element with new ones
  var h = $('.tech-icons').height();
  $('.tech-icons').css('min-height', h).fadeOut(300, function() {
    $(this).html(elements);
    $(this).fadeIn(300, function() {
      $(this).css('min-height', 0);
    });
  });
}



/**
 * EVENT handler for clicking on the anchors in the tech selection menu
 * and sets the appropiate active classes to menu elements
 */
 $('.tech-filter a').click(function(e) {
   e.preventDefault();
   var filter = $(this).parent('li').attr('data-filter');
   renderTechIcons(filter);
   $('.tech-filter a').removeClass('active');
   $(this).addClass('active');
 });
