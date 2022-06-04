

var vatRate=20;//as a percentage
var employerNationalInsurance=15.05;
var secondaryThreshold=9100;
var weeksHolidays=5.6;//minimum weeks holiday to give
var pensionContributionPercentage=3;//minimum pension contributions




let calcAnnualSalary=()=>{

    hourlyRateEntered=document.getElementById("hourlyEmployeeSalary").value;
    hoursPerWeekEntered=document.getElementById("employeeHoursPerWeek").value;
    weeklyEmployeeCost=hoursPerWeekEntered*hourlyRateEntered;

    document.getElementById("annualEmployeeSalary").value=weeklyEmployeeCost*52;
    
}

let annualPriceCustomerMustPay=()=>{
    console.log("calculating");

    employeeSalary=parseInt(document.getElementById("annualEmployeeSalary").value);

//does employers NI have to be paid?
    if (employeeSalary>secondaryThreshold){
    employerNationalInsuranceCost=(employeeSalary-secondaryThreshold)*employerNationalInsurance/100;
    
    }
    else{
        employerNationalInsuranceCost=0;
        }

    document.getElementById("employerNI").innerHTML=employerNationalInsuranceCost;

    pensionContribution=employeeSalary*pensionContributionPercentage/100;
    document.getElementById("employerPension").innerHTML=pensionContribution;
grossEmployeeCosts=(employeeSalary+pensionContribution+employerNationalInsuranceCost);
vatPayable=grossEmployeeCosts*vatRate/100;
document.getElementById("vat").innerHTML=vatPayable.toFixed(2);
document.getElementById("totalExtraCharges").innerHTML=(pensionContribution+vatPayable+employerNationalInsuranceCost).toFixed(2);

    document.getElementById("annualChargeToCustomer").innerHTML=(grossEmployeeCosts+parseInt(vatPayable)).toFixed(2);
        console.log("calculated");
        hourlyPriceCustomerMustPay();
        }

    
let hourlyPriceCustomerMustPay=()=>{
    console.log("calculating");
    
    amountPerYear=document.getElementById("annualChargeToCustomer").innerHTML;
    hoursPerWeekEntered=document.getElementById("employeeHoursPerWeek").value;

    document.getElementById("hourlyChargeToCustomer").innerHTML=(amountPerYear/hoursPerWeekEntered/(52-weeksHolidays)).toFixed(2);

    console.log("calculated");


    }

let calcHourlySalary=()=>{

    annualRateEntered=document.getElementById("annualEmployeeSalary").value;
    
    hoursPerWeekEntered=document.getElementById("employeeHoursPerWeek").value;
    weeklyEmployeeCost=annualRateEntered/52;

    document.getElementById("hourlyEmployeeSalary").value=weeklyEmployeeCost/hoursPerWeekEntered;
    
}


let comparedToFreeLancer=()=>{

    howMuchMoneySaved=(document.getElementById("hourlyChargeToCustomer").innerHTML-document.getElementById("hourlyEmployeeSalary").value).toFixed(2);
    howMuchMoneySavedAsPercentage=(100*howMuchMoneySaved/document.getElementById("hourlyEmployeeSalary").value).toFixed(0);
    howMuchExtraTimeCouldBePutInstead=(howMuchMoneySavedAsPercentage*60/100).toFixed(0);

    document.getElementById("freeLancerSavings").innerHTML="Using a free lancer would save you £"+howMuchMoneySaved+" per hour,"+howMuchMoneySavedAsPercentage+"% cheaper or "+howMuchExtraTimeCouldBePutInstead+"mins more time be put into the project every hour"
}
