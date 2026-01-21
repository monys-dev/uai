const goToSections = document.querySelectorAll('a[href^="#"]');
const faqItems = document.querySelectorAll('.faq-item');
const sections = document.querySelectorAll('section .sub-container');
const popUp = document.querySelector('#popup-exit');
const closeBtn_popUp = document.querySelectorAll('.pop-up-close');
let popUpOpen = false;

if(goToSections.length) {
    goToSections.forEach((item) => {
        item.addEventListener('click', smoothScroll)
    })
}

if(faqItems.length) {
    faqItems.forEach((item) => {
        item.addEventListener('click', openFaq)
    })
}

if(sections.length) {

    const windowMetade = window.innerHeight * 0.6;

    function animaScroll(){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible)
                section.classList.add('ativo');
            else
                section.classList.remove('ativo');
        })
    }

    animaScroll();
    window.addEventListener('scroll', animaScroll);
}

if(popUp) {

    if(closeBtn_popUp.length) {
        closeBtn_popUp.forEach((btn) => {
            btn.addEventListener('click', () => {
                popUp.close();
            });
        });
    }

    document.addEventListener('mousemove', handleMouseMove)
}

function handleMouseMove(event) {

    if(!popUpOpen && event.clientY < 80) {
            popUpOpen = true;
            popUp.showModal();
            document.removeEventListener('mousemove', handleMouseMove)
    }
}

function smoothScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const sub_container = document.querySelector(href);
    sub_container.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

function openFaq(event) {
  const item = event.currentTarget;
  const img_item = item.querySelector('img');

  item.classList.toggle('aberto');

  img_item.setAttribute(
    'src',
    item.classList.contains('aberto')
      ? './imagens/icones/decorativos/arrow2.svg'
      : './imagens/icones/decorativos/arrow1.svg'
  );
}