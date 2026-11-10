import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Leaf,
  Flame,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { InstagramIcon, FacebookIcon } from "@/components/social-icons";
import { FaqAccordion } from "@/components/faq-accordion";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Reveal } from "@/components/reveal";
import { brand, campImages, dishes } from "@/lib/site-data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WABI SABI TRADITIONAL RECIPES",
  description:
    "An interactive Ghanaian cookery network connecting culinary heritage, immersive classes and community gatherings.",
  email: brand.email,
  telephone: brand.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unnamed Road",
    addressLocality: "Medina",
    addressRegion: "Accra",
    addressCountry: "GH",
  },
  sameAs: [brand.instagram, brand.facebook],
  areaServed: {
    "@type": "City",
    name: "Accra, Ghana",
  },
};

const signatureFormats = [
  {
    number: "01",
    title: "Pop-ups",
    text: "Thoughtful culinary gatherings that bring Ghanaian food and people together in unexpected places.",
  },
  {
    number: "02",
    title: "The Ghanaian Table",
    text: "A curation series exploring regional dishes, the stories behind them and the hands that keep them alive.",
  },
  {
    number: "03",
    title: "Sallah & Festive Moments",
    text: "Seasonal food experiences built around sharing, celebration and the generous spirit of Ghanaian hospitality.",
  },
  {
    number: "04",
    title: "Lokato Food Festival",
    text: "An outdoor escape for food, friendly competition, music and community in the Eastern Region.",
  },
];

