import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 폰 등 같은 와이파이의 다른 기기에서 LAN IP로 접속 시
  // Next dev 리소스(HMR·청크) 차단 방지
  allowedDevOrigins: ["192.168.0.139"],
};

export default nextConfig;
