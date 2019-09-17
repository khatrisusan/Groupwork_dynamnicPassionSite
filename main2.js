/*
==========================================
JS FOR DYNAMIC FOOD PAGE
==========================================
*/
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
    const clone = document.querySelector("template").content;
    const cloneData = clone.cloneNode("true");
    cloneData.querySelector("p.description1").textContent = raw.gsx$outfitdescription1.$t;
   // cloneData.querySelector("p.description2").textContent = raw.gsx$outfitdescription2.$t;
   // cloneData.querySelector("p.description3").textContent = raw.gsx$outfitdescription3.$t;
    cloneData.querySelector("img.img1").src = "image/" + raw.gsx$scrambledeggfashionimage.$t;
    //raw.gsx$outfitdescription3.$t;
    //cloneData.querySelector("img.img2").src = "image/" + raw.gsx$scrambledeggfashionimage.$t;

    //raw.gsx$outfitdescription3.$t;
    //cloneData.querySelector("img.img3").src = "image/" + raw.gsx$scrambledeggfashionimage.$t;

    document.querySelector("aside").appendChild(cloneData);
}
















