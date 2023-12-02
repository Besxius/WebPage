/*event in javaScript
mouse: onclick, ondblclick, onmousedown, onmouseenter,onmouseleave,onmouseout,...
key: onkeydown, onkeypress, onkeyup
fram: onload, onresize, onscroll, onerror,...*/

function closeMe(){
    x=document.getElementById("demo");
    //option 1: change the style attribute directly
    x.style.display="none";
    //option 2: chang the class
    //x.className="closed";
}
function openMe(){
    x=document.getElementById("demo");
    x.style.display="block";
    //option 2: change the class
    //x.className="open"
}

