/*
==========================================
JS for Dynamic Home Page
==========================================
*/

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
    const template = document.querySelector("template.one").content;
    const myCopy = template.cloneNode("true");
    const section = document.createElement("section");
    section.setAttribute("id", data.gsx$categorymeal.$t);
    document.querySelector("main").appendChild(section);
    myCopy.querySelector("h1").textContent = data.gsx$dishtitle.$t;
    myCopy.querySelector("img").src = "image/" + data.gsx$imagename.$t;
    document.querySelector("main").appendChild(myCopy);
}


//document.querySelector("main").innerHTML

function myFunction() {
 const secondFetch =
    "11uCM4X1aMt_7X0s6qUkZyXIoopkTqrTyISDarVU6kQ0";
const endpoint2 = `https://spreadsheets.google.com/feeds/list/${secondFetch}/od6/public/values?alt=json`

fetch(endpoint2).then(res => res.json()).then(rawData);
console.log(rawData);

function rawData(raw) {
    const myArray = raw.feed.entry;
    myArray.forEach(showSheet);
}

function showSheet(raw) {
    console.log(raw);
    const clone = document.querySelector("template.two").content;
    const cloneData = clone.cloneNode("true");
    cloneData.querySelector("p.description1").textContent = raw.gsx$outfitdescription1.$t;

    cloneData.querySelector("img.img1").src = "image/" + raw.gsx$scrambledeggfashionimage.$t;

    document.querySelector("main").appendChild(cloneData);
}


}










