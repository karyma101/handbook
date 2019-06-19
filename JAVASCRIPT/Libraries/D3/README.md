### D3

- D3 “injects” data visualizations onto a web page’s Document Object Model and associates data with a set of selected DOM elements. Selections are array-like data structures that include a reference to the elements with D3 methods and their hierarchy in the DOM. 
  - https://bost.ocks.org/mike/selection

- **.select()**: single item selection
- **.selectAll()**: creating a selection
- **.data()**: method is invoked on a selection and takes a parameter of an array of any type. It returns an update selection with the data bound to the elements.
- **.attr()**: method takes two parameters, the HTML attribute you wish to change and the value you wish to assign it.
- **.style()**: method takes two parameters, the HTML attribute you wish to change and the value you wish to assign it.
- **.enter()**: method consolidates the difference between the number of existing elements in the selection and the number of elements in the dataset.
- **.append()**: method takes a string parameter with the element name you wish to append, it then analyzes the selection that gets handed off to it, and generates the specified elements on the DOM. It returns a reference to the elements it created.
- **.on()**: method takes a string parameter with the name of the event and a function to handle that event when it is triggered.
