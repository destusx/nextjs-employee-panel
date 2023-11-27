import { useEmployeeStore } from '@/store/useEmployeeStore';

const PositionInput = () => {
    const { selectedEmployee, setPositionName, employees } = useEmployeeStore(
        state => state
    );

    const currEmployeePosition = employees.find(item => {
        return item.id === selectedEmployee?.id;
    });

    return (
        <div className="h-[110px] bg-base-bg-color pt-9 pb-6 px-4 relative rounded-lg">
            <label
                htmlFor="position"
                className="absolute text-second-color text-xs top-4 left-4"
            >
                Название
            </label>
            <input
                className="bg-base-bg-color w-full py-3.5 px-4 border-2 border-base-border-color rounded-lg text-sm font-semibold text-white"
                id="position"
                type="text"
                value={currEmployeePosition?.position}
                onChange={e => setPositionName(e.target.value)}
            />
        </div>
    );
};

export default PositionInput;
