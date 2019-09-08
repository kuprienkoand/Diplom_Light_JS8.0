const popupMod = () => {

  const callBtn = document.querySelectorAll('.call-btn'),
    popupCall = document.querySelector('.popup-call'),
    popupClose = document.querySelector('.popup-close');

  callBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popupCall.style.display = 'block';
    });
  });

  popupCall.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popupCall.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popupCall.style.display = 'none';
      }
    }
  });

  // Модальное окно со скидкой popup-discount

  const popupDiscount = document.querySelector('.popup-discount'),
    discountBtn = document.querySelectorAll('.discount-btn');

  discountBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popupDiscount.style.display = 'block';
    });
  });

  popupDiscount.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popupDiscount.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popupDiscount.style.display = 'none';
      }
    }
  });

  // Модальное окно со скидкой popup-check

  const popupCheck = document.querySelector('.popup-check'),
    checkBtn = document.querySelector('.check-btn');

  checkBtn.addEventListener('click', () => {
    popupCheck.style.display = 'block';
  });

  popupCheck.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popupCheck.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popupCheck.style.display = 'none';
      }
    }
  });

  // Модальное окно со скидкой popup-consultation

  const popupConsultation = document.querySelector('.popup-consultation'),
    consultationBtn = document.querySelector('.consultation-btn');

  consultationBtn.addEventListener('click', () => {
    popupConsultation.style.display = 'block';
  });

  popupConsultation.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popupConsultation.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popupConsultation.style.display = 'none';
      }
    }
  });
};

export default popupMod;