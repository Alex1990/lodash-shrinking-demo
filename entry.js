import _ from 'lodash';
import sortBy from 'lodash/fp/sortBy';
import map from 'lodash/fp/map';

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

// Functional programming

const data = [
  {
    name: 'A',
    level: 0,
  },
  {
    name: 'B',
    level: 2,
  },
  {
    name: 'C',
    level: 1,
  },
];
const getNames = _.flow([
  sortBy(v => v.level),
  map(v => v.name)
]);
const names = getNames(data);
console.log(names);
