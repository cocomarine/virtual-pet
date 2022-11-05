# 🐩 Virtual Pet 🐕

This is my first JavaScript app created as part of the Manchester Codes Software Engineer Fasttrack course.

## Table of contents

- [Introduction](#-introduction)
- [Installation](#installation)
- [Technologies and languages](#technologies-and-languages)
- [Testing](#testing)
- [Features](#features)
- [Future improvements](#future-improvements)
- [Author](#author)


## Introduction

This is a JavaScript-based virtual pet game. The aim of the game is to create pets and keep them alive by feeding and walking. When the pets get too old, too hungry and/or too unfit, they will die so the player needs to listen to pets every so often to see if they need feeding or walking.  

## Installation

- Clone this repo
- cd into the repo directory 
- Run npm install

## Technologies and languages

- JavaScript
- Jest
- Node.js
- Node Package Manager (npm)
- Git & GitHub

## Testing

- The project was built based on the principles of Test Driven Development (TDD)
- Used the Node.js Read-Eval-Print-Loop (REPL) to test codes in terminal
- Used the Jest to run the tests

## Features

- Create an instance of the Pet object using its name as parameter
``` bash
> const pet = new Pet("Fido")
> pet
{ name: 'Fido', age: 0, hunger: 0, fitness: 10, children: [] }
```
- Every new pet starts with age 0, hunger level 0 and fitness leve 10 (these values can be modified in the code)
- Age pets using growUp method
    - The rates of changes in hunger level and fitness level are currently set at +5 and -3, respectively
- Feed pets using feed method
    - This decreases hunger level by 3
- Walk pets using walk method 
    - This increases fitness level by 4
- Check up on pets using checkUp method
- If pets reach maximum hunger level (currently set at 10), maximum age (set at 30) and/or minimum fitness level (0), they will die. 
- Pets can adopt other pets using adoptChild method. 
``` bash
> const child = new Pet('Lucy')
> pet.adoptChild(child)
> pet
{
  name: 'Fido',
  age: 0,
  hunger: 0,
  fitness: 10,
  children: [ { name: 'Lucy', age: 0, hunger: 0, fitness: 10, children: [] } ]
}
```
- Pets can also have a baby using haveBaby method. 
``` bash
> pet.haveBaby('Lucy')
> pet
{
  name: 'Fido',
  age: 0,
  hunger: 0,
  fitness: 10,
  children: [ { name: 'Lucy', age: 0, hunger: 0, fitness: 10, children: [] } ]
}
```

## Future improvements

- To add other functionalities such as playing and grooming
- To add GUI
    - I built a simple GUI version of this app : https://github.com/cocomarine/virtual-pet-gui

## Author

👤 **HJ Kang** [@cocomarine](https://github.com/cocomarine)