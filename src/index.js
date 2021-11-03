// import { getPremUsers } from './data';
import {styleBody, addTitle, contact} from './dom';
import anyName, {getPremUsers} from './data';

addTitle('test');
styleBody();
console.log(contact);


const premUsers = getPremUsers(anyName);
console.log(anyName, premUsers);

console.log('index file');

