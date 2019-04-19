- **\$('#btn').click(function(e){ console.log(e)})**
  - shows all events

- **\$(document).ready(function(){})**
  - if script tag is placed in the head

- **\$('element').css('color', 'red')**
  - changes the css style

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

### \$('#btn').on('mouseup', function(){ })

- When mouse click is released

### \$('#btn').on('mousedown', function(){ })

- When mouse is held down

### \$('input').focus(function(){})

- When clicked on input box

### \$('input').blur(functino(){})

- When clicked out of input box

### \$('input').keyup(function(e){console.log(e.target.value)})

- Prints out the value

### \$('select#gender').change(function({})

- Whenever the select box changes

### \$('input#name').val();

- Will get you the value of the input

### \$('#form').submit(function(e){ e.preventDefault(); console.log('Submitted')})

- Whenever the form is submitted.
