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
- align-self - allows us to adjust each item's alignment individually
- flex: (flex-grow) (flex-shrink) (flex-basis)
- max-width: 100%
- vmin: 70vmin would be 70% of the viewport's smaller dimension (height vs. width).
- vmax: 100vmax would be 100% of the viewport's bigger dimension (height vs. width).
- background: repeat-linear-gradient(gradient_direction, color 1, color 1_stop, color 2, color 2_stop)
- ease: the changes starts slow then go faster then finishes slow.
- linear: the change occurs at the same rate.
- ease-in: the change starts slow then go faster before the end.
- ease-out: the changes starts fast then slows down before the end.
- ease-in-out: the change starts slow then go faster then finishes slow.
- background: linear-gradient(gradient_direction, color 1, color 2, ...)
- transform: scale()
- transform: skew()
- transform: rotate()
- box-shadow: (offset-x, offset-y, blur-radius, spread-radius, color)
- bezier curve (x1, y1, x2, y2)
<<<<<<< HEAD
- animation: name duration iteration timing_function direction delay
  - can be any order except delay must be after duration.
=======
- clip-path(x y, x y, x y, x y)
- .example:hover {
    animation-name: rainbow;
    animation-duration: 4s;
    animation-fill-mode: forwards; -when hovering will stay at 100%
    animation-iteration-count: infinite; -how many times it loops
  }
  
  #example {
    animation-timing-function: ease-out;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      transform: scale(1);
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }

  .sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
  }
>>>>>>> b8790bbad5fc4b3af7473abd9fbc6c6b0d5a9781

## Sass
- Syntactically Awesome Stylesheet
- Scripting Language
- sass --watch (input.scss) (output.css)
- sass --watch (app/sass:public/stylesheets) : watch all files in the app/sass folder for changes and compile css to the public/stylesheets folder