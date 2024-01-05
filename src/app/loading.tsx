import { Loader2 } from "lucide-react";

const LoadingPage = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-y-4">
        <div className="mx-4 text-4xl font-extrabold text-primary">
          <p>
            Flight
            <span className="text-black dark:text-white">X</span>
          </p>
        </div>
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    </>
  );
};

export default LoadingPage;
