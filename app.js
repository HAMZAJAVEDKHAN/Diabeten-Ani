const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu-head');
    const navLinks = document.querySelectorAll('.menu-head a');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('show-menu');

        //animation
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            } else{
                link.style.animation= `navLinkFade 1s ease forwards ${index / 9 + 0.5}s`
            }
        });
        //Burger ANimation

        burger.classList.toggle('toggle')
    });

    
}

navSlide();

