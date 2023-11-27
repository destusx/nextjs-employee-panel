import { create } from 'zustand';
import { IEmployeeData } from '@/types/Employee.types';
import { employeeData, taskData } from '@/assets/data';
import { ITask, ITasksData } from '@/types/Task.types';

type State = {
    employees: IEmployeeData[];
    position: string;
    salary: number;
    taskData: ITasksData[];
    selectedEmployee: IEmployeeData | null;
    selectedTack: ITask | null;
};

type Action = {
    onAddEmployee: (newEmployee: IEmployeeData) => void;
    setPosition: (position: State['position']) => void;
    setSalary: (salary: State['salary']) => void;
    setSelectedTask: (id: number, task: ITask) => void;
    setSelectedEmployee: (emp: IEmployeeData) => void;
    setPositionName: (position: string) => void;
    setEmployees: (employeeList: IEmployeeData[]) => void;
};

interface IEmployeeStore extends State, Action {}

export const useEmployeeStore = create<IEmployeeStore>()(set => ({
    employees: employeeData,
    position: '',
    salary: 0,
    taskData: taskData,
    selectedEmployee: null,
    selectedTack: null,

    onAddEmployee: newEmployee =>
        set(state => ({
            employees: [...state.employees, newEmployee],
        })),

    setPosition: position => set(() => ({ position })),

    setSalary: salary => set(() => ({ salary })),

    setSelectedEmployee: emp =>
        set(state => ({
            selectedEmployee: state.employees.find(item => item.id === emp?.id),
        })),

    setSelectedTask: (id, task) =>
        set(state => ({
            employees: state.employees.map(emp => {
                const findTaskIndex = (tasks: ITask[], taskName: ITask['name']) =>
                    tasks.findIndex(task => task.name === taskName);

                const removeTask = (tasks: ITask[], taskName: string) =>
                    tasks.filter(task => task.name !== taskName);

                const addTask = (tasks: ITask[], newTask: ITask) => [
                    ...tasks,
                    newTask,
                ];

                if (emp.id === id) {
                    const existTaskIndex = findTaskIndex(emp.tasks, task.name);
                    const existTask = existTaskIndex !== -1;

                    return {
                        ...emp,
                        tasks: task
                            ? existTask
                                ? removeTask(emp.tasks, task.name)
                                : addTask(emp.tasks, task)
                            : [],
                    };
                } else {
                    return emp;
                }
            }),
        })),

    setPositionName: name =>
        set(state => ({
            employees: state.employees.map(emp => {
                if (emp.id === state.selectedEmployee?.id) {
                    return { ...emp, position: name };
                }
                return emp;
            }),
        })),

    setEmployees: employeeList =>
        set(() => ({
            employees: employeeList,
        })),
}));
