var inputForm = document.getElementById("add_participant");
var outputTable = document.getElementById("output_table");
var numSelect = document.getElementById("number_select");

// ADD PARTICIPANT LISTENERS
var addBtn = document.getElementById("add_btn");
(function addParticipantListener () {

    addBtn.addEventListener("click", function () {
        validateInputFields();
    });

    inputForm.addEventListener("keydown", function () {
        var enterKeyAdd = event.keyCode;

        if (enterKeyAdd === 13) {
            validateInputFields();
        }
    });
}());
// ADD PARTICIPANT LISTENERS

// REMOVE PARTICIPANT LISTENERS
var removeBtn = document.getElementById("remove_btn");
(function removeParticipantListener () {

    removeBtn.addEventListener("click", function () {
        removeParticipant();
    });

    numSelect.addEventListener("keydown", function () {
        var enterKeyRemove = event.keyCode;

        if (enterKeyRemove === 13) {
            removeParticipant();
        }
    });
}());
// REMOVE PARTICIPANT LISTENERS

// FUNCTION VALIDATE INPUT FIELDS
function validateInputFields () {

    var points = inputForm.elements.namedItem("t_points").value;
    var check = /^\d+$/;
    var results = points.match(check);

    if (inputForm.elements.namedItem("f_name").value == "") {
        alert("Incomplete First Name");
        inputForm.getElementsByTagName("input")[0].focus();
        return false;
    }
    if (inputForm.elements.namedItem("l_name").value == "") {
        alert("Incomplete Last Name");
        inputForm.getElementsByTagName("input")[1].focus();
        return false;
    }
    if (inputForm.elements.namedItem("t_points").value == "") {
        alert("Add a score");
        inputForm.getElementsByTagName("input")[2].focus();
        return false;
    }
    if (isNaN(inputForm.elements.namedItem("t_points").value)) {
        alert("Numbers Only");
        inputForm.getElementsByTagName("input")[2].focus();
        return false;
    }
    if (points.value == results) {
        alert("Numbers Only");
        inputForm.getElementsByTagName("input")[2].focus();
        return false;
    }
    else {
        addParticipant();
    }
}
// FUNCTION VALIDATE INPUT FIELDS

// FUNCTION ADD ROWS
function addParticipant () {

    numSelect.disabled = false;
    removeBtn.disabled = false;

    var i;
    var newParticipant = [];
    var newRow = outputTable.insertRow();
    var addPosition = newRow.insertCell(0);

    for (i = 0; i < inputForm.length; i++) {
        newParticipant[i] = inputForm.elements[i].value;
    }
    
    for (i = 0; i < 3; i++) {
        var newCell = newRow.insertCell(-1);
        newCell.innerHTML = newParticipant[i];

        newParticipant[0] = (outputTable.rows.length) - 1;
        addPosition.innerHTML = newParticipant[0];

        inputForm.elements[i].value = "";
    }
    sortingRows();
}
// FUNCTION ADD ROWS

// FUNCTION SORT ROWS
function sortingRows () {

    var i;
    var a, b;
    var shouldSort;
    var sorting = true;

    while (sorting) {

        sorting = false;
        var sortRows = outputTable.rows;

        for (i = 1; i < sortRows.length - 1; i++) {
            shouldSort = false;

            a = sortRows[i].getElementsByTagName("td")[3];
            b = sortRows[i + 1].getElementsByTagName("td")[3];

            if (Number(a.innerHTML) < Number(b.innerHTML)) {
                shouldSort = true;
                break;
            }
        }

        if (shouldSort) {
            sortRows[i].parentNode.insertBefore(sortRows[i + 1], sortRows[i]);
            sorting = true;
        }
    }

    for (i = 1; i < outputTable.rows.length; i++){
        outputTable.rows[i].cells[0].innerHTML = i;
    } 
}
// FUNCTION SORT ROWS

// FUNCTION REMOVE ROWS
function removeParticipant () {

    var i;
    var tableRows = (outputTable.rows.length) - 1;

    if((numSelect.value == "") || (isNaN(+numSelect.value))){
        alert("Enter a number to remove");
        numSelect.value = "";
        return false;
    }
    if((numSelect.value > tableRows) || (numSelect.value < 1)){
        alert("No position " + numSelect.value + " on table");
        numSelect.value = "";
        return false;
    }
    else {
        outputTable.deleteRow(numSelect.value);
        numSelect.value = "";
    }
    if(tableRows == 1){
        numSelect.disabled = true;
        removeBtn.disabled = true;
        return false;
    }

    for (i = 1; i < outputTable.rows.length; i++){
        outputTable.rows[i].cells[0].innerHTML = i;
    } 
}
// FUNCTION REMOVE ROWS