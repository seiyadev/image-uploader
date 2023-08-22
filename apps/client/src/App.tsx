import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ChooseImage } from "./components/ChooseImage";
import { UploadState } from "./components/UploadState";
import { UploadSuccess } from "./components/UploadSuccess";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function App() {
  const [image, setImage] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);

  const onChooseImage = async (image: File) => {
    if (
      image.type === "image/jpeg" ||
      image.type === "image/png" ||
      image.type === "image/jpg" ||
      image.type === "image/gif"
    ) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("image", image);
        const response = await axios.post(`api/image/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data.url);
        setImage(response.data.url);
        setTimeout(() => {
          setLoading(false);
          setSuccess(true);
        }, 500);
      } catch (error) {
        console.log(error);
        toast.error("🤧 Something went wrong!");
      }
    } else {
      toast.error("🤧 Invalid file type!");
      setImage(null);
    }
  };

  return (
    <>
      <section className="flex flex-col justify-between items-center height-100">
        <div className="flex w-full h-full justify-center items-center">
          {!image && !loading && !success && (
            <ChooseImage onChooseImage={onChooseImage} />
          )}
          {image && loading && !success && <UploadState />}
          {image && !loading && success && <UploadSuccess image={image} />}
        </div>
        <span className="mb-4">
          Created by{" "}
          <strong className="hover:underline hover:text-blue-500">
            <a
              href="https://devchallenges.io/portfolio/seiyadev"
              target="_blank"
            >
              seiyadev
            </a>
          </strong>{" "}
          -{" "}
          <a
            href="https://devchallenges.io/"
            target="_blank"
            className="hover:text-blue-500 hover:underline"
          >
            devChallenges.io
          </a>
        </span>
      </section>
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
}

export default App;