const spreadsheetID =
    "11uCM4X1aMt_7X0s6qUkZyXIoopkTqrTyISDarVU6kQ0";
const endpoint = `https://spreadsheets.google.com/feeds/list/${spreadsheetID}/od6/public/values?alt=json`

fetch(endpoint).then(res => res.json()).then(getData);

function getData(data) {
    const myArray = data.feed.entry;
    myArray.forEach(showList)
}

function showList(data) {
    console.log(data);
    const template = document.querySelector("template").content;
    const myCopy = template.cloneNode("true");
    myCopy.querySelector("h1").textContent = data.gsx$recipe.$t;
    document.querySelector("main").appendChild(myCopy);
}
