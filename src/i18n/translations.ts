import { en } from "./en";
import { fr } from "./fr";

export const translations = { en, fr } as const;

export type Lang = keyof typeof translations;
