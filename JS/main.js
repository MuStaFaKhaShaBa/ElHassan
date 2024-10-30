// Get all elements with class 'translate-en' or 'translate-ar'
const elementsEn = document.querySelectorAll('.translate-en');
const elementsAr = document.querySelectorAll('.translate-ar');

function setLanguage(lang) {
    // Toggle visibility based on the selected language using classList to add/remove 'd-none'
    if (lang === 'en') {
        elementsEn.forEach(el => el.classList.remove('d-none'));
        elementsAr.forEach(el => el.classList.add('d-none'));
        document.title = "The cheapest painting and professional finishing in Kuwait - Al Hassan for Finishing."

    } else if (lang === 'ar') {
        elementsEn.forEach(el => el.classList.add('d-none'));
        elementsAr.forEach(el => el.classList.remove('d-none'));
        document.title = "أرخص صباغة وتشطيب احترافي بالكويت - ال حسن للتشطيبات"
    }
}

// Get both pairs of buttons
const btnArabic = document.getElementById("btn-arabic"),
    btnEnglish = document.getElementById("btn-english"),
    btnArabic2 = document.getElementById("btn-arabic2"),
    btnEnglish2 = document.getElementById("btn-english2");

// Event listeners for language buttons
btnArabic.addEventListener("click", () => setLanguage("ar"));
btnEnglish.addEventListener("click", () => setLanguage("en"));

btnArabic2.addEventListener("click", () => setLanguage("ar"));
btnEnglish2.addEventListener("click", () => setLanguage("en"));

// Set initial language to Arabic
setLanguage("ar");



// floating menu
document.getElementById('fabButton').addEventListener('click', function () {
    document.querySelector('.fab-container').classList.toggle('active');
});

document.querySelectorAll("#portfolio .tab-content .port")
    .forEach((i) => i.addEventListener("click", _ =>
        i.classList.contains("active") ? i.classList.remove("active") :
            i.classList.add("active")))