// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let table = document.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER


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

    let row = document.createElement('tr');
    
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    
    let th1 = document.createElement('th')
    let cell1 = document.createTextNode(id)
    let th2 = document.createElement('th')
    let cell2 = document.createTextNode(name)
    let th3 = document.createElement('th')
    let cell3 = document.createTextNode(extension)
    let th4 = document.createElement('th')
    let cell4 = document.createTextNode(email)
    let th5 = document.createElement('th')
    let cell5 = document.createTextNode(inputState)
    


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    th1.appendChild(cell1)
    th2.appendChild(cell2)
    th3.appendChild(cell3)
    th4.appendChild(cell4)
    th5.appendChild(cell5)
    row.appendChild(th1)
    row.appendChild(th2)
    row.appendChild(th3)
    row.appendChild(th4)
    row.appendChild(th5)
    
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

table.addEventListener('click', (e) =>{
     if(e.target.row('delete')){
        if(confirm('Are you sure you want to delete this employee')){
            row.removeChild(e.target.parentElement)
        }
     }
    
})

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE



// DELETE EMPLOYEE