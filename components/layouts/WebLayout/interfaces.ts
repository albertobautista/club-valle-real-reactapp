import { ReactNode } from 'react';

export interface IWebLayoutProps {
  children: ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}
