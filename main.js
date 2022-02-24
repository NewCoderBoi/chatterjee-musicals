 /*   ### SEARCH BAR ###   */

 const searchButton = document.querySelector(".search-button");
 searchButton.addEventListener("click", ()=>{
     console.log("Search button clicked!");
 });





 
/*    ### FUNCTIONING SERVICES SLIDESHOW UNDER THE TITLE ###   */


let i=1;
let timeOut = 9000;

const slideshow = ()=>{
    let text_prev_id = i==1 ? `scroll-4` : `scroll-${i-1}`;
    let text_id = `scroll-${i}`;

    let menu_prev_id = i==1 ? `circle-4` : `circle-${i-1}`;
    let menu_id = `circle-${i}`;

    document.getElementById(text_prev_id).classList.remove('current-text');
    document.getElementById(text_id).classList.add('current-text');

    document.getElementById(menu_prev_id).classList.remove('active-circle');
    document.getElementById(menu_id).classList.add('active-circle');

    if(i<4) i++;
    else i=1;

    setTimeout("slideshow()", timeOut);
}

window.onload = slideshow;