document.getElementById('callback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const name = document.getElementById('callback-name').value;
    const phone = document.getElementById('callback-phone').value;

    // Здесь можно добавить код для отправки данных на сервер

    alert(`Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone}.`);
    
    // Очистка формы
    document.getElementById('callback-form').reset();
});
