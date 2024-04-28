





const accessKey = "loGsBXFqjTzac1L6_eRY3YnmDcaEnFTDrkBxh80Y4-s";
const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("showbtn");


let inputData = "";
let page = 1;
// function for search image 
 async function searchImages(){
inputData = inputE1.value;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
 
const response= await fetch(url);
const data = await response.json();
// convert the json data into  div images 
     const results = data.results;
     if(page ===1){
        searchResults.innerHTML ="";
     }
    //  using map method it will return new array 
     results.map((result)=>{
         const imageWrapper = document.createElement('div');
         imageWrapper.classList.add("search-result");
         const image =document.createElement('img');
         image.src= result.urls.small;
         image.alt = result.alt_description;
         const imageLink = document.createElement('a');
         imageLink.href = result.links.html;
         imageLink.target="_blank";
         imageLink.textContent= result.alt_description;
         
         
         imageWrapper.appendChild(image);
         imageWrapper.appendChild(imageLink);
         searchResults.appendChild(imageWrapper);
        
        });

        page++;
        if(page > 1){

            showMore.style.display = "block";
    }
}


// target the user input & create a new function
//  add eventlistener
formE1.addEventListener("submit",(event)=>{
    event.preventDefault();
    page =1;
    searchImages();
});

showMore.addEventListener("click",()=>{
   
    searchImages();
});
