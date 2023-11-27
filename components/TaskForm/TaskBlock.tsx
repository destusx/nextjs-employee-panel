import { useEmployeeStore } from '@/store/useEmployeeStore';
import CheckBoxList from '../Checkbox/CheckBoxList';
import Checkbox from '../Checkbox/Checkbox';
import { ITask } from '@/types/Task.types';

const TaskBlock = () => {
    const { selectedEmployee, taskData, employees } = useEmployeeStore(
        state => state
    );

    const currentEmployee = employees.find(item => item.id === selectedEmployee?.id);

    const getStatusChecked = (task: ITask) => {
        return currentEmployee?.tasks.some(
            employeeTask => employeeTask.name === task.name
        );
    };

    const taskContent = taskData.map(task => {
        return (
            <CheckBoxList key={task.name} title={task.label}>
                {task.tasks.map(item => {
                    return (
                        <Checkbox
                            taskName={item.name}
                            isChecked={getStatusChecked(item)}
                            key={item.name}
                        >
                            {item.label}
                        </Checkbox>
                    );
                })}
            </CheckBoxList>
        );
    });

    return (
        <div className="h-[455px] bg-base-bg-color rounded-lg">
            <div className="text-second-color text-sm h-10 pt-2.5 px-4 shadow-[0_4px_16px_0_rgba(0,0,0,0.24)]">
                Обязаности
            </div>
            <div className="w-[555px] mx-auto p-3 flex flex-wrap justify-between items-start relative">
                {taskContent}
                <div className="absolute w-1 h-20 rounded bg-base-border-color top-1/2 translate-y-1/2 right-3"></div>
            </div>
        </div>
    );
};

export default TaskBlock;
