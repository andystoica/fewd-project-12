
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Animates the individual characters of a text element
function animate(el, start) {
  var start = start || 0;
  var element = $(el);

  // Wraps each character in span blocks
  var plainText = element.text();
  var blockText = '';
  for (var i = 0; i < plainText.length; i++) {
    blockText += '<span>' + plainText[i] + '</span>';
  }
  element.html(blockText);

  // Recursevely shows each character with a random delay
  function recursiveAnimate(el, start) {
    if (start < el.children().length) {
      el.children().eq(start).addClass('visible');
      setTimeout(function(){
        recursiveAnimate(el, start + 1);
      }, randomInt(50, 300));

    // On completion, call function to animate the remainign elements
    } else {
      setTimeout(function() {
        $('.main-intro').fadeIn(1000);
      }, 500);
      setTimeout(function() {
        $('.main-nav').fadeIn(1000);
      }, 1500);
    }
  }

  recursiveAnimate(element, start);
}

setTimeout(function() {
  animate('.main-heading');
}, 3000);
