import { useState, useCallback } from "react";
import SpeakerImage from "../../assets/speaker_image.svg";
import { useDropzone } from "react-dropzone";
import Text from "./Text";

const Speaker = () => {
  const [image, setImage] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    setImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex  mb-5 align-middle">
      <div style={{ width: 100, height: 100 }}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <img
            src={image || SpeakerImage}
            alt="speaker"
            className="pr-5 object-contain"
            style={{ width: 100, height: 100 }}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center" style={{ maxWidth: 392 }}>
        <Text text={"<b>Имя Фамилия,</b> Должность"} />
        <Text text={"<b>Тема,</b> . . ."} />
      </div>
    </div>
  );
};

export default Speaker;
