function printArray(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printArraySafe(arr: (number | string)[]): void {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      console.log(arr[i]);
    } else {
      console.log(`Non-number element: ${arr[i]}`);
    }
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray); 

const myArray2: (number | string)[] = [1, 2, 3, "4", 5];
printArraySafe(myArray2); //This will now work correctly