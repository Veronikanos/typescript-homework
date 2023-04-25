"use strict";
const team = [
    {
        id: 1,
        name: 'Alex',
    },
    {
        id: 2,
        name: 'Kate',
    },
    { id: 3, name: 'Ben' },
    { id: 4, name: 'Nika' },
];
function updateObjectInArray(initialArray, key, value, patch) {
    const newArray = [...initialArray];
    const index = newArray.findIndex((elem) => elem[key] === value);
    if (index !== -1) {
        newArray[index] = Object.assign(Object.assign({}, newArray[index]), patch);
    }
    console.log(newArray);
    return newArray;
}
updateObjectInArray(team, 'id', 3, { name: 'Jane' });
