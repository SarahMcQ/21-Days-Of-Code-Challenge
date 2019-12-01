// #20
// Instructions:Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.

// In this challenge, we'll need to implement four functions.

// The first three will calculate the volume of the individual shapes:

// sphereVolume()will calculate the volume of a sphere given a radius
// coneVolume() will calculate the volume of a cone given a radius and a height
// prismVolume() will calculate the volume of a prism given a height, a width, and a depth

// The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.

// Don't worry about getting the answers to the perfect precision: our tests will check to see that you're within a correct range.

// Use the value below whenever you need the value of Pi

const PI = 3.14159


const sphereVolume = function (radius) {

    var volume = (4 / 3) * PI * Math.pow(radius, 3);


    return volume;

}

const coneVolume = function (radius, height) {


    var cone = PI * Math.pow(radius, 2) * height / 3;

    return cone;

}

const prismVolume = function (height, width, depth) {


    var prism = height * width * depth;

    return prism;
}

const totalVolume = function (solids) {

    var total = 0;

    for (const solid of solids) {

        if (solid.type === 'sphere') {
            total += sphereVolume(solid.radius);
        } else if (solid.type === 'cone') {
            total += coneVolume(solid.radius, solid.height);
        } else if (solid.type === 'prism') {
            total += prismVolume(solid.height, solid.width, solid.depth);
        }

    }
    return total;
}