import { TailChase } from "ldrs/react";
import "ldrs/react/TailChase.css";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <TailChase size="80" speed="1.8" color="#FF820A" />
    </div>
  );
};

export default LoadingSpinner;
