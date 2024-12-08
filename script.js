// Скрипт для изменения стилей страницы
document.addEventListener("DOMContentLoaded", function () {
    const textColorInput = document.getElementById("text-color");
    const fontSizeSelect = document.getElementById("font-size");
    const bgColorInput = document.getElementById("bg-color");
    const resetButton = document.getElementById("reset-styles");

    // Применение цвета текста
    textColorInput.addEventListener("input", function () {
        document.body.style.color = textColorInput.value;
    });

    // Применение размера шрифта
    fontSizeSelect.addEventListener("change", function () {
        document.body.style.fontSize = fontSizeSelect.value;
    });

    // Применение фона страницы
    bgColorInput.addEventListener("input", function () {
        document.body.style.backgroundColor = bgColorInput.value;
    });

    // Сброс стилей
    resetButton.addEventListener("click", function () {
        // Сброс всех изменений
        document.body.style.color = "";
        document.body.style.fontSize = "";
        document.body.style.backgroundColor = "";
        textColorInput.value = "#ffffff"; // сброс цвета текста
        fontSizeSelect.value = "16px"; // сброс размера шрифта
        bgColorInput.value = "#444444"; // сброс фона
    });
});