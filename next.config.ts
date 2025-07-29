
import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  images: {

    domains: ["res.cloudinary.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allows images from all HTTPS domains
      },
    ],

  },
};
 
export default nextConfig;
