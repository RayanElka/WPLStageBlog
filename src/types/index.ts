export interface Post {
  id: string;
  week: number;
  title: string;
  dateRange: string;
  excerpt: string;
  content: string;
  achievements: string[];
  technologies: string[];
  tags: string[];
  imageUrl?: string;
}
