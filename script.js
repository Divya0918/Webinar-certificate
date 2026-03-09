
const AVAILABLE_IMAGES = [
"cityscape.jpg",
"technology.jpg",
"nature.jpg",
"abstract.jpg",
"space.jpg"
];

function searchCertificate(){

const query = document
.getElementById("searchInput")
.value
.trim()
.toLowerCase();

const resultDiv = document.getElementById("result");

resultDiv.innerHTML="";

if(!query){
resultDiv.innerHTML="Please enter your user ID";
return;
}

const match = AVAILABLE_IMAGES.find(img => {

const name = img.toLowerCase();
const nameWithoutExt = img.substring(0,img.lastIndexOf(".")).toLowerCase();

return name === query || nameWithoutExt === query;

});

if(match){

const path = "images/" + match;

resultDiv.innerHTML = `
<img src="${path}" alt="${match}">

<br>

<button class="download-btn" onclick="downloadFile('${path}','${match}')">
Download
</button>
`;

}else{

resultDiv.innerHTML="Certificate not found";

}

}

function downloadFile(path,name){

fetch(path)
.then(response => response.blob())
.then(blob => {

const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = name;

document.body.appendChild(link);
link.click();
document.body.removeChild(link);

});

}
