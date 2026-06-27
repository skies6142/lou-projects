// ─────────────────────────────────────────────────────────────────────────────
// Lou Projects — single source of truth for copy + assets.
// All text is the client's real, scraped copy (lightly cleaned where supplier
// hyperlinks left dangling fragments). Photography is their real project work.
// ─────────────────────────────────────────────────────────────────────────────

export const brand = {
  name: 'Lou Projects',
  tagline: 'Sustainable, energy-efficient home builders — Central Coast, NSW',
  blurb:
    'Passionate about building better. Lou Projects are the leading sustainable building company based on the Central Coast, New South Wales.',
  monogram: '/img/brand/monogram.png',
  phoneLabel: 'Get in touch',
  instagram: 'https://www.instagram.com/lou.projects',
  facebook: 'https://www.facebook.com/p/Lou-Projects-100092238661010/',
  email: 'hello@louprojects.com.au',
  region: 'Central Coast · Hunter · Sydney',
}

export const nav = [
  { label: 'Our Story', href: '#/story' },
  { label: 'Completed Projects', href: '#/projects' },
  { label: 'Custom Homes', href: '#/what-we-do' },
  { label: 'Lou Homes', href: '#/lou-homes' },
  { label: 'Our Team', href: '#/team' },
  { label: 'Our Ethos', href: '#/ethos' },
  { label: 'Knowledge Hub', href: '#/knowledge' },
]

export const hero = {
  video: '/video/hero.mp4',
  eyebrow: 'Award-winning sustainable builders · Central Coast NSW',
  // split into lines for staggered reveal
  headline: ['We build', 'better homes.'],
  sub: 'Healthy, high-performing, high-quality homes — designed and built to last a hundred years. From high-end architectural builds to pre-designed sustainable homes.',
  primaryCta: { label: 'View all projects', href: '#/projects' },
  secondaryCta: { label: 'Start your build', href: '#/contact' },
  seal: 'Building better · Est. Central Coast · Award-winning',
}

export const intro = {
  eyebrow: 'Welcome to Lou Projects',
  statement:
    'We’re an award-winning team on the Central Coast of New South Wales, with a specialism in both high-end architectural builds and pre-designed sustainable homes.',
  body: [
    'If you ask us why we started Lou Projects, the answer is simple — we want to build better. Our mission is to redefine the industry by prioritising high-quality, high-performing eco homes that not only look the part, but are healthy and energy-efficient too.',
    'It’s not just about the end result; we’re committed to making the entire building process hassle-free for everyone involved — especially you, the homeowner. We work closely with designers, engineers, contractors and suppliers to ensure a smooth journey from the first sketch to the finishing touches.',
  ],
}

// Two ways to build with Lou Projects
export const paths = [
  {
    key: 'custom',
    index: '01',
    title: 'Custom Homes',
    blurb:
      'Work with our team and preferred architects to design your own custom home. Or bring your plans to us — preferably in the early design phases — and we’ll work with you and your designer to bring your vision to life.',
    cta: { label: 'What we do', href: '#/what-we-do' },
  },
  {
    key: 'lou-homes',
    index: '02',
    title: 'Lou Homes',
    blurb:
      'Select one of our pre-existing designs as a foundation, and we’ll tailor it to your unique needs, space and preferences. Our answer to affordable, yet sustainably designed and built, project homes.',
    cta: { label: 'How it works', href: '#/lou-homes' },
  },
]

