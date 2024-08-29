let sessia = 1;
// 0 - Не авторизован
// 1 - Авторизован

const logo = document.getElementById('logo')
logo.addEventListener('click', function() {
    window.location.href = "index.html";
});

if (LogOrMail = document.getElementById('LogOrMail') == null) {

} else {
    if (sessia == 0) {
        const LogOrMail = document.getElementById('LogOrMail');
        LogOrMail.innerHTML = ''; // Очистка списка при первом запуске
    
        const loggBut = document.createElement('div');
        loggBut.addEventListener('click', function() {
            window.location.href = "loggin.html";
        }); // Слушатель на кнопку log перенаправляющий на авторизацию
        loggBut.classList.add('LogMainButt');
        loggBut.id = 'LogMainButt';
        loggBut.innerHTML = '<div><span>Войти</span></div>';
        LogOrMail.appendChild(loggBut); // Создание кнопки авторизации
    } else if (sessia == 1) {
        const LogOrMail = document.getElementById('LogOrMail');
        LogOrMail.innerHTML = ''; // Очистка списка при первом запуске
        
        const loggedBut = document.createElement('div');
        loggedBut.addEventListener('click', function() {
            window.location.href = "hole.html";
        });
        loggedBut.classList.add('accMailMENU');
        loggedBut.innerHTML = '<div><span>VladWorkG@gmail.com</span></div>';
        LogOrMail.appendChild(loggedBut); // Создание кнопки личного кабинет
    }
}

if (BuyBut = document.getElementById('table3') == null) {

} else {
    const BuyBut = document.getElementById('table3');
BuyBut.addEventListener('click', function() {
    if (sessia == 0) {
    window.location.href = "loggin.html";
    } else if (sessia = 1) {
    window.location.href = "hole.html";
    }
});
}
if (avtorisation = document.getElementById('table3Reg') == null) {
} else {
    const avtorisation = document.getElementById('table3Reg');
    avtorisation.addEventListener('click', function() {
        window.location.href = "registration.html";
    });
}

if (registration = document.getElementById('table3Log') == null) {
} else {
    const registration = document.getElementById('table3Log');
    registration.addEventListener('click', function() {
    window.location.href = "loggin.html";
});
}


