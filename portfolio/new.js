const togglebtn = document.getElementById("themeToggle");

togglebtn.addEventListener("click", () => {
document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
toggleBtn.innerHTML = "☀️";
} else {
toggleBtn.innerHTML = "🌙";
}
});

// Load saved theme
if(localStorage.getItem("theme") === "light"){
document.body.classList.add("light-mode");
toggleBtn.innerHTML = "☀️";
}

toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
localStorage.setItem("theme","light");
toggleBtn.innerHTML = "☀️";
} else {
localStorage.setItem("theme","dark");
toggleBtn.innerHTML = "🌙";
}
});

function showMessage(){
alert("Thanks for clicking Hire Me 😎 Let's build something awesome together!");
}

function showJoke(){

const jokes = [
"Why do programmers hate nature? Too many bugs 🐛",
"I told my code to sleep… now it’s in infinite loop 😴",
"Debugging: Removing the needles from the haystack 🧠",
"My code works... I have no idea why 🤯"
]

const random = Math.floor(Math.random()*jokes.length)

alert(jokes[random])

}


(function(){
emailjs.init("ZM54UtczEEcgTIhAo");
})();

document.getElementById("contact-form").addEventListener("submit", function(event){

event.preventDefault();

emailjs.sendForm("service_p9dwyxn","template_6itqbzy",this)
.then(function(){
alert("Message sent successfully 🚀");
}, function(error){
alert("Failed to send message ❌");
});

});