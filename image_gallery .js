
    const buttons = document.querySelectorAll("button");
    const images = document.querySelectorAll(".gallery div");
    const searchInput = document.querySelector("input");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.innerText.toLowerCase();

            images.forEach(img => {
                if (category === "all" || img.classList.contains(category)) {
                    img.style.display = "inline-block";
                } else {
                    img.style.display = "none";
                }
            });
        });
    });
    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase();

        images.forEach(img => {
            if (img.className.includes(value)) {
                img.style.display = "inline-block";
            } else {
                img.style.display = "none";
            }
        });
    });