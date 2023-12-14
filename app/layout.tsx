import type { Metadata } from 'next';
import './globals.css';

//font-famil, meta, reset만 정의

export const metadata: Metadata = {
  title: 'logisoft WEB OEM',
  description: 'logisoft WEB OEM ConsignmentSystem_Publishing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
