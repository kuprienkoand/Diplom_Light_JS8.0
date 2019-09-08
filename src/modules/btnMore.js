const btnMore = () => {

  const shadowBlock = document.querySelectorAll('.sentence .row .col-xs-12'),
    addSentenceBtn = document.querySelector('.add-sentence-btn');

  addSentenceBtn.addEventListener('click', () => {
    shadowBlock.forEach((item) => {
      item.classList.remove('hidden', 'visible-sm-block');
    });
    addSentenceBtn.style.display = 'none';
  });
};

export default btnMore;