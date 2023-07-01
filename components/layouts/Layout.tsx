import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import { Navbar } from '../ui/Navbar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>{}</Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: '20px, 50px' }}>{children}</main>
    </>
  );
};
