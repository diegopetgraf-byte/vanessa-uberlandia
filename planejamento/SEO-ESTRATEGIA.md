# SEO do Instituto Oni Face: estratégia, linha de base e rotina semanal

SEO team, 13/10/2026. Objetivo do Diego: ranquear e vender protocolos Full Face em Uberlândia.
Domínio: https://institutooniface.com.br. Search Console: propriedade `sc-domain:institutooniface.com.br` (verificada por TXT em 13/10/2026).

## 1. Linha de base (13/10/2026)

| Item | Situação | Fonte |
|---|---|---|
| Search Console, desempenho 28 dias | Sem dados: a tela mostra "Dados em processamento: volte em mais ou menos um dia". Propriedade nova. Linha de base real fica para a primeira leitura com dados (repetir em 14 a 16/10). | Search Console, lido no navegador do app em 13/10 |
| Site no ar | canonical `http://localhost:8080`, sitemap e robots com `http://localhost:8080`. Título "Oni Face · Facial Boutique ...". Corrigido no código; vale só depois do próximo deploy. | curl em 13/10 |
| Busca de marca "instituto oni face" | O site **não aparece** na primeira página; o Google mostra um instituto de oftalmologia de Paracatu (ONI). Aparecem dois posts do Instagram da Dra. | Google, 13/10, navegador do app |
| Busca "dra vanessa sanabria" | Instagram em 1º, site em 2º. | Google, 13/10 |
| Ficha no Google Maps | Nome "Instituto Oni Face", categoria "Centro de saúde e beleza", **sem site cadastrado** ("Adicionar website"), sem avaliações visíveis, telefone (34) 99803-1777. | Google Maps, 13/10 |

### Divergências de NAP (nome, endereço, telefone) que a Dra. ou o Diego precisam resolver

1. **Endereço.** Site e `src/data/clinic.ts`: "Condomínio Âmbar Health Center, Sala 38, Jardim Karaíba, 38.411-217". Ficha do Google: "AMBAR HEALTH CENTRO CLINICO, Av. dos Vinhedos, 38, Sala 301, Jardim Karaíba, 38411-217". Pode ser que 38 seja o número da avenida e a sala seja 301. Confirmar com a Dra. e igualar site, schema e ficha. O schema usa hoje o que está em `clinic.ts`.
2. **Sábado.** Site: 09h às 13h. Ficha: 09h às 12h. Igualar.
3. **Nome.** Ficha e domínio: "Instituto Oni Face". O site usava "Oni Face · Facial Boutique". O metadata e o schema agora usam "Instituto Oni Face" com os outros nomes em `alternateName`. O texto visível (cabeçalho, rodapé) ainda diz "Oni Face"; sugerir ao design que o rodapé traga "Instituto Oni Face" por extenso.

## 2. Palavras-chave de Uberlândia, intenção e página que responde

Volumes de busca não foram medidos (sem Planejador de Palavras-chave nem ferramenta paga nesta rodada). As colunas de concorrentes vêm da primeira página do Google em 13/10/2026 (pt-BR, Brasil), lida no navegador do app.

