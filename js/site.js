//Take User Input and Prints Numbers to the Page
document.getElementById("click").addEventListener("click", () => {
    let kNum = parseInt(document.getElementById("kNum").value);

    //Comparisons
    let arr = new Array;
    arr = [10, 20, 15, 3, 7, 22];
    if (checkNum(arr, kNum) === true) {
        document.getElementById("result").innerHTML = "your number, " + kNum +
            ", does have numbers in the array that equal it.";
    } else {
        document.getElementById("result").innerHTML = "your number, " + kNum +
            ", does not have numbers in the array that equal it.";
    }
})

//Step 3: Display Result
function checkNum(arr, kNum) {
    let trueVal = -1
    for (let i = 0; i < arr.length; i++) {
        trueVal = arr.indexOf(kNum - arr[i]);
    }
    if (trueVal != -1) {
        return true;
    } else {
        return false;
    }
}