export const whatWeDo = {
  eyebrow: 'What we do',
  heading: 'The how and why is what sets us apart',
  intro:
    'Put simply, we want to build better. It all starts with an airtight, weathertight building envelope — combined with effective insulation and appropriate ventilation. All three work together to create healthy, durable, energy-efficient homes.',
  pillars: [
    {
      n: '01',
      title: 'Building Envelope',
      body: 'The barrier that separates outside from in — floor, walls, windows, doors and ceiling. It protects the bones of your home and resists air, water, heat, cold, light and noise transfer.',
    },
    {
      n: '02',
      title: 'Insulation',
      body: 'We insulate floors, walls and ceilings, use double-glazed windows and doors, and even insulate around window penetrations to complete the insulation picture.',
    },
    {
      n: '03',
      title: 'Ventilation',
      body: 'Windows and breezeways for natural ventilation, taken a step further with mechanical heat-recovery ventilation — so there’s always fresh air moving in and out of the home.',
    },
  ],
  management: {
    title: 'Better building, better project management',
    body: 'Along with better building principles and practices comes better project management. We pride ourselves on the way we work and communicate with our clients and suppliers. We document everything and communicate clearly, perform regular site visits, and walk our clients through each step of the way. We develop good relationships with our trades — where trust and respect go both ways — and with our suppliers, who do everything they can to get us materials on time, so we can deliver our projects on time wherever possible.',
  },
}

export const stats = [
  { value: '100', unit: 'year', label: 'Built-to-last mindset on every home we deliver' },
  { value: '7', unit: 'star', label: 'NatHERS-rated thermal performance' },
  { value: '2019', unit: '', label: 'Award-winning since' },
]

// Pre-designed Lou Homes
export const designs = [
  {
    name: 'Ahara',
    meaning: 'A yogic term for inspiration and breath',
    specs: '5 Bed · 4 Bath · 1 Living',
    images: [
      '/img/designs2/ahara/02-AHARA-Render-1.jpg',
      '/img/designs2/ahara/03-AHARA-Render-2.jpg',
      '/img/designs2/ahara/00-AHARA-Floorplan-1.jpg',
      '/img/designs2/ahara/01-AHARA-Floorplan-2.jpg',
    ],
    blurb:
      'A sanctuary for relaxation and connection. This inward-looking home provides five bedrooms, four bathrooms, and can be positioned on any block to invite ample sunlight while preserving a sense of privacy and tranquility. You can see Ahara brought to life as one of our completed projects.',
  },
  {
    name: 'Lola',
    meaning: 'From the Tagalog word for grandmother',
    specs: '2 Bed · 1 Bath · 1 Living',
    images: [
      '/img/designs2/lola/00-LOLA-Render-1.jpg',
      '/img/designs2/lola/02-LOLA-Render-2.jpg',
      '/img/designs2/lola/01-LOLA-Floorplan-1.jpg',
    ],
    blurb:
      'Our interpretation of a granny flat. A two bedroom, one bathroom home, this lightweight, airy studio is the ideal complement to various property layouts.',
  },
  {
    name: 'Paraiso',
    meaning: 'Spanish for paradise',
    specs: '3 Bed · 2 Bath · 1 Living',
    images: [
      '/img/designs2/paraiso/02-PARAISO.jpg',
      '/img/designs2/paraiso/01-Paraiso-Floorplan-1.jpg',
      '/img/designs2/paraiso/00-Paraiso-Floorplan-2.jpg',
    ],
    blurb:
      'Drawing inspiration from the Spanish term for paradise, Paraiso is designed to feel like your own personal oasis. This quaint abode features three bedrooms, two bathrooms, and an L-shaped layout, with the option to add a supplementary study or office area.',
  },
  {
    name: 'Estasi',
    meaning: 'Italian for joy, delight, glee',
    specs: '4 Bed · 2 Bath · 1 Living',
    images: [
      '/img/designs2/estasi/00-ESTASI-Render-1.jpg',
      '/img/designs2/estasi/02-ESTASI-Render-2.jpg',
      '/img/designs2/estasi/01-ESTASI-Floorplan-1.jpg',
    ],
    blurb:
      'Inspired by the Italian word for joy, the split-home design strategically divides the space — with the kitchen, living and dining on one side and the four bedrooms on the other — fostering a harmonious balance between communal gatherings and serene personal retreats.',
  },
  {
    name: 'Bello',
    meaning: 'Beautiful, in Italian',
    specs: '3 Bed · 2 Bath · 1 Living',
    images: [
      '/img/designs2/bello/02-14.-Bello-Front-Elevation.jpg',
      '/img/designs2/bello/03-15.-Bello-Rear-Elevation.jpg',
      '/img/designs2/bello/00-16.-Bello-Ground-Floor-Plan.jpg',
      '/img/designs2/bello/01-17.-Bello-Level-One-Floor-Plan.jpg',
    ],
    blurb:
      'Bello, meaning beautiful in Italian, is a two storey home accentuated by a stunning courtyard feature. On the lower level, the kitchen, living and dining are surrounded by an inviting outdoor courtyard and patio, seamlessly blending indoor and outdoor living. Upstairs you’ll discover a tranquil retreat with three bedrooms and two bathrooms.',
  },
]

