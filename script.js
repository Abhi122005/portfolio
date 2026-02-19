
const textArray = [
    "Designing AI Operators",
    "Automating Real Workflows",
    "Building Intelligent Systems"
];

let textIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(() => {
            typingElement.textContent = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % textArray.length;
            typeEffect();
        }, 1200);
    }
}

typeEffect();

function toggleProject(element) {
    const content = element.querySelector(".project-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
}


emailjs.init("OKz1iKo_mcaRFHYgj");


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_6fvffwg", "template_vdcao9q", this)
        .then(function() {
            document.getElementById("formMessage").textContent = "Message Sent Successfully!";
        }, function(error) {
            document.getElementById("formMessage").textContent = "Failed to send message.";
            console.log(error);
        });

    this.reset();
});
