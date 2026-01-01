function wish() {
  let name = document.getElementById("nameInput").value;

  if (name === "") {
    document.getElementById("output").innerText = "Please enter your name 😅";
  } else {
    document.getElementById("output").innerText =
      `Happy Birthday, ${name}! 🎉🎂`;
  }
}
