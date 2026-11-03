# Auditoria: Instituto Oni Face (13/10/2026)

WEBSITES DEVELOPMENT team (auditoria) para o CEO Adolf. Cliente real: Dra. Vanessa Sanabria Bevilaqua, cirurgiã-dentista, CRO-76320 MG. Destino: institutooniface.com.br, hoje.
Método: leitura do código e dos dados, servidor de desenvolvimento em http://localhost:8096 (webpack), curl em todas as rotas, sonda via Chrome DevTools em 320, 390 e 1440 (12 rotas), teste real de toque no vídeo e de ESC, capturas em `capturas/auditoria/`. Não rodei build e não editei código.

## Nota "pronto para publicar": 6,5 de 10 (portão 8)

As páginas novas estão boas: texto fiel, CFO limpo, zero travessão, sem rolagem horizontal, vídeo e mapa funcionando. A nota cai por coisas que vão junto no mesmo deploy: proposta comercial com preço aberta no domínio da cliente, afirmações da home que contradizem a mudança da blefaroplastia e um resto de outra marca. São correções de minutos. **Com B1 a B4 resolvidos, a nota sobe para 8,5 e fica liberado.**

## Bloqueios

| # | Onde | Problema | Correção |
|---|---|---|---|
| B1 | `src/app/proposta/page.tsx` e `PropostaClient.tsx:516-557` | `/proposta` responde 200 no domínio da Dra. com "6x R$ 597,90", "R$ 3.199,00", "R$ 197,90/mês" e "Especialista em Full Face" (linha 390). Proposta da Med Logos não pode ir ao ar no site da cliente; o noindex não impede quem abre o link. | Apagar a pasta `src/app/proposta` (e `public/heroproposta.png`) antes do build, ou guardar fora do projeto. |
| B2 | `src/components/HomeClient.tsx:435` e `:447` | Home diz "Com foco especial em blefaroplastia (...) ela transforma o olhar" e o selo "Blefaroplastia · Foco especializado". Contradiz a página corrigida hoje (ato cirúrgico com a equipe; bucomaxilo em andamento) e sugere especialidade. | Trocar por algo como "Planejamento do olhar, com equipe multidisciplinar na blefaroplastia"; selo "Planejamento do olhar" sem "especializado". |
| B3 | `src/components/HomeClient.tsx:384`, `:435`, `:346` | CFO: "A especialidade da Dra. Vanessa são protocolos (...) que entregam resultado imediato e satisfatório" e o item "Resultados imediatos". "Especialidade" sem título registrado no CRO e promessa de resultado. | "O foco da Dra. Vanessa são protocolos faciais completos, planejados para o rosto como um conjunto." Item 346: "Planejamento individual". |
| B4 | `src/app/sitemap.ts:24` e `src/app/not-found.tsx:5` | Sitemap lista `https://institutooniface.com.br/a-uniq`, que agora é 308 para /sobre (URL com redirecionamento no sitemap). A página 404 tem título "Página não encontrada \| Esthétique \| Instituto Oni Face" (resto de outra marca, visível na aba). | Remover a linha 24 (o /sobre já entra pelo FULL_FACE_ROUTES). Título do 404: "Página não encontrada". |

## Itens conferidos

1. **Texto x `planejamento/PAGINAS-DIEGO-2026-10-13.md`**: as 8 páginas (pilar, 6 subpáginas, /sobre) batem com a fonte, quase literais. Só entraram intertítulos tirados das próprias frases da Dra. ("Chegar antes", "As queixas mudam", "Quantidade não é sustentação" etc.) e repetição de trechos dela entre páginas. Nenhuma formação, número, técnica ou marca nova. O /sobre não mostra os quatro itens pendentes (correto: nada de placeholder visível). OK.
2. **CFO nas páginas novas**: sem "especialista", sem preço, sem antes e depois em imagem, sem promessa. "Algumas marcas dão" não nomeia marca. "A diferença só aparece colocando uma foto de antes e uma de depois lado a lado" é frase dela e não exibe imagem: aceitável. Linha "Conteúdo informativo. Não substitui a avaliação profissional." e nome com CRO presentes. OK. Os problemas de CFO estão na home (B2, B3).
3. **Travessão**: zero em texto visível, alt, title, aria-label e meta nas 12 rotas em 3 larguras, e zero em `src/` (fora `googleReviews.json` e `src/assets/`). Sobra em `src/data/products.json` (5 linhas, `seo_title` de produtos Esthétique); o arquivo não é importado por nenhuma página. OK.
4. **Restos de outra cliente visíveis**: nenhum Fabiana, Sobral, UNIQ, Esthétique ou Jardins no texto renderizado das rotas públicas, exceto o título do 404 (B4). Ver pendência P1 para arquivos soltos.
5. **canonical, og:url, sitemap, robots**: canonical e og:url no domínio real em todas as rotas indexáveis; sitemap com 29 URLs, todas em https://institutooniface.com.br; robots com `Sitemap:` e `Host:` no domínio. /resultados e /paciente-modelo com `noindex, nofollow` e fora do sitemap. No dev, `og:image` e `twitter:image` saem como `http://localhost:8096/opengraph-image.png` (arquivo `src/app/opengraph-image.png`): o Next usa localhost para imagem de arquivo em desenvolvimento; **conferir no build** (P3).
6. **Vídeos e mapa**: toque no primeiro cartão em 390 (evento de toque) e clique em 1440 abrem o `<dialog>`, o vídeo toca (currentTime 3,3 s, readyState 4), o foco vai para "Fechar vídeo"; ESC fecha, pausa, libera a rolagem e devolve o foco ao cartão. Mapa (iframe com título) presente em /, /full-face e /contato; carregou no navegador real.
7. **320, 390, 1440**: sem rolagem horizontal em nenhuma das 36 combinações. Texto abaixo de 11 px só fora das páginas novas: `pill-label` 10 px (`globals.css:297`) e rótulos `text-[0.65rem]` 10,4 px em `src/app/tratamentos/[id]/page.tsx:122,138,148,158` e /tratamentos. Alvos abaixo de 44 px: links do rodapé (18 px de altura), breadcrumb "Início" (32x44 nas novas, 30x16 em tratamentos), "+55 34 99803-1777" em /contato (131x18). Ver melhorias M1 e M2.
8. **Status**: 200 nas 29 rotas do sitemap; `/a-uniq` responde 308 para `/sobre`; 404 correto para rota inexistente; /resultados, /paciente-modelo e /proposta respondem 200 (os dois primeiros com noindex, por decisão do Diego; o terceiro é B1).
9. **Segurança**: `.env.local` fora do git (só `VERCEL_OIDC_TOKEN`), nenhuma chave no código, sem `NEXT_PUBLIC_SITE_URL` definida (cai no domínio real). Conteúdo sem `opacity:0` no HTML do servidor.

