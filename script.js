document.querySelector('.hover-link').addEventListener('mouseover', () => {
  showHidePopupModal('show');
});

document.querySelector('.hover-link').addEventListener('mouseout', () => {
  showHidePopupModal('hide');
});

function init() {
  showHidePopupModal('hide');
}

function showHidePopupModal(mode) {

  switch (mode) {
    case 'show':
      document.querySelector('.popup-modal').style.visibility = 'visible';
      document.querySelector('.popup-modal').style.opacity = '1';
      break;

    case 'hide':
      document.querySelector('.popup-modal').style.visibility = 'hidden';
      document.querySelector('.popup-modal').style.opacity = '0';
      break;

    default:
      throw new Error('Unknown mode');
  }
}

init();
