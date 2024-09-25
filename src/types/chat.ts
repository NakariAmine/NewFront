export type Chat = {
  avatar: string;
  name: string;
  invoiceDate?:string;
  text: string;
  time?: number;
  textCount: number;
  status?:string;
  items?:any;
  dot: number;
};
