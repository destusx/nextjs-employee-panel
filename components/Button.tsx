interface ButtonProps {
    label: string;
    onClick: (arg: any) => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="py-3.5 w-full font-semibold bg-base-color rounded-lg text-sm text-[#F5F5F5] shadow-[0_4px_40px_0_rgba(104,102,234,0.24)] border-2 border-base-border-color hover:shadow-[0_3px_39px_0_rgba(104,102,234,0.30)]"
        >
            {label}
        </button>
    );
};

export default Button;
