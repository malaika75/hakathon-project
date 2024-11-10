var toggle = document.querySelector('.toggle-botton');
toggle === null || toggle === void 0 ? void 0 : toggle.addEventListener('click', function () {
    var skillSection = document.querySelector('.skill-sec');
    if (skillSection.style.display === 'none') {
        skillSection.style.display = 'block';
        toggle.textContent = 'hide skills';
    }
    else {
        skillSection.style.display = 'none';
        toggle.textContent = 'show skills';
    }
});
