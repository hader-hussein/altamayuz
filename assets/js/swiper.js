const swiper = new Swiper(".coursesSwiper", {

    /* الاتجاه */
    direction: "horizontal",

    /* RTL */
    rtl: true,

    /* المسافة بين الكروت */
    spaceBetween: 10,

    /* عدد الكروت */
    slidesPerView: 4,

    /* التحرك كارت واحد */
    slidesPerGroup: 1,
  // الحركة التلقائية
    autoplay: {

        // يتحرك كل 3 ثواني
        delay: 3000,

        // يكمل الحركة حتى لو الماوس فوق السلايدر
        disableOnInteraction: false

    },


    // سرعة الحركة
    speed: 700,

    /* الأسهم */
    navigation: {

        nextEl: ".custom-next",

        prevEl: ".custom-prev"

    },


    /* Responsive */

    breakpoints: {

        // Mobile
        0: {

            slidesPerView: 1,

            spaceBetween: 10

        },


        // Tablet
        576: {

            slidesPerView: 2,

            spaceBetween: 10

        },


        // Desktop
        992: {

            slidesPerView: 4,

            spaceBetween: 10

        }

    }

});
/********** */

        const testimonialSwiper = new Swiper(
            ".testimonialSwiper",
            {

                /* RTL */

                rtl: true,


                /* عدد الكروت */

                slidesPerView: 3,


                /* المسافة */

                spaceBetween: 10,


                /* الحركة */

                slidesPerGroup: 1,


                /* السرعة */

                speed: 800,


                /* الحركة التلقائية */

                autoplay: {

                    delay: 3000,

                    disableOnInteraction: false,

                    pauseOnMouseEnter: true

                },


                /* الأسهم */

                navigation: {

                    nextEl: ".testimonial-next",

                    prevEl: ".testimonial-prev"

                },


                /* Pagination */

                pagination: {

                    el: ".swiper-pagination",

                    clickable: true

                },


                /* Responsive */

                breakpoints: {

                    0: {

                        slidesPerView: 1,

                        spaceBetween: 10

                    },


                    576: {

                        slidesPerView: 2,

                        spaceBetween: 10

                    },


                    992: {

                        slidesPerView: 3,

                        spaceBetween: 10

                    }

                }

            }

        );