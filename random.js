/* "random" numbers

this makes sure all randomness has the same seed

DON'T CHEAT BY LOOKING HERE ;)

*/

let rand0 = [
    false, true,  false, true,  true,  false, false, false, true,  true,  false,
    false, true,  true,  true,  true,  false, false, true,  true,  true,  true,
    false, true,  true,  true,  false, false, false, true,  false, false, false,
    true,  false, false, false, true,  true,  false, false, false, true,  false,
    false, false, false, false, false, true,  false, false, true,  true,  true,
    true,  true,  false, false, true,  false, false, false, false, false, false,
    false, false, false, false, false, false, true,  true,  false, false, false,
    false, false, false, true,  true,  true,  true,  false, true,  false, true,
    false, false, true,  false, true,  false, false, false, true,  false, true,
    false, false, true,  false, true,  false, true,  false, false, false, false,
    false, true,  true,  true,  false, true,  false, false, false, false, false,
    true,  false, false, true,  false, false, true,  false, true,  false, false,
    true,  false, true,  false, false, true,  false, true,  false, false, true,
    true,  false, true,  false, false, false, false, true,  true,  true,  false,
    false, true,  false, true,  false, true,  false, false, false, true,  false,
    false, false, false, false, true,  true,  true,  true,  true,  false, true,
    true,  false, false, true,  false, true,  true,  false, false, false, false,
    true,  true,  true,  true,  false, false, true,  false, false, true,  false,
    false, false, true,  true,  false, true,  true,  true,  false, true,  false,
    true,  false, true,  false, false, true,  false, false, false, false, true,
    false, false, false, false, false, true,  false, false, false, false, false,
    false, true,  false, true,  true,  false, false, true,  false, false, true,
    false, true,  false, false, true,  true,  false, false, true,  false, false,
    true,  false, false, true,  true,  false, false, false, false, false, false,
    true,  false, false, true,  false, false, true,  true,  false, true,  false,
    false, false, false, false, false, false, false, true,  true,  false, true,
    false, false, true,  false, true,  false, true,  false, true,  true,  true,
    true,  true,  true,  false, false, false, false, false, false, false, false,
    false, false, true,  true,  false, false, false, true,  false, false, true,
    false, true,  false, false, false, true,  true,  false, true,  false, false,
    false, true,  true,  false, false, false, true,  false, true,  false, false,
    false, false, false, false, true,  false, true,  false, true,  true,  true,
    true,  true,  false, true,  true,  false, true,  false, false, false, true,
    false, false, false, false, false, true,  true,  true,  false, true,  false,
    true,  true,  false, false, false, false, false, false, true,  false, false,
    false, false, false, false, false, false, false, true,  true,  false, true,
    false, false, false, true,  false, false, true,  false, false, false, false,
    true,  true,  true,  false, true,  false, false, false, false, true,  false,
    true,  false, false, true,  false, false, false, false, false, false, false,
    false, false, false, true,  true,  true,  false, true,  true,  false, true,
    true,  true,  false, true,  false, false, true,  false, true,  true,  false,
    false, false, false, true,  true,  false, true,  false, false, false, true,
    false, false, true,  false, false, true,  true,  false, false, false, false,
    true,  true,  true,  false, false, true,  false, false, true,  false, true,
    false, false, true,  false, true,  false, true,  false, true,  true,  false,
    true,  true,  false, false, true,  false, false, true,  false, true,  false,
    true,  true,  false, false, false, true,  false, true,  true,  false, false,
    true,  false, false, false, false, true,  false, false, true,  false, true,
    true,  false, true,  true,  false, true,  true,  true,  true,  false, false,
    false, false, true,  false, true,  false, false, true,  true,  true,  false,
    true,  false, false, false, false, false, true,  false, true,  false, false,
    true,  false, true,  false, false, false, false, false, true,  false, false,
    false, false, false, false, true,  false, false, false, false, false, false,
    false, true,  false, true,  true,  false, true,  true,  false, false, false,
    false, true,  true,  false, false, false, true,  true,  true,  true,  true,
    true,  false, true,  true,  false, false, false, true,  true,  true,  false,
    false, false, true,  false, true,  false, false, true,  false, false, true,
    false, true,  true,  false, false, true,  false, false, true,  false, false,
    false, false, true,  false, true,  true,  true,  false, true,  false, false,
    true,  false, true,  false, false, false, false, false, false, false, false,
    false, false, false, true,  true,  false, false, true,  false, true,  true,
    true,  true,  true,  false, false, false, false, true,  true,  false, true,
    false, false, false, true,  true,  false, false, false, false, true,  false,
    false, true,  true,  true,  false, false, false, true,  true,  false, false,
    false, true,  true,  false, true,  true,  false, true,  false, false, false,
    false, true,  false, false, true,  false, false, true,  true,  false, true,
    true,  false, true,  false, false, false, false, false, true,  false, true,
    true,  true,  false, true,  true,  true,  true,  false, true,  true,  false,
    false, true,  true,  false, true,  true,  false, false, false, true,  true,
    true,  true,  false, false, false, true,  false, false, true,  true,  true,
    false, false, false, false, false, false, false, false, true,  true,  false,
    true,  false, true,  false, false, false, false, false, true,  false, false,
    true,  false, false, true,  false, true,  true,  false, false, false, false,
    false, false, false, true,  true,  false, false, false, false, false, false,
    false, false, false, true,  true,  false, true,  false, false, true,  false,
    true,  true,  false, false, true,  true,  false, false, true,  false, true,
    false, true,  true,  true,  false, true,  false, true,  true,  false, false,
    false, false, false, true,  false, false, false, false, false, false, true,
    false, false, false, true,  true,  false, false, false, false, true,  false,
    false, true,  true,  false, false, false, false, true,  false, true,  false,
    false, false, false, true,  false, false, true,  true,  false, false, true,
    false, true,  false, false, true,  false, false, false, false, false, false,
    false, false, false, false, true,  true,  false, false, false, false, true,
    false, true,  true,  false, true,  false, true,  false, true,  false, false,
    false, true,  false, true,  false, true,  false, false, false, true,  false,
    true,  false, false, false, true,  false, false, true,  false, true,  false,
    true,  false, false, true,  false, true,  false, true,  false, true,  true,
    true,  true,  false, true,  true,  true,  false, false, true,  true,  false,
    false, true,  false, false, true,  false, true,  true,  false, true,  false,
    true,  false, false, false, false, true,  false, false, false, false, false,
    false, false, true,  true,  false, true,  false, false, false, false
  ];

