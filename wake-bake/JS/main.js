// let burgerOpen = document.querySelector(`.burger-icon`)
// let linkDisable = document.querySelectorAll(`.nav__link`)
// const bodyMenu = () => {
//     document.body.classList.toggle(`body--opened-menu`)
// }

// burgerOpen.addEventListener(`click`, bodyMenu)

// linkDisable.forEach(link => {
//     link.addEventListener(`click`, () => {
//         document.body.classList.remove(`body--opened-menu`)
//     })
// })

(function () {

    // BurgerMenu ================

    document.addEventListener(`click`, burgerInit)

    function burgerInit(e) {
        const target = e.target
        const burgerIcon = target.closest(`.burger-icon`)
        const burgerNavLink = target.closest(`.nav__link`)

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return


        // if (burgerIcon) {
        //     document.body.classList.toggle(`body--opened-menu`)
        // } else if (burgerNavLink) {
        //     document.body.classList.remove(`body--opened-menu`)
        // }

        if (!document.body.classList.contains(`body--opened-menu`)) {
            document.body.classList.add(`body--opened-menu`)
        } else if (e.accessKey === `Escape`) {
            document.body.classList.remove(`body--opened-menu`)
        } else {
            document.body.classList.remove(`body--opened-menu`)
        }
    }

    // Modal ================

    document.addEventListener(`click`, modalInit)
    document.addEventListener(`keydown`, modalInit)

    function modalInit(e) {
        if (e.type === `click`) {
            const target = e.target
            const modalOpen = target.closest(`.about__img-button`)
            const modalClose = target.closest(`.modal__cancel`)
            if (modalOpen) {
                document.body.classList.add(`modal--opened`)
                e.preventDefault()
            } else if (modalClose || target.closest('.modal') && !target.closest('.modal__window')) {
                document.body.classList.remove('modal--opened')
                e.preventDefault()
            }
        }

        if (e.type === `keydown` && e.code === `Escape`) {
            document.body.classList.remove(`modal--opened`)
            e.preventDefault()
        }
    }

    // Tabs ================

    const TabControls = document.querySelector(`.tab-controls`)
    TabControls.addEventListener(`click`, toggleTab)

    function toggleTab(e) {
        const tabControl = e.target.closest(`.tab__controls-link`)

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab__controls-link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const TabContent = document.querySelector(tabContentID)
        const activeContent = document.querySelector('.tab-content--show')
        const activeControl = document.querySelector('.tab__controls-link--active')

        if (activeControl) {
            activeControl.classList.remove(`tab__controls-link--active`)
            tabControl.classList.add(`tab__controls-link--active`)
            activeContent.classList.remove(`tab-content--show`)
            TabContent.classList.add(`tab-content--show`)
        } else {
            tabControl.classList.add(`tab__controls-link--active`)
            TabContent.classList.add(`tab-content--show`)
        }
    }

    // Accordion ===========================

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {


        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });


    // Swiper ==================================

    const swiper = new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {

            601: {
                slidesPerView: 3,
            },

            801: {
                spaceBetween: 32
            },

            1101: {
                slidesPerView: 4,
            }
        }
    });

})();
