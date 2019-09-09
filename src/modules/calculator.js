const calculator = () => {
const titleText = document.querySelectorAll('.title-text'),
      selectBox = document.querySelectorAll('.select-box'),
      constructor = document.querySelector('.constructor'),
      checkbox = constructor.querySelectorAll('.onoffswitch-checkbox'),
      calcResult = document.getElementById('calc-result'),
      formControl = constructor.querySelectorAll('.form-control');

    titleText[1].style.display = 'none';
    selectBox[2].style.display = 'none';
    selectBox[3].style.display = 'none';
    checkbox[1].checked = false;

    let result = 0;

    constructor.addEventListener('change', () => {

      if (checkbox[0].checked) {
        titleText[1].style.display = 'none';
        selectBox[2].style.display = 'none';
        selectBox[3].style.display = 'none';
        result = 10000;
      } else {
        titleText[1].style.display = 'block';
        selectBox[2].style.display = 'inline-block';
        selectBox[3].style.display = 'inline-block';
        result = 15000;
      }

      formControl.forEach((elem) => {
        if (elem.value == 1) {
          return;
        } else {
          result = result + (result * (+elem.value));
        }
      });

      if (checkbox[0].checked) {
        if (checkbox[1].checked) {
          result += 1000;
        } else {
          result;
        }
      } else {
        if (checkbox[1].checked) {
          result += 2000;
        } else {
          result;
        }
      }

      calcResult.value = result;

    });

    const validDistance = () => {
      let distance = document.querySelector('.panel-four input');

        distance.addEventListener('input', () => {
          distance.value = distance.value.replace(/[^\d]/gi, '');
        });
    };

    validDistance();


};

export default calculator;