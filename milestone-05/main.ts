let foam = document.getElementById('resume-form') as HTMLFormElement
let display = document.getElementById('output')as HTMLDivElement

foam.addEventListener('submit' , function(event){
    event.preventDefault()

    const name = (document.getElementById('name')as HTMLInputElement).value
    const email = (document.getElementById('email')as HTMLInputElement).value
    const phoneno = (document.getElementById('Phone-no')as HTMLInputElement).value
    const location = (document.getElementById (`locate`)as HTMLInputElement).value
    const linkdin = (document.getElementById(`linkedIn`) as HTMLInputElement).value
    const portfolio = (document.getElementById(`port`)as HTMLInputElement).value
    const skill = (document.getElementById('skill')as HTMLInputElement).value
    const exp = (document.getElementById('EXP')as HTMLInputElement).value
    const language = (document.getElementById(`lang`)as HTMLInputElement).value

    const degree = (document.querySelector('input[name="degree"]') as HTMLInputElement).value
    const studyField = (document.querySelector('input[name="studyfield"]') as HTMLInputElement).value
    const institution = (document.querySelector('input[name="institution"]') as HTMLInputElement).value
    const graduationDate = (document.querySelector('input[name="graduation-date"]') as HTMLInputElement).value.trim()
    const GPA = (document.querySelector('input[name="GPA"]') as HTMLInputElement).value.trim()
    const certificate = (document.querySelector('input[name="certificate"]') as HTMLInputElement).value.trim()
    const letter = (document.getElementById(`cover-letter`) as HTMLInputElement).value
    
    
const pic = document.getElementById('pic')as HTMLInputElement
const file = pic.files?.[0];
const reader = new FileReader()

reader.onload = function(e){
    const imgsrc = e.target?.result as string
    const resume =
`<div id="container">
    <div id="right">
<h1>RESUME</h1>

     <img src = "${e.target?.result}" alt = "profile pic" id="img" style = "width:150px ; height:150px  ; border-radius: 50%; border: 4px solid white">

    <h2>PERSONAL INFORMATION</h2>
     <P><b>Name:  </b><span>${name}</span></P>
     <p><b>Email:  </b><span>${email}</span></p>
     <p><b>Phone number:  </b><span>${phoneno}</span</p>
     <p><b>location:  </b><span>${location}</span></p>
     <p><b>linkedin profile:  </b><span>${linkdin}</span></p>
     <p><b>portfolio:  </b><span>${portfolio}</span></p>
     
     <h2>language</h2>
     <p><b>Language:  </b><span>${language}</span</p>
</div>

<div id="left">

     <h2>SKILL</h2>
     <p><b>Skills:  </b><span>${skill}</span></p>

     <h2>EDUCATION</h2> 
     <p><b>Education:  </b>
     <span contentEditable="false">
     <ul>
     <li>${degree}</li>
     <li>${studyField}</li>
     <li>${institution}</li>
     <li>${graduationDate}</li>
     <li>${GPA}</li>
</ul>
     </span></p>

     <h2>EXPERIENCE</h2>
     <p><span>${exp}</span</p>

     <h2>CERTIFICATES</h2>
     <p><span>${certificate}</span></p>

     <h2>COVER LETTER</h2>
     <p><span>${letter}</span></p>
     </div>
</div>`
     
     

 
     if (display){
        display.style.display = 'block'
        display.innerHTML = resume
     } }

     
     const editBotton = (document.getElementById(`edit`)as HTMLButtonElement)
    editBotton.style.display = 'block';
      let isEdiable = false
     editBotton?.addEventListener('click' , ()=>{
        isEdiable = !isEdiable
        const fields = display.querySelectorAll(`span`)
        if(isEdiable){
            editBotton.textContent= "save resume"
            fields.forEach((field)=>{
                (field as HTMLSpanElement).contentEditable = "true";
                (field as HTMLSpanElement).focus()
            })
        }else{
            editBotton.textContent= "edit resume"
            fields.forEach((field)=>{
            (field as HTMLSpanElement).contentEditable = "false"
            })
        }
         
     })

//pdf botton
const pdf = document.querySelector(".btn2")as HTMLButtonElement 
pdf.style.display = "block"
pdf.addEventListener("click" , ()=>{
    window.print();
})

//sherable link
const link = document.querySelector('.link1')as HTMLAnchorElement
let user = document.getElementById('user-name')as HTMLInputElement
let username = user.value.trim()
console.log(username)
let url = `${window.location.origin}?user=${encodeURIComponent(username)}`
link.style.display ="block"
console.log(url)
link.href = url
link.innerHTML = `sherable link:${url}`

if(file){
    reader.readAsDataURL(file)
}
else {
    reader.onload({ target: { result: '' } } as ProgressEvent<FileReader>);
}
})




