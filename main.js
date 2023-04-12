const readMoreBtn = document.getElementById("read-more");
const readLessBtn = document.getElementById("read-less");

readMoreBtn.addEventListener("click", function () {
  const moreContent = document.querySelector(".more-articles");
  moreContent.style.display = "block";
  readMoreBtn.style.display = "none";
  readLessBtn.style.display = "block";
});

readLessBtn.addEventListener("click", function () {
  const moreContent = document.querySelector(".more-articles");
  moreContent.style.display = "none";
  readMoreBtn.style.display = "block";
  readLessBtn.style.display = "none";
});
