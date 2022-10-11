const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
    get isAlive() {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30;
    }
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    };
};

Pet.prototype.feed = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if ((this.hunger - 3) >= MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    };
};

Pet.prototype.checkup = function() {
    if (this.fitness <= 3) {
        if (this.hunger >= 5) {
            return 'I am hungry AND I need a walk';
        }
        return 'I need a walk';
    } else if (this.hunger >= 5) {
        return 'I am hungry';
    } else {
        return 'I feel great!';
    };
};


module.exports = Pet;