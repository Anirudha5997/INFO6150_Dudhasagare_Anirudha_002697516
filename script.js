//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

//2. and 7. disabling submit button 
function toggleCheckbox(selectedCheckbox){

let selectedRow = selectedCheckbox.parentElement.parentElement

let table = document.getElementById('myTable')
  let tableHeader = table.firstElementChild.firstElementChild

if(selectedCheckbox.checked){
  selectedRow.setAttribute('bgcolor', 'yellow')
  let deleteHeader = document.createElement('th')
  let deleteRow = document.createElement('tr')

  let editHeader = document.createElement('th')
  let editRow = document.createElement('tr')

  deleteHeader.innerHTML = 'Delete'
  editHeader.innerHTML = 'Edit'
  
  if(tableHeader.childElementCount < 9){
    tableHeader.appendChild(deleteHeader)
    tableHeader.appendChild(editHeader)
  } 

  // delete button
  let delButton = document.createElement('button')
  let delTdButton = document.createElement('td')
  delButton.innerHTML = 'Delete'
  delTdButton.appendChild(delButton)
  selectedRow.appendChild(delTdButton)

  //edit button
  let editButton = document.createElement('button')
  let editTdButton = document.createElement('td')
  editButton.innerHTML = 'Edit'
  editTdButton.appendChild(editButton)
  selectedRow.appendChild(editTdButton)
  editButton.setAttribute('onclick', 'editRecord(this)')

  //delete functionality
  delButton.setAttribute('onclick', 'deleteRecord(this)')
  

} else {
  selectedRow.removeAttribute('bgcolor') 
  
  let checkboxArray = document.getElementsByTagName("input")

  if(Array.from(checkboxArray).every((ele, _) => (ele.checked == false))){
    tableHeader.deleteCell(9)
    tableHeader.deleteCell(8)
  }
  selectedRow.deleteCell(9) 
  selectedRow.deleteCell(8)
}



checkBox();
}

function checkBox(){
  let checkboxArray = document.getElementsByTagName("input")
  let submitButton = document.getElementById("button")

  if(Array.from(checkboxArray).some((ele, _) => (ele.checked))){
    submitButton.removeAttribute('class')
      
  } else {
    submitButton.setAttribute('class', 'unchecked')  
  }
}

//delete button logic
function deleteRecord(record){
  let selectedRecord = record.parentElement.parentElement
  
  if(window.confirm(`Are your sure you want to delete ${selectedRecord.children[1].innerText}?`)){
    document.getElementById('myTable').deleteRow(selectedRecord.rowIndex + 1)
    document.getElementById('myTable').deleteRow(selectedRecord.rowIndex)

    let table = document.getElementById('myTable')
    let tableHeader = table.firstElementChild.firstElementChild

    let checkboxArray = document.getElementsByTagName("input")

    if(Array.from(checkboxArray).every((ele, _) => (ele.checked == false))){
      tableHeader.deleteCell(9)
      tableHeader.deleteCell(8)
    }

    window.alert(`${selectedRecord.children[1].innerText} Record deleted successfully`)
    checkBox()
  } 
}

function editRecord(edit){
  let selectedRecord = edit.parentElement.parentElement
  if(window.prompt(`Edit details of ${selectedRecord.children[1].innerText}`)){
    window.alert(`Record for ${selectedRecord.children[1].innerText} updated successfully`)
  }
}


//3. table dropdown function
function toggleDropdown(img){
  let dropDownTextArea = img.parentElement.parentElement.nextElementSibling;

  if(dropDownTextArea.getAttribute("class").includes('disabled')){
    dropDownTextArea.setAttribute('class', 'dropDownTextArea')

  } else {
    dropDownTextArea.setAttribute('class', 'dropDownTextArea disabled')
  }
}

//4. Add a new student button
var student_no = 3

function budget(){ 
  return Math.floor(Math.random() * 90000) + 10000
  }

function addNewStudent(addStudent){
  try{
    let table = document.getElementById('myTable')
    let studentRow = document.createElement('tr')

      let ColArr = ['<input type="checkbox" onclick="toggleCheckbox(this)"/><br /><br /><img src="down.png" width="25px" onclick="toggleDropdown(this)"/>', `Student ${student_no + 1}`, `Teacher ${student_no + 1}`, 'Approved', 'Fall', 'TA', `${budget()}`, '100%' ];

      ColArr.forEach(ele => {
        let studentCol = document.createElement('td')
        studentCol.innerHTML = ele
        studentRow.appendChild(studentCol)
      });

      let studentDetails = document.createElement('tr')
      studentDetails.setAttribute('class', 'dropDownTextArea disabled')

      let studentData = document.createElement('td')
      studentData.setAttribute('colspan', '8')

      studentData.innerHTML = `Advisor:<br /><br />
                              Award Details<br />
                              Summer 1-2014(TA)<br />
                              Budget Number: <br />
                              Tuition Number: <br />
                              Comments:<br /><br /><br />
                              Award Status:<br /><br /><br />`


      studentDetails.appendChild(studentData)
      
      table.appendChild(studentRow)
      table.appendChild(studentDetails)
      student_no += 1;
      window.alert(`Student ${student_no} Record added successfully`);
  
    } catch{
        window.alert('Failed to add new student record!!!')
  }
}

