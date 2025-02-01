function printArray(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray); //This works fine

const myArray2: (number | string)[] = [1, 2, 3, "4", 5];
printArray(myArray2); //This will throw an error because the function expects only numbers