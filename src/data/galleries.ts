const applicationCopy = {
  Kitchens: 'Waterfall islands and worktops composed around the strongest mineral movement.',
  Bathrooms: 'Vanities and wall panels coordinated for clean joints and balanced crystal placement.',
  Hospitality: 'Statement counters, floors and backlit surfaces for memorable commercial interiors.',
  'Feature walls': 'Large-format focal surfaces planned around scale, continuity and natural contrast.',
  'Stairs & floors': 'Cut-to-size architectural pieces developed from approved drawings and slab layouts.',
};

export const applications = [
  ['Sculptural kitchen island', 'patagonia-granite-kitchen-island-01-site.webp', 'Kitchens'],
  ['Waterfall kitchen island', 'patagonia-granite-kitchen-island-02-site.webp', 'Kitchens'],
  ['Contemporary kitchen centerpiece', 'patagonia-granite-kitchen-island-03.webp', 'Kitchens'],
  ['Patagonia statement kitchen', 'patagonia-granite-kitchen-island-04.webp', 'Kitchens'],
  ['Double vanity composition', 'patagonia-granite-bathroom-double-vanity-01.webp', 'Bathrooms'],
  ['Bookmatched double vanity', 'patagonia-granite-bathroom-double-vanity-02.webp', 'Bathrooms'],
  ['Natural stone vanity', 'patagonia-granite-bathroom-vanity-01.webp', 'Bathrooms'],
  ['Patagonia vanity detail', 'patagonia-granite-bathroom-vanity-02.webp', 'Bathrooms'],
  ['Vanity and feature wall', 'patagonia-granite-bathroom-vanity-wall-01.webp', 'Bathrooms'],
  ['Commercial bar counter', 'patagonia-granite-commercial-bar-counter-01.webp', 'Hospitality'],
  ['Hotel lobby floor', 'patagonia-granite-hotel-lobby-floor-01.webp', 'Hospitality'],
  ['Hotel lobby reception', 'patagonia-granite-hotel-lobby-reception-01.webp', 'Hospitality'],
  ['Reception counter and wall', 'patagonia-granite-hotel-reception-counter-01.webp', 'Hospitality'],
  ['Living room feature wall', 'patagonia-granite-living-room-feature-wall-01.webp', 'Feature walls'],
  ['Backlit feature wall', 'patagonia-granite-living-room-feature-wall-02.webp', 'Feature walls'],
  ['Large-format focal wall', 'patagonia-granite-living-room-feature-wall-03.webp', 'Feature walls'],
  ['Patagonia television wall', 'patagonia-granite-living-room-tv-wall-01.webp', 'Feature walls'],
  ['Staircase wall and floor', 'patagonia-granite-staircase-wall-floor-01.webp', 'Stairs & floors'],
  ['Architectural stair composition', 'patagonia-granite-staircase-wall-floor-02.webp', 'Stairs & floors'],
].map(([title, file, category]) => ({
  title,
  category,
  image: `/assets/images/applications/${file}`,
  description: applicationCopy[category as keyof typeof applicationCopy],
}));

export const factorySteps = [
  ['Brazilian block sourcing', 'patagonia-granite-quarry-overview-01.webp', 'Selected Brazilian resources are reviewed for usable scale, mineral composition and project character.'],
  ['Real slab selection', 'patagonia-granite-factory-slab-aisle-01.webp', 'Compare real slabs and confirm the exact lot, tone and movement before fabrication.'],
  ['Cutting & surface finishing', 'taj-mahal-quartzite-multi-wire-saw.webp', 'Multi-wire, gang-saw and polishing equipment support slab production and finish control.'],
  ['CNC fabrication', 'taj-mahal-quartzite-five-axis-machine.webp', 'Five-axis CNC, bridge saw and waterjet capability for cutouts, mitres and complex parts.'],
  ['Dry layout & vein planning', 'patagonia-granite-project-dry-lay-layout-01.webp', 'Parts are arranged before packing so seams, direction and focal areas can be reviewed.'],
  ['Inspection & export packing', 'taj-mahal-quartzite-processing-inspection-01.webp', 'Surfaces, edges, dimensions and layouts are checked before wooden-crate packing and loading.'],
].map(([title, file, description]) => ({ title, image: `/assets/images/factory/${file}`, description }));
