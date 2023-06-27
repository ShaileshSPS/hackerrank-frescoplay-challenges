var data = [
  {
    id: 0,
    name: "Janu",
    English: 50,
    Maths: 86,
    Science: 77,
    SocialScience: 88,
  },
  {
    id: 1,
    name: "Thanu",
    English: 75,
    Maths: 96,
    Science: 67,
    SocialScience: 91,
  },
  {
    id: 2,
    name: "Tara",
    English: 90,
    Maths: 35,
    Science: 86,
    SocialScience: 100,
  },
  {
    id: 3,
    name: "Glen",
    English: 79,
    Maths: 68,
    Science: 77,
    SocialScience: 78,
  },
  {
    id: 4,
    name: "Zara",
    English: 80,
    Maths: 85,
    Science: 96,
    SocialScience: 68,
  },
];

function onPageLoad() {
  // code goes here to display table on page loads
  var template = "";
  data.forEach((item, i) => {
    template += `
      <tr>
        <td>${i + 1}</td>
        <td>${item.name}</td>
        <td>${item.English}</td>
        <td>${item.Maths}</td>
        <td>${item.Science}</td>
        <td>${item.SocialScience}</td>
      </tr>
    `;
  });
  document
    .querySelector("#studentData")
    .insertAdjacentHTML("beforeEnd", template);
}

function filterBy() {
  // code goes here to select filter by option
  if (document.querySelector('[name="mode"]:checked').value === "between") {
    document.querySelector("#to").style.display = "";
    document.querySelector("#maxMark").style.display = "";
  } else {
    document.querySelector("#to").style.display = "none";
    document.querySelector("#maxMark").style.display = "none";
  }
}

function Clear() {
  // code goes here to clear filter
  document.querySelector("#subjects").value = "";
  document.querySelector("#to").style.display = "none";
  document.querySelector("#maxMark").style.display = "none";
  document.querySelector("#mark").value = "";
  document.querySelector("#maxMark").value = "";
  document.querySelector("#studentData").innerHTML = "";
  document.querySelector('[name="mode"]#above').click();
  onPageLoad();
}

function filterClick() {
  // code goes here to handle filter button
  var template = "";
  var count = 0;
  var filterSubject = document.querySelector("#subjects").value;
  var filterMode = document.querySelector('[name="mode"]:checked').value;
  var filterMark = document.querySelector("#mark").value;
  var filterTo = document.querySelector("#maxMark").value;
  document.querySelector("#studentData").innerHTML = "";
  if (
    (filterSubject !== "" && filterMark !== "" && filterMode !== "between") ||
    (filterMode === "between" && filterMark !== "" && filterTo !== "")
  ) {
    data.forEach((item) => {
      if (filterSubject === "English") {
        if (filterMode === "above") {
          if (item.English > filterMark) {
            count++;
            template += `
              <tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.English}</td>
                <td>${item.Maths}</td>
                <td>${item.Science}</td>
                <td>${item.SocialScience}</td>
              </tr>
            `;
          }
        } else if (filterMode === "below") {
          if (item.English < filterMark) {
            count++;
            template += `
              <tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.English}</td>
                <td>${item.Maths}</td>
                <td>${item.Science}</td>
                <td>${item.SocialScience}</td>
              </tr>
            `;
          }
        } else if (filterMode === "between") {
          if (item.English > filterMark && item.English < filterTo) {
            count++;
            template += `
              <tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.English}</td>
                <td>${item.Maths}</td>
                <td>${item.Science}</td>
                <td>${item.SocialScience}</td>
              </tr>
            `;
          }
        }
      } else if (filterSubject === "Maths") {
        if (filterMode === "above") {
          if (item.Maths > filterMark) {
            count++;
            template += `
              <tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.English}</td>
                <td>${item.Maths}</td>
                <td>${item.Science}</td>
                <td>${item.SocialScience}</td>
              </tr>
            `;
          }
        } else if (filterMode === "below") {
          if (item.Maths < filterMark) {
            count++;
            template += `
              <tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.English}</td>
                <td>${item.Maths}</td>
                <td>${item.Science}</td>
                <td>${item.SocialScience}</td>
              </tr>
            `;
          }
        } else if (filterMode === "between") {
          if (item.Maths > filterMark && item.Maths < filterTo) {
            count++;
            template += `
              <tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.English}</td>
                <td>${item.Maths}</td>
                <td>${item.Science}</td>
                <td>${item.SocialScience}</td>
              </tr>
            `;
          }
        }
      } else if (filterSubject === "Science") {
        if (filterMode === "above") {
          if (item.Science > filterMark) {
            count++;
            template += `
              <tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.English}</td>
                <td>${item.Maths}</td>
                <td>${item.Science}</td>
                <td>${item.SocialScience}</td>
              </tr>
            `;
          }
        } else if (filterMode === "below") {
          if (item.Science < filterMark) {
            count++;
            template += `
              <tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.English}</td>
                <td>${item.Maths}</td>
                <td>${item.Science}</td>
                <td>${item.SocialScience}</td>
              </tr>
            `;
          }
        } else if (filterMode === "between") {
          if (item.Science > filterMark && item.Science < filterTo) {
            count++;
            template += `
              <tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.English}</td>
                <td>${item.Maths}</td>
                <td>${item.Science}</td>
                <td>${item.SocialScience}</td>
              </tr>
            `;
          }
        }
      } else if (filterSubject === "SocialScience") {
        if (filterMode === "above") {
          if (item.SocialScience > filterMark) {
            count++;
            template += `
              <tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.English}</td>
                <td>${item.Maths}</td>
                <td>${item.Science}</td>
                <td>${item.SocialScience}</td>
              </tr>
            `;
          }
        } else if (filterMode === "below") {
          if (item.SocialScience < filterMark) {
            count++;
            template += `
              <tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.English}</td>
                <td>${item.Maths}</td>
                <td>${item.Science}</td>
                <td>${item.SocialScience}</td>
              </tr>
            `;
          }
        } else if (filterMode === "between") {
          if (
            item.SocialScience > filterMark &&
            item.SocialScience < filterTo
          ) {
            count++;
            template += `
              <tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.English}</td>
                <td>${item.Maths}</td>
                <td>${item.Science}</td>
                <td>${item.SocialScience}</td>
              </tr>
            `;
          }
        }
      }
    });

    document
      .querySelector("#studentData")
      .insertAdjacentHTML("beforeEnd", template);
  } else {
    Clear();
  }
}
