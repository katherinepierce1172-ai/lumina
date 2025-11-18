export enum ServiceCategory {
  HAIRCUT = 'Haircut & Style',
  COLOR = 'Color & Highlights',
  TREATMENT = 'Treatments',
  TEXTURE = 'Texture & Perms'
}

export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  category: ServiceCategory;
}

export interface Stylist {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

export interface StyleRecommendation {
  styleName: string;
  description: string;
  suitability: string;
  maintenanceLevel: 'Low' | 'Medium' | 'High';
  tips: string;
}
