/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  rewrites: async () => {
    return [
      {
        source: "/advies",
        destination: "https://advisor.boekhouder.nl/",
      },
      {
        source: "/advies/:path+",
        destination: "https://advisor.boekhouder.nl/:path+",
      },
      {
        source: "/advies-static/_next/:path+",
        destination: "https://advisor.boekhouder.nl/_next/:path+",
      },
    ];
  },
};

export default config;
