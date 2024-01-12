function tinhBMI() {
    let weight = parseFloat(prompt("Nhập cân nặng (kg):"));
    let height = parseFloat(prompt("Nhập chiều cao (m):"));
    let bmi = weight / (height ** 2);
    if (bmi < 18.5) {
      console.log("BMI: " + bmi.toFixed(2) + "\nPhân loại: Dưới cân");
    } else if (bmi >= 18.5 && bmi < 25) {
        console.log("BMI: " + bmi.toFixed(2) + "\nPhân loại: Bình thường");
    } else if (bmi >= 25 && bmi < 30) {
        console.log("BMI: " + bmi.toFixed(2) + "\nPhân loại: Thừa cân");
    } else if( bmi >= 30 && bmi < 35){
        console.log("BMI: " + bmi.toFixed(2) + "\nPhân loại: Béo phì 1");
    }else if( bmi >= 35 && bmi < 40){
        console.log("BMI: " + bmi.toFixed(2) + "\nPhân loại: Béo phì 2");
    }else {
        console.log("BMI: " + bmi.toFixed(2) + "\nPhân loại: Béo phì 3");
    }
  }
  tinhBMI();