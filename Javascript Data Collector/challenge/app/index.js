function onFormSubmit(event) {
  // call all the below functions here to use this function in the form while implementing onsubmit.
  // event.preventDefault();
  readFormData();
  insertNewRecord();
  resetForm();
  return false;
}

function readFormData() {
  // return all the input values from three input fields here.
  if (
    document.querySelector("#fname").value !== "" ||
    document.querySelector("#lname").value !== "" ||
    document.querySelector("#location").value !== ""
  ) {
    var template = `
    <tr>
      <td>${document.querySelector("#fname").value}</td>
      <td>${document.querySelector("#lname").value}</td>
      <td>${document.querySelector("#location").value}</td>
    </tr>
    `;
    document
      .querySelector("#tabledata")
      .insertAdjacentHTML("beforeEnd", template);
  }
}

function insertNewRecord(data) {
  // this function should insert a new row with data in the table.
  if (
    document.querySelector("#fname").value === "" ||
    document.querySelector("#lname").value === "" ||
    document.querySelector("#location").value === ""
  ) {
    window.alert("input field cannot be empty");
  }
}
function resetForm() {
  // this function should reset the form fields.
  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  document.querySelector("#location").value = "";
}
if (typeof exports !== "undefined") {
  module.exports = {
    onFormSubmit,
    readFormData,
    insertNewRecord,
    resetForm,
  };
}
