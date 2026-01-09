import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用静态 HTML 导出 - Netlify 需要此配置
  output: 'export',

  images: {
    // 禁用图片优化 API - 静态导出不支持服务器端图片优化
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },

  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
