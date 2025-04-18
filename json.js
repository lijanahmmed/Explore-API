const user = {id: 1, name: 'Lijan Ahmmed', job: 'student'};
const stringified = JSON.stringify(user);
console.log(user);
// { id: 1, name: 'Lijan Ahmmed', job: 'student' }
console.log(stringified);
// {"id":1,"name":"Lijan Ahmmed","job":"student"}

const shop = {
    owner: 'Alia',
    address: {
        street: 'Taltola',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mac', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
// {
//     owner: 'Alia',
//     address: { street: 'Taltola', city: 'Dhaka', country: 'Bangladesh' },
//     products: [ 'laptop', 'mac', 'monitor', 'keyboard' ],
//     revenue: 45000,
//     isOpen: true,
//     isNew: false
// }

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
// {"owner":"Alia","address":{"street":"Taltola","city":"Dhaka","country":"Bangladesh"},"products":["laptop","mac","monitor","keyboard"],"revenue":45000,"isOpen":true,"isNew":false}

const shopobj = JSON.parse(shopJSON);
console.log(shopobj);
// {
//     owner: 'Alia',
//     address: { street: 'Taltola', city: 'Dhaka', country: 'Bangladesh' },
//     products: [ 'laptop', 'mac', 'monitor', 'keyboard' ],
//     revenue: 45000,
//     isOpen: true,
//     isNew: false
// }