//function doStuff() {
//    alert("doing stuff");
//}

const doStuff = () => {
    //alert("doing stuff");
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello Tanner";
    messageP.classList.toggle("special"); //.add make permanent, .toggle can go back and forth
};

const hideTree = () => {
    document.getElementById("tree").classList.add("hidden");
};

//const clickButton = document.getElementById("btn-click");
//clickButton.onclick = doStuff; //dont put parenthesis after function if you dont want it to activate on page load
document.getElementById("btn-click").onclick = doStuff;
document.getElementById("tree").onclick = hideTree;

// var, let, const ways to store variable. Var is out of date, don't use. Almost always use const.
// clickButton.innerHTML = "DON'T CLICK";