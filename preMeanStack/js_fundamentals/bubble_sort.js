function bubbleSort(arr) {
    var x = arr.length - 1;
    for (var i = 0; i < x; i++) {
        for (var j = 0; i < x - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
        x--;


    }
    return arr;



}

console.log(bubbleSort([5, 6, 3, 2, 1, ]));