export const louHomesProcess = {
  eyebrow: 'How it works',
  heading: 'Pre-designed homes, simplified',
  intro:
    'Lou Homes is our range of pre-designed homes with various levels of customisation — modular layouts that flex to your land, your rooms and your life. The bulk of the design is already done for you, saving time, money and energy upfront.',
  steps: [
    { n: '01', title: 'Submit your enquiry', body: 'Tell us about your project and the design you’re drawn to.' },
    { n: '02', title: 'Book a consultation', body: 'We’ll help you choose the best design for your land and lifestyle, your facade and your level of inclusions.' },
    { n: '03', title: 'Finalise your design', body: 'Our architects, engineers and consultants finalise the design around your choices and adjustments.' },
    { n: '04', title: 'Price it all up', body: 'We present you with a quote based on your final design.' },
    { n: '05', title: 'Submit for approval', body: 'A DA or CDC submission to council, handled with you.' },
    { n: '06', title: 'Sign contracts', body: 'Clear, no-surprises contracts before a single sod is turned.' },
    { n: '07', title: 'Build', body: 'We bring your healthy, high-performing home to life.' },
  ],
}

export const credentials = [
  'Master Builders Association — Excellence in Building',
  'HIA Hunter Housing Awards',
  'Australia’s Best House — Channel 9',
  'Recognised Energy-Efficient Builder',
  '7-Star NatHERS Performance',
  'Passive & Passiv-Haus Principles',
]

// ── Ethos ────────────────────────────────────────────────────────────────────
export const ethos = {
  eyebrow: 'Our ethos',
  heading: 'Honest, thoughtful, people-focused',
  intro:
    'It’s the set of beliefs, values and guiding principles that shape us — building homes that are healthy and energy-efficient, being upfront and accountable, and creating a great environment for both our clients and our team.',
  values: [
    { title: 'Respect', body: 'We treat everyone — colleagues, subcontractors, clients and neighbours — with respect. No arrogance, no rudeness, no yelling. Ever.' },
    { title: 'Straight Talk', body: 'We don’t sugarcoat or dodge hard conversations. Especially when things go wrong, we communicate, take control, and make it clear we’ve got it handled.' },
    { title: 'Growth & Accountability', body: 'We own our actions, learn from our mistakes and take feedback on board. If something goes wrong, we fix it and do better next time.' },
    { title: 'Solutions Over Problems', body: 'There’s rarely a day on site without a challenge. We adapt, think creatively, and find practical ways forward. Complaining doesn’t fix issues — actions do.' },
    { title: 'Quality & Pride', body: 'From the materials we use to our craftsmanship and processes, we build things that last and take pride in every project we deliver.' },
    { title: 'Reliability & Teamwork', body: 'Showing up, doing what you say you’ll do, and playing your part. We’re in this together, and when everyone does their job well, we all succeed.' },
    { title: 'Work-Life Balance', body: 'We work hard, but we don’t believe in burnout. A balanced team is a productive team — we want everyone to thrive, not burn out after a few years.' },
  ],
  principles: [
    { title: 'Sustainability meets creativity', body: 'We team up with architects and engineers who share our vision to create stunning, functional, sustainable homes — understanding the delicate balance between a home and its natural surroundings.' },
    { title: 'Quality over quantity', body: 'A deliberate, steady approach, setting a much higher standard than the industry norm — weathertight homes with naturally regulated temperatures, no moisture issues, and no mould.' },
    { title: 'Building with a conscience', body: 'We select materials with care, source local and sustainable where we can, keep worksites clean, and ensure leftover waste is reused or recycled.' },
    { title: 'Culture is key', body: 'The culture within our team is our top priority. We make space for our team to grow — encouraging autonomy, purpose and connection.' },
  ],
}

