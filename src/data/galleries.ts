export const applications = [
  ['Kitchen islands', 'patagonia-granite-kitchen-island-01.webp', 'Waterfall islands and countertops planned around the strongest mineral movement.'],
  ['Bathroom vanities', 'patagonia-granite-bathroom-double-vanity-01.webp', 'Vanity tops and wall panels with coordinated cuts and restrained joints.'],
  ['Hotel reception', 'patagonia-granite-hotel-lobby-reception-01.webp', 'Statement counters and backlit panels for hospitality and commercial interiors.'],
  ['Feature walls', 'patagonia-granite-living-room-feature-wall-01.webp', 'Large-format panels, bookmatch studies and focal crystal placement.'],
  ['Stairs & flooring', 'patagonia-granite-staircase-wall-floor-01.webp', 'Cut-to-size treads, risers and floor layouts prepared from approved drawings.'],
  ['Bar counters', 'patagonia-granite-commercial-bar-counter-01.webp', 'Durable, expressive surfaces for bars, lounges and collectible furniture.'],
].map(([title, file, description]) => ({ title, image: `/assets/images/applications/${file}`, description }));

export const factorySteps = [
  ['Brazilian block sourcing', 'patagonia-granite-quarry-overview-01.webp', 'Selected Brazilian resources are reviewed for usable scale, mineral composition and project character.'],
  ['Real slab selection', 'patagonia-granite-factory-slab-aisle-01.webp', 'Compare real slabs and confirm the exact lot, tone and movement before fabrication.'],
  ['Cutting & surface finishing', 'taj-mahal-quartzite-multi-wire-saw.webp', 'Multi-wire, gang-saw and polishing equipment support slab production and finish control.'],
  ['CNC fabrication', 'taj-mahal-quartzite-five-axis-machine.webp', 'Five-axis CNC, bridge saw and waterjet capability for cutouts, mitres and complex parts.'],
  ['Dry layout & vein planning', 'patagonia-granite-project-dry-lay-layout-01.webp', 'Parts are arranged before packing so seams, direction and focal areas can be reviewed.'],
  ['Inspection & export packing', 'taj-mahal-quartzite-processing-inspection-01.webp', 'Surfaces, edges, dimensions and layouts are checked before wooden-crate packing and loading.'],
].map(([title, file, description]) => ({ title, image: `/assets/images/factory/${file}`, description }));
