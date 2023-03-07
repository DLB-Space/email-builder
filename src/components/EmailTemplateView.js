import React from 'react';
import HeaderSkeleton from "../assets/skeleton-header.svg";
import Logo from "../assets/loog.svg";

const EmailTemplateView = () => {
  return (
    <div className="bg-slate-100 flex-auto">
      <div
        className="my-0 mx-auto p-5 rounded-3xl flex justify-between"
        style={{ width: 560 }}
      >
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <a href="/" className="text-sm text-blue-500 font-normal">
          Регистрация на бесплатное мероприятие
        </a>
      </div>
      <div className="bg-white my-0 mx-auto rounded-3xl" style={{ width: 560 }}>
        <div className="bg-slate-300 rounded-t-3xl" style={{ height: 207 }}>
          <img src={HeaderSkeleton} alt="header" />
        </div>
        <div style={{ height: 300 }}></div>
      </div>
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
