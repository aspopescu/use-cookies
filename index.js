let firstText = document.querySelector("#firstText");
let lastText = document.querySelector("#lastText");
let submitButton = document.querySelector("#submitButton");
let cookieButton = document.querySelector("#cookieButton");
let deleteButton = document.querySelector("#deleteButton");

submitButton.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
    firstText.value = "";
    lastText.value = "";
    console.log("submitted: ",document.cookie);
});

cookieButton.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
    console.log("retrieved: ",document.cookie);
});

deleteButton.addEventListener("click", () => {
    deleteCookie("firstName");
    deleteCookie("lastName");
    firstText.value = "";
    lastText.value = "";
    console.log("cookies after delete(none expected): ",document.cookie);
});

function setCookie(name, value, daysToLive){
    let date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 3600 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path/`
};

function deleteCookie(name){
    setCookie(name , null, null);
};

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    });
    return result;
};