// ── Team ─────────────────────────────────────────────────────────────────────
export const team = [
  { name: 'Andrew', role: 'Founder & Builder', photo: '/img/team/andrew.jpg', bio: 'The driving force behind Lou Projects. He builds homes and leads his team with passion, honesty and integrity, holding himself and his work to the highest standards — eager to challenge himself and take Lou Projects to the next level.' },
  { name: 'Luke', role: 'Junior Project Manager', photo: '/img/team/luke.jpg', bio: 'A perfect match from the start, joining us early in his carpentry career and awarded Apprentice of the Year. Honest, reliable and an invaluable mediator between ideas in the office and realities on site.' },
  { name: 'Richard', role: 'Junior Project Manager', photo: '/img/team/richard.jpg', bio: 'Passionate and dedicated, it shows in the high-quality product he consistently delivers. He strives to be a great leader — giving clear direction, and taking the time to guide and teach.' },
  { name: 'Tom', role: 'Carpenter', photo: '/img/team/tom.jpg', bio: 'The newest carpenter to join the team, and already a big impression. Thoughtful and genuinely polite, with a strong work ethic and natural leadership qualities already shining through.' },
  { name: 'Harrison', role: 'Apprentice', photo: '/img/team/harrison.jpg', bio: 'In his final apprenticeship year. After a brief stint in the Navy, Harri chose a fulfilling lifestyle and hasn’t looked back — ambitious, polite, well-spoken and thoughtful.' },
  { name: 'Chris', role: 'Apprentice', photo: '/img/team/chris.jpg', bio: 'Originally from South Africa, Chris joined in 2022 and quickly became essential. A natural talent for carpentry, constantly driven to learn — he wants to know the why, not just the how.' },
  { name: 'Toby', role: 'Apprentice', photo: '/img/team/toby.jpg', bio: 'Young, ambitious and a great fit from day one. Eager to learn, quick to adapt, and calm under pressure — a reliable teammate on site.' },
  { name: 'Ineka', role: 'Operations, Sales & Marketing', photo: '/img/team/ineka.jpg', bio: 'Three big roles rolled into one — and Andrew’s partner. Ineka does the nitty-gritty behind-the-scenes work, and is the wordsmith behind our social media and website.' },
]

// ── Testimonials ─────────────────────────────────────────────────────────────
// Verbatim excerpts from the client testimonials (trimmed with … where shortened).
export const testimonials = [
  { name: 'Leisa & Mark Taylor', project: 'Killara House', slug: 'killara', quote: 'The Killara House oozed sophistication and class. No expense was spared when this house was built… from the incredible front door made of the most beautiful recycled hardwood materials to the finer details like the handmade blush pink stone basins in the bathrooms. It’s our dream house… You can tell this team love what they do and are extremely talented and professional at their craft.' },
  { name: 'Rob & Janelle Hickson', project: 'Sorrento House', slug: 'sorrento', quote: 'From the onset, Andrew was open and engaging, and the Lou Projects team worked with us in establishing the contract and a scope that was affordable, yet would achieve the vision and high-quality standards we were seeking… Ultimately, the outcome exceeded our very high expectations, and we unconditionally recommend them.' },
  { name: 'Vanessa & Matthew Conrow', project: 'Lurline Street', slug: 'lurline', quote: 'From the very start Andrew, Luke and the team understood the vision we had to integrate our old 60s brick cottage with a modern extension while maintaining its warmth and character… Their honesty and clarity greatly reduced the stress typically associated with building a home.' },
  { name: 'Bill & Margaret McLean', project: 'Charlton House', slug: 'charlton', quote: 'Not only did all of our expectations be met, the project went smoothly, was finished on budget, and on time… Close neighbours were also impressed by the quiet, and respectful manner, in which all trades conducted themselves on site during the build… Our highest recommendation.' },
  { name: 'Andrew Shave', project: 'Patrick House', slug: 'patrick', quote: 'Everything about their design and process dovetailed seamlessly into my own ethos. From the ethically sourced materials, to the intricacies of every low environmental impact design element, it truely is a privilege having a builder like this at our finger tips.' },
  { name: 'Tom & Noha Rafferty', project: 'Red Cedar Studio', slug: 'red-cedar', quote: 'Andrew and his team where a dream to work with on what turned out to be a not so simple build… From start to finish we were guided through the process and always felt in control of what was happening whilst able to rely entirely on Lou Projects to manage everything for us. We can’t recommend them enough.' },
]

