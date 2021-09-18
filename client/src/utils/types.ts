export type Message = {
  type: 'text' | 'audio';
  author: string;
  body: string;
  date: string;
};

export type ChatInformation = {
  _id: string;
  userName1: string;
  userName2: string;
  messages: Message[];
  updatedAt: Date;
};

export type Chats = ChatInformation[];
