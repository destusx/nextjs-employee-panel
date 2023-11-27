import { ITask } from './Task.types';

export interface IEmployeeData {
    id: number;
    order: number;
    position: string;
    amountTasks: string;
    tasks: ITask[];
    salary: number;
}

export interface IEmployeeList {
    data: IEmployeeData[];
}
