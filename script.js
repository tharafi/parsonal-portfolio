function scrollToElement  (element, counter = 0) {
    let elements = document.querySelectorAll(element);
    
    if(elements.length > counter) {
        elements[counter].scrollIntoView({behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.title');
})

link2.addEventListener('click', () => {
    scrollToElement('.title', 1);
})

link3.addEventListener('click', () => {
    scrollToElement('.column');
})