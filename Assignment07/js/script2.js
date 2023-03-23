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

    let id = document.querySelector('#id').value;    
    let name = String(document.querySelector('#name').value);    
    let extension = document.querySelector('#extension').value;   
    let email = document.querySelector('#email').value  
    let inputState =String(document.querySelector('#department').value);
       
   
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    let row = table.insertRow(0);
    
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
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

    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(cell4)
    row.appendChild(cell5)
    
    table.appendChild(row)

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm text-right delete'

    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    
    row.appendChild(deleteBtn)

    document.querySelector('#employees').value = ''

    table.appendChild(row)

})



    // RESET THE FORM
  
    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE



// DELETE EMPLOYEE

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let outputElement = document.querySelector('#employeeCount')
let employeeCount = 0
outputElement.textContent = ` ( ${employeeCount} )`
// DELETE EMPLOYEE
employeeTable.addEventListener('click', (e) => {
      if (confirm('Are you sure you want to delete this employee?')) {
        const row = e.target.parentElement.parentElement;
        employeeTable.deleteRow(row.rowIndex);
        employeeCount--;
        outputElement.textContent = employeeCount;
      }
  });
  table.addEventListener('click', (e) =>{
    
    table.deleteRow();
})