export default function HomePage() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-backdrop" role="img" aria-label="A Wabisabi culinary experience photograph from Ghana" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content page-gutter">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> A Ghanaian culinary social club</p>
          <h1 id="hero-title">The Wabisabi <em>Experience.</em></h1>
          <p className="hero-subtitle">
            Ghana&apos;s most exquisite cookery network setup to promote culinary culture.
            A Social Club and Food Network.
          </p>
          <div className="hero-actions">
            <Link href="#menu" className="button button-sand">Explore our table <ArrowUpRight size={16} /></Link>
            <Link href="#philosophy" className="hero-text-link">Discover our philosophy <ArrowDown size={15} /></Link>
          </div>
          <div className="hero-bottom-note">
            <span>ROOTED IN GHANA</span>
            <span className="hero-note-rule" />
            <span>MADE FOR TOGETHERNESS</span>
          </div>
        </div>
        <div className="hero-side-label" aria-hidden="true">FOOD · CULTURE · COMMUNITY</div>
      </section>

      <section className="intro-strip" aria-label="Wabisabi introduction">
        <div className="page-gutter intro-strip-inner">
          <p>Not simply a meal.</p>
          <span className="intro-dot" />
          <p>A memory, a ritual, a place to belong.</p>
          <span className="intro-strip-mark">EST. IN GHANA</span>
        </div>
      </section>

      <section id="philosophy" className="section philosophy-section section-light">
        <div className="page-gutter">
          <Reveal className="section-heading-row">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> Our philosophy</p>
              <h2 className="section-title">A culture you can <em>taste.</em></h2>
            </div>
            <p className="section-aside">A living connection between heritage, craft and the joy of gathering.</p>
          </Reveal>

          <div className="philosophy-grid">
            <Reveal className="philosophy-quote-wrap">
              <span className="quote-mark">“</span>
              <blockquote>
                Ghana is more than a place. It is a feeling... It lives in chop bars and crowded streets, in weddings, in funerals, in strangers who feel like family.
              </blockquote>
              <div className="quote-caption"><span /> THE HEART OF WABISABI</div>
            </Reveal>
            <Reveal className="philosophy-copy" delay={120}>
              <p className="body-lead">
                WABI SABI TRADITIONAL RECIPES is an interactive cookery network bridging nostalgia with premium culinary curation.
              </p>
              <p>
                We host immersive classes and social gatherings where participants explore regional ingredients, master traditional cooking over charcoal fires, and learn the craftsmanship behind Ghana&apos;s heritage dishes. We find beauty in simplicity, raw processes, and community togetherness.
              </p>
              <Link href="#contact" className="underlined-link">Come to the table <ArrowUpRight size={15} /></Link>
            </Reveal>
          </div>

          <Reveal className="formats-block">
            <div className="formats-heading">
              <p className="eyebrow">How we gather</p>
              <h3>Signature formats</h3>
            </div>
            <div className="formats-grid">
              {signatureFormats.map((format) => (
                <article className="format-card" key={format.number}>
                  <span className="format-number">{format.number}</span>
                  <h4>{format.title}</h4>
                  <p>{format.text}</p>
                  <span className="format-arrow"><ArrowUpRight size={16} /></span>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="menu" className="section menu-section">
        <div className="page-gutter">
          <Reveal className="menu-heading-row">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> From our kitchen</p>
              <h2 className="section-title">The <em>heritage</em> menu.</h2>
            </div>
            <p className="section-aside">Traditional favourites, prepared with respect for the ingredients, the process and the people.</p>
          </Reveal>

          <div className="dish-grid">
            {dishes.map((dish, index) => (
              <Reveal className={`dish-card dish-card-${(index % 5) + 1}`} key={dish.title} delay={(index % 3) * 70}>
                <div className="dish-image-wrap">
                  <Image
                    src={dish.image}
                    alt={dish.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    loading="lazy"
                    className="dish-image"
                  />
                  <span className="dish-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="dish-caption">
                  <div>
                    <h3>{dish.title}</h3>
                    <p>{dish.note}</p>
                  </div>
                  <span className="dish-caption-arrow"><ArrowUpRight size={16} /></span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="menu-footnote"><span /> MENU IS A CELEBRATION OF GHANAIAN FOOD CULTURE <span /></div>
        </div>
      </section>

      <section id="lokato-camp" className="section camp-section">
        <div className="page-gutter">
          <Reveal className="camp-heading">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Beyond the everyday</p>
            <div className="camp-title-row">
              <h2 className="section-title section-title-light">The Lokato <em>Food Camp.</em></h2>
              <span className="camp-edition">AN OUTDOOR GHANAIAN EXPERIENCE</span>
            </div>
            <p className="camp-intro">
              A unique multi-day getaway hosted outdoors in the Eastern Region. Experience the ultimate team cook-off, feast on signature recipes at the Lokato Table, and connect at the All-White Party in the woods. Same Soul. Different Experience.
            </p>
          </Reveal>

          <div className="camp-highlights">
            <div><Flame size={18} /><span>THE TEAM COOK-OFF</span></div>
            <div><Leaf size={18} /><span>THE LOKATO TABLE</span></div>
            <div><Users size={18} /><span>COMMUNITY IN THE WOODS</span></div>
          </div>

          <div className="camp-gallery" aria-label="Lokato Food Camp photo gallery">
            {campImages.map((image) => (
              <div className={`camp-gallery-item camp-gallery-item-${(image.index % 6) + 1}`} key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 25vw"
                  loading="lazy"
                  className="camp-gallery-image"
                />
              </div>
            ))}
          </div>

          <div className="camp-cta-row">
            <p>Find your people. Find your place at the table.</p>
            <Link href={brand.instagram} target="_blank" rel="noreferrer" className="button button-sand">
              View Upcoming Camp Dates on Instagram <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="club-banner">
        <div className="club-banner-pattern" aria-hidden="true" />
        <Reveal className="club-banner-content page-gutter">
          <p className="eyebrow"><span className="eyebrow-line" /> The Wabisabi community</p>
          <h2>Become part of the <em>Wabisabi Food Family.</em></h2>
          <p>Good food brings us together. Shared stories make us family.</p>
          <Link href={`mailto:${brand.email}?subject=Application%20to%20Join%20the%20Wabisabi%20Food%20Club`} className="button button-dark">
            Apply to Join the Club <ArrowUpRight size={16} />
          </Link>
        </Reveal>
        <span className="club-banner-stamp" aria-hidden="true">FOOD<br />IS<br />CULTURE</span>
      </section>

      <section className="section spices-section section-light">
        <div className="page-gutter spices-grid">
          <Reveal className="spices-image-wrap">
            <Image
              src="https://res.cloudinary.com/jbbzejqi/image/upload/v1794269000/IMG_8962.jpg"
              alt="Wabisabi curated Ghanaian herbs and spice blends"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              loading="lazy"
              className="spices-image"
            />
            <span className="spices-image-tag">THE WABISABI PANTRY</span>
          </Reveal>
          <Reveal className="spices-copy" delay={100}>
            <p className="eyebrow"><span className="eyebrow-line" /> From our pantry</p>
            <h2 className="section-title">A little more <em>Wabisabi.</em></h2>
            <p className="spices-lead">Wabisabi Spices</p>
            <p>Curated blends of organic herbs and spices. Thoughtfully brought together to make everyday cooking feel like coming home.</p>
            <Link href={brand.whatsapp} target="_blank" rel="noreferrer" className="button button-outline">
              Contact to Order <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="page-gutter faq-grid">
          <Reveal className="faq-intro">
            <p className="eyebrow"><span className="eyebrow-line" /> A few details</p>
            <h2 className="section-title">Good to <em>know.</em></h2>
            <p>Have another question? We are happy to help you plan your next Wabisabi experience.</p>
            <Link href={`mailto:${brand.email}`} className="underlined-link">Ask us anything <ArrowUpRight size={15} /></Link>
          </Reveal>
          <Reveal className="faq-content" delay={100}>
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="page-gutter">
          <Reveal className="contact-topline">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Start a conversation</p>
            <h2 className="section-title section-title-light">There is always <em>room</em><br />at our table.</h2>
            <p className="contact-description">For deliveries or meetings at our Medina base, please reach out via WhatsApp or Instagram to confirm coordinates.</p>
          </Reveal>

          <div className="contact-details-grid">
            <Reveal className="contact-detail" delay={70}>
              <span className="contact-icon"><MapPin size={19} /></span>
              <p className="contact-label">Visit our base</p>
              <h3>Medina, Accra</h3>
              <p>Unnamed Road, Medina, Accra, Ghana</p>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Unnamed+Road%2C+Medina%2C+Accra%2C+Ghana"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >View location <ArrowUpRight size={14} /></Link>
            </Reveal>
            <Reveal className="contact-detail" delay={140}>
              <span className="contact-icon"><Mail size={19} /></span>
              <p className="contact-label">Write to us</p>
              <h3>Say hello.</h3>
              <p>{brand.email}</p>
              <Link href={`mailto:${brand.email}`} className="contact-link">Send an email <ArrowUpRight size={14} /></Link>
            </Reveal>
            <Reveal className="contact-detail" delay={210}>
              <span className="contact-icon"><Phone size={19} /></span>
              <p className="contact-label">Talk with us</p>
              <h3>Let's connect.</h3>
              <p>{brand.phoneDisplay}</p>
              <Link href={brand.whatsapp} target="_blank" rel="noreferrer" className="contact-link">Open WhatsApp <ArrowUpRight size={14} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-gutter">
          <div className="footer-main">
            <div className="footer-brand-block">
              <Link href="#top" className="footer-brand-lockup" aria-label="Wabisabi Traditional Recipes home">
                <Image
                  src="https://res.cloudinary.com/jbbzejqi/image/upload/v1794304962/IMG_9021.jpg"
                  alt="Wabisabi Traditional Recipes full brand logo"
                  width={240}
                  height={240}
                  sizes="60px"
                  loading="lazy"
                  className="footer-brand-logo"
                />
                <span className="footer-brand">WABI SABI <span>TRADITIONAL RECIPES</span></span>
              </Link>
              <p>Ghana is more than a place.<br />It is a feeling.</p>
            </div>
            <div className="footer-social-block">
              <p>FOLLOW THE TABLE</p>
              <div className="footer-socials">
                <Link href={brand.instagram} target="_blank" rel="noreferrer" aria-label="Wabisabi on Instagram"><InstagramIcon /> Instagram</Link>
                <Link href={brand.facebook} target="_blank" rel="noreferrer" aria-label="Wabisabi on Facebook"><FacebookIcon /> Facebook</Link>
              </div>
            </div>
            <div className="footer-campaign">
              <span><Sparkles size={15} /> OUR COMMUNITY CAMPAIGN</span>
              <strong>#befoodsafe</strong>
              <p>Care for the food. Respect the process. Look out for one another.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} WABI SABI TRADITIONAL RECIPES</span>
            <span>ROOTED IN GHANA · SHARED WITH LOVE</span>
            <Link href="#top">Back to top <ArrowUpRight size={13} /></Link>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
}
