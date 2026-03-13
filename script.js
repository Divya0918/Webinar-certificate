
const AVAILABLE_IMAGES = [
"ZW1A207.JPG",
"ZW1A238.JPG",
"ZW1A74.JPG",
"ZW1A152.JPG",
"ZW1A256.JPG",
"ZW1A95.JPG",
"ZW1A65.JPG",
"ZW1A250.JPG",
"ZW1A104.JPG",
"ZW1A232.JPG",
"ZW1A256.JPG",
"ZW1A202.JPG",
"ZW1A241.JPG",
"ZW1A72.png",
"ZW1A152.JPG",
"ZW1A102.JPG",
"ZW1A160.JPG",
"ZW1A239.png",
"ZW1A243.png",
"ZW1A71.png",
"ZW1A260.png",
"ZW1A111.png",
"ZW1A170.png",
"ZW1A72.png",
"ZW1A135.png",
"ZW1A208.png",
"ZW1A98.png",
"ZW1A237.png",
"ZW1A178.png",
"ZW1A270.JPG",
"ZW1A208.png",
"ZW1A83.png",
"ZW1A178.png",
"Zw1a197.JPG",
"ZW1A90.png",
"ZW1A186.png",
"ZW1A67.png",
"ZW1A267.png",
"ZW1A212.JPG",
"ZW1A166.JPG",
"ZW1A127.JPG",
"ZW1A216.JPG",
"ZW1A61.JPG",
"ZW1A238.JPG",
"ZW1A183.JPG",
"ZW1A62.JPG",
"AW1A264.JPG",
"ZW1A235.JPG",
"ZW1A231.JPG",
"ZW1A213.JPG",
"ZW1A35.JPG",
"ZW1A189.JPG",
"ZW1A107.JPG",
"ZW1A79.JPG",
"ZW1A92.JPG",
"ZW1A161.JPG",
"Zw1A95.JPG",
"ZW1A66.JPG",
"ZW1A209.JPG",
"ZW1A237.JPG",
"ZW1A52.JPG",
"ZW1A70.JPG",
"ZW1A64.JPG",
"ZW1A234.JPG",
"ZW1A241.JPG",
"ZW1A210.JPG",
"ZW1A269.JPG",
"ZW1A65.JPG",
"ZW1A2.JPG",
"ZW1A268.JPG",
"ZW1A101.JPG",
"ZW1A252.JPG",
"ZW1A218.JPG",
"ZW1A259.JPG",
"ZW1A274.JPG",
"ZW1A221.JPG",
"ZW1A68.JPG",
"ZW1A253.JPG",
"ZW1A271.JPG",
"ZW1A270.JPG",
"ZW1A226.JPG",
"ZW1A76.JPG",
"ZW1A195.JPG",
"ZW1A199.JPG",
"ZW1A180.JPG",
"ZW1A222.JPG",
"ZW1A254.JPG",
"ZW1A223.JPG",
"ZW1A253.JPG",
"ZW1A226.JPG",
"ZW1A107.JPG",
"ZW1A268.JPG",
"ZW1A106.JPG",
"ZW1A266.JPG",
"ZW1A216.JPG",
"ZW1A275.JPG",
"ZW1A238.JPG",
"ZW1A254.JPG",
"ZW1A245.JPG",
"ZW1A250.JPG",
"ZW1A73.JPG",
"ZW1A225.JPG",
"ZW1A227.JPG",
"ZW1A65.JPG",
"ZW1A216.JPG",
"ZW1A55.png",
"ZW1A196.png",
"ZW1A94.png",
"ZW1A40.png",
"ZW1A206.png",
"ZW1A276.jpg",
"ZW1A277.jpg"
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

/* SHOW LOADING */
resultDiv.innerHTML = `
<div class="loader"></div>
<p>Downloading your certificate...</p>
`;

setTimeout(()=>{

downloadFile(path,match);

},1000);

}else{

resultDiv.innerHTML="Certificate not found";

}

}



function downloadFile(path,name){
const resultDiv = document.getElementById("result");
fetch(path)
.then(response => response.blob())
.then(blob => {

const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = name;

document.body.appendChild(link);
link.click();
document.body.removeChild(link);

resultDiv.innerHTML = `
<p class="success">✅ Certificate Downloaded Successfully</p>
`;

})
.catch(()=>{

resultDiv.innerHTML = `
<p style="color:red;">❌ Download failed. Try again.</p>
`;

});

}







