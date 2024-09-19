const input=document.querySelector(".bd-date");
console.log(input);
const API_KEY="x9bkcTb2ygtXzfNzGY325Kcg2rKP4Po5LpoJ9RMu";

input.addEventListener("change",(event) => 
getAPOD((event.target.value)))

const getAPOD = (date) => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
fetch(url).then((res) => res.json())
.then((data)=> displayAPOD(data)
)
}

const displayAPOD = (data) => {
    const apodCard=document.querySelector(".APOD");

    console.log(apodCard)
    apodCard.innerHTML = `
    <h2 class="apod-title">${data.title} </h2>
    <img src=${data.url} class="apod-pic">
    `;
};