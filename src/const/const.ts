import { IStatistic } from "../interface/interface";

export const enum AppRoute {
  ROOT = "/",
  AUDIO_CHALLENGE = "/audio-challenge",
  SPRINT = "/sprint",
  TEXTBOOK = "/textbook",
  STATS = "/stats",
}

export const enum Methods {
  PUT = "PUT",
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}

export const enum ResponseStatus {
  OK = 200,
  EXPECTATION_FAILED = 417,
  UNAUTHORIZE = 401,
}

export const enum Url {
  DOMEN = "https://react-app-learnwords.herokuapp.com",
}

export const enum SprintNums {
  ONE_LENGTH = 0,
  PAGE_COUNT = 30,
  MINUTE = 60,
  MAX_SUCCESS_HARD_MODE = 5,
  MAX_SUCCESS_LIGTH_MODE = 3,
  MULTIPLIER_TWO = 3,
  MULTIPLIER_DOTE_FIVE = 2,
  MULTIPLIER_DOTE_TWENTYFIVE = 1.5,
  PLUS_TO_SCORE = 10,
  MAX_ANSWERS_LENGTH = 80,
  NOT_DIFFICULT_NUM = 6,
  NEW_WORDS_FIRST_PAGE = 19,
  NEW_WORDS_SECOND_PAGE = 39,
  NEW_WORDS_THIRD_PAGE = 59,
  LEFT_ARROW = 37,
  RIGHT_ARROW = 39,
  ID_ONE_HUNDRED = 100
}

export const ANSWER_TYPE = {
  RIGHT: "Верно",
  WRONG: "Не верно",
}

export const enum SprintColors {
  ONE = "#e2faed",
  TWO = "#a0db8e",
  THREE = "#3cb77e",
  FOUR = "#ffba01",
  FIVE = "#3cb10e",
  SIX = "#c808f9",
}

export const enum SprintPages {
  GAME_PAGE = "game",
  CONGRATULATION_PAGE = "congratulation",
  GREETING_PAGE = "greeting",
  EMPTY_PAGE = "empty",
  REAL_PAGE = "real"
}

export const enum TextbookData {
  COMPLEX_GROUP_INDEX = 6,
  PAGINATION_START_INDEX = 1,
  PAGE_START_INDEX = 0,
}

export const NULL_STATISTIC: IStatistic = {
  learnedWords: 0,
  optional: {
    sprint: {
      date: new Date().toLocaleDateString(),
      bestSeries: 0,
      successCounter: 0,
      failCounter: 0,
      newWords: 0,
    },
    audio: {
      date: new Date().toLocaleDateString(),
      bestSeries: 0,
      successCounter: 0,
      failCounter: 0,
      newWords: 0,
    },
    longTerm: {
      stat: [
        {
          data: new Date().toLocaleDateString(),
          newWordsInData: 0,
          newLearnedInData: 0,
        },
      ],
    },
  },
};

export const SPRINT_RULE =
  "В данной игре необходимо ответить правильный или нет дан перевод английского слова. Если ответ правильный, то увеличивается множитель очков. У Вас 60 секунд, попробуйте набрать максимальное количество очков.";

export const BUTTONS_NUMS = [1, 2, 3, 4, 5, 6];

export const teamMembers = [
  {
    id: 1,
    name: "Роман Гольцман",
    work: "Главная страница, учебник, авторизация. Верстка статистики.",
    ghLink: "https://github.com/Romnasi",
    avatar: "assets/images/avatar-roman.jpg",
    role: "Front-end",
  },

  {
    id: 2,
    name: "Ольга Якушева",
    work: `Игра "Аудиовызов" и краткосрочная статистика. Помощь с учебником.`,
    ghLink: "https://github.com/Dairin-dei",
    avatar: "assets/images/avatar-olya.jpg",
    role: "Front-end",
  },
  {
    id: 3,
    name: "Александр Голамонов",
    work: `Игра "Спринт" и долгосрочная статистика.`,
    ghLink: "https://github.com/Todd89",
    avatar: "assets/images/avatar-sasha.jpg",
    role: "Team-lead",
  },
];

export const enum PaginationData {
  START_INDEX = 1,
  TOTAL_COUNT = 600,
  SIBLING_COUNT = 0,
  PAGE_SIZE = 20,
}

export const DOTS = "...";

export const textbookSections = [
  {
    id: 0,
    name: 1,
    labelClass: "textbook-nav__label",
  },
  {
    id: 1,
    name: 2,
    labelClass: "textbook-nav__label",
  },
  {
    id: 2,
    name: 3,
    labelClass: "textbook-nav__label",
  },
  {
    id: 3,
    name: 4,
    labelClass: "textbook-nav__label",
  },
  {
    id: 4,
    name: 5,
    labelClass: "textbook-nav__label",
  },
  {
    id: 5,
    name: 6,
    labelClass: "textbook-nav__label",
  },
  {
    id: 6,
    name: "7 - Сложные слова",
    labelClass: "textbook-nav__label textbook-nav__label--complex",
  },
];
