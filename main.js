const typed = new Typed('.text',{
    strings:['Web Developer','Frontend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");
var h = document.getElementById("#head");
var a = document.getElementById("#about");
var s = document.getElementById("#services");
var p = document.getElementById("#portfolio");
var c = document.getElementById("#contact");
function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-250px";
}
function closeabout(){
    sidemeu.style.right="-250px";
}