| Palavra-chave | Intenção | Página do site | Quem ranqueia hoje (orgânico e mapa) |
|---|---|---|---|
| full face uberlândia | Comercial, quer o protocolo completo | `/full-face` (pilar) | Instagram @draandreafaria; Skyn Estética (blog "Full Face em Uberlândia" e página de curso); Clínica Stark; Instituto Debastiani. Mapa: Face Doctor Uberlândia |
| harmonização facial uberlândia | Comercial, compara profissionais | `/` e `/tratamentos/harmonizacao-facial`, com link para `/full-face` | @draandreafaria; Dra. Natália Silveira (dranataliasilveira.com.br); @draludmilagrama; Clínica Stark (/harmonizacao-facial); MD Odontologia; Clínica Delffina (publieditorial no G1); NuFace; Royal Face; Instituto Debastiani. Mapa: Dra. Ludmila Grama, Dra. Sarah Pina, Clínica Harmonare, Dra. Gabriela Guliatto |
| harmonização facial natural uberlândia | Comercial com medo de ficar artificial | `/full-face/resultado-natural` | @draandreafaria; Clínica Stark ("com Resultado Natural" no título); Dra. Natália Silveira; Clínica Sarah Pina; Skyn (/harmonizacao-facial); Royal Face |
| rejuvenescimento facial uberlândia | Informacional e comercial, faixa 40+ | `/full-face/aos-40` e `/full-face/aos-50` | Face Doctor (Instagram); Clínica Stark (/rejuvenescimento-facial); Dra. Gabriela Guliatto (laser); Doctoralia; Clínica Guliatto; cirurgiões plásticos. Mapa: Clínica Harmonare |
| bioestimulador de colágeno uberlândia | Comercial, procedimento definido | `/tratamentos/bioestimuladores-de-colageno`, com link para `/full-face/aos-30` | Dra. Gabriela Guliatto; NuFace (/bioestimulador-de-colageno); Doctoralia; Clínica Stark; Dra. Walkyria (dermatologista); Skyn (blog) |
| preenchimento facial uberlândia | Comercial | `/tratamentos/harmonizacao-facial` e `/tratamentos/preenchimento-labial` | @draandreafaria; NuFace; Royal Face; Clínica Stark (/preenchimento); Doctoralia; Clínica Sarah Pina; Botoclinic. Mapa: Dra. Sarah Pina, Dra. Ludmila Grama |
| toxina botulínica uberlândia / botox uberlândia | Comercial, preço e disponibilidade | `/tratamentos/toxina-botulinica` | Doctoralia; Skyn (/botox-uberlandia); Dra. Lorena Queiroz; NuFace (/botox); Botoclinic; Clínica Sarah Pina. Mapa: Clínica Harmonare, Dra. Ludmila Grama |
| instituto oni face / oni face uberlândia / dra vanessa sanabria | Marca, navegacional | `/` e `/sobre` | Oftalmologia ONI (Paracatu) ocupa a marca; Instagram da Dra. |
| planejamento facial / harmonização aos 30, 40, 50 | Informacional de cauda longa | `/full-face/planejamento`, `/aos-30`, `/aos-40`, `/aos-50` | Sem página local forte observada; espaço livre |
| mitos harmonização facial | Informacional | `/full-face/mitos` | Sem página local forte observada |

Leitura do quadro:
- O concorrente com estrutura mais parecida com a nossa é a **Clínica Stark**: uma página por procedimento com "em Uberlândia" no título. Skyn e NuFace fazem o mesmo. Para competir, cada página do cluster precisa responder a pergunta inteira e ligar as outras.
- Instagram ranqueia muito em Uberlândia. O perfil @dravansanabria deve ter o link do site na bio e citar "Instituto Oni Face, Uberlândia" na descrição.
- O pacote do mapa (os 3 do Maps) aparece em quase todas as buscas. Sem avaliações e sem site na ficha, o Instituto não entra lá. Isto pesa mais que qualquer ajuste de código.

Regras de texto para as páginas: título com o termo e a cidade uma vez, sem repetir "Uberlândia" no corpo mais que o natural; "toxina botulínica" no texto (Botox é marca); nada de "melhor", "mais avançado" ou promessa de resultado.

## 3. O que o código já faz (entrega desta rodada)

