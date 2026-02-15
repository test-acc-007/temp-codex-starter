# Freelance Makeup Artist & Hairstylist Website Concept

## Brand Direction

### Positioning
Premium **mobile** beauty services for brides, events, and style-conscious clients in Texas.

### Core Brand Promise
**"Red carpet glam, delivered to your doorstep."**

### Tone of Voice
- Warm, aspirational, feminine, and confident
- Expert but never intimidating
- Personal, story-led, trust-building

---

## Visual System

### Color Palette (Ethereal Pink/Blue)
- **Blush Pink (Primary):** `#F7B6D2`
- **Rose Glow (CTA accent):** `#EC8EB5`
- **Serene Blue (Primary):** `#9CCBFF`
- **Sky Mist (Background wash):** `#DDF0FF`
- **Soft Lilac (Blend bridge):** `#C8B6FF`
- **Midnight Blue (Text/Footer):** `#1E2A44`
- **Ivory White (Surface):** `#FFFDFE`

### Recommended Gradients
1. **Hero Overlay Gradient:** `linear-gradient(135deg, #9CCBFF 0%, #F7B6D2 100%)`
2. **CTA Gradient:** `linear-gradient(90deg, #EC8EB5 0%, #9CCBFF 100%)`
3. **Section Mesh Background:** radial gradients blending `#F7B6D2`, `#C8B6FF`, `#DDF0FF`

### Typography
- **Headings:** Playfair Display (Elegant serif)
- **Body/UI:** Inter (or Lato) (Clean sans-serif)

### Imagery Style
- Soft-focus, natural light, editorial angles
- Bridal close-ups + candid behind-the-scenes moments
- Warm skin tones, clean highlights, minimal heavy filters

---

## Storytelling Site Flow (Text Wireframe)

## 1) Hero Section — *The Hook*
**Goal:** Immediate emotional impact + clear booking action.

### Layout
- Full viewport height (`100vh`), mobile-first centered stack
- Background: full-bleed photo/video of bridal glam prep
- Soft gradient overlay at ~30% opacity for text readability
- Bottom edge: curved/wave SVG divider transitioning to next section

### Content
- Eyebrow text: `Mobile Hair & Makeup Artist • Texas`
- **H1:** `Bringing Red Carpet Glamour to Your Doorstep.`
- Subheadline: `Texas’ Premier Mobile Hair & Makeup Artistry for weddings, events, and unforgettable moments.`
- Primary CTA button: **`Book Your Transformation`**
- Secondary micro-link: `View Services`

### UI Notes
- Sticky CTA pill on mobile after first scroll: `Book Now`
- Optional floating WhatsApp mini-button (bottom-right)

### Interactions
- Parallax drift on background image (subtle)
- Headline fades upward on load
- CTA hover: gradient shift + soft glow shadow

---

## 2) Meet the Artist — *The Connection*
**Goal:** Build trust through personality and story.

### Layout
- Asymmetrical split that collapses to vertical on mobile
- Left: portrait/cutout image of artist
- Right: storytelling copy with signature block
- Background transitions from hero gradient into soft ivory

### Content
- Section title: `Meet Your Artist`
- **Headline:** `Hi, I’m [Artist Name]. I believe beauty is a feeling.`
- Body copy (short narrative):
  - Passion origin story
  - Experience with brides/events/fashion clients
  - Philosophy: personalized, camera-ready, long-lasting looks
- Trust tags/chips:
  - `Certified Pro Makeup Artist`
  - `On-Location Across Texas`
  - `Bridal Specialist`

### Interactions
- Image slides in from left on scroll reveal
- Copy fades in line-by-line for storytelling feel
- Signature flourish animation under final sentence

---

## 3) Services — *The Offering*
**Goal:** Clarify packages while emphasizing mobile convenience.

### Layout
- Horizontal card carousel (swipe on mobile, drag/scroll on desktop)
- Frosted glass cards on mesh gradient background
- Curved top and bottom section dividers to maintain fluid narrative

### Section Header
- Title: `Services Designed Around You`
- Intro line: `From bridal mornings to evening glam, I bring the studio to your space.`

### Service Cards
1. **Bridal Beauty**
   - Items: Makeup, Hair Styling, Draping
   - Copy: `A complete, photo-ready bridal experience for your biggest day.`
   - Icon: Ring/veil
2. **Occasion & Party Glam**
   - Items: Glam Makeup, Updos, Styling Touch-ups
   - Copy: `Luxury looks for receptions, shoots, and special nights.`
   - Icon: Sparkles
3. **Nail Artistry**
   - Items: Nail styling and design add-ons
   - Copy: `Polished details that complete your look.`
   - Icon: Hand/nail

### Mobile Service Emphasis
- Highlight banner below cards:
  - **`We Come to You — On-location beauty services across Texas.`**

### CTA
- Repeated CTA button: `Check Availability`

