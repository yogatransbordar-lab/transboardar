# 📋 Planejamento — Site Transbordar Yoga

> Documento técnico e visual de tudo que foi implementado no site **Transbordar Yoga Estúdio**.
> Projeto localizado em: `c:\Users\DELL\Documents\SITE_YOGA`

---

## 🗂️ Estrutura de Arquivos

```
SITE_YOGA/
├── index.html            ← Estrutura principal do site (436 linhas)
├── index.css             ← Estilos globais e por seção (1030 linhas)
├── script.js             ← Lógica interativa (149 linhas)
├── logo_transbordar.png  ← Logo principal (header)
└── assets/               ← Imagens e mídias
    ├── hero_nature_*.png
    ├── hero_meditation_*.png
    ├── hero_studio_*.png
    ├── hero_group_*.png
    ├── 2.png
    ├── autoconhecimento.png
    ├── carta_transbordar.png
    ├── avatar_1_*.png
    ├── prof_cris.jpg
    ├── prof_ellen.jpg
    ├── prof_felipe.jpg
    ├── camisa_branca.png
    ├── camisa_marrom.png
    ├── camisa_rosa.png
    ├── camisa_verde.png
    ├── caneca_transbordar.png
    ├── caneca_transbordar_vidro.png
    ├── saude.png
    └── logo_footer.png
```

---

## 🛠️ Tecnologias e Bibliotecas Utilizadas

| Tecnologia | Versão / Fonte | Finalidade |
|---|---|---|
| HTML5 | Nativo | Estrutura semântica do site |
| CSS3 (Vanilla) | Nativo | Estilização completa, animações, responsividade |
| JavaScript (ES6+) | Nativo | Interatividade, carrosseis, animações de scroll |
| Google Fonts — Outfit | CDN Google | Tipografia principal |
| Font Awesome | v6.0.0 (CDN) | Ícones (WhatsApp, chevrons, mapa, etc.) |
| Google Maps Embed API | Nativo | Mapa na seção de localização |
| ui-avatars.com | API externa | Avatares dos depoimentos sem imagem local |
| Unsplash | API CDN | Imagens das aulas (Ashtanga, Hatha Flow) |

---

## 🎨 Sistema de Design (Design Tokens — `index.css`)

### Paleta de Cores
```css
--primary:       #B8C7B0  /* Verde suave */
--primary-light: #DCE5D8  /* Verde claro */
--secondary:     #F5F3F0  /* Bege quente */
--accent:        #E8DCC4  /* Bege dourado */
--bg-white:      #FFFFFF
--bg-cream:      #FDFAF7
--text-main:     #333333
--text-muted:    #666666
```

### Tipografia
- **Família:** `'Outfit'`, fallback `'Inter'`, `sans-serif`
- **Pesos utilizados:** 300, 400, 600, 700

### Espaçamentos
```css
--spacing-xs: 0.5rem
--spacing-sm: 1rem
--spacing-md: 2rem
--spacing-lg: 4rem
--spacing-xl: 8rem
```

### Outros Tokens
```css
--transition:    all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
--shadow:        0 4px 20px rgba(0, 0, 0, 0.05)
--border-radius: 20px
```

---

## 📐 Seções Implementadas

---

### 1. 🔝 Header (Cabeçalho Fixo)

**ID:** `#header`  
**Arquivo:** `index.html` linhas 20–43 | `index.css` linhas 103–130

#### O que foi feito:
- Header **fixo no topo** (`position: fixed`) com `z-index: 1000`
- Fundo branco com **sombra dupla** (externa + inset)
- Ao scrollar 50px, adiciona classe `.scrolled` via JS → sombra mais pronunciada
- **Logo** com imagem (`logo_transbordar.png`) + texto "Transbordar Yoga"
- **Links de navegação** desktop: Início, Professores, Aulas, Loja, Localização, Depoimentos
- **Botão hamburguer** (`#mobile-menu-btn`) para mobile com SVG inline

#### CSS aplicado:
```css
header {
  position: fixed;
  box-shadow: 0 0 25px rgba(0,0,0,0.15), inset 0 0 15px rgba(0,0,0,0.05);
}
header.scrolled { padding: 0.6rem 0; box-shadow: mais intensa }
```

#### JS aplicado:
```js
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) header.classList.add('scrolled');
});
```

---

### 2. 📱 Menu Mobile

**ID:** `#mobile-nav`  
**Arquivo:** `index.html` linhas 45–56 | `index.css` linhas 487–568

