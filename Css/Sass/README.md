# Sass

Nested Properties

```SCSS
.header {
  border: {
    top: 4px solid black;
    bottom: 4px solid black;
  }

  .nav {

  }
}
```

```CSS
.header {
  border-top: 4px solid black;
  border-bottom: 4px solid black;
}

.header .nav {

}
```

Variables can store colors, numbers, strings, boolean, null, lists and maps.

```SCSS
$primary-color: rgba(255,255,255,0.3);

body {
  font-color: $primary-color;
}
```

Mixins can take multiple arguments.

```SCSS
// Setting a default argument
@mixin backface-visibility($visibility: hidden) {
  backface-visibility: $visibility;
  -webkit-backface-visibility: $visibility;
  -moz-backface-visibility: $visibility;
  -ms-backface-visibility: $visibility;
  -o-backface-visibility: $visibility;
}

@mixin stripes($direction, $width-percent, $stripe-color, $stripe-background: #FFF) {
  background: repeating-linear-gradient(
    $direction,
    $stripe-background,
    $stripe-background ($width-percent - 1),
    $stripe-color 1%,
    $stripe-background $width-percent
  );
}

$college-ruled-style: ( 
    direction: to bottom,
    width-percent: 15%,
    stripe-color: blue,
    stripe-background: white
);

.notecard {
.front, .back {
    width: 100%;
    height: 100%;
    position: absolute;

    @include backface-visibility(hidden);
    @include stripes($college-ruled-style...);
  }
}  
```

```CSS
.notecard .front, .notecard .back {
  width: 100%;
  height: 100%;
  position: absolute;

   backface-visibility: hidden;
  -webkit-backface-visibility: hidden; 
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
}
```