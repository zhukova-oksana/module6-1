'use strict';

{
  const createContainer = () => {
    const container = document.createElement('div');
    container.style.textAlign = "center";
    container.classList.add('information');

    return container;
  }

  const createInput = () => {
    const elementInput = document.createElement('input');
    elementInput.classList.add('information__input');

    return elementInput;
  }

  const createP = () => {
    const elementP = document.createElement('p');
    elementP.classList.add('information__text');

    return elementP;
  }

  const inputControl = () => {
    const input = document.querySelector('.information__input');
    const elementText = document.querySelector('.information__text');
    let timeout;

    const inputText = () => {
      let text = input.value;
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        elementText.textContent = text;
      }, 300);
    }

    input.addEventListener('input', inputText);

  }

  const init = () => {
    const div = createContainer();
    const input = createInput();
    const p = createP();
    const body = document.body;

    div.append(input);
    div.append(p);
    body.append(div);

    inputControl();

    return body;
  }

  init();
}

