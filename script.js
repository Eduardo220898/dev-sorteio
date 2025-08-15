function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);
    const resultElement = document.querySelector(".result");

    if (!min || !max) {
        resultElement.textContent = "Por favor, preencha os dois valores.";
        resultElement.style.color = "orange";
        return;
    }

    if (min >= max) {
        resultElement.textContent = "O valor mínimo deve ser menor que o máximo.";
        resultElement.style.color = "red";
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.textContent = `Número sorteado: ${result}`;
    resultElement.style.color = "#AEC346";
}
