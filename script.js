let myScript = document.createElement("script");
myScript.setAttribute("src", "example.js");
myScript.setAttribute("async", "false");

let head = document.head;
head.insertBefore(myScript, head.firstElementChild);

myScript.onload = () => {
    //add code using your script loaded
}
