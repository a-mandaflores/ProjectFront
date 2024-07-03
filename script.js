const button = document.querySelector("button");
const section = document.querySelector("section");
const h3 = document.querySelectorAll("h3");

var data = "";
let index = 0;

window.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("https://localhost:7193/WeatherForecast");
    const json = await response.json();
    data = json;
  } catch (error) {
    console.error(error);
  }
  const selectedData = data[index];

  dataSendHtml(selectedData)

  button.addEventListener("click", function () {
    index++
    if (index >= data.length) {
        index = 0; 
      }
    h3.forEach((tag) => {
        tag.innerHTML = "";
      });
    dataSendHtml(data[index])

  });
});

function dataSendHtml(selectedData){
    for (let key in selectedData) {
        if (selectedData.hasOwnProperty(key)) {
          h3.forEach((tag) => {
            tag.innerHTML += `${key}: ${selectedData[key]}<br>`;
          });
        }
      }
}
