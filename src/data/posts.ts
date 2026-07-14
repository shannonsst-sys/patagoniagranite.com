export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
};

export const posts: Post[] = [
  {
    slug: 'patagonia-granite-slabs-buying-guide',
    title: 'Patagonia Granite Slabs: Selection, Thickness & Buying Guide',
    description: 'How to compare Patagonia Granite slabs, confirm current lots, choose thickness and plan fabrication for international projects.',
    date: '2026-07-14', readTime: '8 min',
    image: '/assets/images/products/patagonia-granite/patagonia-granite-slab-01-full.webp',
    intro: 'Patagonia Granite is purchased slab by slab. Its oversized crystals, translucent areas and contrasting mineral fields make every block—and every cut—different. The safest buying process begins with real slab photographs and ends with an approved layout.',
    sections: [
      { heading: 'What makes Patagonia Granite different?', paragraphs: ['Patagonia is a dramatic Brazilian pegmatitic granite. Instead of a fine, repeating grain, it often contains very large feldspar and quartz crystals, dark mineral fragments and areas that may transmit light. This is why it works so well for signature islands, backlit walls and collectible tables—and why a small sample cannot represent a full slab.'], bullets: ['Oversized mineral crystals and natural void-like movement', 'Strong variation between slabs and bundles', 'Potentially translucent quartz areas that should be light-tested', 'Best results when the final cuts are composed before fabrication'] },
      { heading: 'How to select a current slab lot', paragraphs: ['Ask for straight-on photographs of every candidate slab, close-up videos, available dimensions, thickness, finish and lot or bundle references. For multi-slab projects, compare the slabs together. Confirm whether consecutive slabs are available if bookmatching or visual continuity matters.'], bullets: ['Mark the focal zone before placing sinks or cooktops', 'Review seams, waterfall returns and edge direction', 'Reserve enough material for breakage and pattern alignment', 'Confirm the exact slabs again before cutting'] },
      { heading: '18 mm, 20 mm or 30 mm?', paragraphs: ['Thickness is a design and engineering decision, not simply a quality rank. Twenty-millimetre material is common for wall panels and contemporary built-up edges; 30 mm creates a heavier visual line and may suit freestanding islands. Final support, span and reinforcement must be reviewed by the local fabricator or project engineer.'] },
      { heading: 'What should a supplier quotation include?', paragraphs: ['A useful quotation separates slab material, fabrication, packing and freight assumptions. Send drawings or a cut list whenever possible. For custom work, identify finished dimensions, edge profiles, cutouts, surface finish, visible faces, destination port and target delivery date.'] },
    ],
    faqs: [
      { q: 'Are the slabs shown live inventory?', a: 'They are representative real slab selections. Lots change quickly, so contact TM Stone for current photos, quantities and updated dimensions.' },
      { q: 'Can Patagonia Granite be backlit?', a: 'Some quartz-rich areas can transmit light, but each slab needs a lighting test and a panel/structure plan before fabrication.' },
      { q: 'Can multiple slabs be bookmatched?', a: 'Sometimes. Availability depends on consecutive cuts from the same block, so request bundle information and confirm the proposed layout.' },
    ]
  },
  {
    slug: 'patagonia-granite-countertops-kitchens',
    title: 'Patagonia Granite Countertops: Is It Right for a Kitchen?',
    description: 'A practical guide to Patagonia Granite kitchen islands, countertop performance, layout, finish, care and fabrication decisions.',
    date: '2026-07-14', readTime: '7 min',
    image: '/assets/images/applications/patagonia-granite-kitchen-island-02-site.webp',
    intro: 'Patagonia Granite can create an extraordinary kitchen, but it should be treated as a composed natural surface rather than a repeatable countertop color. The strongest projects coordinate slab choice, support, seams, cutouts and finish from the beginning.',
    sections: [
      { heading: 'Where it performs best', paragraphs: ['Granite is widely used on heavily used surfaces because of its durability and abrasion resistance. Patagonia offers the same natural-stone practicality with a far more expressive mineral scale. It is especially effective on waterfall islands, full-height backsplashes and large focal counters.'], bullets: ['Island faces with uninterrupted crystal fields', 'Backsplashes cut from the same or adjacent slab', 'Bar tops and dining tables with a single focal composition', 'Feature panels where optional backlighting can be tested'] },
      { heading: 'Plan the slab before the room', paragraphs: ['Start with a scaled drawing over the slab photograph. Place sinks and cooktops away from the most valuable focal crystals when possible. Review every seam and return. A beautiful slab can lose its impact when the layout is decided only after templating.'] },
      { heading: 'Polished, honed or leathered?', paragraphs: ['A polished finish strengthens color, contrast and reflectivity. Honed surfaces feel calmer and reduce glare, while leathered finishes add tactile depth. The right choice depends on the actual slab, expected use and cleaning routine. Request a finished sample or test area before approving a large order.'] },
      { heading: 'Care without overpromising', paragraphs: ['Use pH-neutral stone cleaner or mild soap and water, blot spills promptly and use trivets and cutting boards. A penetrating treatment may improve stain resistance, but it does not make stone stain-proof. Ask the fabricator which treatment was applied and follow the product instructions.'] },
    ],
    faqs: [
      { q: 'Is Patagonia Granite durable enough for daily kitchens?', a: 'Granite is commonly selected for kitchens and other heavily used surfaces. Proper fabrication, support, installation and routine care remain essential.' },
      { q: 'Will every countertop look like the sample?', a: 'No. Large-scale natural variation is a defining feature. Approve the exact slab and layout, not only a hand sample.' },
      { q: 'Should it be sealed?', a: 'The need depends on the slab and factory treatment. A suitable impregnator can improve stain resistance; consult the supplier and sealer manufacturer.' },
    ]
  },
  {
    slug: 'patagonia-granite-price-factors',
    title: 'Patagonia Granite Price: 9 Factors Behind a Real Quote',
    description: 'Understand what changes Patagonia Granite slab and fabricated-project pricing without relying on an outdated single price per square foot.',
    date: '2026-07-14', readTime: '6 min',
    image: '/assets/images/products/patagonia-granite/patagonia-granite-slab-13-full.webp',
    intro: 'There is no durable single price for Patagonia Granite. The material is graded slab by slab, while the finished project depends on yield, layout, cut complexity, packing and destination. A useful quote starts with the actual lot and project drawings.',
    sections: [
      { heading: 'The nine cost drivers', paragraphs: ['The largest differences often come from material character and project yield rather than the nominal square metre alone.'], bullets: ['Block and slab grade', 'Crystal scale, clarity and color balance', 'Slab dimensions and thickness', 'Current lot availability', 'Polished, honed, leathered or specialty finish', 'Bookmatch or backlight selection', 'Cutouts, mitres, curved work and edge profiles', 'Packing method and breakage allowance', 'Freight, port and delivery timing'] },
      { heading: 'Slab price versus finished project price', paragraphs: ['Slab supply covers selected raw material. A fabricated quote may add cutting, resin or reinforcement decisions, edge work, dry layout, inspection and export packing. Local installation is normally a separate scope handled by the destination fabricator or contractor.'] },
      { heading: 'How to get a comparable quote', paragraphs: ['Send the same information to every supplier: selected slab references or visual target, thickness, finish, net and gross quantities, drawings, cutouts, edge details, packing requirements and destination. Quotes without matching scope are not truly comparable.'] },
      { heading: 'Avoid false economy', paragraphs: ['A low slab price can be offset by poor yield, unplanned seams, damage, weak packing or unsuitable color variation. For statement stone, the lowest-risk purchase is the one that confirms the exact slabs and fabrication plan before production.'] },
    ],
    faqs: [
      { q: 'Can I get a price from room area only?', a: 'You can get a rough starting point, but a reliable quote needs slab choice, drawings, thickness, finish, edge details and destination.' },
      { q: 'Why do two Patagonia slabs cost differently?', a: 'Natural grade, crystal composition, slab size, thickness, rarity, current lot and visual demand can all affect pricing.' },
      { q: 'Does the quote include installation?', a: 'Export factory quotes generally cover material or fabrication and packing. Local templating and installation should be confirmed separately.' },
    ]
  },
  {
    slug: 'patagonia-granite-care-sealing',
    title: 'Patagonia Granite Care & Sealing Guide',
    description: 'How to clean, protect and maintain Patagonia Granite countertops, walls, tables and floors with practical natural-stone care habits.',
    date: '2026-07-14', readTime: '6 min',
    image: '/assets/images/hero/patagonia-granite-texture-close-up-03.webp',
    intro: 'Patagonia Granite is durable natural stone, but durability does not mean zero maintenance. The best routine is simple: identify the finish and treatment, clean gently, act quickly on spills and avoid harsh chemicals or thermal shock.',
    sections: [
      { heading: 'Daily cleaning', paragraphs: ['Use warm water with a small amount of mild soap or a pH-neutral stone cleaner. Wipe with a soft cloth, rinse if needed and dry the surface to avoid residue. Blot spills instead of spreading them.'], bullets: ['Avoid acidic cleaners, vinegar and lemon-based products', 'Avoid abrasive powders and scouring pads', 'Never use products containing hydrofluoric acid', 'Use coasters, trivets and cutting boards'] },
      { heading: 'What sealing really does', paragraphs: ['Penetrating products are better understood as repellents: they can improve resistance to moisture and oil, but they do not create a stain-proof surface. Some granite needs little additional treatment; other slabs or finishes may benefit. Follow the treatment manufacturer and fabricator guidance.'] },
      { heading: 'Backlit and textured installations', paragraphs: ['Backlit panels require extra attention to the substrate, adhesive color, moisture and lighting access. Honed or leathered finishes may show oils and handling differently from polished stone. Test the selected finish on the actual material before production.'] },
      { heading: 'When to call a stone professional', paragraphs: ['Deep stains, cracks, loose seams, darkened edges, failed adhesives or finish damage should be evaluated by a qualified stone professional. Avoid experimenting with acids, bleach mixtures, flame tools or aggressive polishing compounds.'] },
    ],
    faqs: [
      { q: 'How often should Patagonia Granite be sealed?', a: 'There is no universal schedule. Test and treatment depend on the slab, finish, existing resin and product used. Follow the fabricator and sealer manufacturer.' },
      { q: 'Can I place a hot pan directly on it?', a: 'Natural granite is heat resistant, but trivets are still recommended to reduce localized thermal shock and protect treatments.' },
      { q: 'Can vinegar be used for cleaning?', a: 'Use a neutral stone cleaner instead. Acidic products can affect sensitive minerals, treatments and adjacent materials.' },
    ]
  }
];
