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

export default sendForm;