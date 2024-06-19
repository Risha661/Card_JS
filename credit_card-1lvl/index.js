import { el, mount, setChildren } from "https://redom.js.org/redom.es.min.js";

  const wrapper = el('div', {className: 'wrapper'});
  const card = el('div', {className: 'card'});

  const cardHeader = el('p', 'Secure Checkout', { className: 'secure' });
  const cardInfo = el('div', { className: 'credit-card' });
  const cardNumber = el('span', 'xxxx xxxx xxxx xxxx', {
    className: 'card__number'});
  
  const cardPersonal = el('div', { className: 'card__personal' });
  const cardName = el('span', { className: 'card__name' }, 'John Doe');
  const cardDate = el('span', { className: 'card__date' }, '12/34');
  const form = el('form', { className: 'form', id: 'form', action: '#' });

  const holderWrapDiv = el(
    'div',
    {
      className: 'form__input-wrap form__input-wrap_holder',
    },
    [el('label', { className: 'form__label form__holder-label' }, 'Card Holder')]
  );

  const holderInput = el('input', {
    id: 'card_holder',
    type: 'text',
    class: 'input input__holder',
  });

  const numberWrap = el(
    'div',
    {
      className: 'form__input-wrap form__input-wrap_number',
    },
    [
      el('label', {
        className: 'form__label form__number-label',
        textContent: 'Card Number',
      }),
    ]
  );
  const numberInput = el('input', {
    id: 'card_number',
    type: 'text',
    class: 'input input__number',
  });

  const dateWrapDiv = el(
    'div',
    { className: 'form__input-wrap form__input-wrap_date' },
    [el('label', { className: 'form__label form__date-label' }, 'Card Expiry')]
  );
  const expiryCardInput = el('input', {
    id: 'card_expiry',
    type: 'text',
    className: 'input input__date',
  });

  const cvvWrap = el(
    'div', { className: 'form__input-wrap form__input-wrap_cvv' }, [el('label', { className: 'form__label form__cvv-label' }, 'CVV')]
  );

  const cvvInputCard = el('input', {
    id: 'card_cvv',
    type: 'text',
    className: 'input input__cvv',
  });

  const submitBtn = el('button', { className: 'form__button' }, 'CHECK OUT');

  const maskNumber = IMask(numberInput, {
    mask: '0000 0000 0000 0000',
    blocks: {
      0: {
        mask: /^\d$/,
      },
      1: {
        mask: /^\d$/,
      },
      2: {
        mask: /^\d$/,
      },
      3: {
        mask: /^\d$/,
      },
    }
  });

  numberInput.addEventListener('input', (e) => {
    e.preventDefault();
    cardNumber.textContent =  maskNumber.unmaskedValue;
  });

  const maskNameOptions = {mask: /^[a-zA-Z\s]+$/};
  const maskName = IMask(holderInput, maskNameOptions);
  holderInput.addEventListener('input', (e) => {
    e.preventDefault();
    cardName.textContent = maskName.unmaskedValue;
  });

  const maskExpiry = IMask(expiryCardInput, {
    mask: 'MM/YY',
    blocks: {
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
      },
      YY: {
        mask: IMask.MaskedRange,
        from: 24,
        to: 29,
      },
    },
  });

  expiryCardInput.addEventListener('input', (e) => {
    e.preventDefault();
    cardDate.textContent = expiryCardInput.value;
  });

  IMask(cvvInputCard, {mask: '000'})

  mount(wrapper, card);
  mount(holderWrapDiv, holderInput);
  mount(numberWrap, numberInput);
  mount(dateWrapDiv, expiryCardInput);
  mount(cvvWrap, cvvInputCard);

  setChildren(cardPersonal, [cardName, cardDate]);
  setChildren(cardInfo, [cardNumber, cardPersonal]);
  setChildren(form, [holderWrapDiv, numberWrap, dateWrapDiv, cvvWrap, submitBtn]);
  setChildren(card, [cardHeader, cardInfo, form]);

  cvvWrap.addEventListener('input', () => {
    const cvvConsole = cvvWrap.value;
  });

  document.body.appendChild(wrapper);
