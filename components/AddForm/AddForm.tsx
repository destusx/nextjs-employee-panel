import Input from './AddFormInput';
import { IEmployeeData } from '@/types/Employee.types';
import Button from '../Button';
import { useEmployeeStore } from '@/store/useEmployeeStore';

interface IAddFormProps {
    handleAddFormToggle: () => void;
}

const AddForm = ({ handleAddFormToggle }: IAddFormProps) => {
    const { employees, position, salary, onAddEmployee, setPosition, setSalary } =
        useEmployeeStore(state => state);

    const handleAddEmployee = (e: React.FormEvent) => {
        if (!salary || !position || /\d/.test(position)) {
            e.preventDefault();
            return alert('Введите корректные данные');
        }

        e.preventDefault();
        const newEmployee: IEmployeeData = {
            id: employees.length + 1,
            order: employees.length + 1,
            position,
            amountTasks: 'Пока не работает)',
            tasks: [],
            salary,
        };

        onAddEmployee(newEmployee);
        handleAddFormToggle();
        setPosition('');
        setSalary(0);
    };

    return (
        <form className="w-full p-3 bg-[#303038] rounded-lg mb-2 border-2 border-base-bg-color flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
                <Input
                    type="text"
                    value={position}
                    textColor="text-white"
                    placeholder="Ввeдите позицию"
                    onChange={e => setPosition(e.target.value)}
                />
                <Input
                    type="number"
                    value={salary}
                    textColor="text-[#EFB62B]"
                    placeholder="Введите зарплату"
                    onChange={e => setSalary(+e.target.value)}
                />
            </div>
            <Button onClick={handleAddEmployee} label="Добавить сотрудника" />
        </form>
    );
};

export default AddForm;
