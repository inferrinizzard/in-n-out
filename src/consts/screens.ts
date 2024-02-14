export const ScreenKeys = Object.freeze({
  Menu: 'Menu',
  Item: 'Item',
  Cart: 'Cart',
  QrCode: 'QrCode',
  Account: 'Account',
  More: 'More',
} as const);

export type ScreenKey = keyof typeof ScreenKeys;

export const ScreenCopy = Object.freeze({
  [ScreenKeys.Menu]: 'Menu',
  [ScreenKeys.Item]: 'Item',
  [ScreenKeys.Cart]: 'Cart',
  [ScreenKeys.QrCode]: 'QR Code',
  [ScreenKeys.Account]: 'Account',
  [ScreenKeys.More]: 'More',
} as const);

ScreenCopy satisfies Record<ScreenKey, string>;

export const HeaderCopy = Object.freeze({
  ...ScreenCopy,
  [ScreenKeys.QrCode]: 'Pick-up Code',
} as const);

HeaderCopy satisfies Record<ScreenKey, string>;
