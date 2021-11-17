let tabs = function() {
    let tabNav = document.querySelectorAll('.tabs__header-item');
    let tabContent = document.querySelectorAll('.tabs__content-item');
    let tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav);
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');

        tabName = this.getAttribute('data-tab-name');

        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        });
    }
}

tabs();