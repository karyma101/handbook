function isLargeScreen(){
  return false
}

var item = {
  isCollapsed: false
}

const classes = `header ${ isLargeScreen() ? '' : `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`

console.log(classes)