import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/a-uniq', destination: '/sobre', permanent: true },
      /**
       * Cópia pública no endereço da Vercel (vanessa-uberlandia.vercel.app)
       * respondia 200 com index (diagnóstico de indexação, 05/11/2026).
       * Redireciona com 308 para o domínio oficial, preservando o caminho.
       * Só o host exato: as prévias com hash continuam acessíveis.
       */
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vanessa-uberlandia.vercel.app' }],
        destination: 'https://institutooniface.com.br/:path*',
        permanent: true,
      },
    ];
  },
};


export default nextConfig;
