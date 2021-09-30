const studentsDetails=[]; //Creating Empty Array
const studentsDetails_Element=document.querySelector('#studentsList'); //referencing studentsList from HTML to studentsDetails_Elements

document.querySelector("#studentDetails").addEventListener("keydown", function (e) {
    if(e.keyCode == 13){
        console.log('Enter Key used');
        updateDetails();
    }
}); //Adding event listener to studentDetails on keydown of 'RETURN'

function updateDetails(){
    console.log(studentsDetails);
    const studentDetails = {
        name: document.getElementById('studentName').value,
        email: document.getElementById('studentEmail').value,
        phone: document.getElementById('studentPhone').value,
    } //Creating an object studentDetails containing the student details

    console.log(studentDetails);
    studentsDetails.unshift(studentDetails); //appending studentDetails to studentsDetails array

    clearInputDetails();
    displayStudentDetails();
}

function clearInputDetails(){
    document.getElementById('studentName').value = '';
    document.getElementById('studentEmail').value = '';
    document.getElementById('studentPhone').value = '';
} //Claering the input values after updating the values

function displayStudentDetails(){
    studentsDetails_Element.innerHTML = '';
    studentsDetails.forEach((item) => {
        const list_element = document.createElement("li"); 
        
        list_element.innerHTML = item.name + " " + item.email + " " + item.phone;

        console.log(list_element);
        studentsDetails_Element.appendChild(list_element);
    }) 
} // adding list element to the 'ul'