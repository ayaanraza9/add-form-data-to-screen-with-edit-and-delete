var data = [];

function addDiv() {
  // event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (!name || !email) {
    return alert("Name and email are required");
  }
  var newDiv = { name: name, email: email };
  data.push(newDiv);
}
console.log(data);