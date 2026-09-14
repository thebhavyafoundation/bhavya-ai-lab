/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#F7F6F3', alt: '#F2F1ED' },
        surface: { DEFAULT: '#FFFFFF', elevated: '#FFFFFF' },
        ink: { DEFAULT: '#1A1A1A', secondary: '#525252', muted: '#737373' },
        border: { DEFAULT: '#E5E4E0', strong: '#D4D3CE' },
        accent: { DEFAULT: '#0F5C5C', hover: '#0A4545', subtle: '#E6F2F2' },
        status: { success: '#166534', warning: '#A16207', danger: '#B91C1C', info: '#1E3A5F' },
        lab: { deep: '#0C2E2E', mid: '#0F5C5C' },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.25rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
        h1: ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        h2: ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        h3: ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }],
        body: ['1.0625rem', { lineHeight: '1.65' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
        meta: ['0.8125rem', { lineHeight: '1.4' }],
      },
      maxWidth: { content: '42rem', container: '72rem', wide: '80rem' },
      borderRadius: { sm: '0.25rem', md: '0.375rem', lg: '0.5rem' },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(0 0 0 / 0.04)',
        card: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
      },
      transitionDuration: { fast: '150ms', normal: '200ms' },
    },
  },
  plugins: [],
};
