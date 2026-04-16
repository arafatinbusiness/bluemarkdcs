import { JournalPost } from '../../types';
import corporateProServices2026 from './corporate-pro-services-complete-guide-2026';
import bestProServices2025 from './best-pro-services-dubai-complete-guide';
import corporateProServicesBreakdown2026 from './corporate-pro-services-dubai-full-breakdown-2026-guide';
import businessSetupGuide2024 from './business-setup-guide-2024';
import dubaiInvestorVisaProcess2026 from './dubai-investor-visa-process-2026';
import tradeLicenseRenewal2026 from './trade-license-renewal-dubai-2026';
import tradeLicenseRenewalCompleteGuide2026 from './trade-license-renewal-dubai-complete-guide-2026';

// Blog post registry - add new posts here
export const BLOG_POSTS: JournalPost[] = [
  tradeLicenseRenewalCompleteGuide2026,
  tradeLicenseRenewal2026,
  dubaiInvestorVisaProcess2026,
  corporateProServices2026,
  bestProServices2025,
  corporateProServicesBreakdown2026,
  businessSetupGuide2024,
];

// Helper function to get blog post by ID
export function getBlogPostById(id: string): JournalPost | undefined {
  return BLOG_POSTS.find(post => post.id === id);
}

// Helper function to get all blog posts
export function getAllBlogPosts(): JournalPost[] {
  return BLOG_POSTS;
}