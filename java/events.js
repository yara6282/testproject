function toggleDetails(btn) {
    const card = btn.closest('.event-card');
    card.classList.toggle('active');
}

function handleJoin(button) {
    if (button.innerText === "Join") {
        document.getElementById('joinModal').style.display = 'flex';
        button.innerText = "Cancel";
        button.style.backgroundColor = "#8B0000"; // تغيير اللون عند الإلغاء
    } else {
        document.getElementById('cancelModal').style.display = 'flex';
        button.innerText = "Join";
        button.style.backgroundColor = "#444"; // إعادة اللون الأصلي
    }
}

function closeModal() {
    document.getElementById('joinModal').style.display = 'none';
}

function closeCancelModal() {
    document.getElementById('cancelModal').style.display = 'none';
}

// إغلاق المودال عند الضغط خارج المحتوى
window.onclick = function(event) {
    const joinModal = document.getElementById('joinModal');
    const cancelModal = document.getElementById('cancelModal');
    if (event.target == joinModal) closeModal();
    if (event.target == cancelModal) closeCancelModal();
}