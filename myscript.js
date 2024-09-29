const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
           entry.target.classList.add('animation1') 
        } else {
            entry.target.classList.remove('animation1')
        }
    });
});



const hiddenElements = document.querySelectorAll('.html')
hiddenElements.forEach((el) => observer1.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
           entry.target.classList.add('animation2') 
        } else {
            entry.target.classList.remove('animation2')
        }
    });
});



const hiddenElements2 = document.querySelectorAll('.css')
hiddenElements2.forEach((el) => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
           entry.target.classList.add('animation3') 
        } else {
            entry.target.classList.remove('animation3')
        }
    });
});



const hiddenElements3 = document.querySelectorAll('.javascript')
hiddenElements3.forEach((el) => observer3.observe(el));


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

