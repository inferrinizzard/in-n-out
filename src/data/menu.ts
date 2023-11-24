const MenuData = Object.freeze({
  DblDblCombo: {
    id: 'DblDblCombo',
    name: 'Double-Double Combo',
    has: ['Fries', 'Drink'],
  },
  CheeseburgerCombo: {
    id: 'CheeseburgerCombo',
    name: 'Cheeseburger Combo',
    has: ['Fries', 'Drink'],
  },
  HamburgerCombo: {
    id: 'HamburgerCombo',
    name: 'Hamburger Combo',
    has: ['Fries', 'Drink'],
  },
  Fries: {
    id: 'Fries',
    name: 'French Fries',
  },
  Drink: {
    id: 'Drink',
    name: 'Beverage',
  },
} as const);

export default MenuData;
