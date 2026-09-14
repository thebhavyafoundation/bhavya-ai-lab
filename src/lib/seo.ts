export interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  siteName?: string;
}

const DEFAULTS = {
  siteName: 'Bhavya AI Lab',
  title: 'Bhavya AI Lab',
  description:
    'A digital laboratory for learning AI, building with AI, experimenting with AI, and applying AI to the real world — originating from Himachal Pradesh.',
};

export function resolveSeo(props: SeoProps = {}) {
  const title =
    props.title && props.title !== DEFAULTS.title
      ? `${props.title} · ${DEFAULTS.siteName}`
      : DEFAULTS.title;
  return {
    title,
    description: props.description || DEFAULTS.description,
    canonical: props.canonical,
    ogImage: props.ogImage || '/og-default.svg',
    noindex: props.noindex ?? false,
    siteName: props.siteName || DEFAULTS.siteName,
  };
}
