export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <div {...divProps} className="min-h-screen flex flex-col">
      {children}
    </div>
  );
};

export default PrimaryLayout;
