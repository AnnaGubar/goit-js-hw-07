const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControlRef.addEventListener("input", onSizeControler);

function onSizeControler(){
  textRef.setAttribute("style", `font-size: ${fontSizeControlRef.value}px`);
}