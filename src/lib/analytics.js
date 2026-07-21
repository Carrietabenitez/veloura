import ReactGA from "react-ga4";

export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  console.log("GA ID:", measurementId);

  if (measurementId) {
    ReactGA.initialize(measurementId);
  }
};