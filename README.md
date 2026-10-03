# Cooperativa Multiactiva Las Américas (MULTIAMERICAS)

Sitio web de **coopmultiamericas.com**, reconstruido desde cero con el contenido del sitio original.

Concepto visual: **Cálido y solidario** — verde café, rojo pétalo, sol y arena, inspirado en el Quindío (Bricolage Grotesque + Figtree).

## Lo que incluye

- Preloader con la **flor del logo que florece** (una vez por sesión)
- Hero con **paisaje cafetero en capas** (parallax con scroll y mouse, niebla, sol)
- **Insignia “Abierto ahora / Cerrado”** en vivo según la hora de Colombia
- **Simulador real de crédito** (libre inversión, educativo, solidario — sistema francés con gráfica capital/intereses) **y de ahorro** (aporte contractual) — llena la página “Simuladores” que estaba vacía
- Aporte social de ingreso calculado automáticamente (5% del SMMLV)
- Los 7 principios cooperativos como tarjetas que se apilan con el scroll
- Requisitos, derechos y deberes en tabs animados; beneficios; tabla de documentos
- Años de trayectoria calculados automáticamente (desde 1998)

**Páginas:** `/` · `/quienes-somos` · `/servicios` · `/simulador` · `/asociarme` · `/atencion` · `/privacidad`

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (tokens de diseño en `src/app/globals.css`, bloque `@theme`)
- **GSAP + ScrollTrigger** (secciones fijadas, scroll horizontal, scrub), **Lenis** (smooth scroll) y **Motion** (Framer Motion) para microinteracciones
- Fuentes autoalojadas con **Fontsource** (sin dependencia de Google Fonts)
- `lucide-react` para iconos

## Arrancar

```bash
yarn install
yarn dev        # http://localhost:3000
yarn build && yarn start
yarn lint
```

## Estructura

```
src/
  app/                  rutas (App Router), metadata, sitemap, robots, OG image, api/
  components/
    core/               animación y UI reutilizable (SmoothScroll, SplitHeading, ScrubText,
                        Reveal, Counter, Magnetic, TiltCard, Marquee, Cursor, Accordion,
                        ContactForm, WhatsAppButton…)
    layout/             Header, Footer, Logo, Preloader
    sections/           secciones de cada página
  content/              ⭐ TODOS los textos y datos del sitio (editar aquí)
  lib/                  utilidades (cn, gsap, intro, useMediaQuery)
```

## Formulario de contacto

`/api/contact` envía el correo con **Resend** si existen estas variables (ver `.env.example`):

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=   # opcional, dominio verificado en Resend
```

Si no están configuradas, el formulario abre WhatsApp con el mensaje prellenado (nunca se pierde un contacto).

## Despliegue (Vercel)

1. Sube el repo a GitHub y crea el proyecto en Vercel (framework: Next.js).
2. Agrega las variables de entorno.
3. En *Domains* agrega `coopmultiamericas.com` y `www.coopmultiamericas.com` y apunta los DNS (A `76.76.21.21` / CNAME `cname.vercel-dns.com`).
4. Las URLs viejas de WordPress ya redirigen (301) a las nuevas: ver `next.config.ts`.

## Accesibilidad y rendimiento

- Respeta `prefers-reduced-motion` (desactiva smooth scroll, cursor, preloader y animaciones pesadas).
- Cursor personalizado solo en dispositivos con mouse.
- Enlace “Saltar al contenido”, foco visible, roles ARIA en tabs/acordeones.
- SEO: metadata por página, Open Graph generado, JSON-LD, `sitemap.xml` y `robots.txt`.

## Pendientes con el cliente

- [ ] **SMMLV**: actualizar cada enero en `src/content/site.ts` (2026 = $1.750.905)
- [ ] Tasas de referencia reales en `src/content/simulator.ts`
- [ ] Logo oficial en SVG/PNG
- [ ] El sitio viejo hablaba de Medellín/Antioquia y de la Universidad de Medellín: se simplificó a “Residir en Colombia” y se quitó la mención a la universidad; confirmar
- [ ] Enlace real del “Portal transaccional” y canales de pago (hoy llevan a Atención)
- [ ] Redes sociales y fotos reales de asociados/actividades (opcional)
