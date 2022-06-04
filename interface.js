

function useNasStyle() {

document.getElementById("styleToUse").href = "style.css";
currentMode=1;
}

function useBasicStyle() {

  document.getElementById("styleToUse").href = "simpleStyle.css";
  currentMode=0;
}

function toggleTheStyle(){

console.log("switching style");

if (currentMode>0)
{
useBasicStyle();

}
else {
useNasStyle();
}

console.log(currentMode);
}


//catch changes from user

let changedAnnualSalary=()=>{
  calcHourlySalary();
  annualPriceCustomerMustPay();
  hourlyPriceCustomerMustPay();

}

let changedHourlySalary=()=>{
  calcAnnualSalary();
  annualPriceCustomerMustPay();
  hourlyPriceCustomerMustPay();
}

