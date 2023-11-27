import { useEmployeeStore } from '@/store/useEmployeeStore';
import { Reorder } from 'framer-motion';
import EmployeeCart from './EmployeeCart';

const EmployeeList = () => {
    const { employees: employeeList, setEmployees } = useEmployeeStore(
        state => state
    );

    return (
        <Reorder.Group
            as="ul"
            axis="y"
            values={employeeList}
            onReorder={setEmployees}
        >
            {employeeList.map(employee => {
                return <EmployeeCart key={employee.id} employee={employee} />;
            })}
        </Reorder.Group>
    );
};

export default EmployeeList;
