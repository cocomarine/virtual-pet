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

    // const pet = new Pet('Fido');

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
});

describe('checkup', () => {
    it('if fitness is 3 or less, return "I need a walk"', () => {
        const pet = new Pet('Fido');
        pet.fitness = 1;
        pet.hunger = 3;
        pet.checkup();

        expect(pet.checkup()).toBe('I need a walk');
    });

    it('if hunger level is 5 or more, return "I am hungry"', () => {
        const pet = new Pet('Fido');
        pet.fitness = 5;
        pet.hunger = 6;
        pet.checkup();

        expect(pet.checkup()).toBe('I am hungry');
    });

    it('if both of the above are true, return "I am hungry AND I need a walk"', () => {
        const pet = new Pet('Fido');
        pet.fitness = 1;
        pet.hunger = 6;
        pet.checkup();

        expect(pet.checkup()).toBe('I am hungry AND I need a walk');
    });

    it('if both of the above are true, return "I feel great!"', () => {
        const pet = new Pet('Fido');
        pet.fitness = 5;
        pet.hunger = 3;
        pet.checkup();

        expect(pet.checkup()).toBe('I feel great!');
    });
});