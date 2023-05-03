/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Banner
const banner = document.getElementById('banner');
const bannerBox = document.getElementById('banner-animate');
const bannerVideo = document.getElementById('banner-video');

const observerBanner = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      bannerBox.classList.add('active');
      bannerVideo.play();
    } else {
      bannerBox.classList.remove('active');
      bannerVideo.pause();
    }
  },
  {
    threshold: [0.4],
  }
);
observerBanner.observe(bannerBox);

// Rates
document.querySelectorAll('.rates__btn').forEach((btn, _, arr) => {
  btn.addEventListener('mouseover', (e) => {
    const thisEl = e.currentTarget;

    [...arr, ...document.querySelectorAll('[data-tab]')].forEach((el) =>
      el.classList.remove('active')
    );
    [thisEl, document.querySelector(`[data-tab='${thisEl.id}']`)].forEach(
      (el) => el.classList.add('active')
    );
  });
});

// Popular
const swiperPopular = new Swiper('.popular__slider', {
  loop: true,
  navigation: {
    nextEl: '.popular__slider-btn-next',
    prevEl: '.popular__slider-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  speed: 1000,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});

const popularTitle = document.getElementById('title-popular');

const observerPopular = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      popularTitle.classList.add('active');
    } else {
      popularTitle.classList.remove('active');
    }
  },
  {
    threshold: [0.4],
  }
);
observerPopular.observe(popularTitle);

// Formats
const swiperFormats = new Swiper('.formats__slider', {
  loop: true,
  autoHeight: true,
  speed: 1000,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 3,
      spaceBetween: 60,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});

// Reviews
const swiperReviews = new Swiper('.reviews__slider', {
  loop: true,
  speed: 1000,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      spaceBetween: 385,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcblxyXG4vLyBCYW5uZXJcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhbm5lcicpO1xyXG5jb25zdCBiYW5uZXJCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyLWFuaW1hdGUnKTtcclxuY29uc3QgYmFubmVyVmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyLXZpZGVvJyk7XHJcblxyXG5jb25zdCBvYnNlcnZlckJhbm5lciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAoW2VudHJ5XSkgPT4ge1xyXG4gICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgIGJhbm5lckJveC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgYmFubmVyVmlkZW8ucGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFubmVyQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBiYW5uZXJWaWRlby5wYXVzZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGhyZXNob2xkOiBbMC40XSxcclxuICB9XHJcbik7XHJcbm9ic2VydmVyQmFubmVyLm9ic2VydmUoYmFubmVyQm94KTtcclxuXHJcbi8vIFJhdGVzXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYXRlc19fYnRuJykuZm9yRWFjaCgoYnRuLCBfLCBhcnIpID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICAgIGNvbnN0IHRoaXNFbCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICBbLi4uYXJyLCAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJdJyldLmZvckVhY2goKGVsKSA9PlxyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgKTtcclxuICAgIFt0aGlzRWwsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhYj0nJHt0aGlzRWwuaWR9J11gKV0uZm9yRWFjaChcclxuICAgICAgKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgKTtcclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBQb3B1bGFyXHJcbmNvbnN0IHN3aXBlclBvcHVsYXIgPSBuZXcgU3dpcGVyKCcucG9wdWxhcl9fc2xpZGVyJywge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnBvcHVsYXJfX3NsaWRlci1idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcucG9wdWxhcl9fc2xpZGVyLWJ0bi1wcmV2JyxcclxuICB9LFxyXG4gIGExMXk6IHtcclxuICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQndCw0LfQsNC0JyxcclxuICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQktC/0LXRgNGR0LQnLFxyXG4gIH0sXHJcbiAgc3BlZWQ6IDEwMDAsXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDEyMDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxyXG4gICAgfSxcclxuICAgIDMyMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBwb3B1bGFyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtcG9wdWxhcicpO1xyXG5cclxuY29uc3Qgb2JzZXJ2ZXJQb3B1bGFyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gIChbZW50cnldKSA9PiB7XHJcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgcG9wdWxhclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcG9wdWxhclRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGhyZXNob2xkOiBbMC40XSxcclxuICB9XHJcbik7XHJcbm9ic2VydmVyUG9wdWxhci5vYnNlcnZlKHBvcHVsYXJUaXRsZSk7XHJcblxyXG4vLyBGb3JtYXRzXHJcbmNvbnN0IHN3aXBlckZvcm1hdHMgPSBuZXcgU3dpcGVyKCcuZm9ybWF0c19fc2xpZGVyJywge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogNjAsXHJcbiAgICB9LFxyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIFJldmlld3NcclxuY29uc3Qgc3dpcGVyUmV2aWV3cyA9IG5ldyBTd2lwZXIoJy5yZXZpZXdzX19zbGlkZXInLCB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzg1LFxyXG4gICAgfSxcclxuICAgIDMyMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
