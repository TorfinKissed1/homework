(function () {

    /* Menu <================================ */

    document.addEventListener(`click`, menuInit)

    function menuInit(e) {
        const target = e.target;
        const dropdown = target.closest(`.dropdown`);
        const menu = document.querySelector(`.menu`);
        const select = target.closest(`.select`);
        const menuLink = target.closest(`.menu__link`);

        if (!dropdown || !menu) return;
        // if (document.documentElement.clientWidth > 900) return;

        if (select) {
            menu.classList.toggle(`menu--opened`);
            dropdown.classList.toggle(`dropdown--caret-rotate`)
            return;
        }

        if (menuLink) {
            menu.classList.remove(`menu--opened`);
            dropdown.classList.remove(`dropdown--caret-rotate`)
        }
    }

    /* Tabs <================================ */

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

    /* Accordion <================================ */

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
            e.preventDefault()

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

    /* Swiper <================================ */

    new Swiper('.cases__swiper', {

        spaceBetween: 0,
        slidesPerView: 1,


        navigation: {
            nextEl: '.cases__next',
            prevEl: '.cases__prev',
        },

        breakpoints: {
            1301: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
            701: {
                spaceBetween: 10,
                slidesPerView: 2,
            },
        }

    });

    /* Swiper-feedback <================================ */

    new Swiper('.feedback__swiper', {

        spaceBetween: 0,
        slidesPerView: 1,


        navigation: {
            nextEl: '.feedback__next',
            prevEl: '.feedback__prev',
        },

    });

    /* Switch toggle <================================ */

    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".price__bars-btn");
        if (!btn) return;

        const wrapper = btn.closest(".price__bars-wrapper");
        const indicator = wrapper.querySelector(".price__indicator");
        const buttons = wrapper.querySelectorAll(".price__bars-btn");
        e.preventDefault()

        buttons.forEach(b => b.classList.remove("price__bars-btn--active"));
        btn.classList.add("price__bars-btn--active");

        if (btn === buttons[1]) {
            indicator.classList.add("price__indicator--move");
        } else {
            indicator.classList.remove("price__indicator--move");
        }
    });


})();