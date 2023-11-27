import PositionInput from './PositionInput';
import TaskBlock from './TaskBlock';
import Button from '../Button';

const EditForm = () => {
    return (
        <div className="bg-[#303038] rounded-lg w-[592px] p-4 flex flex-col gap-y-4">
            <PositionInput />
            <TaskBlock />
            <Button label="Сохранить" onClick={() => {}} />
        </div>
    );
};

export default EditForm;
