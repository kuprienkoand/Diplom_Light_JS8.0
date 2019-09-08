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

export default constructorCalc;