const calculator = () => {

  const myonoffswitch = document.getElementById('myonoffswitch'),
    titleText = document.querySelectorAll('.title-text'),
    selectBox = document.querySelectorAll('.select-box');

  const changeCell = () => {
    titleText[1].style.display = 'none';
    selectBox[2].style.display = 'none';
    selectBox[3].style.display = 'none';

    myonoffswitch.addEventListener('change', () => {
      if (myonoffswitch.checked) {
        titleText[1].style.display = 'none';
        selectBox[2].style.display = 'none';
        selectBox[3].style.display = 'none';
      } else {
        titleText[1].style.display = 'block';
        selectBox[2].style.display = 'inline-block';
        selectBox[3].style.display = 'inline-block';
      }
    });
  };

  changeCell();

  const validDistance = () => {
    let distance = document.querySelector('.panel-four input');

    distance.addEventListener('input', () => {
      distance.value = distance.value.replace(/[^\d]/gi, '');
    });
  };

  validDistance();

};

export default calculator;