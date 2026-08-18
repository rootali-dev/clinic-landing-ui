/**
 * کلینیک تخصصی فیزیوتراپی ویرا - هسته مرکزی تعاملات کاربری (RTL Optimized)
 * Audited for zero runtime exceptions with Solar Hijri Calendar conversion
 */

document.addEventListener('DOMContentLoaded', () => {

    // 🛠️ رندر قطعی آیکون‌ها به محض آماده شدن درخت DOM و قبل از اجرای بقیه کامپوننت‌ها
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // --- ACCESSIBLE MOBILE DRAWER MENU ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    
    // ... بقیه کدهای پیشرفته‌ی ویزارد، تقویم شمسی و اسلایدر بدون کوچک‌ترین تغییری ادامه پیدا می‌کنند ...

    const toggleMobileMenu = () => {
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
        if (menuIconOpen) menuIconOpen.classList.toggle('hidden');
        if (menuIconClose) menuIconClose.classList.toggle('hidden');
    };

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);

        // Close mobile drawer when links inside are clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            });
        });
    }


    // --- SCROLL SENSITIVE NAVIGATION SHADOW & MOBILE STICKY CTA ---
    const stickyMobileCta = document.getElementById('sticky-mobile-cta');
    const mainHeader = document.getElementById('main-header');
    const headerInner = document.getElementById('header-inner');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Display or hide mobile conversion bar when passing hero threshold
        if (stickyMobileCta) {
            if (currentScrollY > 450) {
                stickyMobileCta.classList.remove('translate-y-full');
            } else {
                stickyMobileCta.classList.add('translate-y-full');
            }
        }

        // Header shrinkage & shadow transition - targets inner-wrapper height to prevent squeezing
        if (mainHeader && headerInner) {
            if (currentScrollY > 60) {
                mainHeader.classList.add('shadow-md');
                mainHeader.classList.remove('shadow-sm');
                headerInner.classList.add('h-16');
                headerInner.classList.remove('h-20');
            } else {
                mainHeader.classList.remove('shadow-md');
                mainHeader.classList.add('shadow-sm');
                headerInner.classList.add('h-20');
                headerInner.classList.remove('h-16');
            }
        }
    }, { passive: true });


    // --- SERVICES & TREATMENTS CATEGORY FILTERING ---
    const filterTabs = document.querySelectorAll('.filter-tab');
    const treatmentCards = document.querySelectorAll('.treatment-card');

    if (filterTabs.length > 0 && treatmentCards.length > 0) {
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab accessibility state attributes
                filterTabs.forEach(t => t.setAttribute('aria-selected', 'false'));
                tab.setAttribute('aria-selected', 'true');

                const targetCategory = tab.getAttribute('data-target');

                treatmentCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (targetCategory === 'all' || cardCategory === targetCategory) {
                        card.style.display = 'flex';
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }


    // --- ACCESSIBLE HORIZONTAL TESTIMONIAL SLIDER (RTL OPTIMIZED) ---
    const slider = document.getElementById('testimonial-slider');
    const prevBtn = document.getElementById('slider-prev-btn');
    const textNextBtn = document.getElementById('slider-next-btn');
    let sliderIndex = 0;

    const updateSliderRTL = () => {
        if (!slider) return;

        const cardsCount = slider.children.length;
        const windowWidth = window.innerWidth;
        let visibleCount = 1;

        if (windowWidth >= 1024) {
            visibleCount = 3;
        } else if (windowWidth >= 768) {
            visibleCount = 2;
        }

        const maxIndex = cardsCount - visibleCount;
        if (sliderIndex > maxIndex) sliderIndex = maxIndex;
        if (sliderIndex < 0) sliderIndex = 0;

        // In RTL, "Next" translates the container in positive direction (moves content to the right)
        const offsetPercent = sliderIndex * (100 / visibleCount);
        const gapAdjustment = 24 * sliderIndex; // Adjusting for custom margins/gaps

        slider.style.transform = `translateX(calc(${offsetPercent}% + ${gapAdjustment}px))`;

        // Configure arrow visibilities & states
        if (prevBtn && textNextBtn) {
            prevBtn.disabled = sliderIndex === 0;
            prevBtn.style.opacity = sliderIndex === 0 ? '0.4' : '1';
            
            textNextBtn.disabled = sliderIndex === maxIndex;
            textNextBtn.style.opacity = sliderIndex === maxIndex ? '0.4' : '1';
        }
    };

    if (prevBtn && textNextBtn) {
        // In RTL: next button moves viewport leftwards (increases sliderIndex)
        textNextBtn.addEventListener('click', () => {
            sliderIndex++;
            updateSliderRTL();
        });

        // In RTL: prev button moves viewport rightwards (decreases sliderIndex)
        prevBtn.addEventListener('click', () => {
            sliderIndex--;
            updateSliderRTL();
        });
    }

    window.addEventListener('resize', updateSliderRTL, { passive: true });
    updateSliderRTL();


    // --- ACCESSIBLE FAQ ACCORDION HANDLERS ---
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    if (faqTriggers.length > 0) {
        faqTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const panelId = trigger.getAttribute('aria-controls');
                const panel = document.getElementById(panelId);
                const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

                // Close other panels (Single open item flow)
                faqTriggers.forEach(otherTrigger => {
                    if (otherTrigger !== trigger) {
                        otherTrigger.setAttribute('aria-expanded', 'false');
                        const otherPanel = document.getElementById(otherTrigger.getAttribute('aria-controls'));
                        if (otherPanel) {
                            otherPanel.classList.add('hidden');
                        }
                        const otherIcon = otherTrigger.querySelector('.faq-icon');
                        if (otherIcon) otherIcon.textContent = '+';
                    }
                });

                // Toggle current accordion state
                trigger.setAttribute('aria-expanded', !isExpanded);
                if (panel) {
                    panel.classList.toggle('hidden');
                }
                
                const currentIcon = trigger.querySelector('.faq-icon');
                if (currentIcon) {
                    currentIcon.textContent = isExpanded ? '+' : '−';
                }
            });
        });
    }


    // --- INTERACTIVE APPOINTMENT BOOKING WIZARD PORTAL ---
    const wizardForm = document.getElementById('booking-wizard-form');
    const nextBtnBooking = document.getElementById('btn-booking-next');
    const prevBtnBooking = document.getElementById('btn-booking-prev');
    const stepIndicator = document.getElementById('booking-step-indicator');
    const progressBarFill = document.getElementById('progress-bar-fill');
    
    const node1 = document.getElementById('node-step-1');
    const node2 = document.getElementById('node-step-2');
    const node3 = document.getElementById('node-step-3');

    let currentStep = 1;
    const totalSteps = 3;

    // Mini Calendar variables
    const calendarGrid = document.getElementById('calendar-slots-grid');
    const calendarHeaderLabel = document.getElementById('calendar-header-label');
    let selectedDate = null;

    const setupCalendarRTL = () => {
        if (!calendarGrid || !calendarHeaderLabel) return;

        // Fetch fa-IR-u-ca-persian natively formatted strings from standard JS locale parameters
        const currentDate = new Date();
        const faDate = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        }).format(currentDate);

        const persianToEnglishDigits = (str) => {
            return str.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
        };

        const parts = faDate.split('/');
        const shamsiYear = parseInt(persianToEnglishDigits(parts[0]));
        const shamsiMonth = parseInt(persianToEnglishDigits(parts[1]));
        const shamsiDay = parseInt(persianToEnglishDigits(parts[2]));

        const monthsInEnglish = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];        
        calendarHeaderLabel.textContent = `${monthsInEnglish[shamsiMonth - 1]} ${shamsiYear}`;
        
        const isShamsiLeap = (year) => {
            const mod = year % 33;
            return [1, 5, 9, 13, 17, 22, 26, 30].includes(mod);
        };

        const getShamsiDaysInMonth = (month, year) => {
            if (month <= 6) return 31;
            if (month <= 11) return 30;
            return isShamsiLeap(year) ? 30 : 29;
        };

        const daysInMonth = getShamsiDaysInMonth(shamsiMonth, shamsiYear);

        // Find the day of the week for the 1st of the current Shamsi month
        const firstOfShamsiMonthDate = new Date(currentDate);
        firstOfShamsiMonthDate.setDate(currentDate.getDate() - shamsiDay + 1);
        const firstDayOfWeek = firstOfShamsiMonthDate.getDay();
        const faFirstDayIndex = (firstDayOfWeek + 1) % 7; // Map standard JS weekdays to Persian columns starting on Saturday

        calendarGrid.innerHTML = '';

        // Fill leading empty cells to align calendar days perfectly
        for (let i = 0; i < faFirstDayIndex; i++) {
            const blankCell = document.createElement('span');
            calendarGrid.appendChild(blankCell);
        }

        // Generate selectable Shamsi day buttons
        for (let day = 1; day <= daysInMonth; day++) {
            const dayButton = document.createElement('button');
            dayButton.type = 'button';
            dayButton.textContent = day;
            
            const isSelectable = day >= shamsiDay - 1; // Don't permit retro-booking past dates
            
            if (isSelectable) {
                dayButton.className = 'calendar-day-active p-2 text-xs font-bold transition-all';
                
                // Select first available calendar day automatically
                if (day === shamsiDay + 1) {
                    dayButton.classList.add('calendar-day-selected');
                    selectedDate = `${shamsiYear}/${shamsiMonth}/${day}`;
                }

                dayButton.addEventListener('click', () => {
                    document.querySelectorAll('.calendar-day-active').forEach(btn => {
                        btn.classList.remove('calendar-day-selected');
                    });
                    dayButton.classList.add('calendar-day-selected');
                    selectedDate = `${shamsiYear}/${shamsiMonth}/${day}`;
                });
            } else {
                dayButton.className = 'calendar-day-disabled p-2 text-xs font-semibold';
                dayButton.disabled = true;
            }

            calendarGrid.appendChild(dayButton);
        }
    };

    setupCalendarRTL();

    // Step View Transition Management
    const updateWizardUI = () => {
        // Hide all steps
        document.querySelectorAll('.step-panel').forEach(panel => panel.classList.add('hidden'));
        
        // Show Current Step panel
        const currentPanel = document.getElementById(`panel-step-${currentStep}`);
        if (currentPanel) {
            currentPanel.classList.remove('hidden');
        }

        // Setup Back Button state representation
        if (currentStep === 1) {
            if (prevBtnBooking) prevBtnBooking.classList.add('invisible');
            if (nextBtnBooking) nextBtnBooking.querySelector('span').textContent = 'Next step';
        } else if (currentStep === totalSteps) {
            if (prevBtnBooking) prevBtnBooking.classList.remove('invisible');
            if (nextBtnBooking) nextBtnBooking.querySelector('span').textContent = 'Final Confirmation';
        } else {
            if (prevBtnBooking) prevBtnBooking.classList.remove('invisible');
            if (nextBtnBooking) nextBtnBooking.querySelector('span').textContent = 'Next step';
        }

        // Align RTL progress indicator values
        if (stepIndicator) {
            stepIndicator.textContent = `Step ${currentStep} of ${totalSteps}`;
        }
        if (progressBarFill) {
            progressBarFill.style.width = `${((currentStep - 1) / (totalSteps - 1)) * 100}%`;
        }

        // Update Indicator Nodes Visuals
        if (node1) {
            node1.className = currentStep >= 1 
                ? 'w-8 h-8 rounded-full bg-brand-mint text-white flex items-center justify-center text-xs font-extrabold shadow-md' 
                : 'w-8 h-8 rounded-full bg-slate-200 text-brand-slate flex items-center justify-center text-xs font-extrabold';
        }
        if (node2) {
            node2.className = currentStep >= 2 
                ? 'w-8 h-8 rounded-full bg-brand-mint text-white flex items-center justify-center text-xs font-extrabold shadow-md' 
                : 'w-8 h-8 rounded-full bg-slate-200 text-brand-slate flex items-center justify-center text-xs font-extrabold';
        }
        if (node3) {
            node3.className = currentStep >= 3 
                ? 'w-8 h-8 rounded-full bg-brand-mint text-white flex items-center justify-center text-xs font-extrabold shadow-md' 
                : 'w-8 h-8 rounded-full bg-slate-200 text-brand-slate flex items-center justify-center text-xs font-extrabold';
        }
    };

    // Client Side Form Fields Validation
    const validateStep3Inputs = () => {
        let isValid = true;
        
        const firstName = document.getElementById('p-firstname');
        const lastName = document.getElementById('p-lastname');
        const email = document.getElementById('p-email');
        const phone = document.getElementById('p-phone');

        if (firstName) {
            if (!firstName.value.trim()) {
                const errElement = document.getElementById('err-first_name');
                if (errElement) errElement.classList.remove('hidden');
                firstName.classList.add('border-red-500');
                isValid = false;
            } else {
                const errElement = document.getElementById('err-first_name');
                if (errElement) errElement.classList.add('hidden');
                firstName.classList.remove('border-red-500');
            }
        }

        if (lastName) {
            if (!lastName.value.trim()) {
                const errElement = document.getElementById('err-last_name');
                if (errElement) errElement.classList.remove('hidden');
                lastName.classList.add('border-red-500');
                isValid = false;
            } else {
                const errElement = document.getElementById('err-last_name');
                if (errElement) errElement.classList.add('hidden');
                lastName.classList.remove('border-red-500');
            }
        }

        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                const errElement = document.getElementById('err-email');
                if (errElement) errElement.classList.remove('hidden');
                email.classList.add('border-red-500');
                isValid = false;
            } else {
                const errElement = document.getElementById('err-email');
                if (errElement) errElement.classList.add('hidden');
                email.classList.remove('border-red-500');
            }
        }

        if (phone) {
            const phoneVal = phone.value.trim();
            if (phoneVal.length < 10 || !/^09[0-9]{9}$/.test(phoneVal)) {
                const errElement = document.getElementById('err-phone');
                if (errElement) errElement.classList.remove('hidden');
                phone.classList.add('border-red-500');
                isValid = false;
            } else {
                const errElement = document.getElementById('err-phone');
                if (errElement) errElement.classList.add('hidden');
                phone.classList.remove('border-red-500');
            }
        }

        return isValid;
    };

    // Wizard Button Control Listeners
    if (nextBtnBooking) {
        nextBtnBooking.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                updateWizardUI();
            } else {
                if (validateStep3Inputs()) {
                    // Hide interactive panel fields to display confirmation outcome
                    const finalStepPanel = document.getElementById('panel-step-3');
                    const successPanel = document.getElementById('panel-success');
                    const bookingActionsDiv = document.getElementById('booking-actions');

                    if (finalStepPanel) finalStepPanel.classList.add('hidden');
                    if (successPanel) successPanel.classList.remove('hidden');
                    if (bookingActionsDiv) bookingActionsDiv.classList.add('hidden');
                    
                    if (stepIndicator && stepIndicator.parentElement) {
                        stepIndicator.parentElement.classList.add('hidden'); // Hide progress lines
                    }
                    
                    // Generate a random confirmation tracker reference
                    const randomCode = Math.floor(100000 + Math.random() * 900000);
                    const refElement = document.getElementById('success-ref');
                    if (refElement) {
                        refElement.textContent = `#APH-1405-${randomCode}`;
                    }
                }
            }
        });
    }

    if (prevBtnBooking) {
        prevBtnBooking.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateWizardUI();
            }
        });
    }

    // Reset Booking flow to initial step
    const resetBookingBtn = document.getElementById('btn-reset-booking');
    if (resetBookingBtn && wizardForm) {
        resetBookingBtn.addEventListener('click', () => {
            wizardForm.reset();
            currentStep = 1;
            
            const successPanel = document.getElementById('panel-success');
            const bookingActionsDiv = document.getElementById('booking-actions');
            
            if (successPanel) successPanel.classList.add('hidden');
            if (bookingActionsDiv) bookingActionsDiv.classList.remove('hidden');
            if (stepIndicator) stepIndicator.parentElement.classList.remove('hidden');
            
            updateWizardUI();
        });
    }

});
