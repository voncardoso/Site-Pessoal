const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
console.log(linksInternos);

function scrollSuave(event){
    event.preventDefault(); // previne o padrão
    const href = event.currentTarget.getAttribute('href'); // ele vai pegar apenas o href de cada link do menu
    const section = document.querySelector(href); // pega as seçoes que esttão lincadas ao menu ex id="sobre"

    section.scrollIntoView({
        behavior: 'smooth', // tibo de scroll
        block: 'start',
    });
    console.log(href);
    console.log(section);
}


linksInternos.forEach((item) => {
    item.addEventListener('click', scrollSuave);
});