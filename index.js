// Code your solution in this file!
// .shift(takes at the start)*only one and .pop(takes from the end of array)
// Use splice() for more than one
// Use slice() to extract and return as new array
// .push(adds at the end) and .unshift(adds at the beginning)

const returnFirstTwoDrivers = AnonymousFun => { 
    return AnonymousFun.slice(0,2);
}
const returnLastTwoDrivers = AnonymousFun2 => {
    return AnonymousFun2.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(b){   
    return function(paidFare){
        return paidFare * b;
    };
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, selectFun) => {
    
    return selectFun(drivers);
}