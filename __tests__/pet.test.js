const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
      });

    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });

    it('has an initial hunger of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });
  });

describe('growUp', () => {

    it('increase the age by 1', () => {   
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    it('increase the hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });

    it('decrease the fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });

    it('throw an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
});

describe('walk', () => {
    it('increase the fitness by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.walk();
        
        expect(pet.fitness).toEqual(8);
    });
    
    it('increase the fitness to maximum of 10', () => {
        const pet = new Pet('Fido');
        pet.fitness = 7;
        pet.walk();
        
        expect(pet.fitness).toEqual(10);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {

    it('decrease the hunger level by 3', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.feed();
        
        expect(pet.hunger).toEqual(2);
    });

    it('decrease the hunger level to minimum of 0', () => {
        const pet = new Pet('Fido');
        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('checkUp', () => {
    it('if fitness is 3 or less, return "I need a walk"', () => {
        const pet = new Pet('Fido');
        pet.fitness = 1;
        pet.hunger = 3;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I need a walk');
    });

    it('if hunger level is 5 or more, return "I am hungry"', () => {
        const pet = new Pet('Fido');
        pet.fitness = 5;
        pet.hunger = 6;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I am hungry');
    });

    it('if both of the above are true, return "I am hungry AND I need a walk"', () => {
        const pet = new Pet('Fido');
        pet.fitness = 1;
        pet.hunger = 6;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('if both of the above are true, return "I feel great!"', () => {
        const pet = new Pet('Fido');
        pet.fitness = 5;
        pet.hunger = 3;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I feel great!');
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(pet.checkUp()).toBe('Your pet is no longer alive :(');
    });
    
});


describe('isAlive', () => {

    const pet = new Pet('Fido');

    it('if fitness is 0 or less, return false', () => {
        pet.fitness = -3;
        pet.hunger = 5;
        pet.age = 10;

        expect(pet.isAlive).toBeFalsy();
    });

    it('if hunger is 10 or more, return false', () => {
        pet.fitness = 3;
        pet.hunger = 12;
        pet.age = 10;

        expect(pet.isAlive).toBeFalsy();
    });

    it('if age is 30 or more, return false', () => {
        pet.fitness = 3;
        pet.hunger = 5;
        pet.age = 32;

        expect(pet.isAlive).toBeFalsy();
    });

    it('if none of above, return true', () => {
        pet.fitness = 3;
        pet.hunger = 5;
        pet.age = 10;

        expect(pet.isAlive).toBeTruthy();
    });
})

describe('adoptChild', () => {

    const parent = new Pet('Yeppi');
    const child1 = new Pet('Happy');

    it('adopt a child with children property of array \
    where the first element is the child instance you passed', () => {
        parent.adoptChild(child1);

        expect(parent.children).toEqual([ { name: 'Happy', age: 0, hunger: 0, fitness: 10, children: [] } ]);
    });

    it('adopt two more children, resulting in three children', () => {
        const child2 = new Pet('Doory');
        const child3 = new Pet('Nyangi');
        parent.adoptChild(child2);
        parent.adoptChild(child3);

        expect(parent.children).toEqual(
            [ 
                { name: 'Happy', age: 0, hunger: 0, fitness: 10, children: [] },
                { name: 'Doory', age: 0, hunger: 0, fitness: 10, children: [] },
                { name: 'Nyangi', age: 0, hunger: 0, fitness: 10, children: [] } 
            ]);
    });

    it('increase first child Happy\'s age by 2', () => {
        parent.children[0].growUp();
        parent.children[0].growUp();

        expect(parent.children[0].age).toEqual(2);
    });

    it('increase third child Nyangi\'s age by 1, take her to walk and feed her', () => {
        parent.children[2].growUp();
        parent.children[2].walk();
        parent.children[2].feed();

        expect(parent.children[2]).toEqual(
            { name: 'Nyangi', age: 1, hunger: 2, fitness: 10, children: [] } 
        );
    });

    it('when a dead pet adopts a child, throw an error', () => {
        parent.age = 30;
        const child4 = new Pet('Congi');
        
        expect(() => parent.adoptChild(child4)).toThrow('Your pet is no longer alive :(');

    });
});

describe('haveBaby', () => {

    const parent = new Pet('Yeppi');

    it('create a baby object inside pet', () => {
        parent.haveBaby('Happy');

        expect(parent.children).toEqual([ { name: 'Happy', age: 0, hunger: 0, fitness: 10, children: [] } ]);
    });

    it('create two more baby objects inside pet', () => {
        parent.haveBaby('Doory');
        parent.haveBaby('Nyangi');

        expect(parent.children).toEqual(
            [ 
                { name: 'Happy', age: 0, hunger: 0, fitness: 10, children: [] },
                { name: 'Doory', age: 0, hunger: 0, fitness: 10, children: [] },
                { name: 'Nyangi', age: 0, hunger: 0, fitness: 10, children: [] } 
            ]);
    });

    it('increase first child Happy\'s age by 2', () => {
        parent.children[0].growUp();
        parent.children[0].growUp();

        expect(parent.children[0].age).toEqual(2);
    });

    it('increase third child Nyangi\'s age by 1, take her to walk and feed her', () => {
        parent.children[2].growUp();
        parent.children[2].walk();
        parent.children[2].feed();

        expect(parent.children[2]).toEqual(
            { name: 'Nyangi', age: 1, hunger: 2, fitness: 10, children: [] } 
        );
    });

    it('when a dead pet adopts a child, throw an error', () => {
        parent.age = 30;
        
        expect(() => parent.haveBaby('Congi')).toThrow('Your pet is no longer alive :(');

    });
});

