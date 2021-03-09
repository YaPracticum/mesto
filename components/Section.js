export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems = () => {
    this._items.forEach(element => {
      this._renderer(element);
    })
  }

  addItem = (cardElement) => {
    this._container.append(cardElement);
  }
}