const display = document.getElementById('display');
let calculationDone = false;

function appendToDisplay(input) {
    if (calculationDone && !isNaN(input)) { // Jika hasil sudah ada dan input angka
        display.value = input; // Hapus tampilan sebelumnya dan tampilkan angka baru
        calculationDone = false; // Reset flag
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
    calculationDone = false; // Reset flag jika layar di-clear
}

function calculate() {
    try {
        display.value = eval(display.value);
        calculationDone = true; // Set flag ketika kalkulasi selesai
    } catch (err) {
        display.value = "Error";
    }
}


function toggleDarkMode() {
    let isDark = document.body.classList.toggle('dark-mode');
    
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

// On page load
document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
