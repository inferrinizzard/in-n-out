const MenuData = Object.freeze({
  DblDblCombo: {
    id: 'DblDblCombo',
    name: 'Double-Double Combo',
    has: ['DblDbl', 'Fries', 'SoftDrink'],
  },
  CheeseburgerCombo: {
    id: 'CheeseburgerCombo',
    name: 'Cheeseburger Combo',
    has: ['Cheeseburger', 'Fries', 'SoftDrink'],
  },
  HamburgerCombo: {
    id: 'HamburgerCombo',
    name: 'Hamburger Combo',
    has: ['Hamburger', 'Fries', 'SoftDrink'],
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
  SoftDrink: {
    id: 'SoftDrink',
    name: 'Soft Drink',
    has: ['SoftDrink'],
  },
} as const);

export default MenuData;
