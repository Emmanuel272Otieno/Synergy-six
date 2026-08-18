// =========================
// DARK / LIGHT MODE
// =========================

const themeButton = document.createElement("button");

themeButton.textContent = "🌙 Dark Mode";
themeButton.className = "theme-btn";

document.body.appendChild(themeButton);

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});


// =========================
// TEAM MEMBER INTERACTION
// =========================

const members = document.querySelectorAll(".member");

members.forEach(function (member) {
    member.addEventListener("click", function () {

        const name = member.querySelector("h2").textContent;
        const role = member.querySelector("p").textContent;

        alert(
            `${name}\n\nRole: ${role}\n\nWorking together to make Synergy Six stronger! 💪`
        );
    });
});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const userMessage = document.getElementById("userMessage").value;

        const message = document.getElementById("message");

        if (name === "" || email === "" || userMessage === "") {
            message.textContent = "Please fill in all the fields!";
            message.style.color = "red";
        } else {
            message.textContent =
                `Thank you, ${name}! Your message has been sent successfully.`;

            message.style.color = "green";

            contactForm.reset();
        }
    });
}