function setLanguage(lang) {
    // Get all elements with class 'translate-en' or 'translate-ar'
    const elementsEn = document.querySelectorAll('.translate-en');
    const elementsAr = document.querySelectorAll('.translate-ar');
    
    // Toggle visibility based on the selected language
    if (lang === 'en') {
        elementsEn.forEach(el => el.style.display = 'block');
        elementsAr.forEach(el => el.style.display = 'none');
    } else if (lang === 'ar') {
        elementsEn.forEach(el => el.style.display = 'none');
        elementsAr.forEach(el => el.style.display = 'block');
    }
}

const btnArabic = document.getElementById("btn-arabic")
    , btnEnglish = document.getElementById("btn-english");

btnArabic.addEventListener("click", () => setLanguage("ar"))
btnEnglish.addEventListener("click", () => setLanguage("en"))
setLanguage("ar")