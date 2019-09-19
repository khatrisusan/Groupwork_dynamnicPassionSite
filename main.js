/*
==========================================
JS for Dynamic Home Page
==========================================
*/

const spreadsheetID = "11uCM4X1aMt_7X0s6qUkZyXIoopkTqrTyISDarVU6kQ0";
const endpoint = `https://spreadsheets.google.com/feeds/list/${spreadsheetID}/od6/public/values?alt=json`;

var docFragment = document.createElement("section");

fetch(endpoint)
    .then(res => res.json())
    .then(getData);

function getData(data) {
    const myArray = data.feed.entry;
    console.log(myArray);
    myArray.length = 4;
    myArray.forEach(showList);
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
    myCopy.querySelector("img").setAttribute("dishId", data.gsx$dishtitle.$t);
    console.log(data);
    document.querySelector("main").appendChild(myCopy);

    document.querySelectorAll(".indeximg").forEach(image => {
        image.addEventListener("click", showDish);
    });
}

function showDish(event) {
    let id = event.target.getAttribute("dishId");
    console.log(id);
    location.href = "main.html?id=" + id;
}

/*
==========================================
JS for Dynamic Home Page
==========================================
*/

/*

//document.querySelector("main").innerHTML

function myFunction() {
 const secondFetch =
    "11uCM4X1aMt_7X0s6qUkZyXIoopkTqrTyISDarVU6kQ0";
const endpoint2 = `https://spreadsheets.google.com/feeds/list/${secondFetch}/od6/public/values?alt=json`

fetch(endpoint2).then(res => res.json()).then(rawData);
//console.log(rawData);

}


function rawData(raw) {
    const myArray = raw.feed.entry;
    myArray.forEach(showSheet);
    console.log(docFragment);
    const main = document.querySelector('main');
   main.innerHTML = '';
    main.appendChild(docFragment);
}

function showSheet(raw) {
    console.log(raw);
    const clone = document.querySelector(".two").content;
    //console.log ("clone");
    //console.log (clone);
    const cloneData = clone.cloneNode("true");
    cloneData.querySelector("p.description1").textContent = raw.gsx$outfitdescription1.$t;

    cloneData.querySelector("img.img1").src = "image/" + raw.gsx$scrambledeggfashionimage.$t;
    //console.log(cloneData)
   // document.querySelector("main").innerHTML = cloneData;
     docFragment.appendChild(cloneData);
}








*/
