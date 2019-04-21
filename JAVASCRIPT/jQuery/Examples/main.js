$(document).ready(function() {
  //To Do List
  $('#newItem').keyup(function(e) {
    console.log(e)
    let code = e.which
    if (code === 13) {
      e.preventDefault()
      $('#list').append('<li>' + e.target.value + '</li>')
    }
  })

  // New Section
})
