const len = document.querySelectorAll(".mybutton").length;

for (i = 0; i < len; i++) {
  document
    .querySelectorAll(".mybutton")[i]
    .addEventListener("click", function () {
      const text = this.innerHTML;
      document.querySelector("h1").innerHTML = text + " button is clicked";
    });
}
