interface Category {
  id: number;
  name: string;
  iconPath: string;
}

interface Article {
  id: number;
  category_id: number;
  imagePath?: string;
  title: string;
  content: string;
  author: string;
  views: string;
  features: number[];
}

interface Features {
  id: number;
  name: string;
}

interface ArticleData {
  categories: Category[];
  articles: Article[];
  features: Features[];
}

import articleData from "../data/articlesData.json";

export const data: ArticleData = articleData;