#### O que foi feito:
- Painel deslizante da direita (`right: -100%` → `right: 0` via classe `.active`)
- Links com `onclick="toggleMenu()"` para fechar ao clicar
- Links: Início, Professores, Aulas, Loja, Localização, Depoimentos, Contato
- Visível apenas abaixo de `768px`

#### JS aplicado:
```js
function toggleMenu() {
  mobileNav.classList.toggle('active');
}
mobileMenuBtn.addEventListener('click', toggleMenu);
```

---

### 3. 🌄 Hero (Banner Principal)

**ID:** `#inicio`  
**Arquivo:** `index.html` linhas 58–76 | `index.css` linhas 188–243

#### O que foi feito:
- Seção full-height (`100vh`) com **carrossel automático de imagens de fundo**
- **5 slides** de imagens geradas via IA (yoga natureza, meditação, estúdio, grupo)
- Transição `opacity 1.5s ease-in-out` entre slides
- Overlay escuro (`rgba(0,0,0,0.3)`) sobre as imagens
- Conteúdo centralizado: `<h1>Equilíbrio corpo e mente</h1>` + parágrafo

#### Imagens utilizadas:
- `assets/hero_nature_1774572944341.png`
- `assets/hero_meditation_1774572964342.png`
- `assets/hero_studio_1774572984329.png`
- `assets/2.png`
- `assets/hero_group_retry_1774573247696.png`

#### JS aplicado:
```js
let currentSlide = 0;
function nextSlide() { /* troca classe .active entre slides */ }
setInterval(nextSlide, 5000); // Troca a cada 5 segundos
```

---

### 4. 🧘 Autoconhecimento

**ID:** `#autoconhecimento`  
**Arquivo:** `index.html` linhas 78–105 | `index.css` linhas 897–1004

#### O que foi feito:
- Layout **grid 2 colunas** (imagem | conteúdo)
- **Flip Card interativo** com efeito 3D ao clicar:
  - Frente: `assets/carta_transbordar.png`
  - Verso: `assets/autoconhecimento.png`
  - Animação: `rotateY(180deg)` com `perspective: 1500px`
- Texto descritivo sobre yoga e autoconhecimento
- Hint visual abaixo da imagem com ícone `fa-sync-alt`
- Em **mobile (≤992px):** hint pulsa com animação `@keyframes blink`

#### JS aplicado:
```js
flipCard.addEventListener('click', () => {
  flipCard.classList.toggle('flipped'); // Aciona rotateY(180deg)
});
```

---

### 5. ⭐ Depoimentos

**ID:** `#depoimentos`  
**Arquivo:** `index.html` linhas 107–162 | `index.css` linhas 245–292

#### O que foi feito:
- **6 cards de depoimento** em grid (3 colunas desktop → 2 tablet → 1 mobile)
- Cada card contém: avatar circular, nome, texto em itálico, estrelas douradas (★★★★★)
- Hover: `translateY(-10px)` para efeito flutuante
- Avatares: 1 imagem local (`avatar_1_*.png`) + 5 via `ui-avatars.com`
- Fundo `--bg-cream` para diferenciar seção

#### Depoimentos incluídos:
| Nome | Avatar |
|---|---|
| Ana Silva | `assets/avatar_1_retry.png` |
| João Santos | ui-avatars (verde) |
| Clara Oliveira | ui-avatars (bege) |
| Rafaela Mendes | ui-avatars (dourado) |
| Lucas Pereira | ui-avatars (verde) |
| Mariana Alves | ui-avatars (verde claro) |

---

### 6. 👩‍🏫 Professores

**ID:** `#professores`  
**Arquivo:** `index.html` linhas 164–201 | `index.css` linhas 703–778

#### O que foi feito:
- Layout em **lista vertical** (máx. 800px centralizado)
- Cada professor: foto retangular (`160×160px`, `border-radius: 12px`) + card azul sobreposto
- **Efeito overlap** — card começa 60px à esquerda da foto (`margin-left: -60px`)
- Hover: foto `scale(1.05)` + card `translateX(10px)` e azul mais escuro
- Em **mobile (≤768px):** layout empilhado verticalmente

#### Professores:
| Nome | Instagram | Foto |
|---|---|---|
| Cris Queiroz | @crisqueirozyoga | `assets/prof_cris.jpg` |
| Ellen Maclen | @yogacomellen | `assets/prof_ellen.jpg` |
| Filipe Lyrios | @filipelyrios | `assets/prof_felipe.jpg` |

