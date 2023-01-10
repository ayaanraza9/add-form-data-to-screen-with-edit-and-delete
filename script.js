var data = [];

function addRow() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (!name || !email) {
        return alert("Name and email are required!");
    }
    var newRow = { name: name, email: email };
    data.push(newRow);
    updateTable();
}

function updateTable() {
    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    table.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var row = table.insertRow(i);
        var nameCell = row.insertCell(0);
        var emailCell = row.insertCell(1);
        var actionsCell = row.insertCell(2);
        nameCell.innerHTML = data[i].name;
        emailCell.innerHTML = data[i].email;
        actionsCell.innerHTML = "<button type='button' onclick='editRow(" + i + ")'>Edit</button>" +
            "<button type='button' onclick='deleteRow(" + i + ")'>Delete</button>";
    }
}

function deleteRow(index) {
    data.splice(index, 1);
    updateTable();
}

function editRow(index) {
    var name = data[index].name;
    var email = data[index].email;
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    deleteRow(index);
}
