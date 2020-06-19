
var dateInput = document.getElementById("date_input");
var amountInput = document.getElementById("amount_input");
var interestInput = document.getElementById("interest_input");
var calculateBtn = document.getElementById("calculate_btn");

// EVENT LISTENERS
dateInput.addEventListener("change", function () {
    new validateInputFields().validateDateInput();
});

amountInput.addEventListener("focus", function () {
        new cleartInputFields().clearAmountInputField();
});
amountInput.addEventListener("change", function () {    
    new validateInputFields().validateAmountInput();
    new convertInputFields().getAmountInputValues();
});

interestInput.addEventListener("focus", function () {
    new cleartInputFields().clearInterestInputField();
});
interestInput.addEventListener("change", function () {
    new validateInputFields().validateInterestInput();
    new convertInputFields().getInterestInputValues();
});

calculateBtn.addEventListener("click", function () {
    new calculateInputFields().CalculationTotal();
});
// EVENT LISTENERS //

// VALIDATE INPUTFILEDS
function validateInputFields () {

    // VALIDATE DATE FORMAT  
    this.validateDateInput = function () {

        // var curentDate = new Date();
    
        var dateItems = dateInput.value.split("/", 3);
        var dd = dateItems[0];
        var mm = dateItems[1];
        var yyyy = dateItems[2];

        var leapYear = ((yyyy % 4 == 0) && (yyyy % 100 != 0)) || (yyyy % 400 == 0);
        
        var datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

        if (!datePattern.test(dateInput.value)) {

            alert("Please follow the correct format DD/MM/YYYY");

            dateInput.style.border = "1px solid red";
            dateInput.value = "";
            return false;
        }
        if (dd < 1 || dd > 31) {
            alert("Enter a day between 1 & 31");
            dateInput.style.border = "1px solid red";
            dateInput.value = "";
            return false;
        }
        if (mm < 1 || mm > 12) {
            alert("Enter a month between 1 & 12");
            dateInput.style.border = "1px solid red";
            dateInput.value = "";
            return false;
        }
        if (yyyy < 1900 || yyyy > 2020) {
            alert("Enter a year between 1900 & 2020");
            dateInput.style.border = "1px solid red";
            dateInput.value = "";
            return false;
        }
        else {
            dateInput.style.border = "1px solid limegreen";
        }

        switch (+mm) {
            case 2: if (leapYear) {
                       if (dd > 29) {
                            alert("February" + yyyy + " Only has 29 days");
                            dateInput.style.border = "1px solid red";
                            dateInput.value = "";
                            return false;
                        }
                    } else if (dd > 28) {
                        alert("February" + yyyy + " Only has 28 days");
                        dateInput.style.border = "1px solid red";
                        dateInput.value = "";
                        return false;
                    }
                    break;

            case 4:
            case 6:
            case 9:
            case 11: if (dd > 30) {
                        alert (mm + " Only has 30 days");
                        dateInput.style.border = "1px solid red";
                        dateInput.value = "";
                        return false;
            }
            break;
        }
    };
    // VALIDATE DATE FORMAT

    // VALIDATE AMOUNT INPUT
    this.validateAmountInput = function () {

        if (isNaN(+amountInput.value)) {
            
            alert("Please enter a valid number (Starting Amount)");

            amountInput.style.border = "1px solid red";
            amountInput.value = "";
        }
        else {
            amountInput.style.border = "1px solid limegreen";
        }
    };
    // VALIDATE AMOUNT INPUT

    // VALIDATE INTEREST INPUT
    this.validateInterestInput = function () {

        if (isNaN(+interestInput.value)) {

            alert("Please enter a valid number (Interest Rate)");

            interestInput.style.border = "1px solid red";
            interestInput.value = "";

        }else {
            interestInput.style.border = "1px solid limegreen";
        }
    };
    // VALIDATE INTEREST INPUT 
}
// VALIDATE INPUTFILEDS

// CLEAR INPUT FIELDS
function cleartInputFields () {

    this.clearAmountInputField = function () {
        amountInput.value = "";
        amountInput.style.border = "";
    };
    this.clearInterestInputField = function () {
        interestInput.value = "";
        interestInput.style.border = "";
    };
}
// CLEAR INPUT FIELDS

// CONVERT INPUT FIELDS
function convertInputFields () {

    this.getAmountInputValues = function () {

        this.amountInputValue = Number(amountInput.value).toFixed(2);
        amountInput.value = "\u20AC " + (this.amountInputValue);
    };
    this.getInterestInputValues = function () {

        this.interestInputValue = Number(interestInput.value).toFixed(1);
        interestInput.value = "\45 " + (this.interestInputValue);
    };
}
// CONVERT INPUT FIELDS

// CALCULATE INPUT FIELDS
function calculateInputFields () {

    this.CalculationTotal = function () {

        var amountParts = (amountInput.value.split(" "));
        var amountValue = parseInt(amountParts[1]);
        var newAmount = amountValue;
    
        var interestParts = (interestInput.value.split(" "));
        var interestValue = (parseInt(interestParts[1]));
        // var interestCalculation = ((interestValue / 100)) + 1;

        var yearsTotal = "";
        var yearsCount = "";

        var newTotal = newAmount * 2;
        var amountValueTotal = "";
        var interestTotal = "";

        while (newAmount < newTotal) {

            newAmount = newAmount * (1 + (interestValue / 100));

            amountValueTotal += "\u20AC " + (newAmount).toFixed(2) + "<br>" + "<br>";
            interestTotal += (newAmount - amountValue).toFixed(2) + " \45" + "<br>" + "<br>";

            yearsTotal++;
            yearsCount += (yearsTotal) + "<br>" + "<br>";
        }

        if (amountInput.value.length <= 0 || interestInput.value.length <= 0) {
            alert ("Enter complete amounts to calculate");
        }
        else {
            document.getElementById("years_count").innerHTML = yearsCount;
        
            document.getElementById("total_amount").innerHTML = amountValueTotal;
        
            document.getElementById("total_interest").innerHTML = interestTotal;
        }
    };
}
// CALCULATE INPUT FIELDS