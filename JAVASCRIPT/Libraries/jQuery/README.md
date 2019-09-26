# [jQuery](https://api.jquery.com/)

"With an infinite number of Legos, you could build an entire city — of course, this would take a long time. What if you were given pre-made Lego buildings, Lego roads, Lego parks, etc? You could build a city much faster." - Codecademy

- **$(document).ready(() => { })**: method that waits until the HTML page's DOM is ready to manipulate.
- **const $variable = $('object')**: conventional to put jquery objects into variables.
- **.on(string, callback)**
  - click, mouseenter, mouseleave, keyup, keydown
- **.show() | .hide() | .toggle()**
- **.fadeOut(option) | .fadeIn(option) | .fadeToggle(option) | .slideDown(option) | .slideUp(option) | .slideToggle(option)**
  - optional parameter animation time in milliseconds
  - default is 400 milliseconds
  - can use 'fast' or 'slow'
- **.addClass('className') | .removeClass('className')**
  - do not need the .
- **$(event.currentTarget)** : if multiple divs with same classes, can use current target.
- **.focus()**: as soon as page loads it will focus on target, may start typing immediately.
- **.css(option)**: modifies css properties of element.
 - 'property name', 'value'
 - { property name, 'value', property name, 'value'}
- **.animate(option1, option2)**: method enhances the visual possibilities by making CSS value changes over a period of time.
  - option1: 
    - 'property name', 'value'
    - { property name, 'value', property name, 'value'}
  - option2:
    - default 400 milliseconds
    - number or 'fast' or 'slow'