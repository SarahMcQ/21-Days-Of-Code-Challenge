// #19
// Instructions
// Each item differs in both cost and the grams of pumpkin spice per serving. To help festival-goers maximize their pumpkin spice consumption, help them determine the maximum amount of pumpkin spice they can ingest with the amount of money they are bringing to the festival.

// A slice of pumpkin pie costs $5 each, and include a whopping 30g of pumpkin spice
// Pumpkin spice lattes cost $3 each, and include 15g of pumpkin spice
// Pumpkin spice macarons cost $1 each, and include 3g of pumpkin spice

// We need to write a function, pumpkinSpice(money) that will take in a number, or how much the festival-goer has to spend on treats, and return an array with the 4 elements as outlined below:

// The first element should represent how many slices of pumpkin pie the client can buy
// The second element should represent how many pumpkin spice lattes the client can buy
// The third element should represent how many pumpkin spice macarons the client can buy
// The fourth element should represent how many grams of pumpkin spice the client will be buying
// Our function should start by calculating how many slices of pumpkin pie we can buy. Then, we'll want to use the remaining money to do the calculations for the lattes, followed lastly by the macarons.


const pumpkinSpice = money => {

    var totals = [0, 0, 0, 0];

    const pie = {
        cost: 5,
        grams: 30,
        purchased: 0
    }
    const latte = {
        cost: 3,
        grams: 15,
        purchased: 0
    }
    const macarons = {
        cost: 1,
        grams: 3,
        purchased: 0
    }

    const updateFood = (item) => {
        money -= item.cost;
        totals[3] += item.grams
        item.purchased += 1;
    };

    while (money >= pie.cost) {
        updateFood(pie);

    }

    while (money < pie.cost && money >= latte.cost) {
        updateFood(latte);
    }

    while (money > 0) {
        updateFood(macarons);
    }

    return [pie.purchased, latte.purchased, macarons.purchased, totals[3]];



}