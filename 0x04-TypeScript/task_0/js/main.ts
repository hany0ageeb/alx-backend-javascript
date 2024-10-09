interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
let student1: Student = {
    firstName: 'Ali',
    lastName: 'Mohamed',
    age: 38,
    location: 'El-Obour'
};
let student2: Student = {
    firstName: 'Mona',
    lastName: 'Saad',
    age: 38,
    location: 'Shoubra'
};
const studentsList: Student[] = [
    student1,
    student2  
];
function displayTable(): void{
    const table = document.createElement("table");
    const thead = table.createTHead();
    const tbody = table.createTBody();
    tbody.style.alignItems = 'center';
    let th = document.createElement('th');
    th.appendChild(document.createTextNode('First Name'));
    thead.appendChild(th);
    th = document.createElement('th');
    th.appendChild(document.createTextNode('Location'));
    thead.appendChild(th);
    thead.style.backgroundColor = '#B8B8B8';
    thead.style.borderColor = "black";
    thead.style.borderWidth = "1px";
    for (let student of studentsList){
        let row = table.insertRow();
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(student.firstName));
        row.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(student.location));
        row.appendChild(td);
    }
    document.body.appendChild(table);
}
window.addEventListener('load',()=>{
    displayTable();
});

