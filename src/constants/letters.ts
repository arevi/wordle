import { KeyType } from "../interfaces/LetterState";

export const letterKeys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const modifierKeys = ["enter", "backspace"];

export const validKeys = [...letterKeys, ...modifierKeys];

export const keyMap = [
  [
    {
      key: "Q",
      type: KeyType.LETTER,
    },
    {
      key: "W",
      type: KeyType.LETTER,
    },
    {
      key: "E",
      type: KeyType.LETTER,
    },
    {
      key: "R",
      type: KeyType.LETTER,
    },
    {
      key: "T",
      type: KeyType.LETTER,
    },
    {
      key: "Y",
      type: KeyType.LETTER,
    },
    {
      key: "U",
      type: KeyType.LETTER,
    },
    {
      key: "I",
      type: KeyType.LETTER,
    },
    {
      key: "O",
      type: KeyType.LETTER,
    },
    {
      key: "P",
      type: KeyType.LETTER,
    },
  ],
  [
    {
      key: "A",
      type: KeyType.LETTER,
    },
    {
      key: "S",
      type: KeyType.LETTER,
    },
    {
      key: "D",
      type: KeyType.LETTER,
    },
    {
      key: "F",
      type: KeyType.LETTER,
    },
    {
      key: "G",
      type: KeyType.LETTER,
    },
    {
      key: "H",
      type: KeyType.LETTER,
    },
    {
      key: "J",
      type: KeyType.LETTER,
    },
    {
      key: "K",
      type: KeyType.LETTER,
    },
    {
      key: "L",
      type: KeyType.LETTER,
    },
  ],
  [
    {
      key: "ENTER",
      type: KeyType.ENTER,
    },
    {
      key: "Z",
      type: KeyType.LETTER,
    },
    {
      key: "X",
      type: KeyType.LETTER,
    },
    {
      key: "C",
      type: KeyType.LETTER,
    },
    {
      key: "V",
      type: KeyType.LETTER,
    },
    {
      key: "B",
      type: KeyType.LETTER,
    },
    {
      key: "N",
      type: KeyType.LETTER,
    },
    {
      key: "M",
      type: KeyType.LETTER,
    },
    {
      key: "BACKSPACE",
      type: KeyType.BACKSPACE,
    },
  ],
];
