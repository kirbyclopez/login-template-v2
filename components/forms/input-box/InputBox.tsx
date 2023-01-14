export interface IInputBox extends React.ComponentPropsWithoutRef<'input'> {
  type?: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<IInputBox> = ({
  type = 'text',
  value,
  onChange,
  ...inputProps
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
      {...inputProps}
    />
  );
};

export default InputBox;
