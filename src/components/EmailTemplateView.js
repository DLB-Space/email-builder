import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import HeaderSkeleton from "../assets/skeleton-header.svg";
import Logo from "../assets/loog.svg";
import Text from "./content-views/Text";
import Button from "./content-views/Button";
import { ANNOUNCE_TEMPLATE } from "../templates/Announce";
import { TYPES } from "../constants/content-types";
import Speaker from "./content-views/Speaker";
import Footer from "./content-views/Footer";
import { useDropzone } from "react-dropzone";
import { setImage } from "./tools/cover-settings/headerImageSlice";

const EmailTemplateView = () => {
  const headerImage = useSelector((store) => store.headerImage);
  const preheader = useSelector((store) => store.preheaderSettings);

  const dispatch = useDispatch();

  const onDrop = useCallback(
    (acceptedFiles) => {
      dispatch(setImage(URL.createObjectURL(acceptedFiles[0])));
    },
    [dispatch]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const renderContentItem = (item) => {
    switch (item.type) {
      case TYPES.HEADER_LG: {
        return <Text text={item.text} classnames="text-lg font-bold pb-6" />;
      }
      case TYPES.BUTTON: {
        return <Button to="/" text={item.text} />;
      }
      case TYPES.SPEAKER: {
        return <Speaker />;
      }
      case TYPES.TEXT_BOLD: {
        return <Text text={item.text} classnames="text-sm font-bold pb-6" />;
      }
      case TYPES.HEADER_BASE: {
        return <Text text={item.text} classnames="text-base font-bold pb-5" />;
      }
      case TYPES.FOOTER: {
        return <Footer />;
      }
      default: {
        return <Text text={item.text} classnames="text-sm pb-7" />;
      }
    }
  };

  return (
    <div className="bg-slate-100 flex-auto">
      {/* Roof */}
      <div
        className={cn("my-0 mx-auto p-5 rounded-3xl flex", {
          "justify-between": preheader.showLink,
          "justify-center": !preheader.showLink,
        })}
        style={{ width: 560 }}
      >
        <a href="/" className="">
          <img src={Logo} alt="logo" />
        </a>
        {preheader.showLink && (
          <a href="/" className="text-sm text-blue-500 font-normal">
            Регистрация на бесплатное мероприятие
          </a>
        )}
      </div>
      {/* Body */}
      <div className="bg-white my-0 mx-auto rounded-3xl" style={{ width: 560 }}>
        {/* Cover image */}
        <div className="bg-slate-300 rounded-t-3xl" style={{ height: 207 }}>
          <div>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <img
                src={headerImage.source || HeaderSkeleton}
                alt="header"
                className="rounded-t-3xl object-contain"
                style={{ width: 560, height: 207 }}
              />
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-col px-6 py-9">
          {ANNOUNCE_TEMPLATE.map((item) => renderContentItem(item))}
        </div>
      </div>
      {/* Basement */}
      <div className="my-0 mx-auto flex-col p-9" style={{ width: 560 }}>
        <p className="text-center	text-xs text-slate-400	">
          Есть вопросы? Смело пишите в{" "}
          <a href="/" className="text-blue-500">
            службу поддержки
          </a>
        </p>
        <p className="text-center	text-xs text-slate-400	">
          Если больше не хотите получать такие рассылки, настройте{" "}
          <a href="/" className="text-blue-500">
            параметры подписки
          </a>
        </p>
      </div>
    </div>
  );
};

export default EmailTemplateView;
