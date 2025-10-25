import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shopmashburn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lordwillys.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.hangrr.com',
      },
      {
        protocol: 'https',
        hostname: 'shop.bluffworks.com',
      },
      {
        protocol: 'https',
        hostname: 'themoderngroom.com',
      },
      {
        protocol: 'https',
        hostname: 'classy.ca',
      },
      {
        protocol: 'https',
        hostname: 'i.etsystatic.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.lookastic.com',
      },
      {
        protocol: 'https',
        hostname: 'content.moss.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'img.drz.lazcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ebayimg.com',
      },
      {
        protocol: 'https',
        hostname: 'img.shopstyle-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'images.hawesandcurtis.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'editorialist.com',
      },
    ],
  },
};

export default nextConfig;