- `src/lib/seo/site.ts`: URL do site única. Se a variável `NEXT_PUBLIC_SITE_URL` vier com localhost ou vazia, cai para `https://institutooniface.com.br`. Lista fixa das 8 rotas novas e das rotas fora do sitemap.
- `src/app/layout.tsx`: title padrão "Instituto Oni Face | Full Face em Uberlândia, MG" (48 caracteres), modelo "%s | Instituto Oni Face", description de 143 caracteres, OG e Twitter sem "especialista" e sem travessão. Tirei o canonical do layout (ele era herdado por páginas sem canonical próprio, como /resultados, e apontava todas para a home). Um @graph global com Organization, WebSite, Dentist + MedicalBusiness (endereço e horário de `clinic.ts`, geo, hasMap, sameAs Instagram) e Person (cirurgiã-dentista, CRO-76320 MG). Sem aggregateRating e sem Review.
- `src/lib/seo/schemas.tsx`: geradores reescritos com os mesmos `@id`, então a home, que ainda chama os geradores, repete as mesmas entidades e o Google as funde.
- `src/lib/seo/fullFace.ts`: para o design usar nas páginas novas. `buildFullFaceMetadata(page)` (title absoluto sem o sufixo, canonical, OG) e `fullFacePageSchemas(page)` (MedicalWebPage, ou AboutPage em /sobre, mais BreadcrumbList Início > Full Face > página).
- `src/app/sitemap.ts`: 30 URLs, as 8 novas incluídas, /paciente-modelo e /proposta fora.
- `src/app/robots.ts`: aponta para `https://institutooniface.com.br/sitemap.xml`; /_next/ liberado (o Google precisa do CSS e do JS); /proposta e /paciente-modelo continuam rastreáveis para o Google ler o noindex delas.

## 4. Pendências para o CEO antes e depois do deploy

1. Na Vercel, conferir se existe `NEXT_PUBLIC_SITE_URL` com localhost nas variáveis do projeto e apagar ou trocar. O código já se protege, mas `src/data/clinic.ts` e as páginas de conteúdo ainda leem a variável direto.
2. Depois do deploy: `curl` na home para ver canonical e JSON-LD; Teste de Pesquisa Aprimorada em `/` e `/full-face`; enviar `sitemap.xml` no Search Console; pedir indexação de `/` e `/full-face`.
3. Páginas antigas com title longo: `tratamentos/[id]` monta "X em Uberlândia MG | Oni Face · Dra. Vanessa Sanabria" e o modelo do layout acrescenta mais 21 caracteres. Sugestão: `title: { absolute: ... }` ou encurtar para "X em Uberlândia". Essas páginas também usam "botox" nas keywords e `og:type article`.
4. Home (`src/app/page.tsx`): quando quiserem, tirar as chamadas a Organization, WebSite, LocalBusiness e Person (o layout já emite) e deixar só o FAQ.
5. `not-found.tsx` declara canonical `/404`: tirar o canonical da página 404.
6. Links internos: o pilar `/full-face` precisa de link no menu e na home; cada subpágina liga o pilar e 3 irmãs (`relacionados` já existe nos dados); as páginas de procedimento (harmonização, bioestimuladores, toxina, preenchimento) devem ligar `/full-face`.
7. Redirecionar `/a-uniq` para `/sobre` (301) quando `/sobre` estiver no ar, e então tirar `/a-uniq` do sitemap.

## 5. Ficha do Google e presença local (fora do código, maior impacto)

1. Ficha do Google: cadastrar o site `https://institutooniface.com.br/`; categoria principal "Dentista" ou "Clínica de estética" (a Dra. escolhe; hoje está "Centro de saúde e beleza"); igualar endereço e sábado; fotos do consultório; descrição com "Full Face" e "harmonização facial" em Uberlândia.
2. Avaliações: pedir às pacientes de forma igual para todas (sem filtrar quem está satisfeita, que é proibido pelo Google). Meta: primeiras 10 avaliações e ao menos uma nova a cada 2 a 3 semanas.
3. Bing Places (alimenta Copilot e ChatGPT) e Apple Maps: cadastrar com o mesmo NAP.
4. Doctoralia: aparece em 5 das 9 buscas pesquisadas; perfil da Dra. com link para o site.
5. Instagram: link na bio para `/full-face` e nome "Instituto Oni Face" na descrição.

## 6. Rotina semanal de melhoria (toda segunda, 30 minutos)

