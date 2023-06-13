import { Intern } from "./intern";
import { Domain } from "./types";

export interface Junior extends Intern {
    date_of_promotion: Date,
    domain: Domain
}