document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");

    // Open Sidebar
    hamburger.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    // Close Sidebar
    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});

