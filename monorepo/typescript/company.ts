import { Intern } from "./intern";
import { Junior } from "./junior";

export interface Company {
    interns: Intern[],
    juniors: Junior[],
    country: string
}