// div with id insert
const insert = document.getElementById("insert");

// listen for keydown on window object
window.addEventListener("keydown", event => {
  //replace contents of insert div with the boxes with class key
  //first box is the key name (if it is space the name shows up as a " ", so change it to display "space")
  //second box is keyCode
  //third box is code
  insert.innerHTML = `
    <div class="key">
    ${event.key === " " ? "Space" : event.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>`;
});
