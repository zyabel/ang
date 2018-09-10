interface CheckoutItem {
  id: string;
  price: number;
  name: string;
  sum: number;
  count: number;
}

export interface Order {
  name: string;
  phone: string;
  email: string;
  items: CheckoutItem[];
  status: string;
}