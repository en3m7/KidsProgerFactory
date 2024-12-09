document.getElementById('callback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('callback-name').value;
    const phone = document.getElementById('callback-phone').value;

    alert(`Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone}.`);
    
    document.getElementById('callback-form').reset();
});