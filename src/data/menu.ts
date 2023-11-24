const MenuData = Object.freeze({
  DblDblCombo: {
    id: 'DblDblCombo',
    name: 'Double-Double Combo',
    has: ['DblDbl', 'Fries', 'Drink'],
  },
  CheeseburgerCombo: {
    id: 'CheeseburgerCombo',
    name: 'Cheeseburger Combo',
    has: ['Cheeseburger', 'Fries', 'Drink'],
  },
  HamburgerCombo: {
    id: 'HamburgerCombo',
    name: 'Hamburger Combo',
    has: ['Hamburger', 'Fries', 'Drink'],
  },
  DblDbl: {
    id: 'DblDbl',
    name: 'Double-Double',
    has: ['DblDbl'],
  },
  Cheeseburger: {
    id: 'Cheeseburger',
    name: 'Cheeseburger',
    has: ['Cheeseburger'],
  },
  Hamburger: {
    id: 'Hamburger',
    name: 'Hamburger',
    has: ['Hamburger'],
  },
  Fries: {
    id: 'Fries',
    name: 'French Fries',
    has: ['Fries'],
  },
  Drink: {
    id: 'Drink',
    name: 'Beverage',
    has: ['Drink'],
  },
} as const);

export default MenuData;
