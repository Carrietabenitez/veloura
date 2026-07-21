import ReactGA from "react-ga4";

export const trackEvent = (action, category = "Landing", label = "") => {
  ReactGA.event({
    category,
    action,
    label,
  });

  console.log("Evento enviado:", action);
};