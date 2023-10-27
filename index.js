const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove("live");
      });
      e.target.classList.add("live");
      // hide other articles
      articles.forEach(function (article) {
        article.classList.remove("live");
      });
      const element = document.getElementById(id);
      element.classList.add("live");
    }
  });
});
