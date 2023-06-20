export interface BasicFilm {
  id: string;
  title: string;
  esTitle: string;
  rating: number;
  mainImage: string;
  tags: string[];
}

export type BasicFilms = BasicFilm[];
