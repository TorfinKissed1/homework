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

})();

(function () {
    document.addEventListener(`click`, modalInit)
    document.addEventListener(`keydown`, modalInit)

    function modalInit(e) {
        e.preventDefault()
        if (e.type === `click`) {
            const target = e.target
            const modalOpen = target.closest(`.about__img-button`)
            const modalClose = target.closest(`.modal__cancel`)
            if (modalOpen) {
                document.body.classList.add(`modal--opened`)
            } else if ( modalClose || target.closest('.modal') && !target.closest('.modal__window')) {
                document.body.classList.remove('modal--opened')
            }
        }

        if (e.type === `keydown` && e.code === `Escape`) {
            document.body.classList.remove(`modal--opened`)
        }
    }
})();



