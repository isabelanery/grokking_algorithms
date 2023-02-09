const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}

const my_list = [1, 3, 5, 7, 9, 11, 23, 34, 43, 53, 65, 76]
console.log(binarySearch(my_list, 9))

console.log(binarySearch(my_list, -1))
