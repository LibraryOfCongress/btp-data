function locMain() {
    // hide hidden fields from screen reader
    const matches = document.querySelectorAll('input.sidebar-toggle, label.overlay');
    matches.forEach((el) => {
        el.setAttribute('aria-hidden', 'true');
    });

    // get header/footer contents
    const locFooter = document.querySelector('footer.loc-footer');
    const footerContent = locFooter ? locFooter.innerHTML : '';
    const locHeader = document.querySelector('header.loc-header');
    const headerContent = locHeader ? locHeader.innerHTML : '';

    // remove redundant footer
    const redundantFooter = document.querySelector('footer.bd-footer-content');
    if (redundantFooter) redundantFooter.remove();

    // change prev-next footer to a div
    const prevNextFooter = document.querySelector('footer.prev-next-footer');
    if (prevNextFooter) {
        const prevNextDiv = document.createElement('div');
        prevNextDiv.classList.add('prev-next-footer');
        prevNextDiv.innerHTML = prevNextFooter.innerHTML;
        prevNextFooter.replaceWith(prevNextDiv);
    }
    
    // put footer contents into main footer
    const mainFooter = document.querySelector('footer.bd-footer');
    if (mainFooter) {
        mainFooter.classList.add('loc-footer');
        mainFooter.innerHTML = footerContent;
    } else {
        const newFooter = document.createElement('footer');
        newFooter.classList.add('loc-footer');
        newFooter.innerHTML = footerContent;
        document.body.appendChild(newFooter);
    }

    // put header contents into header
    const newHeader = document.createElement('header');
    newHeader.classList.add('loc-header');
    newHeader.innerHTML = headerContent;
    document.body.prepend(newHeader);

    // update "Skip To" link
    const articleMain = document.querySelector('article[role="main"]');
    const skipLink = document.querySelector('a.skip-link');
    if (articleMain && skipLink) {
        articleMain.setAttribute('id', 'article-main');
        const articleSections = articleMain.getElementsByTagName('section');
        if (articleSections.length > 0 && articleSections[0].hasAttribute('id')) {
            skipLink.setAttribute('href',  `#${articleSections[0].getAttribute('id')}`);
        } else {
            skipLink.setAttribute('href', '#article-main');
        }
    }

    // remove redundant main
    const mains = document.querySelectorAll('article[role="main"]');
    if (mains) {
        mains.forEach((main) => {
            main.removeAttribute('role');
        });
    }

    // change aria-label Main to Primary
    const labelMains = document.querySelectorAll('nav[aria-label="Main"]');
    if (labelMains) {
        labelMains.forEach((lmain) => {
            lmain.setAttribute('aria-label', 'Primary');
        });
    }

    // inject alt text for generated images if captions are available
    // HACK: captions are <p> elements with <em> text inside of it. They should immediately follow the output cell that contains an image 
    const images = document.querySelectorAll('#article-main .cell_output img');
    if (images) {
        images.forEach((image) => {
            const cell = image.closest('.cell');
            // check to see if the next sibling is a paragraph tag
            const {nextElementSibling} = cell;
            const {nodeName} = nextElementSibling;
            if (nodeName === "P") {
                // check to see if there is an emphasis inside of it
                const em = nextElementSibling.getElementsByTagName("em");
                if (em && em.length > 0) {
                    const {innerText} = em[0];
                    // set the alt text of the image with the emphasized text
                    image.setAttribute('alt', innerText);
                    // remove the source element
                    nextElementSibling.remove();
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    locMain();
});