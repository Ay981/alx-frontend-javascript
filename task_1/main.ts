interface Teacher{
    readonly first_name:string,
    readonly last_name: string,
    fullTimeEmployee : boolean,
    yearsOfExperience?:number,
    location : string,
[key:string]: any
}