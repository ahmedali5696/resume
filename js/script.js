const bodyRect = document.body.getBoundingClientRect(),
    elemRect = document.getElementById('bio').getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;



document.addEventListener('scroll', () => {
    if(window.scrollY > offset){
        // document.getElementById('nav').className = 'fixed';
        document.getElementById('nav').style.position = 'fixed';
    } else {
        document.getElementById('nav').style.position = 'absolute';
        
    }
})