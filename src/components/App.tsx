import "./App.css";
import { Layout } from "./layout/layout";
import { RestaurantDashboard } from "./restaurant-dashboard/restaurant-dashboard";
export const App = () => {
  return (
    <Layout>
      <RestaurantDashboard />
    </Layout>
  );
};
