export type Message = {
  type: 'text' | 'audio';
  author: string;
  body: string;
};
