# [jQuery](https://api.jquery.com/)

- "With an infinite number of Legos, you could build an entire city — of course, this would take a long time. What if you were given pre-made Lego buildings, Lego roads, Lego parks, etc? You could build a city much faster." -Codecademy


## Events

- **$(document).ready(() => { })**: method that waits until the HTML page's DOM is ready to manipulate.
- **const $variable = $('object')**: conventional to put jquery objects into variables
- **.on(string, callback)**
  - click
- **.show() | .hide() | .toggle()**
- **.fadeOut(option) | .fadeIn(option) | .fadeToggle(option) | .slideDown(option) | .slideUp(option) | .slideToggle(option)**
  - optional parameter animation time in milliseconds
  - default is 400 milliseconds
  - can use 'fast' or 'slow'

## DOM Manipulation

- **\$('element').css('color', 'red')**

  - changing css style

- **\$('element').css({color: 'red', background: 'white'})**

  - changing multiple css styles

- **\$('element').addClass('myClass')**

  - Adds a class to element

- **\$('element').removeClass('myClass')**

  - Removes a class to element

- **\$('element').toggleClass('myClass')**

  - Toggles a class in element

- **\$('element').addClass('myClass')**

  - Adds a class to element

- **\$('element').text()**

  - Gets text from element, if .text('something') then will add text to element

- **\$('element').html('myClass')**

  - Similar to text but you can add element tags

- **\$('element').append('\<li\>list item\<li\>')**

  - Adds inside the element and the very end

- **\$('element').prepend('\<li\>list item\<li\>')**

  - Adds inside the element and the very beginning

- **\$('element').before('\<li\>list item\<li\>')**

  - Adds outside and before the element

- **\$('element').after('\<li\>list item\<li\>')**

  - Adds outside the element and

- **\$('element').appendTo('element')**

- **\$('element').prependTo('element')**

- **\$('element').empty()**

  - Removes everything inside the element

- **\$('element').detach()**

  - Removes the element

- **\$('a').attr('target','blank')**

  - Adds an attribute to element, can also get href by .attr('href')

- **\$('a').removeAttr('target')**

  - Adds removes attribute from element

- **\$('element').wrap('\<h1\>')**

  - Wraps each element with tag

- **\$('element').wrapAll('\<h1\>')**

  - Wraps all element with a single tag
