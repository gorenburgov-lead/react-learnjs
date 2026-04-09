import "modern-css-reset/dist/reset.min.css";
import { Layout } from "./layout/layout";
import { RestaurantDashboard } from "./restaurant-dashboard/restaurant-dashboard";
import { ScrollBar } from "./scroll-bar/scroll-bar";
import { ThemeProvider } from "./theme-provider/theme-provider";
import { AuthorizationProvider } from "./authorization-provider/authorization-provider";
export const App = () => {
  return (
    <AuthorizationProvider>
      <ThemeProvider>
        <ScrollBar>
          <Layout>
            <RestaurantDashboard />
          </Layout>
        </ScrollBar>
      </ThemeProvider>
    </AuthorizationProvider>
  );
};
