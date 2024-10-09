interface Teacher {
    // firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first
    readonly firstName: string;
    readonly lastName: string;
    // fullTimeEmployee(boolean) this attribute should always be defined
    fullTimeEmployee: boolean;
    // yearsOfExperience(number) this attribute is optional
    yearsOfExperience?: number;
    // location(string) this attribute should always be defined
    location: string;
    // Add the possibility to add any attribute to the Object
    [propName: string]: unknown;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string{
    return `${firstName.charAt(0)}. ${lastName}`;
}

type printTeacherFunction = (firstName: string, lastName: string) => string;

interface Student{
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

type studentClassConstructor = (firstName: string, lastName: string) => StudentClass;

class StudentClass implements Student{
    firstName: string;
    lastName: string;
    public constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public workOnHomework(): string{
        return 'Currently working';
    }
    public displayName(): string{
        return this.firstName;
    }
}