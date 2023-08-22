import { Progress } from "@nextui-org/react";

interface Props {}

export const UploadState: React.FC<Props> = () => {
  return (
    <div className="flex flex-col justify-between gap-6 w-full md:w-4/6 xl:w-2/6 h-fit rounded-lg px-10 py-12 shadow-xl drop-shadow-xl bg-content1">
      <h1 className="text-2xl md:text-3xl font-bold">Uploading...</h1>
      <Progress
        size="md"
        isIndeterminate
        aria-label="Loading..."
        className="w-full"
        color="primary"
      />
    </div>
  );
};
