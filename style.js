document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated"); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 1.0 }); 

    const animatedElements = document.querySelectorAll('.profile, .git, .linkedin, .edu');

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    const submitButton = document.querySelector(".btn");
    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log("Email:", email);
        console.log("Message:", message);

        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });
});
