# CSS Grid
```CSS
display: grid;

grid-template: 1fr minmax(50px, 300px) 1f / auto 50px 10% 2fr 1fr;
grid-template-rows: 1fr minmax(50px, 300px) 1fr;
grid-template-columns: auto 50px 10% 2fr 1fr;

grid-gap: 10px 5px;
grid-row-gap: 10px;
grid-column-gap: 5px;

grid-area: 5 / 1 / 7 / span 2;

grid-row: 5 / 7;
grid-row-start: 5;
grid-row-end: 7;

grid-column: 1 / span 2;
grid-column-start: 1;
grid-column-end: span 2;
```

grid-template-columns defines the number and sizes of the columns of the grid
grid-template-rows defines the number and sizes of the rows of the grid
grid-template is a shorthand for defining both grid-template-columns and grid-template-rows in one line
grid-gap puts blank space between rows and/or columns of the grid
grid-row-start and grid-row-end makes elements span certain rows of the grid
grid-column-start and grid-column-end makes elements span certain columns of the grid
grid-area is a shorthand for grid-row-start, grid-column-start, grid-row-end, and grid-column-end, all in one line

span: specifies the number of columns or rows to span across.
fr: sets the column or row to a fraction of the available space
auto: sets the column or row to the width or height of its content automatically
%: adjusts the column or row to the percent width of its contain

repeat(3, 1fr) same as 1fr 1fr 1fr
minmax(50px, 300px) - sets the minimum and maximum
