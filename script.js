let decimalBox = document.getElementById("decimal");
let binaryBox = document.getElementById("binary");

// decimal to binary function
const decToBin = (decimal) => {
    let result = "";
    if (decimal > 1) {
        while (decimal != 0) {
            if (decimal % 2 == 0) {
                result = 0 + result;
                decimal = decimal / 2;
            } else {
                result = 1 + result;
                decimal = (decimal - 1) / 2;
            }
        }
    } else if (decimal == 1) {
        return 1;
    }
    else if (decimal == 0) {
        return 0;
    }
    return result;
}

// binary to decimal function
const binToDec = (binary) => {
    let result = 0;
    let binaryString = binary.toString();

    if (binary > 1) {
        for (let i = 0; i < binaryString.length - 1; i++) {
            if (i == 0) {
                result = result + (binaryString[i] * 2) + (binaryString[i + 1] * 1);
            } else {
                result = (result * 2) + (binaryString[i + 1] * 1);
            }
        }
    } else if (binary == 1) {
        return 1;
    } else if (binary == 0) {
        return 0;
    }

    return result;
}

const decimal = (num) => {
    var bin = decToBin(num.target.value);
    binaryBox.value = bin;
}

const binary = (num) => {
    var dec = binToDec(num.target.value);
    decimalBox.value = dec;
}

decimalBox.addEventListener('change', decimal, false);
binaryBox.addEventListener('change', binary, false);

// make binary input feild accept only numbers with 1 and 0
binaryBox.addEventListener('input' , function (e) {
    e.target.value = e.target.value.replace(/[^0-1]/g, '').replace(/(.{})/g, '$1 ').trim();
})