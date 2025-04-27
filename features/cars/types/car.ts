export interface Car {
  id: number;
  brand: string;
  model: string;
  maxSpeed: number;
  energySource: string;
  dimensions: Dimensions;
  pricing: Pricing;
  commercializationDates: CommercializationDates;
  reviews: Review[];
  lastUpdated: string;
  electricDetails?: ElectricDetails;
}

export interface Dimensions {
  length: number;
  width: number;
  height: number;
}

export interface Pricing {
  basePrice: string;
  currentPrice: string;
}

export interface CommercializationDates {
  start: string;
  end: string | null;
}

export interface Review {
  reviewer: Reviewer;
  rating: string;
  text: string;
  reviewDate: string;
}

export interface Reviewer {
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface ElectricDetails {
  batteryCapacity: number;
  maxRange: number;
  maxTorque: number;
}
