document.getElementById("html").onclick = function QuestionsHTML() {
  localStorage.setItem("categorySelected", "html");
  document
    .getElementById("html")
    .setAttribute("href", "/public/questions.html");
};

window.onload = function () {
  let htmlComplete = localStorage.getItem('html-complete') ? true : false;
  if (htmlComplete) {
    document.getElementById('html-image').classList.add('border-green');
  }
}
// document.getElementById("css").onclick = function Questions() {
//   return localStorage.setItem("categorySeleted", "css");
// };
// document.getElementById("js").onclick = function Questions() {
//   return localStorage.setItem("categorySeleted", "js");
// };


