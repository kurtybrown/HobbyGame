import {Person} from "./hobbyGame"

let persona1 = new Person("Felipe", "portugues","developer", 12);

let persona2 = new Person("Omar", "guinean", "tester", 3);

let persona3 = new Person("Candela", "uruguayan", "developer", 4);

let persona4 = new Person("Amelia", "italian", "director", 19);


persona1.setName("Gabriel");

persona2.setNationality("albanian");

persona3.setProfession("manager");

persona4.setExperienceYears(23);


persona1.showAttributesConsole();

console.log(persona2.getNationality());

console.log(persona3.getProfession());

persona4.showAttributes();