let rand1 = [
    true,  true,  true,  true,  false, true,  true,  true,  true,  false, false,
    false, false, true,  true,  true,  true,  true,  true,  false, false, false,
    true,  false, false, false, false, true,  true,  true,  true,  true,  true,
    true,  true,  false, true,  true,  true,  true,  false, false, false, false,
    true,  false, false, false, true,  true,  true,  false, true,  true,  true,
    false, true,  false, true,  true,  true,  true,  false, false, false, true,
    false, false, true,  false, true,  true,  true,  false, false, false, true,
    true,  false, true,  false, true,  false, true,  true,  false, false, false,
    true,  false, true,  true,  true,  false, true,  false, false, true,  true,
    true,  true,  false, false, false, false, true,  true,  true,  true,  false,
    true,  true,  false, true,  true,  false, true,  true,  false, true,  true,
    true,  true,  false, true,  false, false, true,  true,  false, true,  true,
    false, true,  true,  true,  false, true,  false, true,  false, true,  false,
    false, true,  true,  true,  false, false, true,  true,  true,  false, false,
    true,  true,  true,  true,  false, true,  true,  true,  true,  false, true,
    true,  false, false, true,  false, true,  false, true,  true,  false, true,
    true,  true,  true,  false, true,  false, true,  false, true,  true,  false,
    false, false, true,  true,  false, true,  false, true,  false, false, true,
    false, true,  false, true,  false, false, false, false, false, true,  true,
    true,  true,  true,  false, true,  true,  false, true,  true,  false, true,
    true,  true,  false, true,  true,  false, false, true,  true,  false, true,
    true,  false, false, true,  false, false, false, false, false, false, true,
    false, true,  true,  false, true,  true,  true,  true,  true,  false, true,
    false, true,  true,  true,  true,  true,  true,  true,  false, true,  true,
    true,  true,  true,  true,  false, true,  true,  false, false, true,  true,
    true,  true,  false, false, true,  true,  false, true,  true,  true,  true,
    true,  false, true,  true,  true,  true,  false, false, true,  false, true,
    true,  false, true,  true,  true,  false, true,  false, false, false, true,
    false, true,  false, true,  false, true,  false, true,  false, false, true,
    true,  true,  false, false, false, true,  false, true,  true,  false, true,
    false, true,  true,  true,  false, false, false, false, false, false, false,
    true,  true,  true,  false, false, true,  false, false, false, true,  true,
    false, false, true,  true,  true,  true,  false, true,  false, true,  false,
    true,  false, false, false, true,  false, true,  false, true,  true,  false,
    false, false, true,  false, false, true,  false, false, false, false, true,
    true,  true,  true,  true,  false, true,  true,  true,  false, true,  true,
    false, false, true,  true,  false, true,  false, false, false, true,  true,
    true,  false, false, false, true,  true,  false, true,  true,  true,  true,
    false, true,  true,  true,  false, true,  false, true,  false, false, false,
    false, true,  false, true,  true,  true,  false, false, false, false, true,
    true,  true,  true,  false, true,  true,  true,  false, false, false, false,
    false, true,  true,  true,  true,  true,  false, false, false, true,  true,
    true,  false, false, false, true,  true,  true,  true,  true,  true,  false,
    false, true,  true,  true,  true,  true,  true,  true,  false, false, true,
    true,  true,  true,  false, false, true,  true,  true,  false, false, false,
    false, false, true,  false, false, true,  true,  true,  true,  true,  true,
    true,  false, true,  false, true,  false, true,  true,  false, false, true,
    false, false, false, false, true,  true,  true,  true,  false, true,  true,
    true,  true,  true,  false, true,  true,  true,  true,  true,  true,  false,
    false, true,  true,  true,  true,  false, true,  false, true,  true,  false,
    false, false, true,  false, false, true,  true,  true,  true,  true,  true,
    true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,
    false, true,  false, true,  false, true,  true,  true,  false, false, true,
    true,  false, true,  true,  true,  true,  true,  true,  true,  true,  true,
    false, true,  false, true,  true,  false, true,  true,  false, false, false,
    false, false, true,  false, false, false, false, true,  true,  true,  false,
    false, false, true,  true,  true,  true,  false, false, true,  false, true,
    true,  false, false, false, false, true,  true,  false, true,  false, true,
    true,  true,  true,  true,  true,  false, true,  true,  false, true,  false,
    false, true,  false, true,  true,  false, true,  false, false, true,  false,
    true,  true,  false, true,  false, true,  true,  true,  true,  false, false,
    true,  false, false, true,  false, true,  true,  true,  true,  false, true,
    false, false, false, true,  false, true,  true,  false, false, false, true,
    true,  true,  true,  true,  true,  true,  true,  true,  false, false, true,
    false, false, true,  false, true,  false, false, true,  true,  false, true,
    true,  false, false, true,  true,  false, true,  true,  true,  false, false,
    false, true,  true,  true,  false, false, false, true,  false, false, false,
    false, false, true,  true,  true,  false, true,  true,  false, true,  true,
    false, true,  true,  true,  true,  false, true,  true,  false, true,  true,
    true,  true,  false, false, true,  true,  true,  true,  false, true,  true,
    true,  true,  true,  true,  false, true,  false, false, false, false, false,
    false, true,  true,  true,  false, true,  true,  true,  false, false, true,
    false, true,  false, true,  false, true,  true,  true,  true,  true,  true,
    true,  false, true,  true,  false, true,  false, true,  false, true,  true,
    true,  true,  false, true,  false, true,  true,  false, true,  false, false,
    false, true,  true,  false, false, false, true,  true,  false, true,  true,
    true,  true,  true,  true,  false, true,  true,  false, false, true,  true,
    false, false, true,  true,  false, true,  false, true,  true,  true,  true,
    true,  true,  true,  false, true,  true,  true,  true,  true,  true,  false,
    true,  true,  true,  true,  false, false, true,  true,  true,  false, false,
    true,  false, false, true,  false, true,  true,  true,  false, true,  true,
    false, true,  false, true,  true,  true,  true,  true,  false, true,  false,
    true,  true,  true,  false, false, true,  true,  true,  true,  false, true,
    true,  false, true,  true,  true,  true,  true,  false, true,  false, false,
    true,  false, true,  true,  true,  false, true,  true,  true,  true,  true,
    true,  false, false, true,  true,  false, false, false, true,  true,  true,
    true,  false, true,  false, true,  true,  true,  true,  true,  true,  false,
    true,  true,  false, true,  false, true,  true,  true,  true,  false, false,
    true,  true,  true,  false, false, true,  false, false, false, false, true,
    false, false, true,  false, true,  false, false, true,  true,  true,  true,
    true,  false, true,  true,  true,  true,  false, true,  true,  true
  ];

