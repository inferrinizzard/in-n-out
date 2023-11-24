const MenuData = Object.freeze({
  DblDblCombo: {
    id: 'DblDblCombo',
    name: 'Double-Double Combo',
    next: ['fry', 'drink'],
  },
  CheeseburgerCombo: {
    id: 'CheeseburgerCombo',
    name: 'Cheeseburger Combo',
    next: ['fry', 'drink'],
  },
  HamburgerCombo: {
    id: 'HamburgerCombo',
    name: 'Hamburger Combo',
    next: ['fry', 'drink'],
  },
} as const);

export default MenuData;
