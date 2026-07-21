import ReactGA from "react-ga4";

export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (measurementId) {
    ReactGA.initialize(measurementId);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }
};