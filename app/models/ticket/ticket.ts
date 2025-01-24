import {IUser} from "../user/user";

export interface ITicket {
  id: string;
  name: string;
  description: string;
  tourOperator: string;
  price: string;
  img: string;
  location: {
    x: string;
    y: string;
  }
  hotel: string;
}

// добавить другие интерфейсы, на которые ссылается pages/tickets/tickets

export interface IVipTicket extends ITicket {
  vipNumber: number,
  vipStatus: string
}

export type TicketType = ITicket | IVipTicket;


export interface IPostTicketData {
  ticket: TicketType,
  user: IUser,
}