#### CSS aplicado:
```css
.professor-info-card { background: #00B4D8; margin-left: -60px; }
.professor-item:hover .professor-info-card { transform: translateX(10px); }
```

---

### 7. 🏃 Aulas

**ID:** `#aulas`  
**Arquivo:** `index.html` linhas 202–237 | `index.css` linhas 294–329

#### O que foi feito:
- Grid flexível com `flex-wrap: wrap; justify-content: center`
- **4 modalidades** de aula em formato circular (`160×160px, border-radius: 50%`)
- Hover: `scale(1.05)` em cada item
- Imagens via Unsplash CDN e base64 local

#### Modalidades:
| Modalidade | Fonte da Imagem |
|---|---|
| Ashtanga Vinyasa | Unsplash CDN |
| Hatha Yoga | anaissa.com CDN |
| Hatha Flow | Unsplash CDN |
| Iyengar Yoga | Base64 embutida no HTML |

---

### 8. 🛍️ Loja (Nossa Loja)

**ID:** `#story`  
**Arquivo:** `index.html` linhas 239–318 | `index.css` linhas 780–888

#### O que foi feito:
- **2 produtos** com carrossel de imagens e detalhes ao lado
- Layout grid `1fr 1.2fr` (foto | texto)
- Carrossel de produto com botões prev/next (`fa-chevron-left/right`)
- Transição de opacidade + scale entre imagens do produto
- Botão "Quero a minha" → abre WhatsApp com mensagem pré-definida

#### Produto 1 — Camisa Oversized Premium
- **Preço:** R$ 89,90
- **Imagens:** branca, marrom, rosa, verde
- **WhatsApp:** `?text=Olá! Tenho interesse na camisa Transbordar.`

#### Produto 2 — Caneca Transbordar
- **Preço:** R$ 49,90
- **Imagens:** caneca cerâmica, caneca vidro
- **WhatsApp:** `?text=quero minha caneca transbordar`

#### JS aplicado:
```js
carousels.forEach(carousel => {
  prevBtn.addEventListener('click', toggleProductImg);
  nextBtn.addEventListener('click', toggleProductImg);
});
```

---

### 9. 📍 Localização

**ID:** `#localizacao`  
**Arquivo:** `index.html` linhas 320–352 | `index.css` (usa `.location-section`, `.location-grid`)

#### O que foi feito:
- Layout grid `1fr 1fr` (info | mapa)
- Card de endereço com ícone `fa-map-marker-alt`
- Botão "Ver no Google Maps" → link com coordenadas GPS
- **Google Maps Embed** via `<iframe>` apontando para o endereço real
- Endereço: Galeria Ana Maria, R. Manoel Graciliano de Souza, 1020 - Sala 8, Jardim Atlântico, Olinda - PE, CEP 53140-160

---

### 10. 🔻 Footer (Rodapé)

**ID:** `#contato`  
**Arquivo:** `index.html` linhas 354–407 | `index.css` linhas 331–485

#### O que foi feito:
- Footer escuro (`background: #0A1128` — navy azul profundo)
- **Grid 3 colunas** (2fr | 1fr | 1.5fr): marca | atalhos | contato
- **Col 1 — Marca:**
  - Logo (`assets/logo_footer.png`, 150px)
  - Texto descritivo do estúdio
  - Ícones de redes sociais (comentados, prontos para ativar)
- **Col 2 — Atalhos:**
  - Links internos com ícone `fa-chevron-right`
  - Hover: `translateX(5px)` + cor ciano `#00B4D8`
- **Col 3 — Contato:**
  - E-mail: contato@transbordaryoga.com.br
  - WhatsApp: +55 81 98930-4727
  - Instagram: @transbordaryogaestudio
- **Footer bottom:**
  - Crédito ao desenvolvedor (patrickataide.com.br)
  - Link WhatsApp com mensagem rastreável
  - Copyright 2026
- **Responsivo:** 2 colunas em ≤992px, 1 coluna em ≤600px
- **Mobile:** logo do footer animado com `@keyframes blink`

---

### 11. 💬 Widget WhatsApp

**ID:** `#whatsapp-widget`  
**Arquivo:** `index.html` linhas 409–431 | `index.css` linhas 570–701

