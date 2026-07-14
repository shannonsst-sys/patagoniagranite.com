export type Slab = {
  slug: string;
  code: string;
  name: string;
  image: string;
  detail: string;
  application: string;
  tone: string;
};

const tones = [
  'Ivory field · smoky crystal', 'Rose feldspar · graphic black', 'High-contrast mineral movement',
  'Warm blush · silver fractures', 'Cloud white · fine mineral field', 'Black-white linear movement',
  'Quiet ivory · translucent crystal', 'White ground · graphite sweep', 'Silver cloud · mineral mosaic',
  'Warm ivory · moss crystal', 'Soft grey · granular depth', 'Graphic mono · crystalline field',
  'Golden cream · black crystal', 'Champagne crystal · warm movement'
];

export const slabs: Slab[] = Array.from({ length: 14 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return {
    slug: `patagonia-granite-slab-${number}`,
    code: `PAT-${number}`,
    name: `Patagonia Granite Slab ${number}`,
    image: `/assets/images/products/patagonia-granite/patagonia-granite-slab-${number}.webp`,
    detail: `/assets/images/products/patagonia-granite/patagonia-granite-slab-${number}-detail.webp`,
    application: `/assets/images/products/patagonia-granite/patagonia-granite-slab-${number}-kitchen-island-01.webp`,
    tone: tones[index],
  };
});

export const product = {
  name: 'Natural Patagonia Granite',
  material: 'Brazilian natural stone · pegmatitic granite',
  origin: 'Brazilian block sourcing · processed in Shuitou, China',
  thicknesses: ['18 mm', '20 mm', '30 mm', 'Custom'],
  finishes: ['Polished', 'Honed', 'Leathered', 'Antique'],
  applications: ['Kitchen islands', 'Countertops', 'Feature walls', 'Reception desks', 'Vanities', 'Tables', 'Stairs and flooring'],
  availability: 'Current and incoming lots — confirm before ordering',
  leadTime: 'Typically 15+ days, depending on scope and lot confirmation',
};
