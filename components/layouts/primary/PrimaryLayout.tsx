export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <div
      {...divProps}
      className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12"
    >
      {children}
    </div>
  );
};

export default PrimaryLayout;
