import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import IconCheck from './IconCheck';
import IconUnchecked from './IconUnchecked';
import { useEmployeeStore } from '@/store/useEmployeeStore';

interface ICheckBoxProps {
    children: ReactNode;
    isChecked?: boolean;
    taskName: string;
}

const Checkbox = ({ children, isChecked, taskName }: ICheckBoxProps) => {
    const { taskData, setSelectedTask, selectedEmployee } = useEmployeeStore(
        state => state
    );

    const currTask = taskData
        .flatMap(item => item.tasks)
        .find(item => item.name === taskName);

    const onToggleCheckbox = () => {
        if (currTask && selectedEmployee) {
            setSelectedTask(selectedEmployee.id, currTask);
        }
    };

    const selectedIcon = isChecked ? <IconCheck /> : <IconUnchecked />;

    return (
        <motion.button
            whileTap={{
                scale: 1.03,
                boxShadow: '0 4px 40px 0 rgba(104, 102, 234, 0.24)',
            }}
            className="bg-transparent cursor-pointer flex gap-x-2 items-center mb-2"
            onClick={onToggleCheckbox}
        >
            <div>{selectedIcon}</div>
            <div className="text-xs text-white">{children}</div>
        </motion.button>
    );
};

export default Checkbox;
