// main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Aymen",
  lastName: "Abdulkerim",
  age: 22,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "Hayat",
  lastName: "Abdulkerim",
  age: 20,
  location: "Dire Dawa",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
