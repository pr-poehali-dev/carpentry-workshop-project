import { useParams, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const LOGO_URL = "https://cdn.poehali.dev/files/d88fbb65-fb4c-4958-a30a-0899c387c3bc.jpg";
const IMG_TABLE = "https://cdn.poehali.dev/projects/864709f9-7445-4d2e-b018-c8baee70db89/files/26f8de09-f389-41b7-946d-d3320b3d2a5a.jpg";
const IMG_CHAIR = "https://cdn.poehali.dev/projects/864709f9-7445-4d2e-b018-c8baee70db89/files/eef3fdd5-5c6b-435b-aa14-66a3ad3ce448.jpg";
const IMG_WARDROBE = "https://cdn.poehali.dev/projects/864709f9-7445-4d2e-b018-c8baee70db89/files/02f1d428-7146-408d-bac1-9017c9d88218.jpg";

const SERVICES = [
  {
    id: 0,
    icon: "Ruler",
    title: "Индивидуальный проект",
    subtitle: "Мебель, созданная только для вас",
    desc: "Разрабатываем мебель под ваши размеры, вкус и интерьер. Никаких компромиссов — только ваше видение.",
    fullDesc: "Каждое изделие начинается с разговора. Мы слушаем, задаём вопросы, изучаем ваш интерьер и образ жизни. Затем наши дизайнеры создают проект, который идеально вписывается в пространство и отражает вашу личность. Используем только сертифицированные материалы и фурнитуру ведущих европейских производителей.",
    steps: [
      { step: "01", title: "Консультация", desc: "Бесплатная встреча с дизайнером — обсуждаем ваши пожелания, замеряем помещение." },
      { step: "02", title: "Проект и визуализация", desc: "3D-модель будущего изделия с точными размерами и выбором материалов." },
      { step: "03", title: "Производство", desc: "Изготовление в нашей мастерской под строгим контролем качества на каждом этапе." },
      { step: "04", title: "Доставка и монтаж", desc: "Профессиональная доставка и сборка с гарантией до 5 лет на всю продукцию." },
    ],
    advantages: ["Замер и выезд дизайнера бесплатно", "3D-визуализация до начала производства", "Гарантия 5 лет", "Доставка и монтаж в подарок"],
    gallery: [IMG_TABLE, IMG_CHAIR, IMG_WARDROBE],
    price: "от 80 000 ₽",
    duration: "от 4 недель",
  },
  {
    id: 1,
    icon: "Layers",
    title: "Серийные коллекции",
    subtitle: "Проверенные формы, лучшие материалы",
    desc: "Избранные изделия из постоянного каталога. Проверенные формы, лучшие материалы.",
    fullDesc: "Наши серийные коллекции — это изделия, прошедшие проверку временем и сотнями довольных клиентов. Мы периодически обновляем каталог, добавляя актуальные формы и отделки. При этом каждое изделие изготавливается только после заказа — никаких складских остатков, только свежее производство.",
    steps: [
      { step: "01", title: "Выбор из каталога", desc: "Просматриваете готовые модели и выбираете подходящую под ваш интерьер." },
      { step: "02", title: "Подбор отделки", desc: "Выбираете цвет, материал и фурнитуру из доступных вариантов для модели." },
      { step: "03", title: "Производство", desc: "Изготовление занимает меньше времени, так как конструкция уже отработана." },
      { step: "04", title: "Доставка", desc: "Доставляем в удобное для вас время с профессиональным монтажом." },
    ],
    advantages: ["Короткие сроки производства", "Фиксированная цена", "Широкий выбор отделок", "Возможность посмотреть в шоуруме"],
    gallery: [IMG_WARDROBE, IMG_TABLE, IMG_CHAIR],
    price: "от 35 000 ₽",
    duration: "от 2 недель",
  },
  {
    id: 2,
    icon: "Wrench",
    title: "Реставрация",
    subtitle: "Возвращаем жизнь ценным вещам",
    desc: "Возвращаем жизнь антикварной и дорогой мебели. Бережно, профессионально, с уважением к истории.",
    fullDesc: "Реставрация — это искусство. Мы работаем с антикварными предметами, дизайнерской мебелью и семейными реликвиями. Наши мастера имеют опыт работы с различными породами дерева, техниками отделки и стилями. Перед началом работ составляем подробный акт осмотра и согласовываем каждый шаг с владельцем.",
    steps: [
      { step: "01", title: "Осмотр и оценка", desc: "Мастер осматривает изделие, определяет объём работ и составляет смету." },
      { step: "02", title: "Согласование", desc: "Обсуждаем с вами каждый этап — что восстанавливать, что сохранить как есть." },
      { step: "03", title: "Реставрация", desc: "Бережная работа с использованием исторических техник и современных материалов." },
      { step: "04", title: "Финишная обработка", desc: "Покрытие, полировка, восстановление фурнитуры. Изделие возвращается как новое." },
    ],
    advantages: ["Работаем с антиквариатом", "Сохраняем оригинальный стиль", "Полная документация работ", "Страхование изделия в процессе"],
    gallery: [IMG_CHAIR, IMG_WARDROBE, IMG_TABLE],
    price: "от 15 000 ₽",
    duration: "от 1 недели",
  },
  {
    id: 3,
    icon: "Home",
    title: "Комплектация интерьера",
    subtitle: "Мебель для всего пространства под ключ",
    desc: "Подбираем и создаём мебель для жилых и коммерческих пространств под ключ.",
    fullDesc: "Комплексный подход для тех, кто хочет получить готовый интерьер без лишних забот. Мы берём на себя всё: от первого замера до последнего гвоздя. Работаем с квартирами, домами, ресторанами, офисами и отелями. Имеем опыт реализации проектов любой сложности и масштаба.",
    steps: [
      { step: "01", title: "Анализ пространства", desc: "Выезжаем на объект, снимаем размеры, изучаем особенности и пожелания." },
      { step: "02", title: "Концепция и спецификация", desc: "Разрабатываем общую концепцию, составляем полную спецификацию изделий." },
      { step: "03", title: "Производство", desc: "Изготавливаем все изделия параллельно для соблюдения сроков сдачи объекта." },
      { step: "04", title: "Монтаж под ключ", desc: "Полная установка, расстановка и финальная стилизация пространства." },
    ],
    advantages: ["Единый подрядчик для всей мебели", "Контроль сроков и бюджета", "Опыт в жилых и коммерческих проектах", "Авторский надзор до сдачи объекта"],
    gallery: [IMG_TABLE, IMG_WARDROBE, IMG_CHAIR],
    price: "от 500 000 ₽",
    duration: "от 8 недель",
  },
];

export default function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const serviceId = Number(id);
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--dark-1)" }}>
        <p className="font-cormorant text-3xl" style={{ color: "rgba(212,197,169,0.5)" }}>Услуга не найдена</p>
      </div>
    );
  }

  const others = SERVICES.filter((s) => s.id !== serviceId);

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-1)", color: "var(--cream)" }}>
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12"
        style={{ height: "72px", background: "rgba(14,12,10,0.92)", borderBottom: "1px solid rgba(201,168,76,0.12)", backdropFilter: "blur(12px)" }}
      >
        <button onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer">
          <img src={LOGO_URL} alt="Лого" className="h-9 w-auto object-contain" />
        </button>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-montserrat text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-70"
          style={{ color: "var(--gold)" }}
        >
          <Icon name="ArrowLeft" size={14} />
          Назад
        </button>
      </header>

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 lg:px-12" style={{ background: "var(--dark-2)" }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12" style={{ background: "var(--gold)" }} />
              <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase flex items-center gap-2" style={{ color: "var(--gold)" }}>
                <Icon name={service.icon as string} size={13} />
                Услуга
              </span>
            </div>
            <h1 className="font-cormorant text-5xl lg:text-7xl font-light mb-4">{service.title}</h1>
            <p className="font-cormorant text-2xl font-light mb-8" style={{ color: "rgba(212,197,169,0.55)" }}>{service.subtitle}</p>
            <p className="font-montserrat text-sm leading-relaxed mb-12" style={{ color: "rgba(212,197,169,0.65)", maxWidth: "520px" }}>
              {service.fullDesc}
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="font-montserrat text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: "rgba(212,197,169,0.4)" }}>Стоимость</div>
                <div className="font-cormorant text-2xl" style={{ color: "var(--gold)" }}>{service.price}</div>
              </div>
              <div>
                <div className="font-montserrat text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: "rgba(212,197,169,0.4)" }}>Срок</div>
                <div className="font-cormorant text-2xl" style={{ color: "var(--gold)" }}>{service.duration}</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-96 flex-shrink-0">
            <img src={service.gallery[0]} alt={service.title} className="w-full object-cover" style={{ aspectRatio: "4/5" }} />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>Как это работает</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {service.steps.map((step, i) => (
              <div key={i} className="relative p-8" style={{ borderLeft: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="font-cormorant text-6xl font-light mb-6" style={{ color: "rgba(201,168,76,0.12)" }}>{step.step}</div>
                <h3 className="font-cormorant text-xl font-light mb-3">{step.title}</h3>
                <p className="font-montserrat text-xs leading-relaxed" style={{ color: "rgba(212,197,169,0.5)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-20 px-6 lg:px-12" style={{ background: "var(--dark-2)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>Преимущества</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.advantages.map((adv, i) => (
              <div key={i} className="flex items-center gap-4 p-6" style={{ border: "1px solid rgba(201,168,76,0.12)" }}>
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0" style={{ border: "1px solid rgba(201,168,76,0.4)" }}>
                  <Icon name="Check" size={12} style={{ color: "var(--gold)" } as React.CSSProperties} />
                </div>
                <span className="font-montserrat text-sm" style={{ color: "rgba(212,197,169,0.8)" }}>{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>Примеры работ</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-20 px-6 lg:px-12" style={{ background: "var(--dark-2)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>Другие услуги</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {others.map((s) => (
              <div
                key={s.id}
                onClick={() => navigate(`/service/${s.id}`)}
                className="group p-8 cursor-pointer transition-all duration-300 hover:border-gold-30"
                style={{ border: "1px solid rgba(201,168,76,0.12)" }}
              >
                <div className="w-10 h-10 flex items-center justify-center mb-6" style={{ border: "1px solid rgba(201,168,76,0.3)" }}>
                  <Icon name={s.icon as string} size={18} style={{ color: "var(--gold)" } as React.CSSProperties} />
                </div>
                <h3 className="font-cormorant text-xl font-light mb-3">{s.title}</h3>
                <p className="font-montserrat text-xs leading-relaxed mb-6" style={{ color: "rgba(212,197,169,0.5)" }}>{s.desc}</p>
                <div className="flex items-center gap-2" style={{ color: "var(--gold)" }}>
                  <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase">Подробнее</span>
                  <Icon name="ArrowRight" size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
          <div className="pt-16">
            <p className="font-cormorant text-4xl font-light mb-2">Готовы начать?</p>
            <p className="font-montserrat text-sm" style={{ color: "rgba(212,197,169,0.5)" }}>Свяжитесь с нами — первая консультация бесплатно</p>
          </div>
          <button
            onClick={() => { navigate("/"); setTimeout(() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" }), 100); }}
            className="flex items-center gap-3 px-8 py-4 font-montserrat text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:gap-5 mt-16"
            style={{ background: "var(--gold)", color: "var(--dark-1)" }}
          >
            Обсудить проект
            <Icon name="ArrowRight" size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}
