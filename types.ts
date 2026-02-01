import React from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: string; // Tailwind class for grid span
}

export interface Client {
  name: string;
  logo: string;
}