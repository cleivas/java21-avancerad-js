import {dog1, dog2} from "./modules/dogs.js";
import {displayName, displayH1} from "./modules/display.js";

dog1.bark();
console.log( dog2.name);

displayName(dog1);
displayName(dog2);

displayH1(5, 100);
displayH1(3, 260);