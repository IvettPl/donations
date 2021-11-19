let tabs = function() {
    let tabNav = document.querySelectorAll('.tabs__header-item');
    let tabContent = document.querySelectorAll('.tabs__content-item');
    let tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav);
        // item.addEventListener('keydown', selectTabNav);
        // item.addEventListener('keydown', function(e) {
        //     if (e.keyCode === 13) {
        //         selectTabNav();
        //         e.preventDefault();
        //     }
        // });
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


function checkWidth(){
    var windowWidth = window.innerWidth ;
        let tabSlide = document.querySelector(".js-tabs__header");
        let tabHeaderItem = document.querySelector(".tab__header-item");
        let tabHeader = document.querySelector(".tabs__header");
        
   
          if(windowWidth < 600){ 
            tabSlide.classList.add('mySwiperTab');
            tabSlide.classList.add('swiper-container ');
            tabHeaderItem.classList.add('swiper-slide');
            tabHeader.classList.add('swiper-wrapper');
          }
          else{
            // tabSlide.classList.remove('mySwiperTab'); 
            // tabSlide.classList.remove('swiper-container ');
            // tabHeaderItem.classList.remove('swiper-slide');
            // tabHeader.classList.remove('swiper-wrapper');
          }                   
}

checkWidth();

window.addEventListener('resize', function(event) {
    checkWidth();
}, true); 

var swiper5 = new Swiper(".mySwiperTab", {     
    slidesPerView: 2,
  }); 