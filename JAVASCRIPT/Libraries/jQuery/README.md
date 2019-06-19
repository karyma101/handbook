## Events

### https://api.jquery.com/

- **\$('#btn').click(function(e){ console.log(e)})**

  - shows all events

- **\$(document).ready(function(){})**

  - if script tag is placed in the head

- **\$('ul li:first')**

  - :first
  - :last
  - :even
  - :odd
  - :nth-child(x)

- **\$(':text').hide()**

  - hides the anything with the type of text

- **\$('[href]').show()**

  - shows anything with the attribute of href

- **\$('p').toggle()**

  - toggles between hide and show

- **\$('#btn').click(function(){ alert('Button Clicked')})**

  - Alert pops up when clicked

- **\$('#btn').on('click', function(){ alert('Button Clicked')})**

  - Same as above, but more optimized

- **\$('#btn').dblclick(function(){ })**

  - When double clicked

- **\$('#btn).hover(function(){ })**

  - Hover is a combination of both:
    - \$('#btn').on('mouseenter', function(){ })
    - \$('#btn').on('mouseleave', function(){ })

- **\$('#btn').on('mouseup', function(){ })**

  - When mouse click is released

- **\$('#btn').on('mousedown', function(){ })**

  - When mouse is held down

- **\$('input').focus(function(){})**

  - When clicked on input box

- **\$('input').blur(functino(){})**

  - When clicked out of input box

- **\$('input').keyup(function(e){console.log(e.target.value)})**

  - Prints out the value

- **\$('select#gender').change(function({})**

  - Whenever the select box changes

- **\$('input#name').val()**

  - Will get you the value of the input

- **\$('#form').submit(function(e){ e.preventDefault(); console.log('Submitted')})**

  - Whenever the form is submitted.

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
