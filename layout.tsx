export const metadata = {
  title: "The Frog & Lady",
  description: "Eco‑minimal activewear with a retro soul.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[#F6F4EE] text-[#1d1d1f]">
        {children}
      </body>
    </html>
  );
}
