module.exports.calculate = function(formula, radius){
    let value = 0;
    const PI = 3.1416;

    switch(formula){
        case 'p':
            console.log("Perimeter");
            formula = "perimeter";
            value = 2*PI*radius;
            break;
        case 'a':
            console.log("Area");
            formula = "area";
            value = PI * radius * radius;
            break;
        case 'v':
            console.log("Volume");
            formula = "volume";
            value = (4*PI*radius*radius*radius)/3;
            break;
        default:
            console.log("Default");
            formula = "unknown";
    }

    value = value.toFixed(2);

    return `The ${formula} of a circle with radius ${radius} is ${value}`;
}