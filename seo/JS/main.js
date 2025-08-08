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

    /* 123 <================================ */


})();