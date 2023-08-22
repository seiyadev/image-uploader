import { Image } from "@nextui-org/react";
import imgURL from "../assets/image.svg";
import React from "react";

interface Props {
  onChooseImage: (image: File) => void;
}

export const DragAndDrop: React.FC<Props> = ({ onChooseImage }) => {
  const [dragOver, setDragOver] = React.useState(false);

  React.useEffect(() => {
    document
      .getElementById("file-drag")
      ?.addEventListener("click", (e: Event) => {
        e.preventDefault();
      });
  }, []);

  return (
    <div
      className="w-full h-full rounded-lg border-dashed border-2 relative"
      style={{
        borderColor: dragOver ? "#0070f0" : "#e0e0e0",
      }}
    >
      <div
        className="flex flex-col justify-center items-center gap-10 w-full h-full"
        style={{
          filter: dragOver ? "brightness(0.5)" : "brightness(1)",
        }}
      >
        <Image src={imgURL} className="-z-1 image-drag" />
        <span className="text-sm md:text-lg text-gray-500">
          Drag & Drop your image here
        </span>
        <input
          type="file"
          name="file"
          id="file-drag"
          className="h-full w-full absolute opacity-0"
          accept="image/*"
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file) {
              onChooseImage(file);
            }
          }}
          onDragOver={() => {
            setDragOver(true);
          }}
          onDragLeave={() => {
            setDragOver(false);
          }}
        />
      </div>
    </div>
  );
};
