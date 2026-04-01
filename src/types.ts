export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
}

export interface JournalPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content?: string;
}

export interface BusinessUpdate {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content?: string;
  category?: string;
  socialMediaPlatform?: string;
}
