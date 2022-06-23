const arrow = document.querySelector("#arrow-box");
const search = document.querySelector(".search");
const errorMessage = document.querySelector(".message-div");
const errorIcon = document.querySelector(".error-container");

const searchFunc = () => {
  arrow.addEventListener("click", () => {
    if (!search.value.includes("@gmail.com")) {
      errorMessage.style.visibility = "visible";
      errorIcon.style.visibility = "visible";
      search.value = "";
      search.style.borderColor="hsl(0, 93%, 68%)";
    } else {
      errorIcon.style.visibility = "hidden";
      errorMessage.style.visibility = "hidden";
      search.value = "";
      search.style.borderColor="hsl(0, 36%, 75%)";
    }
  });
};

searchFunc();

search.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchFunc();
  }
});
