import { TYPES } from "../constants/content-types";

export const REPORT_TEMPLATE = [
  {
    type: TYPES.HEADER_LG,
    text: "Коллеги, добрый день!",
  },
  {
    type: TYPES.TEXT,
    text: "Спасибо, что были с нами на Зарплата.DAY 17 ноября. По ссылке вы найдете материалы с мероприятия — фотографии, презентации спикеров.",
  },
  {
    type: TYPES.BUTTON,
    text: "Скачать материалы",
    linkTo: '',
  },
  {
    type: TYPES.TEXT,
    text: "До новых встреч!",
  },
];
