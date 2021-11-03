// import { getPremUsers } from './data';
import {styleBody, addTitle, contact} from './dom';
import anyName, {getPremUsers} from './data';

console.log('index file');

addTitle('test');
styleBody();
console.log(contact);


const premUsers = getPremUsers(anyName);
console.log(anyName, premUsers);