document.addEventListener('DOMContentLoaded', function () {
    /* -- Booking Calendar Initialization -- */
    const options = {
        type: 'multiple',
        months: 2,
        jumpMonths: 1,
        settings: {
            selection: {
                day: 'single',
            },
            visibility: {
                weekend: false,
                daysOutside: false,
            },
            iso8601: false,
            range: {
                disablePast: true,
                disableWeekday: [0, 7],
                disabled: ['2023-11-11:2023-11-13', '2023-11-25', '2023-12-02', '2023-12-16'],
            },
        },
        actions: {
            getDays(day, date, HTMLElement, HTMLButtonElement) {
                const randomPrice = Math.floor(Math.random() * (999 - 100 + 1) + 100);

                HTMLButtonElement.innerHTML = `
                    <span class="day">${day}</span>
                    <span class="price">$${randomPrice}</span>
                `;
            },
            clickDay(event, dates) {
                console.log(dates);
            },
        },
    };

    const calendar = new VanillaCalendar('#calendar', options);
    calendar.init();

    /* -- Initialize Preference Slider -- */
    const swiperPreference = new Swiper('.swiper-preference', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                }
            },
        }),
        swiperPreferenceSlider = document.querySelector('.swiper-preference').swiper,
        swiperPrevButton = document.querySelector('.navigation-buttons .slide-prev'),
        swiperNextButton = document.querySelector('.navigation-buttons .slide-next');

    swiperPrevButton.addEventListener('click', (e) => {
        e.preventDefault();
        swiperPreferenceSlider?.slidePrev();
    });

    swiperNextButton.addEventListener('click', (e) => {
        e.preventDefault();
        swiperPreferenceSlider?.slideNext();
    });
});