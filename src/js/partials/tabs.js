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
    var windowWidth = $('body').innerWidth();  
        let tabSlide = $(".js-tabs__header");
        let tabHeaderItem = $(".tab__header-item");
        let tabHeader = $(".tabs__header");
        
   
          if(windowWidth < 600){ 
            tabSlide.addClass('mySwiperTab');
            tabSlide.addClass('swiper-container ');
            tabHeaderItem.addClass('swiper-slide');
            tabHeader.addClass('swiper-wrapper');
          }
          else{
            tabSlide.removeClass('mySwiperTab'); 
            tabSlide.removeClass('swiper-container ');
            tabHeaderItem.removeClass('swiper-slide');
            tabHeader.removeClass('swiper-wrapper');
          }                   
}

checkWidth();

$(window).resize(function(){
checkWidth();  
}); 

var swiper5 = new Swiper(".mySwiperTab", {
     
    slidesPerView: 2,
  });