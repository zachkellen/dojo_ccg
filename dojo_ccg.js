class Card {
    constructor(name, cost) {
        this.name = name,
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name,cost),
        this.power = power,
        this.res = res
    }

    attack(target) {
        if(target instanceof Unit){
            console.log(`${this.name} attacks ${target.name} for ${this.power} damage!`)
            target.res -= this.power
        } else {
            throw new Error("Target must be a unit")
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude, text) {
        super(name, cost),
        this.stat = stat,
        this.magnitude = magnitude,
        this.text = text
    }

    play(target) {
        if(target instanceof Unit){
            if(this.stat = 'res'){
                console.log(this.text)
                target.res += this.magnitude
            }
            else if(this.stat = 'power'){
                console.log(this.text)
                target.power += this.magnitude
            }
        } else {
            throw new Error("Target must be a unit")
        }
    }
}

const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4)
const hardAlgo = new Effect('Hard Algorithm', 2, 'res', 3, "increase target's resilience by 3")
hardAlgo.play(redBeltNinja)
console.log(redBeltNinja)

const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4)
const unhandledPromise = new Effect('Unhandled Promise Rejection', 1, 'res', -2, "reduce target's resilience by 2")
unhandledPromise.play(redBeltNinja)
console.log(redBeltNinja)
console.log(blackBeltNinja)

const pairProgramming = new Effect('Pair Programming', 3, "power", 2, "increase target's power by 2")
pairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)
console.log(blackBeltNinja)