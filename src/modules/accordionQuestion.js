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

export default accordionQuestion;