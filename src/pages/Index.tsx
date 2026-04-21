import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
 

const LOGO_URL = "https://cdn.poehali.dev/files/d88fbb65-fb4c-4958-a30a-0899c387c3bc.jpg";
const IMG_TABLE = "https://cdn.poehali.dev/projects/864709f9-7445-4d2e-b018-c8baee70db89/files/26f8de09-f389-41b7-946d-d3320b3d2a5a.jpg";
const IMG_CHAIR = "https://cdn.poehali.dev/projects/864709f9-7445-4d2e-b018-c8baee70db89/files/eef3fdd5-5c6b-435b-aa14-66a3ad3ce448.jpg";
const IMG_WARDROBE = "https://cdn.poehali.dev/projects/864709f9-7445-4d2e-b018-c8baee70db89/files/02f1d428-7146-408d-bac1-9017c9d88218.jpg";

const NAV_LINKS = ["Главная", "Портфолио", "Услуги", "О нас", "Контакты"];

const CATEGORIES = [
  { id: 1,  img: IMG_TABLE,    title: "Интерьерная мебель ресторана", icon: "UtensilsCrossed" },
  { id: 2,  img: IMG_WARDROBE, title: "Лестницы",                     icon: "MoveUp" },
  { id: 3,  img: IMG_TABLE,    title: "Кухни",                         icon: "ChefHat" },
  { id: 4,  img: IMG_WARDROBE, title: "Шкафы",                         icon: "Package" },
  { id: 5,  img: IMG_TABLE,    title: "Буфеты",                        icon: "Archive" },
  { id: 6,  img: IMG_TABLE,    title: "Обеденные столы",               icon: "Square" },
  { id: 7,  img: IMG_WARDROBE, title: "Стенки",                        icon: "Layers" },
  { id: 8,  img: IMG_CHAIR,    title: "Прихожие",                      icon: "DoorOpen" },
  { id: 9,  img: IMG_TABLE,    title: "Двери межкомнатные",            icon: "DoorClosed" },
  { id: 10, img: IMG_WARDROBE, title: "Двери входные",                 icon: "Shield" },
  { id: 11, img: IMG_TABLE,    title: "Библиотека",                    icon: "BookOpen" },
  { id: 12, img: IMG_CHAIR,    title: "Кабинеты",                      icon: "Briefcase" },
  { id: 13, img: IMG_CHAIR,    title: "Кровати",                       icon: "Bed" },
  { id: 14, img: IMG_WARDROBE, title: "Ванные",                        icon: "Droplets" },
  { id: 15, img: IMG_TABLE,    title: "Садовая мебель",                icon: "Flower2" },
  { id: 16, img: IMG_CHAIR,    title: "Детские",                       icon: "Star" },
  { id: 17, img: IMG_TABLE,    title: "Предметы интерьера",            icon: "Lamp" },
  { id: 18, img: IMG_WARDROBE, title: "Беседки",                       icon: "Home" },
  { id: 19, img: IMG_TABLE,    title: "Настилы / Сад",                 icon: "TreePine" },
  { id: 20, img: IMG_WARDROBE, title: "Шпон",                          icon: "Palette" },
];

const SERVICES = [
  { icon: "Ruler", title: "Индивидуальный проект", desc: "Разрабатываем мебель под ваши размеры, вкус и интерьер. Никаких компромиссов — только ваше видение." },
  { icon: "Layers", title: "Серийные коллекции", desc: "Избранные изделия из постоянного каталога. Проверенные формы, лучшие материалы." },
  { icon: "Wrench", title: "Реставрация", desc: "Возвращаем жизнь антикварной и дорогой мебели. Бережно, профессионально, с уважением к истории." },
  { icon: "Home", title: "Комплектация интерьера", desc: "Подбираем и создаём мебель для жилых и коммерческих пространств под ключ." },
];

