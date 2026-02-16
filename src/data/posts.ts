import type { Post } from "../types";

export const posts: Post[] = [
  {
    id: "1",
    week: 1,
    titleKey: "posts.1.title",
    dateRangeKey: "posts.1.dateRange",
    excerptKey: "posts.1.excerpt",
    contentKey: "posts.1.content",
    achievementsKey: "posts.1.achievements",
    technologies: ["React", "TypeScript", "Git", "AWS", "Amplify"],
    tags: ["onboarding", "setup", "analysis"],
    imageUrl: "",
  },
  {
    id: "2",
    week: 2,
    titleKey: "posts.2.title",
    dateRangeKey: "posts.2.dateRange",
    excerptKey: "posts.2.excerpt",
    contentKey: "posts.2.content",
    achievementsKey: "posts.2.achievements",
    technologies: ["React", "TypeScript", "Git"],
    tags: ["feature", "email", "translation"],
    imageUrl: "",
  },
];
