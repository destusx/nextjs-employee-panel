export interface ITask {
    name: string;
    label: string;
}

export interface ITasksData {
    name: string;
    label: string;
    tasks: ITask[];
}
