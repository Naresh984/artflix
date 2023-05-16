// this like to check n show slides based jaisa mmm  screen size
let swiper;
const swiperOptions = {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

const initSwiper = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 768) {
    swiper = new Swiper(".mySwiper", {
      ...swiperOptions,
      slidesPerView: 2,
      spaceBetween: 50,
    });
  } else {
    swiper = new Swiper(".mySwiper", {
      ...swiperOptions,
      slidesPerView: 1,
      spaceBetween: 0,
    });
  }
};

// Initialize swiper on load and on window resize
window.addEventListener("load", () => {
  initSwiper();
});

window.addEventListener("resize", () => {
  swiper.destroy();
  initSwiper();
});

// Toggle mobile navbar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


// new script for cateegory
// const categoryTitle = document.querySelectorAll('.category-title');
// const allCategoryPosts = document.querySelectorAll('.all');

// for(let i = 0; i < categoryTitle.length; i++){
//     categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
// }

// function filterPosts(item){
//     changeActivePosition(item);
//     for(let i = 0; i < allCategoryPosts.length; i++){
//         if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
//             allCategoryPosts[i].style.display = "block";
//         } else {
//             allCategoryPosts[i].style.display = "none";
//         }
//     }
// }

// function changeActivePosition(activeItem){
//     for(let i = 0; i < categoryTitle.length; i++){
//         categoryTitle[i].classList.remove('active');
//     }
//     activeItem.classList.add('active');
// };


// new new gpt ConvolverNode
const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};
