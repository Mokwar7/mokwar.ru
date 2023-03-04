const config = {
    contactSelector: '.contact',
    contactLogoSelector: '.contact__logo',
}

const overMouse = (logo) => {
    logo.classList.add('contact__logo_hover');
}

const outMouse = (logo) => {
    logo.classList.remove('contact__logo_hover');
}

const addHoverListener = (config) => {
    const contacts = Array.from(document.querySelectorAll(config.contactSelector))
    contacts.forEach((contact) => {
        const logo = contact.querySelector(config.contactLogoSelector);
        contact.addEventListener('mouseover', function () {
            overMouse(logo)
        })
        contact.addEventListener('mouseout', function () {
            outMouse(logo)
        })
    })
}

addHoverListener(config)