const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {

    const inputName = nameInput.value.trim();
    
    if (inputName === '') {
        nameOutput.textContent = 'Anonymous';
      } else {
        nameOutput.textContent = inputName;
      }
    });