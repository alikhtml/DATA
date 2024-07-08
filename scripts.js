function register() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('buttonContainer').style.display = 'flex';
    requestNotificationPermission();
}

function openLink(url) {
    window.open(url, '_blank');
}

function requestNotificationPermission() {
    if ("Notification" in window) {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                new Notification("Спасибо за регистрацию!");
            }
        });
    }
}
