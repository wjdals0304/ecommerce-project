export interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

export interface BlogResponse {
  blogs: Blog[];
  totalPages: number;
}

export interface BlogDetail {
  blog: Blog;
  recentPosts: Blog[];
}
