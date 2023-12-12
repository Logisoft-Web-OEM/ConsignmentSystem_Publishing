import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function GuideLayout({ children }: LayoutProps) {
  return <section>{children}</section>;
}
