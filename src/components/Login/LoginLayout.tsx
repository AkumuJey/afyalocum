import { ReactNode } from "react";
interface PropTypes {
  children: ReactNode;
}

const LoginLayout = ({ children }: PropTypes) => {
  return (
    <>
      <div className="flex flex-col w-full h-full">{children}</div>
    </>
  );
};

export default LoginLayout;
