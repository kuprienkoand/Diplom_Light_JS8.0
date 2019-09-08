const formValidationPhone = () => {
  let formPhone = document.querySelectorAll('.phone-user');

  formPhone.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^+\d]/gi, '');
    });
  });
};

export default formValidationPhone;