(() => {
    const refs = {
      openModalBtn1: document.querySelector('[data-modal-ingredients-milk-open]'),
      closeModalBtn: document.querySelector('[data-modal-ingredients-milk-close]'),
      modal: document.querySelector('[data-modal-ingredients-milk]'),
    };
  
    refs.openModalBtn1.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();