let foam = document.getElementById('resume-form') as HTMLFormElement
let display = document.getElementById('output')as HTMLDivElement

foam.addEventListener('submit' , function(event){
    event.preventDefault()

    const name = (document.getElementById('name')as HTMLInputElement).value
    const email = (document.getElementById('email')as HTMLInputElement).value
    const phoneno = (document.getElementById('Phone-no')as HTMLInputElement).value
    const edu = (document.getElementById('edu')as HTMLInputElement).value
    const skill = (document.getElementById('skill')as HTMLInputElement).value
    const exp = (document.getElementById('EXP')as HTMLInputElement).value

const pic = document.getElementById('pic')as HTMLInputElement
const file = pic.files?.[0];
const reader = new FileReader()

reader.onload = function(e){
    const imgsrc = e.target?.result as string
    const resume =
`
    <h1>RESUME<h1>
    <h2>PERSONAL INFORMATION</h2>
     <P><b>Name:</b><span contenteditable="true">${name}</span></P>
     <p><b>Email:</b><span contenteditable="true">${email}</span</p>
     <p><b>Phone number:</b><span contenteditable="true">${phoneno}</span</p>

     <h2>SKILL</h2>
     <p><b>Skills:</b><span contenteditable="true">${skill}</span></p>

     <h2>EDUCATION</h2> 
     <p><b>Education:</b><span contenteditable="true">${edu}</span></p>

     <h2>EXPERIENCE</h2>
     <p><b>Experience:</b><span contenteditable="true">${exp}</span</p>
     
     <h2>PROFILE PICTURE</h2>
     <img src = "${e.target?.result}" alt = "profile pic" style = "width:100px ; height:100px">`


 
     if (display){
        display.style.display = 'block'
        display.innerHTML = resume
     }
}

if(file){
    reader.readAsDataURL(file)
}
})
