import { Item } from "./item";

export interface Order {
  id: number;
  userId: string;
  items: Item[]
}
  