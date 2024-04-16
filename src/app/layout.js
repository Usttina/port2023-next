export const metadata = {
  title: "테스트지만 진지하게... 🥺 Next-Site",
  description: "테스트 중이다 이시키야.",
  keywords: [],
};

export default function RootLayout({ children }) {
  return (
      <html lang="ko">
          <link rel="icon" type="image/svg+xml" href="favicon.svg" />
          <body>{children}</body>
      </html>
  );
}
