const user = { id: 1, job: "actor", isRich: true };
console.log(user);
const userStringified = JSON.stringify(user);
console.log(userStringified);
const userParsed = JSON.parse(userStringified);
console.log(userParsed);

const shop = {
  owner: "mash",
  since: 2017,
  address: {
    area: "mirpur-2",
    city: "dhaka",
  },
  products: ["shirt", "pants", "panjabi", "shorts"],
  revenue: 50000000,
  isOpen: true,
  isNew: false,
};
console.log(shop);

const stringifiedShop = JSON.stringify(shop, null, 2);
console.log(stringifiedShop);

const parsedShop = JSON.parse(stringifiedShop);
console.log(parsedShop);
