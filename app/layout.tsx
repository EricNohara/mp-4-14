import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: Readonly<React.ReactNode>;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
