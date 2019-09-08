'use strict';

import popupMod from './modules/popupMod';
import formValidationPhone from './modules/formValidationPhone';
import sendForm from './modules/sendForm';
import accordionQuestion from './modules/accordionQuestion';
import constructorCalc from './modules/constructorCalc';
import calculator from './modules/calculator';
import btnMore from './modules/btnMore';

  // popup-call. При клике на Перезвоните мне, вызывается модальное окно
  popupMod();

  // Only number. В поле с телефоном можно вводить только цифры
  formValidationPhone();

  // Форма отправки посредством ajax
  sendForm();

  // Реализовать аккордеон Часто задаваемые вопросы
  accordionQuestion();

  // Конструктор калькулятор аккордеон
  constructorCalc();

  // Калькулятор в аккордеоне
  calculator();

  // Кнопка Больше
  btnMore();