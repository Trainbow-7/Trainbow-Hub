import * as React from "react";
import { HubOrbit, HubOrbitProps } from "./HubOrbit";

/**
 * HeroHubVisual
 * Public landing page hero visual displaying the "One account" central node
 * with an upright, continuous clockwise marquee orbit of the four core services.
 */
export function HeroHubVisual(props: HubOrbitProps) {
  return <HubOrbit {...props} />;
}
