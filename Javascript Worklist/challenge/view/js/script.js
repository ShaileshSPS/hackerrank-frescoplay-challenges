function selectCard() {
  // code goes here to select a card
  changeMode();
  return document.querySelector('[name="cardSelected"]:checked').value;
}

function addWork() {
  // code goes here for add work mode
  if (
    document.querySelector("#work").value !== undefined &&
    document.querySelector("#work").value !== "" &&
    document.querySelector("#work").value !== null
  ) {
    var selectedCard = selectCard();
    document
      .querySelector(`.${selectedCard}List`)
      .insertAdjacentHTML(
        "beforeEnd",
        `<li>${document.querySelector("#work").value}</li>`
      );
    document.querySelector("#work").value = "";
  }
}

function deleteWork(selectedCardName, taskID) {
  // code goes here to delete a work in a card
  document
    .querySelector(`.${selectedCardName.className} #${taskID.id}`)
    .parentElement.remove();
}

function update() {
  // code goes here to update card title
  if (document.querySelector("#cardTitle").value !== "") {
    document.querySelector(
      '[name="cardSelected"]:checked'
    ).nextElementSibling.textContent =
      document.querySelector("#cardTitle").value;
    document.querySelector("#cardTitle").value = "";
    document.querySelector("#add").style = "display: block";
    document.querySelector("#edit").style = "display: none";
  }
}

function clearWorkList() {
  //code goes here to clear workList
  /* document.querySelector(".card1SelectedList").innerHTML = '';
  document.querySelector(".card2SelectedList").innerHTML = '';
  document.querySelector(".card3SelectedList").innerHTML = ''; */
  document.querySelector(".card1SelectedList").remove();
  document.querySelector(".card2SelectedList").remove();
  document.querySelector(".card3SelectedList").remove();
}

function changeMode() {
  // code goes here switch between add work, update card title and delete work
  if (document.querySelector('[name="mode"]:checked').value === "add") {
    document.querySelector("#add").style = "display: block";
    document.querySelector("#edit").style = "display: none";
  } else if (document.querySelector('[name="mode"]:checked').value === "edit") {
    document.querySelector("#add").style = "display: none";
    document.querySelector("#edit").style = "display: block";
    document.querySelector("#cardTitle").value = document.querySelector(
      '[name="cardSelected"]:checked'
    ).nextElementSibling.textContent;
  } else {
    document.querySelector("#add").style = "display: none";
    document.querySelector("#edit").style = "display: none";

    document.querySelectorAll(".deleteTask").forEach((e) => e.remove());

    document
      .querySelector('[name="cardSelected"]:checked')
      .parentElement.querySelectorAll("ul li")
      .forEach((items, i) => {
        items.insertAdjacentHTML(
          "afterBegin",
          `<button class='deleteTask' id='deleteBtn${
            i + 1
          }' onClick = 'deleteWork(${
            document.querySelector('[name="cardSelected"]:checked')
              .parentElement.className
          }, deleteBtn${i + 1})'>*</button>`
        );
      });
  }
}

function deleteMode(e) {
  // code goes here for delete Mode
}
