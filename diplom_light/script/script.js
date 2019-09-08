window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // popup-call. При клике на Перезвоните мне, вызывается модальное окно

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
  };

  popupMod();

  // Only number. В поле с телефоном можно вводить только цифры

  const formValidationPhone = () => {
    let formPhone = document.querySelectorAll('.phone-user');

    formPhone.forEach((item) => {
      item.addEventListener('input', () => {
        item.value = item.value.replace(/[^+\d]/gi, '');
      });
    });
  };

  formValidationPhone();

  // Форма отправки посредством ajax

  const sendForm = () => {

    const errorMessage = 'Что-то пошло не так...',
      loadMessage = 'Загрузка...',
      successMessage = 'Спасибо! Мы скоро с вами свяжемся';

    const formAll = document.querySelectorAll('form');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 20px';


    formAll.forEach((item) => {
      item.addEventListener('submit', (event) => {
        event.preventDefault();
        item.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(item);
        let body = {};

        formData.forEach((val, key) => {
          body[key] = val;
        });

        postData(body)
          .then((response) => {
            if (response.status !== 200) {
              throw new Error('status network not 200.');
            }
            item.reset();
            statusMessage.textContent = successMessage;
            setTimeout(() => {
              statusMessage.textContent = '';
            }, 3000);
          })
          .catch((error) => {
            item.reset();
            statusMessage.textContent = errorMessage;
            console.error(error);
            statusMessage.style.cssText = 'font-size: 20px; font-weight: bold; color: red';
            setInterval(() => {
              statusMessage.style.opacity ^= 1;
            }, 1000);
          });

        let formUserQuest = document.querySelector('.director-form input');
        if (formUserQuest.value) {
          document['.director-form input'] = formUserQuest.value;
          formUserQuest.value = '';
        }
      });
    });

    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include'
      });
    };
  };

  sendForm();

  // Реализовать аккордеон Часто задаваемые вопросы

  const accordionQuestion = () => {

    const accordionTwo = document.getElementById('accordion-two'),
      panelHeading = accordionTwo.querySelectorAll('.panel-heading'),
      panelCollapse = accordionTwo.querySelectorAll('.panel-collapse');

      panelCollapse[0].classList.remove('in');

      const toggleTabContent = (index) => {
        for (let i = 0; i < panelCollapse.length; i++) {
        if (index === i) {
          panelCollapse[i].classList.add('in');
          panelHeading[i].style.color = 'blue';
        } else {
          panelCollapse[i].classList.remove('in');
          panelHeading[i].style.color = 'white';
        }
      }
    };

    accordionTwo.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.panel-heading');
      if (target) {
        panelHeading.forEach((item, i) => {
          event.preventDefault();
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };	

  accordionQuestion();

  // Конструктор калькулятор аккордеон

  const constructorCalc = () => {

    let accordionOne = document.getElementById('accordion'),
      constructBtn = accordionOne.querySelectorAll('.construct-btn'),
      panelCollapse = accordionOne.querySelectorAll('.panel-collapse'),
      panelHeading = accordionOne.querySelectorAll('.panel-heading'),
      nextBtn = document.querySelectorAll('a');

    nextBtn.forEach((item) => {
      item.href = "#!";
    });

    const toggleCalcConst = (index) => {
      for (let i = 0; i < panelCollapse.length; i++) {
        if (index === i) {
          panelCollapse[i].classList.add('in');
        } else {
          panelCollapse[i].classList.remove('in');
        }
      }
    };

    accordionOne.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.panel-heading');
      if (target) {
        panelHeading.forEach((item, i) => {
          event.preventDefault();
          if (item === target) {
            toggleCalcConst(i);
          }
        });
      }
    });

      for (let i = 0; i < panelHeading.length; i++) {
      constructBtn[i].addEventListener('click', () => {
        if (i !== 3) {
          panelCollapse.forEach((elem) => {
            elem.classList.remove('in');
          });
          panelCollapse[i + 1].classList.add('in');
        }
      });
    }
  };
  
 constructorCalc();

 // Калькулятор в 
 

 

 // Кнопка Больше

  const btnMore = () => {
    const shadowBlock = document.querySelectorAll('.sentence .row .col-xs-12'),
      addSentenceBtn = document.querySelector('.add-sentence-btn');

    addSentenceBtn.addEventListener('click', (event) => {
      shadowBlock.forEach((item) => {
        item.classList.remove('hidden', 'visible-sm-block');
      });
      addSentenceBtn.style.display = 'none';
    });
  };

  btnMore();

});