import { Button } from "@nextui-org/react";
import { DragAndDrop } from "./DragAndDrop";

interface Props {
  onChooseImage: (image: File) => void;
}

export const ChooseImage: React.FC<Props> = ({ onChooseImage }) => {
  return (
    <div
      className="flex flex-col justify-between gap-6 w-full md:w-4/6 xl:w-2/6 rounded-lg p-12 shadow-xl drop-shadow-xl bg-content1"
      style={{
        minHeight: "75vh",
        height: "75%",
      }}
    >
      <div className="text-center flex flex-col gap-6">
        <h1 className="text-2xl md:text-3xl font-bold">Upload your image</h1>
        <span className="text-gray-400">File should be .jpeg, .png...</span>
      </div>
      <DragAndDrop onChooseImage={onChooseImage} />
      <div className="text-center flex flex-col gap-6 items-center">
        <span className="text-md text-gray-400">- Or -</span>
        <div>
          <input
            type="file"
            name="image"
            id="file-button"
            className="absolute z-1 hidden"
            accept="image/*"
            multiple={false}
          />
          <Button
            color="primary"
            className="w-fit"
            size="lg"
            id="file"
            onClick={() => {
              document.getElementById("file-button")?.click();
              document.getElementById("file-button")?.addEventListener(
                "change",
                (e: Event) => {
                  if (e.target instanceof HTMLInputElement) {
                    onChooseImage(e.target.files![0]);
                  }
                },
                {
                  once: true,
                }
              );
            }}
          >
            Choose a file
          </Button>
        </div>
      </div>
    </div>
  );
};
