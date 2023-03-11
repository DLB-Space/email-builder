const Footer = () => {
  return (
    <p className="text-sm">
      Если у вас возникли вопросы, позвоните на номер
      <a href="tel:88002343500" className="text-blue-500 font-normal">
        {" "}
        8 (800) 234-35-00
      </a>{" "}
      или напишите запрос на
      <a href="mailto:events@zarplata.ru" className="text-blue-500 font-normal">
        {" "}
        events@zarplata.ru
      </a>
    </p>
  );
};

export default Footer;
