export function isBigEnough(element, index, array) { 
    return (element >= 10); 
 } 
           
 let result = [12, 5, 8, 130, 44].every(isBigEnough); 
 console.log("Test Value : " + result );