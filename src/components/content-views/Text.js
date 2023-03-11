import { useState } from "react";
import ContentEditable from "react-contenteditable";

const Text = ({ text, classnames }) => {
  const [content, setContent] = useState(text || "");

  const handleChange = (evt) => {
    const regex = /(<([^>]+)>)/gi;
    const content = evt.target.value;
    const newString = content.replace(regex, "");
    setContent(newString);
  };

  return (
    <ContentEditable
      html={content}
      disabled={false}
      onChange={handleChange}
      tagName="article"
      className={classnames}
    />
  );
};

export default Text;
