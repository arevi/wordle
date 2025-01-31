export enum LetterStatus {
  CORRECT = "CORRECT",
  INCORRECT = "INCORRECT",
  MISPLACED = "MISPLACED",
}

export type LetterState = Record<string, LetterStatus>;

export enum KeyType {
  LETTER = "LETTER",
  ENTER = "ENTER",
  BACKSPACE = "BACKSPACE",
}
