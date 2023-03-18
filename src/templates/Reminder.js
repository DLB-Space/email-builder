import { TYPES } from "../constants/content-types";

export const REMINDER_TEMPLATE = [
  {
    type: TYPES.HEADER_LG,
    text: "Друзья, добрый день!",
  },
  {
    type: TYPES.TEXT,
    text: "30 марта в Новосибирске мы проведем первый Зарплата.DAY в этом году! Вас ждут выступления экспертов, фасилитационная сессия, нетворкинг, неформальное общение с коллегами.",
  },
  {
    type: TYPES.HEADER_BASE,
    text: "Спикеры мероприятия",
  },
  {
    type: TYPES.SPEAKER,
    img: '',
    fioAndJob: 'Имя Фамилия, Должность',
    theme: 'Тема: . . .',
  },
  {
    type: TYPES.SPEAKER,
    img: '',
    fioAndJob: 'Имя Фамилия, Должность',
    theme: 'Тема: . . .',
  },
  {
    type: TYPES.SPEAKER,
    img: '',
    fioAndJob: 'Имя Фамилия, Должность',
    theme: 'Тема: . . .',
  },
  {
    type: TYPES.SPEAKER,
    img: '',
    fioAndJob: 'Имя Фамилия, Должность',
    theme: 'Тема: . . .',
  },
  {
    type: TYPES.BUTTON,
    text: "Скачать программу",
    linkTo: '',
  },
  {
    type: TYPES.TEXT_BOLD,
    text: "Будем рады видеть вас 30 марта в 09:30, Grand Autograph Hotel Novosibirsk (2 этаж), ул. Орджоникидзе, 31",
  },
  {
    type: TYPES.BUTTON,
    text: "Зарегистрироваться",
    linkTo: '',
  },
  {
    type: TYPES.FOOTER,
  }
];
