/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(stats) {
        this.createdAt = stats.createdAt;
        this.name = stats.name;
        this.dimensions = stats.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }
}



  class CharacterStats extends GameObject {
    constructor(charStats) {
        super(charStats);

        this.healthPoints = charStats.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage`;
    }
  }


 
 class Humanoid extends CharacterStats {
     constructor(humStats) {
         super(humStats);

        this.team = humStats.team;
        this.weapons = humStats.weapons;
        this.language = humStats.language;
     }

     greet() {
        return `${this.name} offers a greeting in ${this.language}`;
     }
 }
  
      class Hero extends Humanoid {
          constructor(heroStats) {
              super(heroStats);

            this.origin = heroStats.origin;
          }

          protect() {
            return `${this.name} declares protection over his home state of ${this.origin}!`;
          }
      }

      

  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const dwarf = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 5,
        height: 1,
      },
      healthPoints: 20,
      name: 'Gimli',
      team: 'Rock Squad',
      weapons: [
        'Axe',
      ],
      language: 'Khuzdul',
    });
  
    ``
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(dwarf.protect());
  