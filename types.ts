export interface CaseStudy {
  id: string;
  type: string;
  location: string; // Generic location if specific city isn't provided
  initialOffer: string;
  finalSettlement: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
}