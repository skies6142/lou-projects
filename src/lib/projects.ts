import { projectImages } from './projectImages'
import { projectCopy } from './projectCopy'
import { projectVideos } from './projectVideos'

export type Project = {
  slug: string
  name: string
  location: string
  architect?: string
  awards: string[]
  award: boolean
  categories: string[] // for the filter
  specs: string
  blurb: string // one-line teaser
  synopsis: string[] // full case-study copy (verbatim from the live site)
  thumb: string // exact /completed-projects/ index thumbnail (grid tile)
  hero: string // wide page header (detail banner)
  gallery: string[] // full project-page photo set (slideshow)
  video?: string // YouTube id, where the live project page has one
}

// Display order = strongest first (proudest / award winners lead the gallery).
const RAW: Omit<Project, 'thumb' | 'hero' | 'gallery'>[] = [
  {
    slug: 'ahara',
    name: 'Ahara',
    location: 'Central Coast, NSW',
    architect: 'Luke Farrugia Architect',
    awards: [
      '2024 Australia’s Best House (Channel 9) — Coastal Retreat, Category Winner',
      '2023 Master Builders Association Excellence — Energy Efficiency & Environmental Sustainability',
    ],
    award: true,
    categories: ['New Build'],
    specs: '5 Bed · 4 Bath · Studio · Pool',
    blurb: 'One of our proudest projects — a healthy, high-performing coastal retreat.',
    synopsis: [
      'One of our proudest projects to date, Ahara House is a healthy, high-performing, 5 bedroom, 4 bathroom home with a detached studio, double lock-up garage and above-ground swimming pool. It’s the result of another successful collaboration between Lou Projects and Luke Farrugia Architect, with interior design guided by Pair Studio — a cohesive design that considers everything from the positioning of walls and windows to the choice of fixtures and fittings.',
      'Ahara prioritises energy efficiency and mould prevention, exceeding standard building practices with a completely waterproof and airtight building envelope that safeguards against the moisture and humidity infiltration that leads to mould growth and structural damage.',
      'To ensure superior indoor air quality, the home is equipped with a whole-house HRV (heat recovery ventilation) system. It continuously removes stale, moist air while introducing filtered, fresh air from outside — eliminating pollutants such as pollen, bacteria, smoke and mould spores, and adjusting the incoming air temperature to the season.',
      'The use of SIPs (structural insulated panels) provides a highly insulated, airtight frame. The majority of the panels boast an impressive R-value of 8.2, significantly exceeding the insulation levels of traditional construction. Timber-framed double-glazed windows and doors complete the picture, keeping the home warm in winter and cool in summer.',
    ],
  },
  {
    slug: 'charlton',
    name: 'Charlton',
    location: 'Central Coast, NSW',
    architect: 'Luke Farrugia Architect',
    awards: [
      '2025 MBA Newcastle Excellence in Building — Renovation/Addition',
      '2025 HIA Hunter Housing & Kitchen & Bathroom Awards — Renovation/Addition',
    ],
    award: true,
    categories: ['Renovation & Extension'],
    specs: '1 Bed · 1 Bath · Separate Dwelling',
    blurb: 'Award-winning addition that nestles inside an established garden.',
    synopsis: [
      'The project added a new 1 bedroom, 1 bathroom separate dwelling to the front of an existing dual-occupancy, two-storey home — designed as a retirement retreat for our clients, something personal, considered and distinct from the existing house.',
      'The main priority was to work with the already thriving garden established on the block. The clients wanted a seamless connection with the outdoors, bringing the outside in and the inside out. We took particular care throughout the build to keep the plants alive and strong — it seems as though the house was built years ago and the garden grew around it, but in fact the garden came first.',
      'Striking features include Western Red Cedar cladding externally and on the ceilings inside, a handmade Western Red Cedar pivot front door, and raked glazing on the front facade. The raked glazing isn’t just a modern look — it uses passive solar principles to optimise sunlight in winter and reduce excessive sunlight in summer. Exposed, powder-coated cantilever awnings add to the floating, modern aesthetic while reducing heat gain.',
      'Internally, comprehensive joinery in the living room was designed to cater for an epic entertainment system with projector and drop-down screen — a must for our clients, the owners of one of Australia’s first home cinema and HiFi stores.',
    ],
  },
  {
    slug: 'sorrento',
    name: 'Sorrento',
    location: 'Waterfront, Central Coast NSW',
    architect: undefined,
    awards: [],
    award: false,
    categories: ['New Build'],
    specs: 'Waterfront · New Build · Solar Battery',
    blurb: 'A waterfront Hamptons home that produces more energy than it uses.',
    synopsis: [
      'The brief was a home that is extremely energy efficient and produces more energy than it consumes — ensuring low ongoing costs to live in it through retirement. The build began with the demolition of the existing house, creating a blank canvas to build a new, healthy home that capitalises on the water views, where the owners spend much of their time with BBQs and swimming in the back-deck pool right on the waterfront.',
      'To create a healthy, high-performing home we focused on insulation, airtightness and ventilation. The home was built from SIPs (structural insulated panels) from Smart SIPs Australia — prefabricated, precision-cut panels that reduce on-site waste and deliver a consistent layer of insulation and airtightness. The majority boast an R-value of 8.2, far exceeding traditional construction.',
      'Structural steel was insulated on the outside to reduce thermal bridging, the whole frame wrapped in a vapour-permeable membrane with every window and penetration taped, sealed and water-tested. UPVC double-glazed windows and a whole-house HRV system bring in fresh air 24/7 without significant energy losses.',
      'A state-of-the-art 12.47kW solar battery system, with full home backup, keeps the home seamlessly powered even when the grid is down. The result is a beautiful Hamptons-style waterfront home — comfortable and enjoyable to live in all year round.',
    ],
  },
  {
    slug: 'lurline',
    name: 'Lurline',
    location: 'Ettalong Beach, NSW',
    architect: 'Luke Farrugia Architect',
    awards: ['2024 Master Builders Association Excellence — Energy Efficiency & Environmental Sustainability'],
    award: true,
    categories: ['Renovation & Extension'],
    specs: '4 Bed · Study · 2 Bath · 180m²',
    blurb: 'A quaint 60s cottage facade meets a striking modern rear extension.',
    synopsis: [
      'Located just moments from the beautiful Ettalong Beach, this charming residence boasts 4 bedrooms, a study and 2 bathrooms within its expansive 180m² living space. The renovation and extension was driven by the need to accommodate a growing family — preserving the front facade’s quaint appeal while introducing a striking modern extension to the rear.',
      'Lou Projects were involved early in the design, providing expert guidance and ensuring informed decisions aligned with budgetary and design considerations. This collaborative approach enabled the project to start on time and finish on budget.',
      'The rear extension added a new kitchen and living area connected to a spacious undercover deck, with a second storey housing the master bedroom and ensuite — almost a parent’s retreat. The renovation of the existing house focused on performance and comfort, with blow-in insulation, double-glazed UPVC windows, and an HRV unit providing continuous, filtered airflow throughout the home.',
    ],
  },
  {
    slug: 'branga',
    name: 'Branga',
    location: 'Copacabana, NSW',
    architect: 'Envirotecture',
    awards: ['2022 Master Builders Association Excellence — Energy Efficiency & Environmental Sustainability'],
    award: true,
    categories: ['Renovation & Extension'],
    specs: 'Extension · Deck · Pool',
    blurb: 'A major extension turned a cosy home into a year-round entertainer.',
    synopsis: [
      'One of the main features of the project was a major extension, converting the existing master bedroom into a new lounge and living area. This included a new deck and roof with an outdoor BBQ area — a seamless indoor/outdoor space overlooking the pool and the beautiful trees surrounding the property. A new kitchen with a butler’s pantry was installed, and the floors were upgraded to engineered spotted gum with soft carpet in the bedrooms.',
      'To improve the home’s performance we addressed three areas: insulation, the building envelope, and ventilation. All ceilings, floors and walls were lined with new insulation. All windows and doors were replaced with high-quality double-glazed Logikhaus units — a timber frame with external aluminium cladding for durability and aesthetics.',
      'A heat recovery ventilation system brings fresh air into the home when windows and doors are closed. With most air leaks addressed during the renovation, constant mechanical ventilation keeps fresh air moving while maintaining a comfortable, consistent temperature. The result is a cosy, functional, energy-efficient home — recognised by the Master Builders Association.',
    ],
  },
  {
    slug: 'patrick',
    name: 'Patrick',
    location: 'Central Coast, NSW',
    architect: 'Anne Robson & Jason Searle',
    awards: ['2019 Master Builders Association Excellence — Energy Efficiency & Environmental Sustainability'],
    award: true,
    categories: ['New Build'],
    specs: 'Custom Home · U-Shape',
    blurb: 'A U-shaped home built around privacy, shade and a preserved red cedar.',
    synopsis: [
      'The house is designed as a U-shape to provide privacy from the east, south and west sides, with a generous amount of timber decking for entertaining in the middle. Landscaping plays a vital role in the feel of the home and adds to the cooling and shading where necessary.',
      'At the rear, a big, beautiful Australian Red Cedar tree was preserved during construction, providing privacy and protection. At the front, a Japanese Maple was planted to shade the entertaining area in summer — and in winter, when its leaves shed, sunlight flows in.',
      'The orientation of the house is important: the overhang of the roof ensures no sun enters during peak summer hours, while letting direct sunlight in during winter. Keeping the sun out in summer keeps the house naturally cooler, while letting it in during winter warms the concrete slab, which radiates heat through the night.',
    ],
  },
  {
    slug: 'pymble',
    name: 'Pymble',
    location: 'Pymble, NSW',
    architect: 'Andrew Donaldson Architecture & Design',
    awards: [],
    award: false,
    categories: ['Renovation & Extension'],
    specs: 'Backyard · Pool · Extension',
    blurb: 'A backyard reimagined as a connected, everyday entertaining space.',
    synopsis: [
      'This project focused on transforming the backyard into a space that feels connected, functional and easy to use day-to-day. The key move was opening up the rear of the home — new floor-to-ceiling sliding glass doors create a direct link between the internal living areas and the outdoor space.',
      'Outside, the layout supports both entertaining and family life. A cantilevered steel awning covers the main outdoor zone, with a built-in concrete BBQ as a simple, durable centrepiece. The backyard steps down through a series of concrete amphitheatre-style levels, creating informal seating and usable space around a new tiled pool.',
      'One of the defining aspects is the contrast between old and new. The original cottage remains visible at the upper level, while the rear introduces a more modern, robust set of materials. Rather than competing, the two work together to show how the house has evolved over time — simple, practical, and built to be used.',
    ],
  },
  {
    slug: 'marrowbone',
    name: 'Marrowbone',
    location: 'Pokolbin, Hunter Valley',
    architect: 'Fabric Architecture',
    awards: [],
    award: false,
    categories: ['New Build', 'Off-grid & Eco'],
    specs: '2 Bed · 1 Bath · 70m² · Off-grid',
    blurb: 'A completely off-grid pool house nestled in the Hunter Valley.',
    synopsis: [
      'Nestled in the picturesque Hunter Valley is this completely off-grid home, with 2 bedrooms, 1 bathroom and a total living space of 70m². This dwelling marks Stage 1 of the Pokolbin development, requiring essential infrastructure such as access roads, a spacious shed, a solar and battery system with backup generator, a wastewater system, and a colossal 365,000L water tank.',
      'Operating entirely off-grid, the property relies on self-generated power and water, both designed to accommodate future expansions. The pool house is enveloped in weather and air-tight wraps, with double-glazed UPVC windows and lift-and-slide doors that bolster energy efficiency and functionality.',
      'We loved the use of stone wall and floor tiles — practical, durable and energy efficient, effectively retaining heat during colder months and providing a cooling effect in warmer weather, contributing to the overall comfort and sustainability of the home.',
    ],
  },
  {
    slug: 'killara',
    name: 'Killara',
    location: 'Central Coast, NSW',
    architect: 'Anne Robson & Jason Searle',
    awards: [],
    award: false,
    categories: ['New Build'],
    specs: 'Custom Home · Passive Solar',
    blurb: 'Native and renewable materials, handmade details, passive solar design.',
    synopsis: [
      'The design includes native and renewable materials — a handmade front door, handcrafted vanities, and locally sourced basins — with a custom kitchen and blackbutt timber floors. The floors consist of a 4mm hardwood veneer, meaning they can be sanded several times in their lifetime while keeping the look and feel of the real thing.',
      'The orientation of the house is important: the overhang of the roof ensures no sun enters during peak summer hours, while letting direct sunlight in during winter. Keeping the sun out in summer keeps the house naturally cooler, while letting it in during winter warms the concrete slab during the day, which continues to radiate heat through the night.',
    ],
  },
  {
    slug: 'maitland',
    name: 'Maitland',
    location: 'Central Coast, NSW',
    architect: 'Luke Farrugia Architect',
    awards: [],
    award: false,
    categories: ['Renovation & Extension'],
    specs: '4 Bed · 2 Bath · 765m²',
    blurb: 'Two separate dwellings merged into one light-filled family home.',
    synopsis: [
      'Set on a large 765m² block, this project converted two separate dwellings into one large 4 bedroom, 2 bathroom home. A big consideration was to effectively insulate the walls and ceiling — so we started fresh, stripping the plasterboard and installing quality insulation, and upgrading to high-performing double-glazed UPVC windows and doors throughout.',
      'Bringing light and nature into the home was the next intention. We designed and constructed a tropical landscaped breezeway opposite the front door, with large skylights in both bathrooms and floor-to-ceiling glazing in the kitchen overlooking a uniquely curved deck and garden feature.',
      'The rear garden was a cleverly designed feature: inserting it between the house and the south-side deck allowed us to build a high-pitched, north-facing pergola roof that provides the perfect amount of shade in summer and sunlight in winter. The kitchen features a curved timber island bench, gas cooking and stone benchtops, while each bathroom blends timber, stone and brass.',
    ],
  },
  {
    slug: 'mandalong',
    name: 'Mandalong',
    location: 'Dooralong Valley, NSW',
    architect: 'Luke Farrugia Architect',
    awards: [],
    award: false,
    categories: ['New Build', 'Off-grid & Eco'],
    specs: 'Rural · Off-grid · Thermal Mass',
    blurb: 'An off-grid rural home built from materials left in their natural state.',
    synopsis: [
      'A new rural house on a highly exposed site where extreme temperatures and winds are the norm. The design is underpinned by both passive and technological environmental strategies, and is completely off-grid for power, water and wastewater. Materials are left in their natural state and, as much as possible, sourced through reclamation.',
      'Key materials include cypress cladding — one of the most sustainable timber products we could find — and burnished concrete that looks amazing while providing thermal mass that helps naturally regulate the temperature of the house. Recycled concrete blocks, stacked in a brick pattern, add further thermal mass, and double-glazed timber windows provide natural insulation while capturing and storing carbon in the timber itself.',
      'The house is powered by a 3.3kW solar system with 7.5kW of battery storage. The architect played a huge role during construction to ensure his vision was understood and the clients were happy.',
    ],
  },
  {
    slug: 'gugandi',
    name: 'Gugandi',
    location: 'Narara Eco Village, NSW',
    architect: 'DHW Design',
    awards: [],
    award: false,
    categories: ['New Build', 'Off-grid & Eco'],
    specs: 'Natural Materials · 7-Star NatHERS',
    blurb: 'Straw bale, mud brick and earth floors — a true natural-materials home.',
    synopsis: [
      'Part of a community of homes set to achieve a minimum 7-star NatHERS rating, with photovoltaic systems feeding the village’s smart grid, thermally efficient design and construction, recycled and rainwater systems, and natural materials such as mud bricks and recycled timbers.',
      'Our project was a unique and exciting mix of all these parameters. A premium insulation system made from natural wood fibres was installed on the northern side in a dual layer to create an R5 rating, while natural straw bale panels were installed on the southern end. The remaining walls are reverse brick veneer, built with mud bricks — the insulation layer on the outside and the bricks visible inside, helping regulate temperature via thermal mass.',
      'Internal walls were insulated with high-density natural panels for a peaceful, robust feel, and lined with plywood for a natural look. The windows are double-glazed hybrids — aluminium outside, Western Red Cedar inside — the ultimate combination of durability and thermal performance. Additional features include a compost toilet, recycled timber flooring, and beautiful earth floors of hand-selected soils and clays, sealed with linseed oil so they can breathe.',
    ],
  },
  {
    slug: 'red-cedar',
    name: 'Red Cedar Studio',
    location: 'Central Coast, NSW',
    architect: 'Luke Farrugia Architect',
    awards: [],
    award: false,
    categories: ['Studio & Granny Flat'],
    specs: '2 Bed · 1 Bath · Studio',
    blurb: 'A flame-zone studio that opens to the bush behind.',
    synopsis: [
      'The studio is set in a Flame Zone area, which required both the design and build to carefully consider the materials used in order to comply with the stringent requirements of the Bushfire Code.',
      'The studio has 2 bedrooms and 1 bathroom with separate living quarters, divided by a big open thoroughfare and covered slab patio — a design that maximises the views from the existing house to the beautiful bush behind.',
      'Key materials include wall and roof wraps, recycled bricks from The Brick Pit, double-glazed windows and doors, and stainless steel fire shutters.',
    ],
  },
  {
    slug: 'maitland-granny',
    name: 'Maitland Granny Flat',
    location: 'Central Coast, NSW',
    architect: 'Luke Farrugia Architect',
    awards: [],
    award: false,
    categories: ['Studio & Granny Flat'],
    specs: '2 Bed · 1 Bath · Granny Flat',
    blurb: 'A freestanding granny flat with a butterfly roof and birch-ply skylights.',
    synopsis: [
      'This freestanding granny flat was constructed with a complete weatherproof membrane paired with external cavity battens for ventilation, and high-performing double-glazed UPVC windows and doors for added soundproofing and insulation. As the flat is raised off the ground, we ensured every nook — including the floor — was insulated.',
      'The interior features a spacious open-plan design with a butterfly-style roof, unique tilt-and-turn windows, and custom birch-ply skylight windows that draw in stunning views of nature and plenty of natural light. The exterior pairs exposed white rafters with natural cypress cladding for a distinct, sophisticated look, while the entertaining deck overlooks a beautifully landscaped outdoor area.',
      'You can see this project brought to life as one of our pre-designed Lou Homes options — ‘Lola’.',
    ],
  },
]

export const projects: Project[] = RAW.map((p) => ({
  ...p,
  // verbatim copy scraped 1:1 from the live project page (falls back to the editorial draft)
  synopsis: projectCopy[p.slug]?.length ? projectCopy[p.slug] : p.synopsis,
  thumb: projectImages[p.slug]?.thumb ?? projectImages[p.slug]?.hero ?? '',
  hero: projectImages[p.slug]?.hero ?? projectImages[p.slug]?.thumb ?? '',
  gallery: projectImages[p.slug]?.gallery ?? [],
  video: projectVideos[p.slug],
}))

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const FILTERS = ['All', 'New Build', 'Renovation & Extension', 'Off-grid & Eco', 'Studio & Granny Flat', 'Award Winners'] as const