| Medir no Search Console (últimos 7 e 28 dias) | Como ajustar |
|---|---|
| Cobertura: páginas indexadas e não indexadas, por motivo | "Rastreada, mas não indexada" em página do cluster: reforçar links internos para ela e conteúdo próprio; "Duplicada sem canonical": conferir canonical da página |
| Consultas com impressões e posição 8 a 20 (filtro "uberlândia" e "full face") | São as mais perto da primeira página: colocar o termo exato no H2 ou no primeiro parágrafo da página certa, sem repetir |
| Páginas com CTR abaixo de 2% e posição até 10 | Reescrever title e description (30 a 60 e 70 a 155 caracteres), com o ganho para a paciente; esperar 2 semanas antes de mexer de novo |
| Consulta que cai em página errada (ex.: "rejuvenescimento facial" indo para a home) | Link interno da página que aparece para a página certa, com o termo no texto do link |
| Consultas novas sem página | Se aparecer 3 semanas seguidas, propor página ou seção ao copy |
| Marca ("oni face", "vanessa sanabria") | Posição deve chegar a 1; se não, revisar ficha do Google, Instagram e nome no rodapé |
| Core Web Vitals (relatório de experiência) | LCP acima de 2,5 s no celular: imagem do hero em WebP com prioridade; INP acima de 200 ms: tirar script pesado |
| Ficha do Google (Desempenho) | Ligações, cliques no site e rotas; número de avaliações e data da última |

Registrar cada segunda numa linha: data, cliques, impressões, CTR, posição média, páginas indexadas, avaliações na ficha, e o que mudou. Ajuste só um fator por página por vez para saber o que funcionou.

## 7. Restos de outros projetos e pontos de conselho (recomendação, nada apagado)

Restos encontrados (uso interno, nunca citar em material para a cliente):
- `src/data/reviews.json`: menções a outras profissionais (nome de outra clínica e de outra doutora).
- `src/data/products.json`, `src/data/seo_metadata.json`, `src/lib/product-copy-overrides.ts`, `src/index.css`, `src/app/not-found.tsx`: textos e dados de loja e marca de outro projeto (Esthétique).
- Rota `/a-uniq` e a classe e textos "uniq" em vários componentes (Header, Footer, cartões, globals.css).
- Rota `/proposta` (página de proposta comercial, noindex): apagar ou mover para fora do site.
- `src/assets/` (59 MB): HTML salvo de site de outra clínica com pasta `_files`, logos e fotos de outra cliente, imagens geradas soltas. Nada disso deveria ir ao repositório do site.
- `public/` (66 MB): `fabiana-sobral.png`, `logo-fabi.svg`, `dra_larissa_hero.jpg`, `logo_larissa_munhon.png`, `marcelle.png`, `heroproposta.png`, `Screenshot 2026-08-04 ...png`, várias `og-image.*` duplicadas. Arquivo em `public/` é público e indexável no Google Imagens.
- `scripts/validate-seo.js` tem padrão `http://localhost:8081`.

Pontos de conselho (CFO) e de foco:
- `/tecnologias`: nomes comerciais de aparelhos (Ultraformer, Hipro, PIXIE, Lavieen) e frases como "um dos equipamentos mais avançados do mundo" e "resultados superiores". Superlativo e comparação são vedados pela publicidade do Código de Ética Odontológica (art. 35, V e art. 44; confirmar o texto vigente). Recomendo descrever a técnica (ultrassom microfocado, radiofrequência fracionada) e tirar os superlativos. Baixei a prioridade dessas URLs no sitemap.
- "Especialista": só com especialidade registrada no CRO. Tirado do metadata e do schema; conferir o restante do site.
- Escopo dos procedimentos (blefaroplastia e protocolos corporais): segue a decisão do Diego registrada em `CONSELHOS.md` (não entramos na discussão de escopo). Do ponto de vista de SEO, as 4 páginas corporais não ajudam o foco Full Face; manter sem destaque no menu.

Skills usadas: claude-seo:seo, claude-seo:seo-local, claude-seo:seo-schema, claude-seo:seo-technical, site-perfeito.
