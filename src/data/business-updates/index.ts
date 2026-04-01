import { BusinessUpdate } from '../../types';
import newVisaRegulations2026 from './new-visa-regulations-2026';
import dubaiEconomicGrowth2026 from './dubai-economic-growth-2026';
import proServicesDemand2026 from './pro-services-demand-2026';

// Business updates registry - add new updates here
export const BUSINESS_UPDATES: BusinessUpdate[] = [
  dubaiEconomicGrowth2026,
  newVisaRegulations2026,
  proServicesDemand2026,
];

// Helper function to get business update by ID
export function getBusinessUpdateById(id: string): BusinessUpdate | undefined {
  return BUSINESS_UPDATES.find(update => update.id === id);
}

// Helper function to get all business updates
export function getAllBusinessUpdates(): BusinessUpdate[] {
  return BUSINESS_UPDATES;
}

// Helper function to get latest business updates (for homepage)
export function getLatestBusinessUpdates(limit: number = 3): BusinessUpdate[] {
  return BUSINESS_UPDATES.slice(0, limit);
}
