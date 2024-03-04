import { ChangeEvent, FormEvent, ReactNode } from "react";

export interface MainProps {
  children: ReactNode;
}

export interface FormProps {
  onSubmit: (payload: { en: string; ru: string; es?: string }) => void;
}

export interface InputProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

interface ICardStyle {
  color: string;
  type: string;
}

export interface SubmitButtonProps {
  disabled: boolean;
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: (e: FormEvent<HTMLInputElement>) => void;
}

interface ITitleStyle {
  color: string;
}

interface ITitle {
  en: string;
  ru: string;
}

export interface IWord {
  learnWord: string;
  translate: ITranslate;
}

interface ITranslate {
  en: string;
  ru: string;
}

interface IConfigs {
  cardStyle: ICardStyle;
  titleStyle: ITitleStyle;
}

export interface ICard {
  configs: IConfigs;
  coverImage: string;
  title: ITitle;
  words: IWord[];
}

export interface IDictionaryItemProps {
  title: ITitle;
  coverImage: string;
}

export interface ISingleWordProps extends IWord {
  number: number;
}

export interface IButtonProps {
  handleSave: () => void;
  disabled: boolean;
}