## Pendências (não bloqueiam hoje, decisão do CEO ou do Diego)

- **P1. Arquivos de outras clientes em `public/`** (ficam acessíveis por URL no domínio da Dra., embora nada os referencie): `fabiana-sobral.png`, `logo-fabi.svg`, `dra_larissa_hero.jpg`, `logo_larissa_munhon.png`, `marcelle.png`, `dra_skin_hero.png`, `dra_skin_hero_real.jpg`, `Screenshot 2026-08-04 at 21.54.39.png`. Apagar antes do deploy é recomendável (privacidade de outra cliente). Também `src/assets/` (59 MB, inclui HTML salvo do site da Fabiana Sobral) e `src/index.css` ("Esthétique Design System"): não vão para o site, mas poluem o repositório.
- **P2. Escopo CFO fora da face**: `/tratamentos/bioestimuladores-corporais`, `protocolos-celulite`, `protocolos-gordura-localizada` (e talvez `protocolos-flacidez`, se corporal) estão no sitemap. Harmonização orofacial pelo CFO (Res. CFO 198/2019) é restrita à região orofacial e anexos da face. Páginas de tecnologia com nome comercial de aparelho (`/tecnologias/ultraformer`, `hipro`, `pixie`, `lavieen`). Já existiam antes de hoje; risco avisado uma vez aqui. Se o Diego mantiver, registrar a decisão no README.
- **P3. Depois do build**: `grep -rl localhost out/ .next/server/app/*.html` precisa dar vazio, em especial `og:image` e `twitter:image`. Várias páginas antigas calculam `SITE_URL` direto do ambiente sem o filtro de localhost de `src/lib/seo/site.ts` (`src/app/page.tsx:12`, `contato/page.tsx:10`, `tratamentos/[id]/page.tsx:15`, `fullFaceMetadata.ts:4` etc.): seguro hoje porque a variável não existe, frágil se alguém definir.
- **P4. Hospedagem**: `README.md` diz Vercel com deploy no push. A regra da casa é Cloudflare Pages; como é o domínio já ativo da cliente, o CEO decide e registra.
- **P5. `BRIEF.md`** é o briefing da Fabiana Sobral (template UNIQ). Trocar por um briefing da Dra. Vanessa.
- **P6. Autorização de imagem** das pacientes que aparecem nos 9 vídeos e no poster 01 (texto "POV" queimado no vídeo, da própria Dra.): confirmar com a Dra. (já anotado em `src/data/videos.ts:3`).
- **P7. Promessas menores em `src/data/treatments.ts`**: "garantir o resultado refinado" (linha 89), "garantindo um procedimento sem dor" (367), "Lifting mecânico imediato" (341), "melhorar dramaticamente" (FAQ de celulite, ~644). Suavizar no próximo passe.
- **P8. Títulos duplicados**: /tratamentos ("... · Dra. Vanessa Sanabria | Instituto Oni Face", longo demais) e /resultados ("Resultados | Instituto Oni Face | Instituto Oni Face").

## Melhorias

- **M1. Contraste do rodapé** (WCAG 1.4.3): `#8A8278` sobre `#EDE7D9` = 3,07:1 em texto de 14 px (precisa 4,5); "CEP" em `#C4BAA8` = 1,56:1 (`Footer.tsx:84`). Escurecer para algo como `#6B645B`.
- **M2. Alvos de toque**: links do rodapé, breadcrumb e telefone de /contato com `min-h-11 inline-flex items-center`.
- **M3. Texto 10 px**: `pill-label` e rótulos `0.65rem` para 0.6875rem (11 px).
- **M4. Mapa**: o embed busca por texto (`maps?q=Instituto+Oni+Face,+Uberlândia`). Usar o place id ou as coordenadas do pedido do Diego (-18.9521462, -48.2660692) garante o alfinete certo.
- **M5. Vídeo no iPhone**: `play()` roda num `useEffect` depois do toque; o Safari pode recusar e mostrar o vídeo parado (há `controls`, então funciona com um segundo toque). Chamar `play()` dentro do `onClick` tira esse risco.
- **M6.** `src/app/a-uniq/page.tsx` ficou morto (o redirect vence); apagar.

## Capturas
`capturas/auditoria/`: full-face 320, 390 e 1440; sobre, mitos, contato, blefaroplastia e home em 390; home 1440; vídeo aberto em 390 e 1440.

Skills usadas: site-perfeito, webmaster, web-design-guidelines, design:accessibility-review.
