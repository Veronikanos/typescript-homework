interface ObjectShape {
  id: number;
  name: string;
}

const team: ObjectShape[] = [
  {
    id: 1,
    name: 'Alex',
  },
  {
    id: 2,
    name: 'Kate',
  },
  {id: 3, name: 'Ben'},
  {id: 4, name: 'Nika'},
];

function updateObjectInArray<ObjectShape>(
  initialArray: ObjectShape[],
  key: keyof ObjectShape,
  value: ObjectShape[keyof ObjectShape],
  patch: Partial<ObjectShape>
): ObjectShape[] {
  const newArray: ObjectShape[] = [...initialArray];
  const index: number = newArray.findIndex(
    (elem: ObjectShape) => elem[key] === value
  );

  if (index !== -1) {
    newArray[index] = {...newArray[index], ...patch};
  }
  console.log(newArray);
  return newArray;
}

updateObjectInArray<ObjectShape>(team, 'id', 3, {name: 'Jane'});
