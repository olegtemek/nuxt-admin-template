export interface ITemplate {
  id?: number;
  name: string;
  position: string;
  message?: string;
  description: string;
  file: string | undefined | File;
  select?: number | string;
  list: number[];
  image: string | File;
  date?: string;
}
