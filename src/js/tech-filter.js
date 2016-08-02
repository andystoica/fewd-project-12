/**
 * Displays a list of technologies that matches the filter parametter.
 * Removes the old elements and replaces the with a new list.
 * @param {string} filter
 */
function showTech(filter) {
  var items = [];
  // Select relevant techs based on filter
  if (!filter) {
    // If no filter was profided, grab all techs
    items = tech;
  } else {
    // Otherwise only grab those that match the filter
    for (var i = 0; i < tech.length; i++) {
      if (tech[i].type === filter) {
        items.push(tech[i]);
      }
    }
  }

  // Build new DOM elements based on selection
  var elements = '';
  for (var i = 0; i < items.length; i++) {
    elements += '<a href="#"><img src="images/' + items[i].image + '" alt="' + items[i].name + '"></a>';
  }

  // Replace the old DOM element with new ones
  $('.tech-icons').fadeOut(300, function() {
    $(this).html(elements);
    $(this).fadeIn(300);
  });
}
