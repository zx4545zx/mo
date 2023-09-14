import axios from 'axios';
import { Order } from '../models/order';

export async function getOrder() {
  const url: string = "http://restaurantapi.bubblethailand.com/order";
  try {
    const response = await axios.get(url);
    const data: Order[] = response.data.data;
    return data as Order[];
  } catch (error) {
    console.error(error);
  }
}