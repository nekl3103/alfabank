export type Book = {
  authors: [] | string;
  characters: [] | string;
  country: string;
  isbn: string;
  mediaType: string;
  name: string;
  numberOfPages: number;
  povCharacters: [] | string;
  publiser?: string;
  publisher?: string;
  released: Date;
  url: string;
  like?: boolean;
};