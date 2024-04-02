
// public string ToString(){
//     return $"ID {Id} UserName {UserName} JobSearchField {JobSearchField}";
// }


import { Field } from "./Field";

export interface User {
    UserName: string;
    Id: number;
    Password: string;
    JobSearchField: Field;
}