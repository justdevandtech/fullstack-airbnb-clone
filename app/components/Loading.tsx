"use client";

import BounceLoader from "react-spinners/BounceLoader";

interface ILoadingProps {
  loading: boolean;
}

const Loading: React.FC<ILoadingProps> = ({ loading }) => {
  return (
    <div className="flex items-center justify-center h-full ">
      <BounceLoader
        color="#f43f5e"
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
