/* var btnTrasnslate = document.querySelector("#btn-translate")

 btnTrasnslate.addEventListener("click",function clickEventHandeler(){
     console.log("clicked");
 })
*/
var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL = "https://repl.it/@Mrinal11/DespicableMe#api.js"

function getTranslateURL(input){
    return serverURL + "?" + "text= " + input
}

function clickHandler(){
    //console.log("clicked!!");
    //console.log("input",txtInput.value);
    outputDiv.innerText = "Hi! How you Doin " + txtInput.value ;
};

btnTranslate.addEventListener("click", clickHandler)
