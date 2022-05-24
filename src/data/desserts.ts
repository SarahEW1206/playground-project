const resp = await fetch('https://random-data-api.com/api/dessert/random_dessert');
const desserts = resp.json();
export { desserts };
