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
     <P><b>Name:</b>${name}</P>
     <p><b>Email:</b>${email}</p>
     <p><b>Phone number:</b>${phoneno}</p>

     <h2>SKILL</h2>
     <p><b>Skills:</b>${skill}</p>

     <h2>EDUCATION</h2> 
     <p><b>Education:</b>${edu}</p>

     <h2>Experience</h2>
     <p><b>Experience:</b>${exp}</p>
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
