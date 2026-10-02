export const BUSINESS = {
  name: 'PixelForge Arena',
  tagline: 'Level up. Squad up. Never log off.',
  address: 'Unit 24, 2nd Floor, Nova Mall, Lakeview Road, Mumbai 400000',
  phone: '+91 90000 12345',
  email: 'play@pixelforgearena.example',
  hours: 'Mon-Thu 11 AM-11 PM, Fri-Sun 10 AM-1 AM',
  socials: [
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Discord', href: '#', icon: 'discord' },
    { label: 'YouTube', href: '#', icon: 'youtube' },
  ],
}

export const NAV_LINKS = [
  { label: 'Zones', href: '#zones' },
  { label: 'Games', href: '#games' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book', href: '#booking' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: 40, suffix: '', label: 'High-End PCs' },
  { value: 10, suffix: '', label: 'PS5 Consoles' },
  { value: 1, suffix: ' Gbps', label: 'Fiber Speed', decimals: 0 },
  { value: 500, suffix: '+', label: 'Members' },
]

export const ZONES = [
  {
    icon: 'monitor',
    title: 'PC Zone',
    desc: 'Grind ranked with zero lag.',
    specs: ['RTX 4060 rigs', '165 Hz monitors', 'Mechanical keyboards'],
    color: 'purple',
  },
  {
    icon: 'gamepad',
    title: 'Console Lounge',
    desc: 'Couch co-op & sports nights.',
    specs: ['PS5 + 55" 4K TVs', 'Couch seating', 'Party-friendly'],
    color: 'cyan',
  },
  {
    icon: 'users',
    title: 'VIP Squad Room',
    desc: 'Private room for your stack.',
    specs: ['Private room', '5–8 players', 'Dedicated host button'],
    color: 'pink',
  },
  {
    icon: 'mic',
    title: 'Streaming Pod',
    desc: 'Go live like a pro.',
    specs: ['Capture card', 'Studio mic setup', 'Ring light + green screen'],
    color: 'purple',
  },
]

export const GAMES = [
  'Valorant', 'CS2', 'Fortnite', 'GTA V', 'EA FC 25',
  'Call of Duty', 'Apex Legends', 'Minecraft', 'Tekken 8', 'Mortal Kombat',
]

export const PRICING = {
  pc: [
    { name: 'Hourly Grind', price: 80, unit: '/hr', features: ['Any PC Zone rig', 'High-speed fiber', 'Free headset rental'] },
    { name: '5-Hour Pack', price: 350, unit: '/5 hrs', popular: true, features: ['Save ₹50 vs hourly', 'Priority re-booking', 'Free iced tea'] },
    { name: 'Night Pass', price: 600, unit: '11 PM–6 AM', features: ['All-night access', 'Midnight snack combo', 'Squad priority'] },
  ],
  console: [
    { name: 'Per Player', price: 120, unit: '/hr', features: ['PS5 + 4K TV', 'Couch lounge', 'Controller included'] },
    { name: '4-Hour Session', price: 450, unit: '/4 hrs', popular: true, features: ['Save ₹30', 'Extra controller free', 'Snack discount'] },
  ],
  vip: [
    { name: 'Squad Room', price: 500, unit: '/hr up to 8', popular: true, features: ['Private room', 'Up to 8 players', 'Dedicated support'] },
  ],
}

export const TIME_SLOTS = ['11 AM', '1 PM', '3 PM', '5 PM', '7 PM', '9 PM', '11 PM (Night Pass)']

export const EVENTS = [
  { title: 'Valorant 5v5 Clash', game: 'Valorant', when: 'Sat 8 PM', prize: '₹15,000 prize pool', tag: 'Flagship' },
  { title: 'FC 25 1v1 Cup', game: 'EA FC 25', when: 'Sun 5 PM', prize: '₹5,000', tag: '1v1' },
  { title: 'Ladies Gaming Night', game: 'Community Mix', when: 'Every Wed 6 PM', prize: 'Free play + goodies', tag: 'Weekly' },
  { title: 'Tekken 8 Throwdown', game: 'Tekken 8', when: 'Fri 7 PM', prize: '₹3,000', tag: 'Casual' },
]

export const LEADERBOARD = [
  { rank: 1, tag: 'NightRaven', wins: 48, points: 2450 },
  { rank: 2, tag: 'ByteWolf', wins: 44, points: 2310 },
  { rank: 3, tag: 'ClutchQueen', wins: 41, points: 2180 },
  { rank: 4, tag: 'PixelProwler', wins: 36, points: 1945 },
  { rank: 5, tag: 'FragFury', wins: 32, points: 1820 },
]

export const TESTIMONIALS = [
  { quote: 'Best ping in the city and super comfy chairs!', author: 'Aarav K.', stars: 5, game: 'Valorant' },
  { quote: 'VIP room is perfect for our squad. Soundproof and insane PCs.', author: 'Sneha R.', stars: 5, game: 'CS2' },
  { quote: 'Night pass is unbeatable value. Staff actually knows gaming.', author: 'Rohan M.', stars: 4, game: 'Apex Legends' },
  { quote: 'Ladies night got me back into gaming. Super welcoming vibe.', author: 'Priya S.', stars: 5, game: 'Minecraft' },
]

export const FAQS = [
  { q: 'Is there an age policy?', a: 'Gamers under 12 must be accompanied by an adult. After 10 PM, under-16s need guardian consent. Valid ID for night passes.' },
  { q: 'Can I bring food and drinks?', a: 'Outside food is not allowed, but our snack bar has combos, energy drinks and midnight maggi. Water is always free.' },
  { q: 'What is your refund policy?', a: 'Cancellations up to 4 hours before your slot get full credit. No-shows forfeit 1 hour.' },
  { q: 'Do you host group / birthday bookings?', a: 'Yes! VIP Squad Room fits 5–8 players. For 8+ or full-cafe buyouts, message us on WhatsApp 48 hrs ahead for a custom quote.' },
]

export const MEMBERSHIPS = [
  { tier: 'Bronze', price: '₹499/mo', perks: ['5 free PC hours', '5% off extras', 'Member leaderboard'], color: 'cyan' },
  { tier: 'Silver', price: '₹999/mo', perks: ['12 free PC hours', '10% off all zones', 'Priority booking', '1 guest pass/mo'], color: 'purple', popular: true },
  { tier: 'Gold', price: '₹1,999/mo', perks: ['30 free hours', '20% off VIP room', 'Free night pass/mo', 'Tournament fee waived'], color: 'pink' },
]
