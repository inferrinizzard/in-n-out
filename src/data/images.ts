import { type SkuId } from './types';

const ImageData = Object.freeze({
  DblDblCombo:
    'https://s3-alpha-sig.figma.com/img/9c53/0ed9/eaa8b29782b9a43f9ec30651f53a5fef?Expires=1702857600&Signature=VQEmSDtvBCk7msnRIzcYig0W~-pHx-1ryzTXrut6TvyTus5sHZKOfTcKx2kA4N~wfrML~EMH-NYv3cj~~qk~majBCOL2sQ-GNMXQSZdFuGVWphkn-dO5HISdwqVgq7Csrz85tDtZm3CYA6EaAykk0eDiPBSs5OVXJwY7UZsHTl4ydLGoDmgCbZulNY2vnXMGZMWcdywL2G-7e6S4m2j5jF1DTDqAj1mCMhv1u4Ow~imsmIW0MN894ollwmwnosCZA93Wc6E6aET2eN4zv-BOfCTCzytZEOzECGmkd~R5sZvp0jrIi-kd9I3AM8tPdLF0SzTFBLprK~b87mPhnEHiPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  CheeseburgerCombo:
    'https://s3-alpha-sig.figma.com/img/b949/0b3a/600c3a2c9ad44b3de9193b0a803dfade?Expires=1702857600&Signature=TrTFWyxxzJvKpmex95OSJXDK73bz72QouXiIukkh~hC7KiEIkrBtd6uUwPPLJetjUbvFy3JkMcqdsGZ~gPRQWvGESX-il1SS1XIITFRo8sDp4Z7DZeR1KmRs~qhJKJr9RGWmLWaHboNHXLAYv1eUI~tDn-w~Gns1pZ6tesAbCo1ZP~-p8XqJlNsx~2bjJFDZxM4-aRLruGfbBS80XvlRcHeboO06nX4E9oag8sP95Di9wg~Mg50y2fhhu-9l~dI3AXh7ASRmhBuCz2lykwSIWgyOsf4x5GDF922YnDCHquiVF--LkWFuvE2b3cHHTJKh0qAznOtfv-pPwjlCxLshvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  HamburgerCombo:
    'https://s3-alpha-sig.figma.com/img/6c99/bf52/9e4e305b2d0212ed23e57d4c0ac60c14?Expires=1702857600&Signature=D2el-a7yycZWZSUj4PO4QwFJNkmZN2XLuPunAnAF0OZwSpqsodquJpQFL6nlKlCvfmpvDzdcnLomR~chFa3nk0lBYyCIROdsQooTTWFa9N37J0MC8~jkWLcKhz08ex8uutK96iOrhkLKPA-zpSQ3l1iM0Bh1PA2ryYkNNBVPXnGuB5E0tZI-peQwLqtOIpj7F2fyHi1hhQoP~Ki~n68~UvUGNWY0q~vSxwrtulZInG5Nfjiqlpouis0A6En02~Iy3IAsW6zML2uAWH6Oaqk1LSuUiqUySwhmU60O7flyy3B3dV~7oNbNqi0U2Qr6hUpVyx8pqj-UEXCtQPb3gZW4Nw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  DblDbl:
    'https://www.in-n-out.com/Frontend-Assembly/Telerik.Sitefinity.Frontend/content/images/menu/foodquality/double-double.png?package=INNOUT&v=2023',
  Cheeseburger:
    'https://www.in-n-out.com/Frontend-Assembly/Telerik.Sitefinity.Frontend/content/images/menu/cheeseburger@3x.png?package=INNOUT&v=2023',
  Hamburger:
    'https://www.in-n-out.com/Frontend-Assembly/Telerik.Sitefinity.Frontend/content/images/menu/hamburger@3x.png?package=INNOUT&v=2023',
  Fries:
    'https://s3-alpha-sig.figma.com/img/1cee/a800/d71a1b4cbce32b80fbf6a5a34404dc08?Expires=1702857600&Signature=nZm3B6aBfBQcpzvmLFbpFBBZHFYB7tn0Ot~-eOW1L7y67yhJS4qc8FhC4ocAtNn6pQotE5sEzAvndgrewmTT1TQEPo7jJzmOA0J~rdxLdJf6plJ~jVlTaOjhS2sIsr9Jw9-tGg7tCkZsgRm3O~OOcYwT~bKiJCX~fMPyW632RME3e-p8bR6tl~mgF81U-x677pq0ah7F3RG8GzKsZBhP1aGV1H5CII4p6z3xZLcBQnzHq01H62xQ2SRbIqH~X3h~lx0T432eI66woRLiNYccjNaH9DNJrFja8l0oMa966SjBHbPJTEKyCWfliwCREY8BwdS7EYYi3SQyHDxp38L1zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  SoftDrink:
    'https://s3-alpha-sig.figma.com/img/5787/5fb9/60db691f1ba363206137a7e343be92ad?Expires=1702857600&Signature=SCGNYPgHa1aECC0Fyvc9w8ypJXzC-EE43jOOXkSetW09DjemU4pZX-XEujZzaWqj3UMC4wueQUARcmiabTshou0fCnpFo1YHSO1-ZF8W581m9CxCVX1lckaFOgQ6dCeofUt-jyOKXGhKHDGk668mYxlrblziRfpmEaub2gInwCGKnPnYHjNzttXK~Qd9E6bJ9u2OEZUvRRB8PWs7NjpurUf36Aq2DKNCJ47hEzym~b7mGQAsxTgYSTZKpRbNolLk6GBoVflCyo-4OBxf9VqE9PV0yVAdjLgHQ~UdyDfljScmowCRB2QlYvZpU1qcxUWltS9i6hQ18uIdtZgoiAIs1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
} as const);

ImageData satisfies Record<SkuId, string>;

export default ImageData;
