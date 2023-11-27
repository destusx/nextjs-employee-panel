import { useEmployeeStore } from '@/store/useEmployeeStore';
import DraggableIcon from './DraggableIcon';
import { IEmployeeData } from '@/types/Employee.types';
import { Reorder } from 'framer-motion';

interface IEmployeeCartProps {
    employee: IEmployeeData;
}

const EmployeeCart = ({ employee }: IEmployeeCartProps) => {
    const setSelectedEmployee = useEmployeeStore(state => state.setSelectedEmployee);

    return (
        <Reorder.Item
            value={employee}
            whileDrag={{ boxShadow: '0 4px 40px 0 rgba(104, 102, 234, 0.24)' }}
            onClick={() => {
                setSelectedEmployee(employee);
            }}
            className="w-full h-20 bg-[#303038] cursor-grabbing rounded-lg pt-5 pb-5 px-4 flex gap-x-4 items-center mb-2 border-2 border-base-bg-color hover:border-base-color"
        >
            <DraggableIcon />
            <div className="flex justify-between flex-1 items-start">
                <div>
                    <div className="text-sm text-white font-semibold">
                        {employee.position}
                    </div>
                    <div className="text-xs text-second-color mt-0.5">
                        {employee.amountTasks}
                    </div>
                </div>
                <div className="text-xs text-second-color mt-1">
                    <span className="font-bold text-[#EFB62B]">
                        ${employee.salary}
                    </span>{' '}
                    / час
                </div>
            </div>
        </Reorder.Item>
    );
};

export default EmployeeCart;
