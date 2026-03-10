export type RestaurantsList = Restaurant[];

export interface Restaurant {
  id: string;
  menu: MenuItem[];
  name: string;
  reviews: Review[];
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export interface Review {
  id: string;
  user: string;
  text: string;
  rating: number;
}
