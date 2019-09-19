/*
==========================================
JS FOR DYNAMIC MAIN PAGE
==========================================
*/

const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
})

let urlParamas = new URLSearchParams(window.location.search);
let id = urlParamas.get("id");
console.log(id);

const Fetch =
    "11uCM4X1aMt_7X0s6qUkZyXIoopkTqrTyISDarVU6kQ0";
const endpoint = `https://spreadsheets.google.com/feeds/list/${Fetch}/od6/public/values?alt=json`

fetch(endpoint).then(res => res.json()).then(rawData);
console.log(rawData);

function rawData(data) {
    const myArray = data.feed.entry;
    myArray.forEach(showSheet);

    console.log(myArray);
}

function showSheet(data) {
    console.log(data);
    const clone = document.querySelector("template.two").content;
    const cloneData = clone.cloneNode("true");

    if (data.gsx$dishtitle.$t == id) {
        //console.log("yes");
        cloneData.querySelector("img.dishimg").src = "image/" + data.gsx$imagename.$t;
        cloneData.querySelector("h1.dish-title").textContent = data.gsx$dishtitle.$t;
        cloneData.querySelector("p.noun").textContent = data.gsx$noun.$t;
        cloneData.querySelector("p.recipe").textContent = data.gsx$recipe.$t;
        cloneData.querySelector("p.author").textContent = `Outfit Credit: ${ data.gsx$author.$t }`;
        cloneData.querySelector("p.date").textContent = data.gsx$date.$t;
        /*        cloneData.querySelector("p.rating1").textContent = data.gsx$rating1.$t;
                cloneData.querySelector("p.rating2").textContent = data.gsx$rating2.$t;
                cloneData.querySelector("p.rating3").textContent = data.gsx$rating3.$t;*/
        cloneData.querySelector("p.dish-description").textContent = data.gsx$dishdescription.$t;
        cloneData.querySelector("p.description1").textContent = data.gsx$outfitdescription1.$t;
        cloneData.querySelector("p.description2").textContent = data.gsx$outfitdescription2.$t;
        cloneData.querySelector("p.description3").textContent = data.gsx$outfitdescription3.$t;
        cloneData.querySelector("img.img1").src = "image/" + data.gsx$fashionimage1.$t;
        cloneData.querySelector("img.img2").src = "image/" + data.gsx$fashionimage2.$t;
        cloneData.querySelector("img.img3").src = "image/" + data.gsx$fashionimage3.$t;
        //data.gsx$outfitdescription3.$t;
        //cloneData.querySelector("img.img2").src = "image/" + data.gsx$scrambledeggfashionimage.$t;

        //data.gsx$outfitdescription3.$t;
        //cloneData.querySelector("img.img3").src = "image/" + data.gsx$scrambledeggfashionimage.$t;
        cloneData.querySelector("button.ratingone").addEventListener("click", () => {
            modal.classList.remove("hide");
            document.querySelector("p.rating").textContent = data.gsx$rating1.$t;
        });
        cloneData.querySelector("button.ratingtwo").addEventListener("click", () => {
            modal.classList.remove("hide");
            document.querySelector("p.rating").textContent = data.gsx$rating2.$t;
        });
        cloneData.querySelector("button.ratingthree").addEventListener("click", () => {
            modal.classList.remove("hide");
            document.querySelector("p.rating").textContent = data.gsx$rating3.$t;
        });


        document.querySelector("aside").appendChild(cloneData)

    }

}
