const d=document;

const inputs = d.querySelectorAll('.contact-input');
const toggleBtn = d.querySelector('.theme-toggle');
const allElements = d.querySelectorAll('*');

toggleBtn.addEventListener('click', ()=>{
    d.body.classList.toggle('dark');

    allElements.forEach((el)=>{
        el.classList.add('transition');
        setTimeout(()=>{
            el.classList.remove('transition');
        }, 1000);
    });
});

inputs.forEach((ipt)=>{
    ipt.addEventListener('focus',()=>{
        ipt.parentNode.classList.add('focus');
        ipt.parentNode.classList.add('not-empty');
    });
    ipt.addEventListener('blur',()=>{
        if(ipt.value==""){
            ipt.parentNode.classList.remove('not-empty');
        }
        ipt.parentNode.classList.remove('focus');
    });
    
})