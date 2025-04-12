document.addEventListener("DOMContentLoaded", () => {
    const faqSection = document.querySelector("#faq ul");
    const questions = [
        "How many species of flowers are native to Bolivia?",
        "What flowers are endangered?",
        "What do Bolivian flowers represent in traditions?"
    ];

    questions.forEach(question => {
        const li = document.createElement("li");
        li.textContent = question;
        faqSection.appendChild(li);
    });

    const form = document.querySelector("#contactForm");
    form.addEventListener("submit", event => {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        localStorage.setItem("visitorName", name);
        alert(`Thank you, ${name}! Your message has been sent.`);
    });
});
