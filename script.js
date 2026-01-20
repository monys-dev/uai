const goToSections = document.querySelectorAll('a[href^="#"]');
const faqItens = document.querySelectorAll('.faq-item');
const sections = document.querySelectorAll('section .sub-container');

if(goToSections.length) {
    goToSections.forEach((item) => {
        item.addEventListener('click', scrollSuave)
    })
}

if(faqItens.length) {
    faqItens.forEach((item) => {
        item.addEventListener('click', openFaq)
    })
}

if(sections.length){

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

function scrollSuave(event) {
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