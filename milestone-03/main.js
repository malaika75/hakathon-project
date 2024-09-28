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
        var resume = "\n    <h1>RESUME<h1>\n    <h2>PERSONAL INFORMATION</h2>\n     <P><b>Name:</b>".concat(name, "</P>\n     <p><b>Email:</b>").concat(email, "</p>\n     <p><b>Phone number:</b>").concat(phoneno, "</p>\n\n     <h2>SKILL</h2>\n     <p><b>Skills:</b>").concat(skill, "</p>\n\n     <h2>EDUCATION</h2> \n     <p><b>Education:</b>").concat(edu, "</p>\n\n     <h2>Experience</h2>\n     <p><b>Experience:</b>").concat(exp, "</p>\n     <img src = \"").concat((_b = e.target) === null || _b === void 0 ? void 0 : _b.result, "\" alt = \"profile pic\" style = \"width:100px ; height:100px\">");
        if (display) {
            display.style.display = 'block';
            display.innerHTML = resume;
        }
    };
    if (file) {
        reader.readAsDataURL(file);
    }
});
