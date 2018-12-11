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
- background: repeat-linear-gradient(gradient_direction, color 1, color 1_stop, color 2, color 2_stop)
- background: linear-gradient(gradient_direction, color 1, color 2, ...)
- transform: scale(2)
- transform: skewX(value)
- transform: rotate(-45deg)
- box-shadow: (offset-x, offset-y, blur-radius, spread-radius, color)
- bezier curve (x1, y1, x2, y2)
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

## Sass
- Syntactically Awesome Stylesheet
- Scripting Language
- sass --watch (input.scss) (output.css)
- sass --watch (app/sass:public/stylesheets) : watch all files in the app/sass folder for changes and compile css to the public/stylesheets folder
- 