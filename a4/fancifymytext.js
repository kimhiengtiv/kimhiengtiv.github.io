
const text = document.getElementById("text");

document.getElementById("bigger").addEventListener("click", function() {
    text.style.fontSize = "2em"});

document.getElementsByName("fancify")[0].addEventListener("change",function() {
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline"});

document.getElementsByName("fancify")[1].addEventListener("change",function() {
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none"});

document.getElementById("moo").addEventListener("click", function() {
    text.style.textTransform = "uppercase"
    let str = text.value.split(".");
    let str2 = str.join("-Moo");
    text.value = str2});
