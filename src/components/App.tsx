import "modern-css-reset/dist/reset.min.css";
import { Layout } from "./layout/layout";
import { RestaurantDashboard } from "./restaurant-dashboard/restaurant-dashboard";
import { ScrollBar } from "./scroll-bar/scroll-bar";
export const App = () => {
  return (
    <ScrollBar>
      <Layout>
        <RestaurantDashboard />
      </Layout>
    </ScrollBar>
  );
};
