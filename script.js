const form_el = document.getElementById('frm')
const silder_el = document.getElementById('range');
const years_el = document.getElementById('years');
const el_amount = document.getElementById('amount')

const validate = (el)=>{
    if(el.value<=0 || el.value == ""){
        window.alert('enter a positive number please!')
        el.focus()
        return false
    }
    else{
        return true
    }
}




silder_el.addEventListener("change",function(){
    var span_value = document.getElementById('range_value_span')
    span_value.innerText = (silder_el.value)+'%';
})


console.log(el_amount.value)

// console.log(span_value);
// span_value.innerHTML(22)




function compute() {
    var principal = el_amount.value;
    var rate = silder_el.value;
    var years = years_el.value; 
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
    
    if (principal <= 0) {
        alert('Please enter a positive number!');
        el_amount.focus();
    }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    } 
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

form_el.addEventListener("submit",(eve)=>{
    eve.preventDefault();
    if (!validate(el_amount)){return};
    if (!validate(years_el)){return};
    if (!validate(silder_el)){return};
    compute()
    


})