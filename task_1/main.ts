interface Teacher {
  readonly first_name: string;
  readonly last_name: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  first_name: 'John',
  last_name: 'Doe',
  
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
  contract: false, 
  yearsOfExperience: 5 
};

console.log(director1);
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction= (firstName,lastName)=> {
    const firstNameIntial = firstName.charAt(0);
    return `${firstName}. ${lastName}`;

}

//next

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}