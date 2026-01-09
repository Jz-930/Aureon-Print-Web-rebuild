import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // 静态导出仅用于生产构建 (npm run build)
  // 开发模式不使用，以支持 middleware 的 i18n 路由
  ...(isProd && { output: 'export' }),

  images: {
    // 禁用图片优化 API - 静态导出不支持服务器端图片优化
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },

  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