### Interactions
- Card hover: lift + blur-glow border
- Snap-scroll effect for carousel cards
- Active card indicator dots with pink/blue transitions

---

## 4) Social Proof — *The Validation*
**Goal:** Reinforce credibility with visual outcomes + real client words.

### Layout
- Header + Instagram-style 3x2 feed (2 columns on mobile)
- Mixed media blocks: look photos, review quote cards, short BTS clip thumbnails
- Soft rounded tiles (12–16px radius)

### Content
- Header: `Fresh from the Feed`
- Subheader: `Real clients. Real transformations. @ArtistHandle`
- Tile examples:
  - Bridal final look
  - Party glam close-up
  - Quote tile: `“She made me feel like a movie star.” — Sarah, Austin`
  - BTS reel thumbnail
- CTA: `Follow on Instagram`

### Tech Implementation (No-Code Friendly)
- Use Instagram embed/widget (Elfsight, SnapWidget, or native Framer/Webflow component)
- Keep image ratio square for clean masonry rhythm

### Interactions
- Tiles fade + scale in staggered sequence on scroll
- Hover overlay: `View Post` icon state

---

## 5) Booking & Contact — *The Action*
**Goal:** Reduce friction and convert visitors into inquiries.

### Layout
- Centered conversion block on airy light-blue background
- Contact channels first, then short form
- Designed for thumb-friendly tapping on mobile

### Content
- Header: `Ready to Shine?`
- Subcopy: `Tell me your date, location, and service needs — I’ll handle the glam.`

### Quick Contact Actions (Icon Buttons)
- `WhatsApp`
- `Instagram DM`
- `Email`
- `Phone`

### Request Appointment Form
Fields:
- Name
- Event Date
- Service Type (Bridal / Occasion / Nail / Custom)
- Location (City, Texas)
- Message
- Submit button: `Request Appointment`

### UX Notes
- Keep to 5 fields max for higher completion
- Use inline validation and success state: `Thanks! You’ll hear back within 24 hours.`

### Interactions
- Input focus states with blue glow outline
- Submit button loading micro-animation
- Confirmation panel slides in softly

---

## 6) Footer — *The Close*
**Goal:** Polished finish + utility navigation.

### Layout
- Minimal, dark footer for contrast (Midnight Blue)
- 3-column desktop / stacked mobile

### Content
- Left: Wordmark/logo
- Center: Quick links (`About`, `Services`, `Portfolio`, `Book`)
- Right: Social icons + service area text:
  - `Serving Austin, Dallas, Houston, San Antonio, and beyond.`
- Copyright:
  - `© [Year] [Artist Name]. All rights reserved.`

---

## Conversion & UX Strategy

### CTA Placement Strategy
- Hero primary CTA
- Services section CTA
- Sticky mobile CTA (`Book Now`)
- Booking section submit CTA

### Trust Builders
- Artist credentials chips
- Real reviews embedded in social section
- Clear response time expectation (e.g., within 24 hrs)
- Texas service coverage repeated in multiple sections

### Mobile-First Notes
- Single-column content flow first; enhance to split/grid on tablet+desktop
- Keep body text 16–18px, heading line-height generous
- Minimum 44px tap targets for all actionable elements
- Fast-loading optimized media, lazy-load Instagram grid

### Accessibility Notes
- Ensure text contrast over gradient/image overlays (WCAG AA target)
- Alt text for all portfolio images
- Keyboard-focus styles for form and CTA buttons
- Reduced-motion preference for parallax/fade animations

---

## Suggested Motion & Interaction System
- **Scroll cadence:** each section reveals with 150–250ms staggered fades
- **Parallax depth:** low-intensity only (background moves slower than content)
- **Curved transitions:** SVG separators between major sections for narrative flow
- **Micro-interactions:**
  - CTA hover shimmer
  - Icon button bounce (subtle)
  - Card hover elevation

---

## No-Code Build Guidance (Figma → Framer/Webflow)

### Figma Structure
- Use Auto Layout for all section containers and cards
- Create reusable components:
  - CTA button (primary/secondary states)
  - Service card
  - Social tile
  - Contact icon button
- Define text styles and color styles as shared tokens

### Framer/Webflow Mapping
- Sections become stacked frames with overflow-hidden for curved dividers
- Use interactions panel for fade/slide reveals
- Use CMS collections for:
  - Services
  - Instagram/portfolio tiles
  - Testimonials
- Hook form to email automation (Zapier/Make/Webflow forms)

---

## Optional Copy Snippets (Ready to Use)
- **Hero:** `Bringing Red Carpet Glamour to Your Doorstep.`
- **Subhero:** `Luxury hair, makeup, and nail artistry — wherever you are in Texas.`
- **Mobile Service Line:** `No salon stress. I travel to you with everything needed.`
- **Booking Prompt:** `Your date deserves more than ordinary. Let’s create your signature look.`