let rand2 = [
    true,  true,  true,  false, true,  false, true,  true,  false, true,  true,
    false, true,  true,  true,  true,  true,  true,  false, true,  false, false,
    true,  true,  true,  false, true,  false, true,  true,  true,  true,  true,
    false, true,  false, true,  true,  false, false, true,  false, true,  true,
    true,  false, false, false, false, false, true,  false, true,  true,  false,
    true,  false, false, false, false, true,  false, false, true,  false, true,
    false, true,  true,  false, true,  false, true,  false, false, true,  false,
    true,  false, false, true,  false, true,  true,  true,  false, false, true,
    false, false, false, true,  true,  false, false, false, true,  true,  true,
    true,  false, true,  true,  false, false, false, true,  true,  false, false,
    false, false, false, false, true,  true,  true,  false, true,  true,  false,
    true,  true,  false, true,  false, true,  true,  true,  true,  false, false,
    true,  true,  true,  false, true,  true,  false, true,  false, true,  true,
    true,  false, true,  true,  true,  true,  false, true,  true,  false, true,
    true,  false, true,  false, true,  false, false, false, true,  false, false,
    true,  false, true,  true,  false, true,  true,  false, false, true,  false,
    false, false, true,  true,  false, true,  false, true,  false, true,  true,
    true,  false, false, true,  false, true,  false, true,  true,  false, true,
    true,  false, true,  false, true,  true,  true,  true,  true,  false, true,
    true,  false, true,  false, true,  true,  false, true,  true,  false, false,
    false, false, false, true,  false, true,  false, true,  true,  true,  false,
    false, true,  true,  false, false, false, false, false, true,  true,  false,
    false, true,  false, true,  false, true,  true,  true,  true,  false, true,
    false, false, false, true,  false, false, true,  false, true,  false, true,
    true,  false, true,  true,  false, true,  true,  false, true,  false, true,
    true,  false, false, true,  true,  true,  true,  false, true,  false, false,
    true,  false, false, true,  true,  false, false, false, false, true,  true,
    true,  true,  true,  true,  false, false, true,  true,  false, false, true,
    false, false, true,  false, true,  false, true,  true,  true,  true,  true,
    true,  false, false, false, false, true,  true,  true,  false, true,  true,
    true,  false, false, false, true,  false, true,  true,  true,  true,  true,
    false, true,  false, false, false, true,  true,  true,  true,  true,  false,
    true,  false, false, true,  true,  false, false, false, false, true,  false,
    true,  true,  false, false, true,  true,  false, true,  true,  true,  true,
    true,  false, true,  false, false, true,  true,  true,  false, false, true,
    false, false, true,  false, false, true,  false, true,  false, true,  false,
    true,  true,  true,  false, false, true,  false, true,  false, true,  false,
    false, false, false, true,  false, false, true,  false, true,  false, false,
    true,  true,  true,  true,  false, true,  false, true,  true,  true,  true,
    false, true,  false, true,  false, true,  true,  false, false, false, false,
    true,  true,  true,  false, false, false, true,  true,  true,  false, false,
    false, false, false, false, false, false, false, true,  false, true,  false,
    true,  true,  true,  true,  true,  true,  true,  true,  false, true,  false,
    false, true,  true,  true,  false, false, true,  true,  false, true,  false,
    false, true,  false, false, false, true,  false, true,  false, true,  false,
    true,  true,  true,  true,  true,  false, true,  false, false, true,  true,
    true,  true,  true,  true,  false, false, false, true,  true,  true,  true,
    false, true,  true,  false, false, false, true,  true,  false, false, false,
    false, true,  true,  true,  false, false, true,  false, false, true,  false,
    true,  true,  true,  false, false, false, true,  false, false, false, false,
    false, false, false, true,  false, false, true,  false, true,  false, false,
    true,  true,  false, false, true,  false, true,  true,  false, true,  true,
    true,  true,  true,  false, false, true,  false, false, false, false, true,
    true,  false, false, false, true,  true,  true,  true,  true,  false, true,
    false, false, true,  false, false, true,  true,  false, true,  false, true,
    false, true,  false, true,  false, false, true,  false, true,  true,  true,
    true,  false, true,  false, false, false, false, false, true,  true,  false,
    false, true,  true,  true,  true,  true,  false, true,  true,  false, true,
    true,  false, false, false, true,  false, false, true,  false, false, false,
    false, false, true,  false, false, true,  true,  false, true,  true,  false,
    false, false, false, false, false, false, true,  true,  true,  false, true,
    true,  true,  false, true,  false, true,  false, false, true,  false, false,
    true,  false, false, true,  false, false, false, true,  true,  false, true,
    false, false, true,  true,  true,  true,  true,  true,  false, true,  false,
    true,  true,  false, false, true,  false, true,  true,  true,  true,  false,
    false, true,  false, false, false, true,  true,  false, false, false, false,
    true,  true,  false, true,  false, false, false, true,  true,  true,  true,
    false, true,  true,  false, false, true,  true,  true,  false, true,  true,
    false, false, true,  true,  false, false, false, true,  true,  false, false,
    true,  false, true,  false, true,  true,  true,  false, true,  true,  false,
    true,  true,  true,  false, true,  false, true,  true,  true,  true,  true,
    false, false, true,  true,  false, false, true,  true,  false, true,  true,
    true,  true,  true,  false, false, false, false, false, true,  false, false,
    true,  true,  true,  true,  true,  true,  false, true,  true,  true,  false,
    false, false, true,  true,  true,  true,  true,  true,  false, true,  true,
    true,  true,  true,  false, false, true,  true,  false, false, true,  false,
    false, false, false, true,  false, false, false, false, true,  true,  false,
    false, true,  true,  true,  true,  true,  true,  false, false, true,  true,
    false, true,  true,  true,  false, false, true,  true,  false, true,  false,
    false, true,  false, false, false, false, false, true,  false, true,  true,
    false, true,  false, false, true,  false, true,  false, true,  true,  true,
    false, true,  true,  false, true,  true,  false, true,  true,  true,  true,
    false, true,  false, true,  false, true,  false, true,  true,  true,  false,
    false, false, false, true,  false, false, true,  true,  false, true,  true,
    true,  false, true,  false, true,  false, true,  false, true,  true,  false,
    false, true,  true,  false, true,  true,  true,  true,  false, true,  true,
    false, true,  true,  true,  false, true,  false, false, false, true,  true,
    false, false, true,  true,  false, false, true,  false, false, false, false,
    false, true,  true,  false, true,  false, true,  false, true,  true,  false,
    false, true,  false, false, false, true,  true,  true,  false, false, true,
    true,  true,  true,  false, false, false, true,  false, false, false
  ];

