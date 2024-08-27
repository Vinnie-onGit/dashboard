import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata={
  title:{
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'Simple example of how Nextjs works with App Router',
  metadataBase: new URL ('https://next-learn-dashboard.vercel.sh'),
  authors: [
    {name:'Nextjs.org', url:'https://nextjs.org/'},
    {name: 'Vinnie', url: 'https://github.com/Vinnie-onGit'}
  ],

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
