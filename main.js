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
    const section = document.createElement("section");
    section.setAttribute("id", data);
    myCopy.querySelector("h1").textContent = data.gsx$dishtitle.$t;
    myCopy.querySelector("article.image img").src = "image/" + data.gsx$imagename.$t;
    document.querySelector("main").appendChild(myCopy);
}






