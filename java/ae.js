const btnOpen = document.querySelector(`.btn`)
const modal = document.querySelector(`.modal`)
const modalOpen = () => {
    modal.classList.add(`modal--open`)
}
const modalClose = () => {
    modal.classList.remove(`modal--open`)
}

btnOpen.addEventListener(`click`, () => {
    modalOpen()
})

modal.addEventListener(`click`, event => {
    const target = event.target
    if (target.classList.contains(`modal`) || target.classList.contains(`btn-close`)){
        modalClose()
    }
})

document.addEventListener(`keydown`, event => {
    if (event.code === `Escape`) {
        modalClose()
    }
})

console.dir(document)