import { Timestamp } from "firebase/firestore";

export type UserRole = "admin" | "client";

export interface User {
  id: string; // Document ID matches Firebase Auth UID
  email: string;
  role: UserRole;
  stripeCustomerId: string;
  createdAt: Timestamp;
}

export interface BrandVault {
  id: string; // Document ID matches User's UID
  primaryLogoUrl: string;
  secondaryLogoUrl: string;
  brandColors: string[];
  doNotSayList: string;
  brandGuidelinesUrl: string;
  updatedAt: Timestamp;
}

export type ProjectStatus =
  | "Onboarding"
  | "Assets Status"
  | "In Production"
  | "In Review"
  | "Ready for Handoff";

export type PaymentStatus = "Deposit Paid" | "Fully Paid";

export interface Project {
  id?: string; // Auto-generated ID, optional when creating
  clientId: string; // Linking to the user
  title: string;
  status: ProjectStatus;
  paymentStatus: PaymentStatus;
  aiStoryboard: string;
  masterBlueprintScript: string;
  reviewVideoUrl: string;
  finalDeliverableUrl: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
