function describe(fruitName) {
    switch (fruitName){
        case "Peach":
            console.log("It's sweet");
            break;
        case "Orange":
            console.log("It's juicy");
            break;
        case "Apple":
            console.log("It's tasty");
            break;
        default:
            console.log("I don't know such fruit");
            break;
    }
}

describe("Apple");