let rand3 = [
    false, true,  true,  false, false, false, false, true,  true,  true,  false,
    true,  true,  false, true,  false, false, false, false, false, false, false,
    false, false, true,  false, true,  true,  false, true,  false, true,  false,
    true,  false, true,  true,  false, true,  true,  true,  true,  false, false,
    false, false, false, false, true,  true,  false, true,  false, false, false,
    false, true,  true,  true,  false, true,  true,  true,  true,  false, false,
    false, true,  true,  false, false, false, false, true,  true,  true,  false,
    true,  true,  false, false, false, true,  true,  true,  false, false, true,
    false, false, true,  false, true,  false, true,  false, false, true,  true,
    false, false, false, false, true,  true,  false, true,  false, true,  true,
    false, false, true,  true,  true,  true,  false, true,  true,  false, true,
    false, true,  true,  false, false, false, false, true,  true,  false, true,
    true,  true,  true,  true,  true,  false, true,  true,  true,  true,  false,
    false, true,  true,  true,  true,  true,  true,  true,  true,  false, false,
    false, true,  true,  false, false, true,  true,  true,  false, false, false,
    true,  true,  true,  false, false, true,  true,  true,  true,  true,  false,
    false, true,  true,  true,  true,  true,  true,  true,  false, false, false,
    true,  false, true,  false, true,  true,  false, true,  true,  false, true,
    false, false, true,  true,  false, true,  false, true,  true,  false, false,
    false, false, true,  true,  false, true,  true,  false, false, true,  true,
    true,  false, true,  false, false, true,  true,  true,  false, true,  true,
    false, false, false, false, false, false, false, true,  true,  false, true,
    true,  false, true,  false, true,  false, false, false, false, true,  false,
    true,  false, true,  false, true,  false, true,  false, false, true,  true,
    true,  true,  false, true,  false, false, true,  true,  true,  true,  true,
    false, false, true,  true,  true,  true,  false, false, true,  true,  true,
    true,  false, true,  true,  false, false, true,  false, true,  false, true,
    true,  true,  false, true,  true,  false, true,  true,  false, true,  false,
    true,  true,  false, false, false, true,  true,  false, true,  true,  true,
    false, false, true,  true,  false, false, true,  false, true,  true,  true,
    true,  false, false, true,  false, true,  true,  true,  true,  false, true,
    true,  false, true,  false, false, false, false, true,  true,  false, true,
    true,  false, true,  true,  true,  false, true,  false, false, true,  true,
    true,  true,  true,  false, true,  false, false, false, false, true,  true,
    true,  true,  false, false, false, false, true,  true,  false, false, false,
    false, true,  false, false, false, true,  false, true,  true,  false, true,
    false, false, false, false, false, false, true,  true,  false, false, false,
    false, true,  true,  true,  false, false, false, false, false, false, true,
    true,  true,  false, true,  true,  false, false, false, true,  true,  false,
    true,  false, false, true,  true,  false, false, false, true,  true,  true,
    false, true,  false, false, false, false, false, false, true,  false, true,
    false, true,  true,  false, false, false, false, false, true,  true,  true,
    true,  true,  false, true,  true,  true,  false, false, true,  true,  true,
    true,  true,  true,  false, false, false, false, true,  true,  false, false,
    true,  true,  true,  false, true,  true,  true,  false, true,  false, true,
    false, false, true,  false, true,  false, true,  false, true,  false, false,
    false, false, true,  false, true,  true,  true,  true,  false, true,  true,
    true,  false, true,  true,  true,  true,  false, false, false, true,  true,
    false, false, true,  false, true,  true,  false, false, true,  false, false,
    false, false, true,  false, true,  false, false, true,  true,  false, true,
    false, true,  false, false, true,  true,  false, false, true,  false, true,
    false, false, false, true,  true,  false, true,  true,  true,  true,  false,
    false, true,  false, true,  true,  false, true,  false, false, false, true,
    true,  false, true,  true,  false, false, false, true,  false, false, true,
    true,  false, true,  true,  false, false, true,  true,  false, false, false,
    false, false, false, false, true,  true,  true,  true,  true,  true,  false,
    true,  false, false, true,  true,  true,  false, false, true,  false, false,
    false, true,  false, false, true,  true,  true,  false, false, false, true,
    false, false, true,  true,  true,  true,  false, true,  false, false, true,
    true,  false, false, true,  false, true,  false, false, false, true,  true,
    true,  false, false, true,  false, false, false, false, false, true,  false,
    false, true,  false, false, true,  false, false, false, false, false, true,
    true,  true,  true,  false, true,  false, false, true,  true,  false, true,
    false, true,  true,  false, false, true,  false, true,  true,  false, true,
    false, true,  false, true,  false, false, false, false, false, true,  false,
    true,  false, true,  true,  false, true,  false, true,  true,  false, false,
    true,  false, false, true,  true,  true,  true,  false, false, true,  true,
    true,  false, true,  true,  true,  false, true,  false, false, true,  true,
    true,  false, false, false, true,  false, true,  false, false, true,  true,
    false, true,  true,  false, true,  false, false, true,  false, false, true,
    false, false, true,  true,  false, true,  false, true,  true,  true,  false,
    true,  false, true,  true,  true,  false, false, true,  false, true,  true,
    true,  false, false, false, false, true,  true,  false, false, false, true,
    true,  true,  false, true,  true,  false, true,  false, true,  true,  false,
    true,  true,  true,  false, false, true,  true,  false, false, true,  true,
    true,  true,  true,  true,  true,  false, false, false, true,  false, false,
    false, false, true,  false, true,  false, true,  false, false, false, true,
    false, true,  true,  true,  false, false, true,  false, true,  false, false,
    false, true,  false, true,  true,  false, true,  true,  false, false, false,
    true,  true,  false, false, false, true,  false, false, true,  true,  false,
    true,  true,  true,  false, false, false, true,  true,  true,  false, true,
    true,  true,  false, true,  true,  true,  true,  false, false, true,  false,
    false, false, false, true,  true,  false, true,  false, false, true,  true,
    true,  true,  false, false, true,  false, false, true,  true,  true,  false,
    false, true,  true,  true,  true,  false, false, true,  true,  true,  true,
    true,  true,  true,  false, true,  true,  true,  true,  false, true,  false,
    false, true,  false, true,  false, false, true,  true,  false, true,  true,
    true,  false, true,  false, false, true,  true,  false, false, true,  true,
    true,  true,  false, false, true,  false, true,  false, true,  false, true,
    false, true,  true,  false, true,  false, true,  true,  false, true,  false,
    false, true,  false, false, false, true,  true,  true,  false, false
  ];
  
let rand = [rand0, rand1, rand2, rand3];