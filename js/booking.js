document.addEventListener('DOMContentLoaded', function () {
    /* -- Booking Wizard -- */
    const wizardStepButtons = document.querySelectorAll('.booking-wizard .wizard-menu li'),
        wizardSteps = document.querySelectorAll('.wizard-step'),
        wizardStepNextButtons = document.querySelectorAll('.wizard-step .btn-next'),
        wizardStepLoader = document.querySelector('.wizard-step-loader');

    let currentStep = 3;
    let activeStep = null;

    wizardStepButtons.forEach(item => {
        const wizardNumber = item?.getAttribute('data-wizard-number');

        if (Number(wizardNumber) < currentStep) {
            item?.classList.add('completed');
        }

        if (Number(wizardNumber) === currentStep) {
            item?.classList.add('current');
        }

        if (item?.classList.contains('completed')) {
            const wizardNumber = item?.querySelector('.wizard-number');
            wizardNumber.innerHTML = `<i class="fas fa-check"></i>`;
        }
    });

    wizardSteps.forEach(item => {
        const stepNumber = item?.getAttribute('data-step-number');

        if (Number(stepNumber) === currentStep) {
            activeStep = item;
        }
    });

    wizardStepNextButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const nextStep = btn.getAttribute('data-next-step');
            showStepLoader();
            wizardSteps.forEach(item => {
                item.style.display = 'none';
                if (Number(item.getAttribute('data-step-number')) === Number(nextStep)) {
                    activeStep = item;
                }
            });
            setTimeout(() => {
                hideStepLoader();
                activeStep.style.display = 'block';
                document.documentElement.scrollTop = 0;
            }, 1000);
        });
    });

    const showStepLoader = () => {
        wizardStepLoader.style.display = 'flex';
    }

    const hideStepLoader = () => {
        wizardStepLoader.style.display = 'none';
    }

    setTimeout(() => {
        hideStepLoader();
        activeStep.style.display = 'block';
    }, 500)


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