// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let table = document.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
// PREVENT FORM SUBMISSION
    e.preventDefault();  

// GET THE VALUES FROM THE TEXT BOXES
        let id         = document.querySelector('#id').value;    
        let name       = String(document.querySelector('#name').value);    
        let extension  = document.querySelector('#extension').value;   
        let email      = document.querySelector('#email').value  
        let inputState =String(document.querySelector('#department').value);
      
// INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
        var newRow = table.insertRow(-1);
    
// INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);
        let text1 = document.createTextNode(id)
        let text2 = document.createTextNode(name)
        let text3 = document.createTextNode(extension)
        let text4 = document.createTextNode(email)
        let text5 = document.createTextNode(inputState)

// APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
        cell1.appendChild(text1)
        cell2.appendChild(text2)
        cell3.appendChild(text3)
        cell4.appendChild(text4)
        cell5.appendChild(text5)

        newRow.appendChild(cell1)
        newRow.appendChild(cell2)
        newRow.appendChild(cell3)
        newRow.appendChild(cell4)
        newRow.appendChild(cell5)
    
        table.appendChild(newRow)   

// CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm text-right delete'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    newRow.appendChild(deleteBtn)
    document.querySelector('#employees').value = ''
    table.appendChild(newRow)
    
// RESET THE FORM
    form.reset()
    
// SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

// INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;

// DELETE EMPLOYEE
    newRow.addEventListener('click', (e) =>{
        if (confirm('Are you sure to delete the employee?')) {
            let row = e.target.parentElement;
            newRow.deleteRow(row.rowIndex);
            count--;
            
        }
    });

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

}); 


