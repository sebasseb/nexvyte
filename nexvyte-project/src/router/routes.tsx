import Home from "../views/Home/Home";
import PrivacyPolicy from "../views/PrivacyPolicy/PrivacyPolicy";




const routes = {
  home: {
    path: '/',
    element: <Home />,
  },
  privacy: {
    path: '/privacy',
    element: <PrivacyPolicy />,
  }
};

export default routes;
