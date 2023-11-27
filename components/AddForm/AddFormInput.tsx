interface IInputProps {
    textColor: string;
    placeholder: string;
    value: number | string;
    type: 'text' | 'number';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ textColor, placeholder, value, type, onChange }: IInputProps) => {
    return (
        <input
            onChange={onChange}
            value={value}
            className={`bg-base-bg-color w-full py-1 px-2 border-2 border-base-border-color rounded-lg text-sm font-semibold ${textColor}`}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default Input;