// ── Knowledge / Education ────────────────────────────────────────────────────
export const knowledge = {
  eyebrow: 'Knowledge hub',
  heading: 'We’re all about informing our clients',
  intro: 'Education matters. We share what we learn about building healthier, more energy-efficient homes — from the technical to the practical.',
  articles: [
    { title: 'Award-winning Charlton House: double recognition at the 2025 MBA & HIA awards', tag: 'News' },
    { title: 'What is a healthy home?', tag: 'Education' },
    { title: 'Comparing Passiv Haus and Passive Solar Design', tag: 'Education' },
    { title: 'HRV: what is it and why should you have one?', tag: 'Education' },
    { title: 'Let’s talk about sustainable window frames', tag: 'Education' },
    { title: 'Choosing the right window glazing for your energy-efficient home', tag: 'Education' },
  ],
}

export const faqs = [
  { q: 'How much does building work cost?', a: 'Costs vary with size, complexity, detail, quality and market conditions. For the work we do, costs are anywhere between $4,500–$8,000 per m². This reflects the inherent complexity of the projects we take on — though designing and constructing lower-cost, high-performance buildings is one of our main drivers as builders.' },
  { q: 'What other costs are involved?', a: 'Even small, simple residential projects may have unexpected costs arise. For PC items — such as bathroom fittings, robe hooks and carpet — we require clarification on who is responsible for providing them. If it’s the builder, a spreadsheet detailing these items and their costs is provided; if it’s the owner, this is an additional, separate cost managed by the owner.' },
  { q: 'What are the warranties on your home?', a: 'All our work carries HBCF (Home Building Compensation Fund) insurance. Beyond that, we build our homes with the mindset that they’ll last 100 years — and if proper maintenance is adhered to, we’re confident this will be the case.' },
  { q: 'How often will I need to maintain my home?', a: 'Maintenance varies from weekly to yearly. Like a regular health check, staying on top of it avoids big, costly jobs. At completion we provide a unique maintenance schedule, so you can enjoy a happy, healthy, sustainable home for years to come.' },
]

export const contact = {
  eyebrow: 'Get in touch',
  heading: 'Ready to build your sustainable dream home?',
  body: 'We’d love to hear from you. Tell us about your project and how we can help.',
}

// ── Our Story (dedicated page) ───────────────────────────────────────────────
export const story = {
  eyebrow: 'Our story',
  heading: 'Building better isn’t a goal — it’s our practical approach to construction',
  lede: 'Lou Projects is a sustainable building company based on the Central Coast, NSW. Our vision is to change the building industry by building more sustainably, and by designing and building homes that are healthy and energy-efficient.',
  // owners-story video (provided by the client)
  videoId: '1JdyJeTl0hQ',
  videoCaption: 'Meet Andrew & Ineka — the story behind Lou Projects',
  body: [
    'If you ask us why we started Lou Projects, the answer is simple — we want to build better. As home builders on the Central Coast, our mission is to redefine the industry by prioritising high-quality, high-performing eco homes, that not only look the part, but are healthy and energy-efficient too.',
    'But it’s not just about the end result; we’re committed to making the entire building process hassle-free for everyone involved, especially you — the homeowner. We work closely with our designers, engineers, contractors and suppliers to ensure a smooth journey from the first sketch to the finishing touches. Recognising the importance of design, we partner with architects and engineers who share our values, crafting energy-efficient homes that look good and work well.',
    'Education matters, and we’re all about informing our clients about their options. We provide solid support throughout both the design and build phase, helping our clients build sustainable homes all within budget.',
    'At Lou Projects, we find like-minded clients — those who, like us, value forging connections with nature, family and friends through their homes. Welcome to our story, where building better is not just a goal; it’s our practical approach to construction.',
  ],
}

