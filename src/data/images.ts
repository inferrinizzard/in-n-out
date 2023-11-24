import { type SkuId } from './types';

const ImageData = Object.freeze({
  DblDblCombo:
    'https://s3-alpha-sig.figma.com/img/9c53/0ed9/eaa8b29782b9a43f9ec30651f53a5fef?Expires=1701648000&Signature=Mprrtz0681saz2he8QD7xIuLrQZXC-xEQDN~wrZ4QF~XJlC83XHrIZ5ZwEcsDWXzFNIYSiIv5rRT-YVJsVDcVwaFGMOycil5zkuA3riMOFDmJ9XK4mPntKUExkBbcF9TET0EkvY1-AiNjFZzX1gIMoxB8v5~HIYoPpMqrV-zUiB0yGPPnS5gZH29GgJl50r5Y4L9W1RSTGj4HPLoQyUclUQPlgR~yoPTcH5F4gYiFpigwZibBEh~tAra~yKNzjEMNe~b-II1fbHzvnI3IJgP0MMgVsFeGXqCXKEufXWe7Z2FwdN1yWOAlP8SPdhBXoSNyOeZDgs9zpglmREcTFglEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  CheeseburgerCombo:
    'https://s3-alpha-sig.figma.com/img/b949/0b3a/600c3a2c9ad44b3de9193b0a803dfade?Expires=1701648000&Signature=ZJYnymvJK-BKnKK8~l3P1q8UGJpAxL9BFcsappKEDEBYXeFSsjTUm7Xz3WuSB5hRhwipmML7DOi-LIMPKgvaGwb3-qvHBGny6orCVx7ZKO7RFn3qMF8WozVxbw1UGCyucvwsrxmWSMGb3PEjVqgk~K78RbkIkNjJfIQSkhHTaNU8qEegADo0Db8xQR8cYMNfPKGz1s7plhovWvjH-qJ3OZI0nqCxP3lUz0yn9pF6NV7iIIRh~o-UIb0VbRbmDCuLDw6ZyUH-yMu9Q4UuueRqeZhqI9aO2x0ilWju5SpiLuuV-IURD~O9gm4ViKHIPO4uQXqViT732xSiNjlG5hvFsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  HamburgerCombo:
    'https://s3-alpha-sig.figma.com/img/6c99/bf52/9e4e305b2d0212ed23e57d4c0ac60c14?Expires=1701648000&Signature=m2V-QvinuevLOrU39E~T6yfNbI2PY~Kc~qZr5XPHJJt3L7KqSOv~Y9CPYs881ay0SskwzIZeLkbkDX~kDPyPGLyLwbAIGaqNp-ymqXXA8sHmBlotLwAanhrpnvKaxR10ktrv6sqUdxLYbX8EadpYN4utdYIAitRUsNyXl6Z2H7lC73ZMMMK7ILp91P4fDWN-ILLYGOcscob5KFBUPNFq-ynvNyC6VKf59IIIeJuMcBL-U09JnR17xldjy78ADIKIt~ajaM~VvJ93tKHO~q3ZDXLMKwHDgpoMr74ABJ6qP6e2vNKtOM1avCqLnkr2jkSTEgeW5FvBdqsOm5DrkT3TzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  DblDbl: '',
  Cheeseburger: '',
  Hamburger: '',
  Fries: '',
  Drink: '',
} as const);

ImageData satisfies Record<SkuId, string>;

export default ImageData;
