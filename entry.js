import _ from 'lodash';

const users = [
  {
    name: {
      first: 'Alex',
      last: 'Chao',
    },
    age: 27,
    address: {
      province: 'Beijing',
      city: 'Beijing',
      county: 'Haidian',
    },
  },
];

_.sortBy(users, 'age');

const beijingUsers = _.filter(users, ({ address: { province }}) => province === 'Beijing');
console.log(beijingUsers);

const fullNames = _.map(users, ({ name: { first, last }}) => {
  return `${first} ${last}`;
});
console.log(fullNames);

console.log(_.get(users, '0.name.first', ''));

