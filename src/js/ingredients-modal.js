(() => {
    const refs = {
      openModalBtn1: document.querySelector('[data-modal-ingredients-open1]'),
      openModalBtn2: document.querySelector('[data-modal-ingredients-open2]'),
      openModalBtn3: document.querySelector('[data-modal-ingredients-open3]'),
      closeModalBtn: document.querySelector('[data-modal-ingredients-close]'),
      modal: document.querySelector('[data-modal-ingredients]'),
    };
  
    refs.openModalBtn1.addEventListener('click', toggleModal);
    refs.openModalBtn2.addEventListener('click', toggleModal);
    refs.openModalBtn3.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();