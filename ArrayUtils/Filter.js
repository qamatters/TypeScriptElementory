function isSmallEnough(element, index, array) {
    return (element <= 10);
}
var passed = [12, 5, 8, 130, 44].filter(isSmallEnough);
console.log("Test Value : " + passed);