const STATS = [
  { value: "12", label: "лет мастерству" },
  { value: "340+", label: "реализованных проектов" },
  { value: "18", label: "мастеров в команде" },
  { value: "100%", label: "ручная работа" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

export default function Index() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Главная");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const portfolioRef = useInView();
  const servicesRef = useInView();
  const aboutRef = useInView();
  const contactRef = useInView();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sectionMap: Record<string, string> = {
    "Главная": "hero",
    "Портфолио": "portfolio",
    "Услуги": "services",
    "О нас": "about",
    "Контакты": "contacts",
  };

  return (
    <div className="grain min-h-screen" style={{ background: "var(--dark)" }}>

      {/* NAV */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(14,12,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <img src={LOGO_URL} alt="M Logo" className="w-10 h-10 object-cover rounded-full" style={{ filter: "brightness(0.9)" }} />
            <div>
              <div className="font-cormorant text-3xl font-semibold tracking-widest text-gold">Масторас</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => { setActiveSection(link); scrollTo(sectionMap[link]); }}
                className={`nav-link font-montserrat text-[11px] tracking-[0.2em] uppercase transition-colors ${activeSection === link ? "text-gold active" : "text-muted-foreground hover:text-gold"}`}
              >
                {link}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("contacts")}
            className="hidden md:block font-montserrat text-[10px] tracking-[0.2em] uppercase px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
          >
            Консультация
          </button>

          <button className="md:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ background: "rgba(14,12,10,0.98)" }}>
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => { setActiveSection(link); scrollTo(sectionMap[link]); }}
                className="font-montserrat text-[11px] tracking-[0.2em] uppercase text-left text-muted-foreground hover:text-gold transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 60% at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 70%),
              radial-gradient(ellipse 40% 80% at 10% 50%, rgba(201,168,76,0.03) 0%, transparent 70%),
              var(--dark)
            `,
          }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full opacity-10" style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }} />
          <div className="absolute top-0 right-1/4 w-px h-full opacity-5" style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center pt-20">
          <div>
            <div className="opacity-0 animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-12" style={{ background: "var(--gold)" }} />
                <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase text-gold">Масторас</span>
              </div>
            </div>

            <h1 className="font-cormorant text-6xl lg:text-8xl font-light leading-none mb-8 opacity-0 animate-fade-in-up delay-100" style={{ animationFillMode: "forwards" }}>
              Мебель, <br />
              <em className="gold-shimmer not-italic">созданная</em>
              <br />
              для жизни
            </h1>

            <p className="font-montserrat text-sm leading-relaxed max-w-md mb-12 opacity-0 animate-fade-in-up delay-200" style={{ color: "rgba(212,197,169,0.65)", animationFillMode: "forwards" }}>
              Каждое изделие — это диалог между мастером и заказчиком.
              Мы создаём мебель, которая живёт вместе с вами, отражает вашу личность
              и становится частью семейной истории.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: "forwards" }}>
              <button
                onClick={() => scrollTo("portfolio")}
                className="font-montserrat text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-gold text-black hover:opacity-90 transition-opacity"
              >
                Смотреть работы
              </button>
              <button
                onClick={() => scrollTo("contacts")}
                className="font-montserrat text-[11px] tracking-[0.2em] uppercase px-8 py-4 border text-gold hover:bg-gold hover:text-black transition-all duration-300"
                style={{ borderColor: "rgba(201,168,76,0.35)" }}
              >
                Обсудить проект
              </button>
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:block opacity-0 animate-fade-in delay-400" style={{ animationFillMode: "forwards" }}>
            <img
              src={IMG_TABLE}
              alt="Мебель"
              className="absolute top-0 right-0 w-72 h-72 object-cover"
              style={{ boxShadow: "0 0 60px rgba(201,168,76,0.1)" }}
            />
            <img
              src={IMG_CHAIR}
              alt="Кресло"
              className="absolute bottom-0 left-0 w-56 h-64 object-cover"
              style={{ boxShadow: "0 0 40px rgba(0,0,0,0.5)" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-48"
              style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }}
            />
            <div
              className="absolute bottom-16 right-8 font-cormorant text-6xl font-light"
              style={{ color: "rgba(201,168,76,0.08)", lineHeight: 1 }}
            >
              M
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
          <span className="font-montserrat text-[9px] tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>Прокрутите</span>
          <div className="w-px h-10 overflow-hidden" style={{ background: "rgba(201,168,76,0.2)" }}>
            <div className="w-full h-full" style={{ background: "var(--gold)", animation: "fadeInUp 1.5s ease infinite" }} />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-y" style={{ borderColor: "rgba(201,168,76,0.12)", background: "var(--dark-2)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div key={i} className="py-10 px-6 text-center border-r last:border-r-0" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
              <div className="font-cormorant text-4xl lg:text-5xl font-light text-gold mb-2">{stat.value}</div>
              <div className="font-montserrat text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(212,197,169,0.5)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 px-6 lg:px-12">
        <div
          ref={portfolioRef.ref as React.RefObject<HTMLDivElement>}
          className="max-w-7xl mx-auto"
        >
          <div className={`transition-all duration-1000 ${portfolioRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12" style={{ background: "var(--gold)" }} />
              <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase text-gold">Наши работы</span>
            </div>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light mb-16">Портфолио</h2>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 transition-all duration-1000 delay-200 ${portfolioRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {CATEGORIES.map((cat) => {
              return (
                <div
                  key={cat.id}
                  onClick={() => navigate(`/category/${cat.id}`)}
                  className="group relative cursor-pointer overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-400"
                    style={{ background: "rgba(14,12,10,0.55)" }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: "rgba(14,12,10,0.3)" }}
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: "var(--gold)" }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                    <Icon
                      name={cat.icon as string}
                      size={22}
                      className="transition-all duration-300 group-hover:scale-110"
                      style={{ color: "rgba(201,168,76,0.8)" } as React.CSSProperties}
                    />
                    <span
                      className="font-cormorant font-light leading-tight transition-colors duration-300 group-hover:text-yellow-200"
                      style={{
                        fontSize: "clamp(13px, 1.4vw, 18px)",
                        color: "rgba(212,197,169,0.92)",
                      }}
                    >
                      {cat.title}
                    </span>
                    <div
                      className="h-px w-0 group-hover:w-8 transition-all duration-400"
                      style={{
                        background: "var(--gold)",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 lg:px-12" style={{ background: "var(--dark-2)" }}>
        <div ref={servicesRef.ref as React.RefObject<HTMLDivElement>} className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12" style={{ background: "var(--gold)" }} />
              <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase text-gold">Что мы делаем</span>
            </div>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light mb-16">Услуги</h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center" style={{ border: "1px solid rgba(201,168,76,0.3)" }}>
                    <Icon name={s.icon as string} size={18} className="text-gold" />
                  </div>
                  <h3 className="font-cormorant text-2xl font-light">{s.title}</h3>
                </div>
                <p className="font-montserrat text-sm leading-relaxed" style={{ color: "rgba(212,197,169,0.6)" }}>{s.desc}</p>
                <div className="mt-8 flex items-center gap-3 text-gold group cursor-pointer">
                  <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase">Подробнее</span>
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 lg:px-12">
        <div ref={aboutRef.ref as React.RefObject<HTMLDivElement>} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className={`transition-all duration-1000 ${aboutRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative">
              <img
                src={IMG_WARDROBE}
                alt="Мастерская"
                className="w-full aspect-[3/4] object-cover"
                style={{ boxShadow: "30px 30px 0 rgba(201,168,76,0.06)" }}
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48" style={{ border: "1px solid rgba(201,168,76,0.2)" }} />
              <div className="absolute bottom-8 left-8 bg-gold text-black p-6">
                <div className="font-cormorant text-4xl font-semibold">12</div>
                <div className="font-montserrat text-[10px] tracking-[0.2em] uppercase">лет традиций</div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${aboutRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12" style={{ background: "var(--gold)" }} />
              <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase text-gold">О нас</span>
            </div>
            <h2 className="font-cormorant text-5xl font-light mb-8 leading-tight">
              Мы создаём <br />
              <em className="text-gold not-italic">не мебель —</em>
              <br />
              а наследие
            </h2>
            <p className="font-montserrat text-sm leading-loose mb-6" style={{ color: "rgba(212,197,169,0.65)" }}>
              Масторас основана в 2012 году. За эти годы мы реализовали более 340 проектов —
              от единственного авторского кресла до полного оснащения резиденций и бутик-отелей.
            </p>
            <p className="font-montserrat text-sm leading-loose mb-10" style={{ color: "rgba(212,197,169,0.65)" }}>
              Наш принцип: каждый предмет должен жить дольше тенденций. Мы используем только
              сертифицированную древесину, натуральные масла и фурнитуру европейского производства.
              Срок гарантии — 10 лет.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {["Массив дуба, ореха, ясеня", "Натуральная кожа и ткани", "Латунная и бронзовая фурнитура", "10 лет гарантии на каждое изделие"].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-montserrat text-sm" style={{ color: "rgba(212,197,169,0.75)" }}>{point}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("contacts")}
              className="font-montserrat text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
            >
              Познакомиться с командой
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-24 px-6 lg:px-12 text-center relative overflow-hidden" style={{ background: "var(--dark-3)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 100% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="font-cormorant text-6xl lg:text-7xl font-light mb-6">
            Готовы создать <em className="text-gold not-italic">нечто</em> особенное?
          </div>
          <p className="font-montserrat text-sm mb-10" style={{ color: "rgba(212,197,169,0.55)" }}>
            Расскажите нам о своём проекте. Первая консультация — бесплатно.
          </p>
          <button
            onClick={() => scrollTo("contacts")}
            className="font-montserrat text-[11px] tracking-[0.25em] uppercase px-12 py-5 bg-gold text-black hover:opacity-90 transition-opacity"
          >
            Начать проект
          </button>
        </div>
      </div>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 px-6 lg:px-12">
        <div ref={contactRef.ref as React.RefObject<HTMLDivElement>} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className={`transition-all duration-1000 ${contactRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12" style={{ background: "var(--gold)" }} />
              <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase text-gold">Связаться</span>
            </div>
            <h2 className="font-cormorant text-5xl font-light mb-8">Контакты</h2>

            <div className="flex flex-col gap-8">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00" },
                { icon: "Mail", label: "Email", value: "hello@masterskaya-m.ru" },
                { icon: "MapPin", label: "Адрес", value: "Москва, ул. Мастеровая, 12" },
                { icon: "Clock", label: "Время работы", value: "Пн–Пт: 10:00 – 19:00" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mt-0.5" style={{ border: "1px solid rgba(201,168,76,0.25)" }}>
                    <Icon name={c.icon as string} size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-montserrat text-[9px] tracking-[0.25em] uppercase mb-1" style={{ color: "rgba(201,168,76,0.5)" }}>{c.label}</div>
                    <div className="font-montserrat text-sm" style={{ color: "rgba(212,197,169,0.85)" }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${contactRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="p-10" style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(30,26,21,0.5)" }}>
              <h3 className="font-cormorant text-3xl font-light mb-8">Обсудить проект</h3>
              <div className="flex flex-col gap-5">
                {[
                  { label: "Ваше имя", placeholder: "Иван Петров", type: "text" },
                  { label: "Телефон", placeholder: "+7 (___) ___-__-__", type: "tel" },
                  { label: "Email", placeholder: "your@email.ru", type: "email" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase block mb-2" style={{ color: "rgba(201,168,76,0.6)" }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent px-4 py-3 font-montserrat text-sm outline-none transition-colors"
                      style={{ border: "1px solid rgba(201,168,76,0.2)", color: "rgba(212,197,169,0.85)" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")}
                    />
                  </div>
                ))}
                <div>
                  <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase block mb-2" style={{ color: "rgba(201,168,76,0.6)" }}>
                    О проекте
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Расскажите о вашей идее..."
                    className="w-full bg-transparent px-4 py-3 font-montserrat text-sm outline-none resize-none"
                    style={{ border: "1px solid rgba(201,168,76,0.2)", color: "rgba(212,197,169,0.85)" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")}
                  />
                </div>
                <button className="w-full font-montserrat text-[11px] tracking-[0.2em] uppercase py-4 bg-gold text-black hover:opacity-90 transition-opacity mt-2">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 lg:px-12 border-t" style={{ borderColor: "rgba(201,168,76,0.1)", background: "var(--dark-2)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src={LOGO_URL} alt="M" className="w-8 h-8 object-cover rounded-full opacity-70" />
            <span className="font-cormorant text-lg tracking-widest text-gold">Масторас</span>
          </div>
          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(sectionMap[link])}
                className="font-montserrat text-[9px] tracking-[0.2em] uppercase transition-colors hover:text-gold"
                style={{ color: "rgba(212,197,169,0.4)" }}
              >
                {link}
              </button>
            ))}
          </div>
          <div className="font-montserrat text-[9px] tracking-widest" style={{ color: "rgba(212,197,169,0.25)" }}>
            © 2024 Масторас
          </div>
        </div>
      </footer>
    </div>
  );
}