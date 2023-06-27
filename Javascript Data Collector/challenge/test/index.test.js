const { onFormSubmit } = require("../app/index");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../app/index.html"),
  "utf8"
);

jest.dontMock("fs");
describe("Cafe app testing", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    jest.resetModules();
  });

  it("checking innerHtml of title", function () {
    expect(document.getElementById("title").innerHTML).toBe("Data Collector");
  });
  it("testing labels and text", () => {
    expect(document.getElementById("firstname").innerHTML).toBe("First Name");
    expect(document.getElementById("lastname").innerHTML).toBe("Last Name");
    expect(document.getElementById("officelocation").innerHTML).toBe(
      "Office Location"
    );
  });
  it("testing table row", () => {
    expect(document.getElementById("h1").innerHTML).toBe("First Name");
    expect(document.getElementById("h2").innerHTML).toBe("Last Name");
    expect(document.getElementById("h3").innerHTML).toBe("Location");
  });
  it("testing submission", () => {
    let spy = spyOn(window, "alert");

    document.getElementById("fname").value = "Vignesh";
    document.getElementById("lname").value = "Kumar";
    expect(document.getElementById("lname").value).toBe("Kumar");
    document.getElementById("location").value = "Chennai";
    onFormSubmit();
    expect(document.getElementById("tabledata").innerHTML).toBe(
      "<tr><td>Vignesh</td><td>Kumar</td><td>Chennai</td></tr>"
    );
    document.getElementById("fname").value = "Arjun";
    document.getElementById("lname").value = "Suravaram";
    document.getElementById("location").value = "Hyderabad";
    onFormSubmit();
    expect(document.getElementById("tabledata").innerHTML).toBe(
      "<tr><td>Vignesh</td><td>Kumar</td><td>Chennai</td></tr><tr><td>Arjun</td><td>Suravaram</td><td>Hyderabad</td></tr>"
    );
    expect(document.getElementById("fname").value).toBe("");
    expect(document.getElementById("lname").value).toBe("");
    expect(document.getElementById("location").value).toBe("");
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("location").value = "";
    onFormSubmit();
    expect(spy).toHaveBeenCalledWith("input field cannot be empty");
  });
});
