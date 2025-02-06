import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Loader from "./components/Loader";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutusPage = lazy(() => import("./pages/AboutusPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LandingPage = lazy(() => import("./landingpage/LandingPage"));
const ThankYou = lazy(() => import("./components/Thank-you"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Toaster
          position="top-bottom"
          toastOptions={{
            style: {
              zIndex: "10000",
              background: "#010C2A",
              color: "#ffffff",
            },
          }}
        />
        <AppLayout />
        {/* <TawkMessengerReact
          propertyId="67528a994304e3196aed2726"
          widgetId="1ied6qqlg"
        /> */}
      </Suspense>
    ),

    children: [
      {
        path: "/",
        element: (
          // <Suspense fallback={<Loader />}>
          <>
            <HomePage />
          </>
          // </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          // <Suspense fallback={<Loader />}>
          <AboutusPage />
          // </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          // <Suspense fallback={<Loader />}>
          <ServicesPage />
          // </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          // <Suspense fallback={<Loader />}>
          <ContactPage />
          // </Suspense>
        ),
      },
      {
        path: "/thank-you",
        element: (
          // <Suspense fallback={<Loader />}>
          <ThankYou />
          // </Suspense>
        ),
      },
    ],
  },
  {
    path: "/web-development",
    element: (
      <Suspense fallback={<Loader />}>
        {/* <TawkMessengerReact
          propertyId="67528a994304e3196aed2726"
          widgetId="1ied6qqlg"
        /> */}
        <LandingPage page={"web"} />
      </Suspense>
    ),
  },
  {
    path: "/app-development",
    element: (
      <Suspense fallback={<Loader />}>
        {/* <TawkMessengerReact
          propertyId="67528a994304e3196aed2726"
          widgetId="1ied6qqlg"
        /> */}
        <LandingPage page={"app"} />
      </Suspense>
    ),
  },
]);

export default AppRouter;
