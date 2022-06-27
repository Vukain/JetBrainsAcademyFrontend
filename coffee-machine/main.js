// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

class CoffeeMachine {

    constructor() {
        this.resources = {
            "water": 400,
            "milk": 540,
            "beans": 120,
            "cups": 9,
            "money": 550
        };
        this.espresso = {
            "water": 250,
            "milk": 0,
            "beans": 16,
            "cups": 1,
            "money": 4
        };
        this.latte = {
            "water": 350,
            "milk": 75,
            "beans": 20,
            "cups": 1,
            "money": 7
        };
        this.cappuccino = {
            "water": 200,
            "milk": 100,
            "beans": 12,
            "cups": 1,
            "money": 6
        };
        this.state = "main";
        this.working = true;
        this.fillingItems = [{
                item: 'water',
                desc: 'ml of water'
            },
            {
                item: 'milk',
                desc: 'ml of milk'
            },
            {
                item: 'beans',
                desc: 'grams of coffee beans'
            },
            {
                item: 'cups',
                desc: ' disposable cups'
            }
        ];
    };

    status = () => {
        console.log(`The coffee machine has: 
${this.resources['water']} of water 
${this.resources['milk']} of milk 
${this.resources['beans']} of coffee beans 
${this.resources['cups']} of disposable cups 
${this.resources['money']}$ of money`)
    };

    buyer = (coffee_type) => {
        let possible = true;

        for (const key in coffee_type) {
            if (coffee_type[key] > this.resources[key]) {
                console.log(`Sorry, not enough ${key}`);
                possible = false;
                break
            };
        };

        if (possible) {
            console.log('Making cofee')
            for (const key in coffee_type) {
                if (key == "money") {
                    this.resources[key] += coffee_type[key]
                } else {
                    this.resources[key] -= coffee_type[key]
                };
            };
        };
    };

    picker = (order) => {
        let coffee;
        switch (order) {
            case "1":
                coffee = this.espresso
                break
            case "2":
                coffee = this.latte
                break
            case "3":
                coffee = this.cappuccino
                break
            default:
                console.log('Error');
        };
        this.buyer(coffee);
    };

    filler = () => {
        for (const item of this.fillingItems) {
            console.log(`Write how many ${item.desc} do you want to add: `);
            const order = parseInt(input());
            this.resources[item.item] += parseInt(order);
        };
        this.state = "main";
    }
    using = () => {
        while (this.working) {
            switch (this.state) {
                case "main":
                    console.log("Write action (buy, fill, take, remaining, exit): ");
                    const cmd = input();
                    switch (cmd) {
                        case 'buy':
                            this.state = "buying";
                            break;
                        case 'fill':
                            this.state = "filling";
                            break;
                        case "take":
                            console.log(`I gave you ${this.resources['money']}`)
                            this.resources['money'] = 0;
                            break;
                        case 'remaining':
                            this.status()
                            break;
                        case "exit":
                            this.working = false;
                            break;
                        default: 
                            console.log("Unrecognized command");
                    };
                    break;
                case "buying":
                    const product = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ")
                    if (product !== "back") {
                        this.picker(product)
                    };
                    this.state = "main";
                    break;
                case 'filling':
                    this.filler();
                    break;
                default:
                    console.log("Bad state");
                };
            };
        };
    };

cafroboto = new CoffeeMachine()
cafroboto.using()