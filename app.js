const img = document.getElementById("dog");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      img.src = data.message;
    });
});
