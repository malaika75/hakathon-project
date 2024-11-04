var foam = document.getElementById('resume-form');
var display = document.getElementById('output');
foam.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneno = document.getElementById('Phone-no').value;
    var location = document.getElementById("locate").value;
    var linkdin = document.getElementById("linkedIn").value;
    var portfolio = document.getElementById("port").value;
    var skill = document.getElementById('skill').value;
    var exp = document.getElementById('EXP').value;
    var language = document.getElementById("lang").value;
    var degree = document.querySelector('input[name="degree"]').value;
    var studyField = document.querySelector('input[name="studyfield"]').value;
    var institution = document.querySelector('input[name="institution"]').value;
    var graduationDate = document.querySelector('input[name="graduation-date"]').value.trim();
    var GPA = document.querySelector('input[name="GPA"]').value.trim();
    var certificate = document.querySelector('input[name="certificate"]').value.trim();
    var letter = document.getElementById("cover-letter").value;
    var pic = document.getElementById('pic');
    var file = (_a = pic.files) === null || _a === void 0 ? void 0 : _a[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a, _b;
        var imgsrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        var resume = "<div id=\"container\">\n    <div id=\"right\">\n<h1>RESUME</h1>\n\n     <img src = \"".concat((_b = e.target) === null || _b === void 0 ? void 0 : _b.result, "\" alt = \"profile pic\" id=\"img\" style = \"width:150px ; height:150px  ; border-radius: 50%; border: 4px solid white\">\n\n    <h2>PERSONAL INFORMATION</h2>\n     <P><b>Name:  </b><span>").concat(name, "</span></P>\n     <p><b>Email:  </b><span>").concat(email, "</span></p>\n     <p><b>Phone number:  </b><span>").concat(phoneno, "</span</p>\n     <p><b>location:  </b><span>").concat(location, "</span></p>\n     <p><b>linkedin profile:  </b><span>").concat(linkdin, "</span></p>\n     <p><b>portfolio:  </b><span>").concat(portfolio, "</span></p>\n     \n     <h2>language</h2>\n     <p><b>Language:  </b><span>").concat(language, "</span</p>\n</div>\n\n<div id=\"left\">\n\n     <h2>SKILL</h2>\n     <p><b>Skills:  </b><span>").concat(skill, "</span></p>\n\n     <h2>EDUCATION</h2> \n     <p><b>Education:  </b>\n     <span contentEditable=\"false\">\n     <ul>\n     <li>").concat(degree, "</li>\n     <li>").concat(studyField, "</li>\n     <li>").concat(institution, "</li>\n     <li>").concat(graduationDate, "</li>\n     <li>").concat(GPA, "</li>\n</ul>\n     </span></p>\n\n     <h2>EXPERIENCE</h2>\n     <p><span>").concat(exp, "</span</p>\n\n     <h2>CERTIFICATES</h2>\n     <p><span>").concat(certificate, "</span></p>\n\n     <h2>COVER LETTER</h2>\n     <p><span>").concat(letter, "</span></p>\n     </div>\n</div>");
        if (display) {
            display.style.display = 'block';
            display.innerHTML = resume;
        }
    };
    var editBotton = document.getElementById("edit");
    editBotton.style.display = 'block';
    var isEdiable = false;
    editBotton === null || editBotton === void 0 ? void 0 : editBotton.addEventListener('click', function () {
        isEdiable = !isEdiable;
        var fields = display.querySelectorAll("span");
        if (isEdiable) {
            editBotton.textContent = "save resume";
            fields.forEach(function (field) {
                field.contentEditable = "true";
                field.focus();
            });
        }
        else {
            editBotton.textContent = "edit resume";
            fields.forEach(function (field) {
                field.contentEditable = "false";
            });
        }
    });
    //pdf botton
    var pdf = document.querySelector(".btn2");
    pdf.style.display = "block";
    pdf.addEventListener("click", function () {
        window.print();
    });
    //sherable link
    var link = document.querySelector('.link1');
    var user = document.getElementById('user-name');
    var username = user.value.trim();
    console.log(username);
    var url = "".concat(window.location.origin, "?user=").concat(encodeURIComponent(username));
    link.style.display = "block";
    console.log(url);
    link.href = url;
    link.innerHTML = "sherable link:".concat(url);
    if (file) {
        reader.readAsDataURL(file);
    }
    else {
        reader.onload({ target: { result: '' } });
    }
});
