function timSoLonNhat() {
    let a = parseFloat(prompt("Nhập số a:"));
    let b = parseFloat(prompt("Nhập số b:"));
    let c = parseFloat(prompt("Nhập số c:"));
    let soLonNhat = Math.max(a, b, c);
    console.log("Số lớn nhất là: " + soLonNhat);
  }
  timSoLonNhat();