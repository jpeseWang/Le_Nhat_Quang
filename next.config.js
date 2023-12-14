/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_GIPHY_API_KEY: "xGPv302Yn7mIfkbtGDyGgwUvpuqzZznS",
    baseURL: "https://api.giphy.com/v1/gifs",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: Array.from({ length: 5 }).map((_, index) => ({
      protocol: "https",
      hostname: `media${index}.giphy.com`,
      port: "",
      pathname: "/media/**",
    })),
  },
};

module.exports = nextConfig;
