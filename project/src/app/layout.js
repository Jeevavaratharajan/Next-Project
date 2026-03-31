import AppShell from "@/components/layout/AppShell";
import StoreProvider from "@/providers/StoreProvider";
import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AppShell>{children}</AppShell>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
