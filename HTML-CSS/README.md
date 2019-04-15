# HTML-CSS

## Facts
- Hyper Text Markup Language(HTML)
- Cascading Style Sheet(CSS)
- Within your Internet Service Provider(ISP), the DNS takes the Domain name and turns it into an IP address
- A Request is sent to the desired IP address via HTTP, finds fastest route,hops from server to server.

## HTML
- Semantic tags
- No Anchor tags around click here

### Tags
- audio controls : creates audio player
- figure, figcaption 
- fieldset, legend : usually for the question of the radio form
- input type="date" : date picker
- time datetime="2016-09-15" : accessibility
- sup : superscript

### Attributes
- accesskey="c" : usually for keyboard only users
- tabindex="0" : enables :focus in css and able to tab to element. tabindex=(1, 2,..., 0) order

## CSS
- flex: (flex-grow) (flex-shrink) (flex-basis)
- background: repeat-linear-gradient(gradient_direction, color 1, color 1_stop, color 2, color 2_stop)
- ease: the changes starts slow then go faster then finishes slow.
- linear: the change occurs at the same rate.
- ease-in: the change starts slow then go faster before the end.
- ease-out: the changes starts fast then slows down before the end.
- ease-in-out: the change starts slow then go faster then finishes slow.
- background: linear-gradient(gradient_direction, color 1, color 2, ...)
- box-shadow: (offset-x, offset-y, blur-radius, spread-radius, color)
- bezier curve (x1, y1, x2, y2)
- clip-path(x y, x y, x y, x y)
- animation-fill-mode: forwards; -when hovering will stay at 100%
- animation-iteration-count: infinite; -how many times it loops

## Sass
- Syntactically Awesome Stylesheet
- Scripting Language
- sass --watch (input.scss) (output.css)
- sass --watch (app/sass:public/stylesheets) -watch all files in the app/sass folder for changes and compile css to the public/stylesheets folder
