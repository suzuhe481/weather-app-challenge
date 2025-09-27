import type { ReactNode } from "react";

interface IStyledWrapperProps {
  children: ReactNode;
}

const StyledWrapper = ({ children }: IStyledWrapperProps) => {
  return <div className="px-4 md:px-12 lg:px-24">{children}</div>;
};

export default StyledWrapper;
