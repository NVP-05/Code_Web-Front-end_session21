function sapXepVaIn() {
    let a = parseFloat(prompt("Nhập số a:"));
    let b = parseFloat(prompt("Nhập số b:"));
    let c = parseFloat(prompt("Nhập số c:"));
    let mangSo = [a, b, c];
    mangSo.sort(function(a, b){return a - b});
    console.log("Số tăng dần: " + mangSo.join(', '));
  }
  sapXepVaIn();