#### O que foi feito:
- Widget **fixo** canto inferior direito (`bottom: 20px, right: 20px`)
- Botão verde `#12C75F` com ícone WhatsApp e texto "Converse via WhatsApp"
- **Popup** que abre ao clicar com:
  - Header verde com mensagem de boas-vindas + botão fechar (`×`)
  - Body com logo do WhatsApp + nome do estúdio + "Fale conosco!"
  - Clicar no body abre WhatsApp com mensagem rastreável
- **Auto-abertura** após 3 segundos da página carregar
- **Animação slideUp** ao aparecer
- **Anti-colisão com footer:** ao scrollar até o `.footer-bottom`, o widget sobe automaticamente

#### Mensagem rastreável:
```
Entrei no site do Transbordar, estúdio Yoga e quero saber mais informações!
```

#### JS aplicado:
```js
// Auto-abre após 3 segundos
setTimeout(() => whatsappPopup.classList.add('active'), 3000);

// Evita sobreposição com footer
window.addEventListener('scroll', () => {
  if (footerRect.top < viewportHeight) {
    widget.style.bottom = (baseBottom + offset) + 'px';
  }
});
```

---

## 🎞️ Animações Implementadas

| Animação | Onde É Usada | Técnica |
|---|---|---|
| **Fade-in de entrada** | Todos os elementos com `.fade-in` | IntersectionObserver + `translateY(30px) → 0` |
| **Carrossel Hero** | Seção Hero | `opacity` + `setInterval(5000ms)` |
| **Flip Card 3D** | Seção Autoconhecimento | `rotateY(180deg)`, `perspective: 1500px` |
| **Carrossel de produto** | Seção Loja | `opacity + scale` entre imagens |
| **Hover flutuante** | Cards de depoimento | `translateY(-10px)` |
| **Hover professor** | Cards de professores | `scale(1.05)` + `translateX(10px)` |
| **Hover aulas** | Items de aula | `scale(1.05)` |
| **Blink** | Hint flip (mobile) + logo footer (mobile) | `@keyframes blink` — opacity + scale |
| **SlideUp** | Popup WhatsApp | `@keyframes slideUp` — opacity + translateY |
| **Header shrink** | Header ao scroll | Classe `.scrolled` via JS |

---

## 📱 Responsividade

| Breakpoint | Mudanças |
|---|---|
| `≤ 992px` | Grid depoimentos 2 col; hint flip mobile ativo; store vira 1 col; self-knowledge vira 1 col; footer 2 col |
| `≤ 768px` | Nav links oculto → menu mobile ativo; hero h1 menor; depoimentos 1 col; professores estilhados verticalmente |
| `≤ 600px` | Footer 1 coluna |
| `≤ 480px` | Popup WhatsApp 280px |

---

## 🔗 Integrações e Links Externos

| Integração | URL | Onde Aparece |
|---|---|---|
| WhatsApp — Info geral | `wa.me/5581989304727?text=Entrei no site...` | Widget flutuante |
| WhatsApp — Camisa | `wa.me/5581989304727?text=Olá! Tenho interesse na camisa...` | Botão loja (camisa) |
| WhatsApp — Caneca | `wa.me/5581989304727?text=quero minha caneca transbordar` | Botão loja (caneca) |
| WhatsApp — Footer | `wa.me/5581989304727?text=Vim do site transbordarestudio...` | Rodapé |
| Google Maps Embed | Coordenadas: -7.971541, -34.8372901 | Seção Localização |
| Google Maps Link | `/maps/search/?api=1&query=-7.97...-34.83...` | Botão "Ver no Maps" |
| Desenvolvedor | `patrickataide.com.br` | Footer bottom |

---

## 🚀 Melhorias Futuras Sugeridas

- [ ] Ativar ícones de redes sociais no footer (Instagram, Facebook, YouTube já estão no HTML, mas comentados)
- [ ] Melhorar fotos dos professores Ellen e Filipe (tamanho muito pequeno: 6KB e 4KB respectivamente)
- [ ] Adicionar página de agendamento de aulas
- [ ] Implementar grade horária das aulas
- [ ] Adicionar SEO avançado (Open Graph, Schema.org)
- [ ] Otimizar imagens pesadas (camisa_marrom.png: 1.6MB, canecas: ~2MB)
- [ ] Adicionar página de checkout para a loja
- [ ] Implementar Google Analytics para rastrear cliques no WhatsApp

---

*Documento gerado em 29/03/2026 | Projeto: Transbordar Yoga Estúdio — Olinda/PE*
