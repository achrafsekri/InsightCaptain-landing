export type Plan = {
  id: number;
  name: string;
  description: string;
  monthly_price: number;
  annual_price: number;
  features: string[];
  most_popular: boolean;
  href: string;
};

export type FAQ = {
  question: string;
  answer: string;
};
