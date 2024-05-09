export interface Video {
  id: number;
  title: string;
  image: string;
  files: Record<number, string>;
}
