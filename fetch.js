// URL API, с которого будут получать данные
const apiUrl = 'https://ipinfo.io/161.185.160.93/geo';

// Функция для получения данных с API
async function fetchData() {
    try {
        // Отправляем GET запрос к API
        const response = await fetch(apiUrl);

        // Проверяем, если статус ответа успешный (код 200)
        if (!response.ok) {
            throw new Error('Ошибка при получении данных');
        }

        // Преобразуем ответ в JSON
        const data = await response.json();

        // Вставляем данные на страницу
        displayData(data);
    } catch (error) {
        console.error('Ошибка:', error);
        document.getElementById('data-container').innerHTML = 'Не удалось загрузить данные';
    }
}

// Функция для отображения данных на странице
function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Очищаем контейнер перед добавлением новых данных

    // Отображаем данные из объекта (data)
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
        <h3>IP: ${data.ip}</h3>
        <p>Location: ${data.city}, ${data.region}, ${data.country}</p>
        <p>Hostname: ${data.hostname}</p>
        <p>Org: ${data.org}</p>
    `;

    container.appendChild(postElement);
}

// Вызов функции для получения данных
fetchData();