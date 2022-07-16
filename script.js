var smallCursor = document.querySelector(".smallCursor");
var largeCursor = document.querySelector(".largeCursor");

document.onmousemove = function(e){
    smallCursor.style.left=(e.pageX - 5) + "px";
    smallCursor.style.top=(e.pageY - 5) + "px";

    smallCursor.style.display = "block";

    largeCursor.style.left=(e.pageX - 22) + "px";
    largeCursor.style.top=(e.pageY - 22) + "px";

    largeCursor.style.display = "block";
}