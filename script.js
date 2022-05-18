function compute()
{
    let principal = document.getElementById("principal").value;

    // validate principal is a positive number
    if (principal < 1){
        alert("Amount has to be a positive quantity")
        principal.focus()
        return
    }

    // get the values needed for interest computation
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100; 
    
    // logic to compute 'No of Years' into the actual year in future
    let year = new Date().getFullYear()+parseInt(years); 

    // display result
    result = document.getElementById("result")
    document.getElementById("result").innerHTML = `If you deposite <mark>${principal}</mark>,<br>at an interest rate of <mark>${rate}</mark>%\<br\>You will receive an amount of <mark>${interest}</mark>,\<br\>in the year <mark>${year}</mark>`; 
}   

// ensure that the rate slider is working in real time
function updateRate()
{
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        