var a = prompt("Nhập vào một số bất kỳ:");
var b = parseFloat(a);
if (!isNaN(b)) {
    if (b % 2 === 0) {
        console.log(b + " là số chẵn.");
    } else {
        console.log(b + " là số lẻ.");
    }
} else {
    console.log("Đây không phải là một số hợp lệ.");
}