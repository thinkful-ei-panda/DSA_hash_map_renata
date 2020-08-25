/* eslint-disable no-console */
const HashMap = require('./hashMap');

function main() {
  const LOTR = new HashMap();
  LOTR.MAX_LOAD_RATIO = .5;
  LOTR.SIZE_RATIO = 3;
  
  LOTR.set('Hobbit', 'Bilbo');
  LOTR.set('Hobbit', 'Frodo');
  LOTR.set('Wizard', 'Gandalf');
  LOTR.set('Human', 'Aragorn');
  LOTR.set('Elf', 'Legolas');
  LOTR.set('Maiar', 'The Necromancer');
  LOTR.set('Maiar', 'Sauron');
  LOTR.set('RingBearer', 'Gollum');
  LOTR.set('LadyOfLight', 'Galadriel');
  LOTR.set('HalfElven', 'Arwen');
  LOTR.set('Ent', 'Treebeard');
  console.log('Maiar key:', LOTR.get('Maiar'));
  console.log('Hobbit key:', LOTR.get('Hobbit'));

  return LOTR;
}

main();

const whatDoesThisDo = function(){
  let str1 = 'Hello World.'; 
  let str2 = 'Hello World.';
  let map1 = new HashMap(); 
  map1.set(str1,10); 
  map1.set(str2,20); 
  let map2 = new HashMap();
  let str3 = str1; 
  let str4 = str2; 
  map2.set(str3,20); 
  map2.set(str4,10); 

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

console.log(whatDoesThisDo());