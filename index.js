function deleteRow(row) {
  var i = row.parentNode.parentNode.rowIndex;
  document.getElementById("Table").deleteRow(i);
}

function insRow() {
  console.log("Added");
  var x = document.getElementById("Table");
  var new_row = x.rows[1].cloneNode(true);
  var len = x.rows.length;
  new_row.cells[0].innerHTML = len;

  var inp1 = new_row.cells[1].getElementsByTagName("input")[0];
  inp1.id += len;
  inp1.value = "";
  var inp2 = new_row.cells[2].getElementsByTagName("input")[0];
  inp2.id += len;
  inp2.value = "";
  x.appendChild(new_row);
}
function submitData() {
  var id = $("#id").val();
  var name = $("#name").val();
  var email = $("email").val();

  jsonObject = {
    Id: "",
    Name: "",
    Email: "",
  };

  jsonObject.Id = id;
  jsonObject.Name = name;
  jsonObject.Email = email;

  var str = JSON.stringify(jsonObject);
  document.getElementById("showJson").innerHTML = str;
}

