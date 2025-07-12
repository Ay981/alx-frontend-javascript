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