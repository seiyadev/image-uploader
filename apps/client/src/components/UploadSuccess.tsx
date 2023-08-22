import { Button, Image, Snippet } from "@nextui-org/react";
import imgURL from "../assets/check.svg";
import { ToastContainer, toast } from "react-toastify";

interface Props {
  image: string;
}

export const UploadSuccess: React.FC<Props> = ({ image }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 w-full md:w-4/6 xl:w-2/6 h-fit rounded-lg px-10 py-12 shadow-xl drop-shadow-xl bg-content1">
        <div className="text-center flex flex-col gap-4 justify-center items-center">
          <Image src={imgURL} width={64} />
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Uploaded Successfully!
          </h1>
        </div>
        <div className="flex justify-center">
          <Image
            src={image}
            className="rounded-lg object-contain"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "50vh",
              maxWidth: "100%",
            }}
          />
        </div>
        <div
          className="flex flex-row gap-2 relative items-center w-full h-full justify-center"
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <Snippet
            color="default"
            variant="bordered"
            size="lg"
            hideSymbol
            hideCopyButton
            style={{
              maxWidth: "calc(100% - 100px)",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {image}
          </Snippet>
          <Button
            color="primary"
            size="lg"
            className="px-8"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(image);
                toast("🫶 Copied to clipboard!");
              } catch (error) {
                toast.error("🤧 Failed to copy to clipboard!");
              }
            }}
          >
            Copy Link
          </Button>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        progressStyle={{
          background: "#2f80ed",
        }}
      />
    </>
  );
};
