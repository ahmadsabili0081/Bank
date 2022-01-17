const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',() => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('showNav');
    hamburger.classList.toggle('rotateHamburger');
});
const BtnClick = document.getElementsByClassName('BtnSide');
for(let i = 0; i < BtnClick.length; i++){
    BtnClick[i].addEventListener('click', EffectBtn);
}
function EffectBtn (){
    window.alert('Maaf, Tombol ini masih belum bisa digunakan');
    console.error('Maaf, Tombol ini masih belum bisa digunakan');
}

let section = document.querySelectorAll('section[id]');
window.addEventListener('click', NavClick);
function NavClick (){
    let scrollY = window.pageYOffset;

    section.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector("nav a[href*=" + sectionId + "]").classList.add('active');
        }else{
            document.querySelector("nav a[href*=" + sectionId + "]").classList.remove('active');
        }
    });
}
let btnScroll = document.querySelector('.btnScroll');
window.addEventListener('scroll', () => {
    btnScroll.classList.toggle('ActiveBtn', scrollY > 0);
});
btnScroll.addEventListener('click', Btnclick);
function Btnclick () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}