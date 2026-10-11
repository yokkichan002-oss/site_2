let cards = document.querySelectorAll('.card');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-btn');
let modalText = document.querySelector('#modal-text');
let modalContent = document.querySelector('.modal-content');


// ==========================================
// 2. АНИМАЦИЯ ПОЯВЛЕНИЯ КАРТОЧЕК
// ==========================================
cards.forEach(function(card, index) {
    setTimeout(function() {
        card.classList.add('visible');
    }, index * 100);
});

// ==========================================
// 3. ОБРАБОТКА КЛИКА ПО КАРТОЧКЕ (ОДИН БЛОК!)
// ==========================================
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        // 1. Копируем контент из карточки в модальное окно
        let fullText = card.querySelector('.card-full');
        modalText.innerHTML = fullText.innerHTML;
        
        // 2. Меняем фон модального окна
        let bgImage = card.getAttribute('data-bg');
        // Проверка на случай, если у карточки нет data-bg (чтобы не было ошибки)
        if (bgImage) {
            modalContent.style.backgroundImage = 
                "linear-gradient(rgba(26, 26, 26, 0.75), rgba(26, 26, 26, 0.75)), url('" + bgImage + "')";
        } else {
            modalContent.style.backgroundImage = "none";
            modalContent.style.backgroundColor = "#1a1a1a";
        }
        
        // 3. Открываем окно
        modal.classList.add('active');
    });
});
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

// ==========================================
// 4. ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
// ==========================================
closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    // Ставим на паузу при закрытии для хорошего UX
});