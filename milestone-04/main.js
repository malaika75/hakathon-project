var foam = document.getElementById('resume-form');
var display = document.getElementById('output');
foam.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneno = document.getElementById('Phone-no').value;
    var edu = document.getElementById('edu').value;
    var skill = document.getElementById('skill').value;
    var exp = document.getElementById('EXP').value;
    var pic = document.getElementById('pic');
    var file = (_a = pic.files) === null || _a === void 0 ? void 0 : _a[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a, _b;
        var imgsrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        var resume = "\n    <h1>RESUME<h1>\n    <h2>PERSONAL INFORMATION</h2>\n     <P><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></P>\n     <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span</p>\n     <p><b>Phone number:</b><span contenteditable=\"true\">").concat(phoneno, "</span</p>\n\n     <h2>SKILL</h2>\n     <p><b>Skills:</b><span contenteditable=\"true\">").concat(skill, "</span></p>\n\n     <h2>EDUCATION</h2> \n     <p><b>Education:</b><span contenteditable=\"true\">").concat(edu, "</span></p>\n\n     <h2>EXPERIENCE</h2>\n     <p><b>Experience:</b><span contenteditable=\"true\">").concat(exp, "</span</p>\n     \n     <h2>PROFILE PICTURE</h2>\n     <img src = \"").concat((_b = e.target) === null || _b === void 0 ? void 0 : _b.result, "\" alt = \"profile pic\" style = \"width:100px ; height:100px\">");
        if (display) {
            display.style.display = 'block';
            display.innerHTML = resume;
        }
    };
    if (file) {
        reader.readAsDataURL(file);
    }
});
