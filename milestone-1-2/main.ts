let toggle = document.querySelector('.toggle-botton')

toggle?.addEventListener('click' ,()=>{
    const skillSection = document.querySelector('.skill-sec')
    if((skillSection as HTMLElement).style.display === 'none'){
        (skillSection as HTMLElement).style.display = 'block'
        toggle.textContent = 'hide skills'
    }else{
        (skillSection as HTMLElement).style.display = 'none'
        toggle.textContent = 'show skills'
    }
})



