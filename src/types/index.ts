export interface Post {
  id: string;
  week: number;
  titleKey: string;
  dateRangeKey: string;
  excerptKey: string;
  contentKey: string;
  achievementsKey: string;
  technologies: string[];
  tags: string[];
  imageUrl?: string;
}