// ── Knowledge Hub (full article listings — 1:1 with the live site) ───────────
const live = (path: string) => `https://louprojects.com.au${path}`

export const knowledgeHub = {
  blog: [
    { title: 'Award-winning Charlton House: double recognition at the 2025 MBA & HIA awards', tag: 'News', href: live('/education/charlton-house-award-winning-renovation/') },
    { title: 'Why is small business so admin heavy?', tag: 'Business', href: live('/education/why-is-small-business-so-admin-heavy/') },
    { title: 'What is a healthy home?', tag: 'Education', href: live('/education/what-is-a-healthy-home/') },
    { title: 'Designing your home: when should you engage a builder?', tag: 'Education', href: live('/education/designing-your-home-when-should-you-engage-a-builder/') },
    { title: 'A lesson from your sustainable builder: the cost of building wraps', tag: 'Materials', href: live('/education/a-lesson-from-your-sustainable-builder-the-cost-of-building-wraps/') },
    { title: 'HRV: what is it and why should you have one?', tag: 'Performance', href: live('/education/hrv-what-is-it-and-why-should-you-have-one/') },
    { title: 'Ahara House wins sustainability award', tag: 'News', href: live('/education/ahara-house-wins-sustainability-award/') },
    { title: 'DA vs CDC: a consideration when building your home', tag: 'Process', href: live('/education/da-vs-cdc-a-consideration-when-building-your-home/') },
    { title: 'Comparing Passiv Haus and Passive Solar Design', tag: 'Performance', href: live('/education/comparing-passiv-haus-and-passive-solar-design/') },
    { title: 'Lou Projects recognised as an energy-efficient builder', tag: 'News', href: live('/education/lou-projects-recognised-as-an-energy-efficient-builder/') },
    { title: 'Let’s talk about sustainable window frames', tag: 'Materials', href: live('/education/lets-talk-about-sustainable-window-frames/') },
    { title: '5 tips on insulating your home to make it more energy-efficient', tag: 'Performance', href: live('/education/5-tips-on-insulating-your-home-to-make-it-more-energy-efficient/') },
    { title: 'Choosing the right window glazing for your energy-efficient home', tag: 'Materials', href: live('/education/choosing-the-right-window-glazing-for-your-energy-efficient-home/') },
  ],
  notes: [
    { title: 'Rain day allowances: the cost most clients don’t see', href: live('/andrews-notes/') },
    { title: 'What building taught me about energy, productivity, and Australia’s future', href: live('/andrews-notes/') },
    { title: 'Apprentices: you’re meant to feel behind… that’s the advantage', href: live('/andrews-notes/') },
    { title: 'Why builders should charge for quotes: the hidden value of expert consultation', href: live('/andrews-notes/') },
    { title: 'Understanding variations in construction: and how to handle them', href: live('/andrews-notes/') },
    { title: 'The entitlement trap', href: live('/andrews-notes/') },
    { title: 'Solar: a love-hate relationship', href: live('/andrews-notes/') },
    { title: 'A practical approach to climate change in the building industry', href: live('/andrews-notes/') },
  ],
  media: [
    { title: 'Lou Projects featured on Build Index: getting plans and pricing right early', outlet: 'Build Index', href: live('/media/') },
    { title: 'Podcast: smarter scaling with Andrew George of Lou Projects — Part 1', outlet: 'Build Insite', href: live('/media/') },
    { title: 'The Lou Projects approach: a balance of performance, comfort, and style', outlet: 'Feature', href: live('/media/') },
    { title: 'Building with integrity: a conversation with Andrew', outlet: 'Interview', href: live('/media/') },
    { title: 'Andrew George in Central Coast Life & Style', outlet: 'Central Coast Life & Style', href: live('/media/') },
  ],
}
