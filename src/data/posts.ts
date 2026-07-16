export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    image?: { src: string; alt: string; caption: string };
    table?: { headers: string[]; rows: string[][] };
  }[];
  comparison?: { title: string; headers: string[]; rows: string[][] };
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
    slug: 'patagonia-granite-colors-slab-variations',
    title: 'Patagonia Granite Colors: How to Choose White, Gold, Rose, Blue and High-Contrast Slabs',
    description: 'Compare Patagonia Granite colors, including ivory, gold, rose, grey, blue-toned and high-contrast slabs. Learn how finish, light and slab selection change the final result.',
    date: '2026-07-16', readTime: '11 min',
    image: '/assets/images/stone-guide/patagonia-granite-colors-slab-variations-hero.webp',
    intro: 'Patagonia Granite does not have one fixed color. Depending on the block and slab, it may show ivory, cream, champagne, honey gold, blush pink, silver grey, charcoal, black and occasional blue-grey or smoky crystal zones. These labels are useful for searching and shortlisting, but the final purchase should always be based on the exact slab face, finish and lighting test.',
    sections: [
      {
        heading: 'Why Patagonia Granite can look completely different from one slab to another',
        paragraphs: [
          'Patagonia Granite is selected for the opposite reason that a uniform engineered surface is selected: it does not repeat. The stone is commonly described in the trade as a Brazilian pegmatitic granite, which means its visual structure is built around unusually large mineral crystals rather than a small, even grain.',
          'Quartz-rich areas, oversized feldspar, dark mineral fragments and naturally healed fissures can form a composition that looks more like an abstract landscape than a conventional countertop pattern. One bundle may be quiet and creamy, while another may show black graphic fragments, rose feldspar, silver fractures or concentrated honey-gold zones.',
          'A small sample is useful for checking polish, texture and local mineral character, but it cannot reliably represent the color balance of a full Patagonia stone slab. For islands, walls and hospitality projects, review the full face and compare all candidate slabs together before assigning cuts.'
        ],
        image: { src: '/assets/images/stone-guide/patagonia-granite-quartz-feldspar-crystal-detail.webp', alt: 'Close-up of quartz, feldspar and dark crystals in Patagonia Granite', caption: 'Large quartz, feldspar and dark minerals are the reason Patagonia Granite color changes so much from slab to slab.' }
      },
      {
        heading: 'What colors are common in Patagonia Granite?',
        paragraphs: [
          'The most practical way to discuss Patagonia Granite colors is by visual family. These categories help designers and buyers describe what they want, but they should not replace current slab photos, lot references or dimensions.'
        ],
        table: {
          headers: ['Color family', 'Typical visual character', 'Often works well for', 'Useful pairing direction'],
          rows: [
            ['Ivory and cream', 'Soft pale field, milky quartz, restrained dark movement', 'Large kitchens, calm feature walls, residential islands', 'Warm white, white oak, walnut, mushroom'],
            ['Champagne and gold', 'Honey, beige or warm feldspar with gold-toned movement', 'Luxury islands, bars, hotel reception desks', 'Walnut, bronze, warm plaster, charcoal'],
            ['Rose and blush', 'Pink or peach feldspar within ivory, grey or black crystals', 'Statement furniture, bathrooms, boutique hospitality', 'Walnut, burgundy accents, warm grey, brushed brass'],
            ['Silver and grey', 'Cooler quartz, smoky areas, graphite fractures, lower warmth', 'Modern kitchens, offices, monochrome interiors', 'Charcoal, light oak, stainless steel, muted blue'],
            ['Blue-toned and smoky', 'Blue-grey or cool translucent areas mixed with darker minerals', 'Backlit walls, bars, contemporary focal panels', 'Black, smoked oak, cool metal, indirect lighting'],
            ['Black-and-white high contrast', 'Graphic dark fragments against pale crystal fields', 'Sculptural islands, fireplaces, gallery-like walls', 'Minimal cabinetry, simple floors, controlled lighting']
          ]
        },
        image: { src: '/assets/images/stone-guide/patagonia-granite-colors-slab-variations-hero.webp', alt: 'Patagonia Granite slabs in ivory, gold, rose and high-contrast colors', caption: 'Color names are descriptive. The exact slab face matters more than the trade label.' }
      },
      {
        heading: 'Ivory, cream, gold, rose and grey Patagonia slabs',
        paragraphs: [
          'Ivory-dominant slabs are often the easiest Patagonia variation to integrate into residential kitchens. Their pale field keeps the room bright while oversized crystals still create a one-of-one focal surface. Some slabs appear cloud white from a distance and reveal champagne, smoky or black mineral detail only when viewed closer.',
          'Patagonia Gold Granite is usually a commercial description for slabs with a stronger concentration of honey, amber, champagne or golden feldspar. It is not a single standardized quarry grade. One supplier may use the name for a creamy warm slab, while another may use it for a darker, richer and more dramatic slab.',
          'Rose and blush Patagonia slabs contain pink, peach or salmon-toned feldspar mixed with pale quartz and darker mineral fragments. These tones are sensitive to surrounding materials, so cabinet samples and lighting should be reviewed beside the actual slab.',
          'Grey-dominant Patagonia can range from pale silver clouding to smoky quartz, graphite fractures and broad black mineral areas. It often works in modern interiors where the client wants the mineral scale of Patagonia without a strongly golden overall tone.'
        ],
        image: { src: '/assets/images/stone-guide/patagonia-gold-granite-champagne-slab.webp', alt: 'Patagonia Gold Granite slab with champagne feldspar and dark crystals', caption: 'Gold and champagne Patagonia slabs should be approved by real slab reference, not by color name alone.' }
      },
      {
        heading: 'What does Patagonia Blue Granite mean?',
        paragraphs: [
          'Patagonia Blue Granite is another non-standard commercial name. It may refer to a slab with blue-grey quartz, cool smoky zones, silver mineral movement or dark areas that appear blue under certain lighting. The blue may be subtle in neutral daylight and stronger under cool LEDs or backlighting.',
          'Buyers should ask for daylight photographs, neutral indoor photographs and a short video that moves across the polished surface. If the project depends on a clearly blue effect, the exact slab should be viewed with the proposed lighting system. A name on a quotation is not enough to guarantee the final color impression.'
        ],
        image: { src: '/assets/images/stone-guide/patagonia-blue-granite-cool-grey-slab.webp', alt: 'Patagonia Blue Granite slab with cool grey quartz and dark mineral movement', caption: 'Blue-toned Patagonia is usually a cool grey or smoky visual effect, not a standardized geological category.' }
      },
      {
        heading: 'Translucent areas are a lighting characteristic, not a separate color',
        paragraphs: [
          'Some Patagonia slabs contain quartz-rich areas that transmit light. Without backlighting, these zones may look milky white, smoky, pale gold or grey. With a suitable light source behind the panel, the same areas can become luminous and reveal internal crystal boundaries that are not visible in normal front lighting.',
          'Translucency must be tested slab by slab. The lighting system, panel thickness, backing, adhesive color, support structure, ventilation and maintenance access all affect the result. The safest process is to test the exact slab with the proposed light color and panel build-up before fabrication.'
        ],
        image: { src: '/assets/images/stone-guide/patagonia-granite-front-lit-backlit-comparison.webp', alt: 'Patagonia Granite slab shown with front lighting and backlighting', caption: 'Backlighting can change the perceived color, so the exact slab and lighting system should be tested together.' }
      },
      {
        heading: 'How surface finish changes the perceived color',
        paragraphs: [
          'Color selection should never be separated from finish selection. A polished, honed or leathered surface can make the same slab read differently because each finish changes reflection, contrast, tactile depth and the visibility of handling marks.'
        ],
        table: {
          headers: ['Finish', 'Color effect', 'Best visual use', 'Approval note'],
          rows: [
            ['Polished', 'Strongest color saturation, contrast and crystal depth; reflects light', 'Luxury islands, tables, reception counters, backlit focal areas', 'Review glare, window reflections and edge polish'],
            ['Honed', 'Softer, calmer and lower contrast; may make warm tones look more muted', 'Organic modern kitchens, matte interiors, quiet walls', 'Test oil and handling visibility on the actual slab'],
            ['Leathered', 'Adds texture and shadow; dark minerals may feel deeper and less formal', 'Bars, tactile furniture, hospitality accents', 'Approve texture consistency and cleaning expectations'],
            ['Antique or specialty', 'Can significantly alter contrast, touch and apparent color', 'Custom architectural features', 'Require a physical sample or test area before full production']
          ]
        },
        image: { src: '/assets/images/stone-guide/patagonia-granite-polished-honed-finish-comparison.webp', alt: 'Polished and honed Patagonia Granite finish comparison', caption: 'Finish changes how much color, contrast and reflection the slab shows in the room.' }
      },
      {
        heading: 'How to match Patagonia Granite colors with cabinets and interiors',
        paragraphs: [
          'The strongest interiors do not select a cabinet color from the trade name Patagonia. They select it from the actual slab. Identify the slab dominant field, secondary mineral tone and darkest accent, then decide which of those three should be repeated in the room.',
          'Warm white and mushroom cabinets are flexible with ivory, champagne and rose Patagonia slabs. White oak supports creamy and grey slabs while keeping the room relaxed. Walnut is one of the most reliable partners for gold, rose and black Patagonia, and charcoal cabinetry can frame pale crystal fields with a more gallery-like effect.',
          'Muted olive, blue-grey and burgundy can also work when those tones already appear subtly within the slab. The rule is simple: sample beside the stone rather than select from a screen.'
        ],
        image: { src: '/assets/images/stone-guide/patagonia-granite-cabinet-color-palette.webp', alt: 'Cabinet color palette for Patagonia Granite slabs', caption: 'A material palette should be built from the reserved slab, not from a generic Patagonia color name.' }
      },
      {
        heading: 'How to approve the exact color before ordering',
        paragraphs: [
          'A Patagonia color description should begin the conversation, not complete the purchase. Whether the request is for white Patagonia Granite, Patagonia Gold Granite, Patagonia Blue Granite or a black-and-white slab, use a repeatable approval process.'
        ],
        bullets: [
          'Request a straight-on full-slab photograph with all four edges visible and no dramatic color filter.',
          'Ask for the slab number, bundle or lot reference, dimensions, thickness, finish and available quantity.',
          'Review close-up images of pale fields, dark minerals, fissures, crystal boundaries, resin-filled areas and slab edges.',
          'Ask for a short video under neutral lighting so reflection and crystal depth can be judged.',
          'For a multi-slab project, request a group photograph or digital contact sheet showing candidate slabs together.',
          'For a backlit project, test the exact slab with the intended LED color temperature and panel system.',
          'Approve a scaled cut layout before fabrication, especially for waterfall sides, large openings, seams and bookmatched panels.',
          'Confirm the same slab references again before cutting and include them in the final quotation or production approval.'
        ],
        image: { src: '/assets/images/stone-guide/patagonia-granite-current-slab-lot-selection.webp', alt: 'Current Patagonia Granite slab selection with lot references', caption: 'Current lot photos, slab references and dimensions turn color preference into a real buying decision.' }
      },
      {
        heading: 'Planning color across more than one slab',
        paragraphs: [
          'Color consistency in Patagonia does not mean forcing every slab to look identical. It means selecting slabs that can form a coherent composition. For a large island and backsplash, one slab may carry the focal movement while another provides a quieter supporting field.',
          'Before ordering, identify how many full slabs the project truly needs after allowing for cutouts, seam alignment, breakage risk and reserve material. Ask the supplier to mark slab orientation and confirm whether the photographs show the polished face.',
          'The digital layout should be followed by a factory dry layout for fabricated work. This lets the buyer review color transition between the island top, waterfall sides, backsplash, vanity pieces or wall panels before the pieces are packed.'
        ],
        image: { src: '/assets/images/stone-guide/patagonia-granite-dry-layout-color-continuity.webp', alt: 'Patagonia Granite dry layout showing color and crystal continuity', caption: 'Dry layout helps control color flow, focal crystals, seams and orientation before packing.' }
      },
      {
        heading: 'Common color-selection mistakes',
        paragraphs: [
          'Most costly color mistakes happen before cutting begins. A slab can be beautiful and still be wrong for the room if the buyer approves only a name, a sample or an edited photograph.'
        ],
        bullets: [
          'Choosing from a small sample and assuming the full slab will have the same balance of white, gold, black or rose.',
          'Treating Patagonia Gold, Patagonia Blue or similar trade names as standardized grades across different suppliers.',
          'Approving a heavily edited photograph with boosted warmth, contrast or blue saturation.',
          'Ignoring finish: a honed slab can look calmer and lighter than the same slab polished.',
          'Selecting cabinetry before the actual slab is reserved, then discovering that the undertones conflict.',
          'Buying multiple slabs without comparing them together or confirming bundle sequence.',
          'Placing sinks, cooktops or seams through the most valuable mineral focal point.',
          'Assuming every translucent zone will light evenly without testing the proposed LED and backing system.'
        ]
      }
    ],
    comparison: {
      title: 'Patagonia Granite color selection checklist',
      headers: ['Decision', 'What to confirm', 'Why it matters'],
      rows: [
        ['Dominant color', 'Ivory, gold, rose, grey, blue-toned or high-contrast', 'Defines the room palette and search description'],
        ['Exact slab', 'Straight-on photos, slab number, lot and dimensions', 'Commercial names do not repeat consistently'],
        ['Mineral scale', 'Location of large crystals and dark fragments', 'Affects cutouts, seams and visual balance'],
        ['Finish', 'Polished, honed, leathered or specialty sample', 'Changes perceived color, gloss and maintenance'],
        ['Lighting', 'Daylight, ambient light and optional backlight test', 'Cool or warm light can change the color impression'],
        ['Multi-slab match', 'Group photo, consecutive cuts and orientation', 'Prevents unexpected shifts across large projects'],
        ['Layout', 'Scaled cutting plan and dry layout', 'Protects focal zones and color continuity'],
        ['Approval', 'Signed slab references and final production confirmation', 'Reduces substitution and communication risk']
      ]
    },
    faqs: [
      { q: 'What color is Patagonia Granite?', a: 'Patagonia Granite can contain ivory, cream, champagne, gold, rose, silver, grey, black and occasional blue-grey or smoky zones. The balance varies significantly from slab to slab, so the exact full slab should be approved rather than relying on one generic color description.' },
      { q: 'Is Patagonia Granite mostly white or gold?', a: 'Both versions exist. Some slabs have a pale ivory or cloud-white field with restrained dark crystals, while others contain stronger honey, champagne or golden feldspar. The trade name alone does not identify the color balance.' },
      { q: 'What is Patagonia Gold Granite?', a: 'Patagonia Gold is generally a commercial description for a Patagonia slab with more prominent warm gold, amber, beige or champagne mineral areas. It is not a universal geological grade, and appearances can differ between suppliers and bundles.' },
      { q: 'What is Patagonia Blue Granite?', a: 'Patagonia Blue usually describes a cooler slab with blue-grey, silver or smoky quartz zones. The blue effect may depend on lighting and polish, so buyers should review neutral-light images and test the exact slab when color is critical.' },
      { q: 'Are Patagonia Granite color names standardized?', a: 'No. Names such as Gold, Blue, Rose, White or Glace may be used differently by quarries, processors and distributors. Use the name for searching, then purchase by exact slab number, photographs, dimensions, finish and lot reference.' },
      { q: 'Can Patagonia Granite be backlit?', a: 'Some quartz-rich zones can transmit light, but translucency varies within and between slabs. Backlighting should be tested on the exact slab with the intended LED color, thickness, backing and panel construction before cutting.' },
      { q: 'Does a polished finish make Patagonia Granite look darker?', a: 'Polishing usually increases reflection, saturation and contrast, so dark minerals may appear deeper and gold or rose areas may look richer. Honing reduces glare and often softens the overall color effect.' },
      { q: 'What cabinet colors work with Patagonia Granite?', a: 'Warm white, mushroom, white oak, walnut and charcoal are versatile starting points. Muted olive, blue-grey and burgundy can also work when those tones appear in the actual slab. Always review physical samples beside the reserved slab.' },
      { q: 'Can a small sample represent a Patagonia slab?', a: 'A sample can show finish and local mineral detail, but it cannot represent the full composition of a large-crystal stone. Approve full-slab images and a scaled layout for islands, walls and multi-piece projects.' },
      { q: 'How should multiple Patagonia slabs be matched?', a: 'Request consecutive slabs or a coordinated bundle where possible, compare them in one group image and approve orientation before fabrication. Matching may focus on color continuity, mirrored bookmatching or a deliberate focal-supporting composition.' },
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
