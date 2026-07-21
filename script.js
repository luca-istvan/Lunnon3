const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerText = "Produto Adicionado ✓";

        button.style.background = "#986664";

    });

});
