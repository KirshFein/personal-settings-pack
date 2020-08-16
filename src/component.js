export default (text = 'Hello mountains') => {
  const element = document.createElement('p');
  const el = document.createElement('img');
  el.setAttribute('src', '/assets/mountains.jpg');

  element.innerHTML = text;

  return { element, el };
};
