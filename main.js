 /*   ### SEARCH BAR ###   */

 const searchButton = document.querySelector(".search-button");
 searchButton.addEventListener("click", ()=>{
     console.log("Search button clicked!");
 });





 
/*    ### FUNCTIONING SERVICES SLIDESHOW UNDER THE TITLE ###   */


let i=1;
let timeOut = 9000;
let text_id = `scroll-${i}`;
let menu_id = `circle-${i}`;

const slideshow = ()=>{
    let text_prev_id = i==1 ? `scroll-4` : `scroll-${i-1}`;
    text_id = `scroll-${i}`;

    let menu_prev_id = i==1 ? `circle-4` : `circle-${i-1}`;
    menu_id = `circle-${i}`;

    document.getElementById(text_prev_id).classList.remove('current-text');
    document.getElementById(text_id).classList.add('current-text');

    document.getElementById(menu_prev_id).classList.remove('active-circle');
    document.getElementById(menu_id).classList.add('active-circle');

    if(i<4) i++;
    else i=1;

    setTimeout("slideshow()", timeOut);
}

window.onload = slideshow;


/*   ### SCROLL BUTTON CLICK WORKING ### */

const circle1 = document.getElementById("circle-1");
const circle2 = document.getElementById("circle-2");
const circle3 = document.getElementById("circle-3");
const circle4 = document.getElementById("circle-4");

const circle = document.querySelectorAll(".circle");

circle1.addEventListener("click", ()=>{
    document.getElementById(text_id).classList.remove('current-text');
    document.getElementById(menu_id).classList.remove('active-circle');
    i=1;
    text_id = `scroll-${i}`;
    menu_id = `circle-${i}`;
    document.getElementById(text_id).classList.add('current-text');
    document.getElementById(menu_id).classList.add('active-circle');
    i++;
    // slideshow();
});

circle2.addEventListener("click", ()=>{
    document.getElementById(text_id).classList.remove('current-text');
    document.getElementById(menu_id).classList.remove('active-circle');
    i=2;
    text_id = `scroll-${i}`;
    menu_id = `circle-${i}`;
    document.getElementById(text_id).classList.add('current-text');
    document.getElementById(menu_id).classList.add('active-circle');
    i++;
    // slideshow();
});

circle3.addEventListener("click", ()=>{
    document.getElementById(text_id).classList.remove('current-text');
    document.getElementById(menu_id).classList.remove('active-circle');
    i=3;
    text_id = `scroll-${i}`;
    menu_id = `circle-${i}`;
    document.getElementById(text_id).classList.add('current-text');
    document.getElementById(menu_id).classList.add('active-circle');
    i++;
    // slideshow();
});

circle4.addEventListener("click", ()=>{
    document.getElementById(text_id).classList.remove('current-text');
    document.getElementById(menu_id).classList.remove('active-circle');
    i=4;
    text_id = `scroll-${i}`;
    menu_id = `circle-${i}`;
    document.getElementById(text_id).classList.add('current-text');
    document.getElementById(menu_id).classList.add('active-circle');
    i=1;
    // slideshow();
});