 const filterItem=document.querySelector(".items");
 const filterImg=document.querySelectorAll(" .gallery .image");
 window.onload=()=>{ // once window loaded
   filterItem.onclick= (selectedItem)=>{
     if(selectedItem.target.classList.contains("item"))  {
 filterItem.querySelector(".active").classList.remove("active");
 selectedItem.target.classList.add("active");
 let filterName=selectedItem.target.getAttribute("data-name");
  filterImg.forEach(image => {
   let filterImages=image.getAttribute("data-name");
   if((filterImages== filterName) || (filterName == "all")){
     image.classList.remove("hide"); //first remove the hide class from the image
     image.classList.add("show"); //add show class in image
   }else{
    image.classList.add("hide"); //add hide class in image
     image.classList.remove("show"); //remove show class from the image
   }
  });
 }
 }


for (let i = 0; i < filterImg.length; i++) {
  filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
}
 }

//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
//once user click on any image then remove the scroll bar of the body, so user can't scroll up or down
document.querySelector("body").style.overflow = "hidden";
let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
previewBox.classList.add("show"); //show the preview image box
shadow.classList.add("show"); //show the light grey background
closeIcon.onclick = ()=>{ //if user click on close icon of preview box
  previewBox.classList.remove("show"); //hide the preview box
  shadow.classList.remove("show"); //hide the light grey background
  document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
}}
