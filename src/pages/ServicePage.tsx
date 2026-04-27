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
    subtitle: "Изделие, которого нет больше нигде",
    desc: "Разрабатываем мебель под ваши размеры, вкус и интерьер. Никаких компромиссов — только ваше видение.",
    fullDesc: "За 9 лет работы мастерская «Масторас» убедилась: лучшая мебель — та, которую сделали именно для вас. Мы принципиально не повторяем изделия. Каждый проект начинается с нуля: обмеряем, слушаем, предлагаем. Работаем с массивом сосны, бука, ясеня и дуба — вы выбираете материал под свой бюджет и вкус. Результат — вещь, которой нет больше нигде в мире.",
    steps: [
      { step: "01", title: "Встреча и замер", desc: "Приезжаем к вам, обсуждаем задачу, снимаем точные размеры. Бесплатно и без обязательств." },
      { step: "02", title: "Эскиз и согласование", desc: "Рисуем эскиз изделия, согласовываем с вами каждую деталь — форму, породу дерева, отделку." },
      { step: "03", title: "Изготовление", desc: "Мастера «Масторас» делают изделие руками в нашей мастерской. Вы можете приехать и посмотреть в процессе." },
      { step: "04", title: "Доставка и установка", desc: "Привозим, устанавливаем, показываем как ухаживать. Даём гарантию на готовое изделие." },
    ],
    advantages: [
      "Каждое изделие делается только один раз — не повторяем",
      "Выбор породы: сосна, бук, ясень, дуб",
      "Замер и консультация — бесплатно",
      "Полный контроль на каждом этапе",
    ],
    reviews: [
      { name: "Андрей К.", date: "Март 2025", rating: 5, text: "Заказывал обеденный стол из дуба под конкретные размеры нашей кухни. Масторас сделали эскиз, согласовали всё до мелочей. Стол получился именно таким, как я представлял — массивный, тёплый, настоящий." },
      { name: "Елена В.", date: "Январь 2025", rating: 5, text: "Хотела стеллаж нестандартной формы в гостиную. Нигде не могла найти подходящего — везде предлагали стандарт. В Масторас сделали именно то, что я нарисовала на бумажке. Это дорогого стоит." },
      { name: "Дмитрий Р.", date: "Ноябрь 2024", rating: 5, text: "Заказывали шкаф-купе из ясеня в спальню. Сроки выдержали точно, качество сборки отличное. Уже год стоит — ни скрипа, ни перекосов. Рекомендую без оговорок." },
    ],
    gallery: [IMG_TABLE, IMG_CHAIR, IMG_WARDROBE],
    price: "от 80 000 ₽",
    duration: "от 4 недель",
  },
  {
    id: 1,
    icon: "Layers",
    title: "Серийные коллекции",
    subtitle: "Отработанные формы из проверенных материалов",
    desc: "Избранные изделия из постоянного каталога. Проверенные формы, лучшие материалы.",
    fullDesc: "Некоторые изделия «Масторас» стали классикой за 9 лет — их заказывают снова и снова. Это не значит, что вы получите «конвейер»: каждая вещь всё равно изготавливается вручную, после вашего заказа. Широкий выбор: от табурета и полки до лестницы и шкафа. Отделку и породу дерева — сосну, бук, ясень или дуб — выбираете сами.",
    steps: [
      { step: "01", title: "Выбор из каталога", desc: "Смотрите готовые модели, выбираете то, что подходит под ваш интерьер и задачу." },
      { step: "02", title: "Порода и отделка", desc: "Определяемся с материалом: сосна — бюджетно, бук — средний класс, ясень и дуб — премиум." },
      { step: "03", title: "Изготовление", desc: "Мастер берёт заказ в работу. Сроки короче, потому что конструкция уже отработана." },
      { step: "04", title: "Доставка", desc: "Доставляем в удобное время, помогаем установить." },
    ],
    advantages: [
      "Ассортимент от табурета до лестницы",
      "Короткие сроки — конструкция уже отработана",
      "Выбор породы дерева под любой бюджет",
      "Ручная работа, не конвейер",
    ],
    reviews: [
      { name: "Ольга М.", date: "Февраль 2025", rating: 5, text: "Брала табуреты из бука для кухни — четыре штуки. Очень довольна: добротные, тяжёлые, не скрипят. Видно, что делали с душой, а не на конвейере. Уже советую подругам." },
      { name: "Игорь С.", date: "Декабрь 2024", rating: 5, text: "Заказывал деревянную лестницу на второй этаж из каталога. Всё сделали чётко по срокам, смонтировали аккуратно. Несколько соседей уже спросили контакты мастерской." },
      { name: "Наталья Б.", date: "Октябрь 2024", rating: 4, text: "Купила полку из сосны в прихожую. Цена приятная, выглядит хорошо, всё ровно. Единственное — немного дольше ждала, чем говорили изначально, но результат того стоил." },
    ],
    gallery: [IMG_WARDROBE, IMG_TABLE, IMG_CHAIR],
    price: "от 35 000 ₽",
    duration: "от 2 недель",
  },
  {
    id: 2,
    icon: "Wrench",
    title: "Реставрация",
    subtitle: "Возвращаем жизнь деревянным вещам с историей",
    desc: "Возвращаем жизнь антикварной и дорогой мебели. Бережно, профессионально, с уважением к истории.",
    fullDesc: "Девять лет работы с деревом — это глубокое понимание материала. Мастера «Масторас» знают, как ведёт себя старый дуб и рассохшаяся сосна, как вернуть форму и цвет не потеряв характер вещи. Берёмся за антиквариат, советскую мебель, деревянные лестницы и двери — любые изделия из дерева, которым нужна вторая жизнь.",
    steps: [
      { step: "01", title: "Осмотр", desc: "Мастер смотрит изделие, оценивает объём работ и называет честную цену. Выезд на осмотр — бесплатно." },
      { step: "02", title: "Согласование", desc: "Обсуждаем с вами: что восстанавливать, что сохранить как есть. Ничего без вашего ведома." },
      { step: "03", title: "Реставрация", desc: "Работаем бережно: разбираем, укрепляем конструкцию, восстанавливаем поверхность, подбираем тонировку." },
      { step: "04", title: "Финиш и возврат", desc: "Финишное покрытие маслом или лаком, полировка. Возвращаем вещь как договорились." },
    ],
    advantages: [
      "Опыт работы с разными породами дерева — 9 лет",
      "Бережный подход: сохраняем характер вещи",
      "Беремся за любые деревянные изделия",
      "Осмотр и оценка — бесплатно",
    ],
    reviews: [
      { name: "Светлана П.", date: "Апрель 2025", rating: 5, text: "Достался дедушкин буфет — дубовый, советский, но весь рассохся и покрытие облезло. Масторас вернули ему жизнь: укрепили конструкцию, обновили поверхность, сохранили патину. Теперь стоит как центральный элемент гостиной." },
      { name: "Михаил Г.", date: "Февраль 2025", rating: 5, text: "Реставрировали деревянную лестницу в загородном доме — перила скрипели, несколько балясин шатались. Мастер сделал всё аккуратно, без лишнего шума и пыли. Лестница теперь как новая." },
      { name: "Валерия Н.", date: "Сентябрь 2024", rating: 5, text: "Привезла антикварный стул с треснувшей ножкой. Думала, не возьмутся — слишком мелкая работа. Взялись, сделали отлично, цену назвали честную. Очень приятно работать с людьми, которым не всё равно." },
    ],
    gallery: [IMG_CHAIR, IMG_WARDROBE, IMG_TABLE],
    price: "от 15 000 ₽",
    duration: "от 1 недели",
  },
  {
    id: 3,
    icon: "Home",
    title: "Комплектация интерьера",
    subtitle: "Вся деревянная мебель для пространства — от одного мастера",
    desc: "Подбираем и создаём мебель для жилых и коммерческих пространств под ключ.",
    fullDesc: "Когда нужна не одна вещь, а целое пространство — «Масторас» берётся за всё. Кухня, спальня, гостиная, лестница, прихожая — делаем в едином стиле и из одного материала, чтобы интерьер выглядел цельно. Работаем с домами, квартирами, кафе и офисами. Широкий выбор изделий — наша сильная сторона: от маленькой полки до большой лестницы, всё в одном заказе.",
    steps: [
      { step: "01", title: "Выезд и анализ", desc: "Приезжаем, смотрим пространство, обсуждаем что нужно. Составляем список изделий." },
      { step: "02", title: "Единая концепция", desc: "Подбираем породу дерева и стиль для всего интерьера — чтобы всё сочеталось между собой." },
      { step: "03", title: "Производство", desc: "Делаем все изделия в нашей мастерской. Контролируем сроки, держим вас в курсе." },
      { step: "04", title: "Монтаж под ключ", desc: "Привозим всё сразу, устанавливаем, убираем за собой. Сдаём готовый результат." },
    ],
    advantages: [
      "Один мастер — весь интерьер, единый стиль",
      "Ассортимент от табурета до лестницы",
      "Сосна, бук, ясень, дуб — под любой бюджет",
      "9 лет опыта в жилых и коммерческих проектах",
    ],
    reviews: [
      { name: "Артём Д.", date: "Март 2025", rating: 5, text: "Делали мебель для всего дома: кухня, гостиная, спальня, лестница. Масторас взяли на себя всё — от замеров до установки. Главное, что всё выглядит единым целым, один стиль, одно дерево. Результатом очень доволен." },
      { name: "Ирина К.", date: "Январь 2025", rating: 5, text: "Открывали небольшое кафе и хотели деревянный интерьер. Масторас сделали стойку, столы, полки и декоративные панели. Гости постоянно спрашивают, кто делал — всем даю контакты." },
      { name: "Сергей Ф.", date: "Октябрь 2024", rating: 5, text: "Комплектовали офис: ресепшн, переговорная, рабочие зоны. Всё из ясеня в едином стиле. Сроки выдержали, смонтировали аккуратно. Коллеги каждый день делают комплименты интерьеру." },
    ],
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

      {/* REVIEWS */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>Отзывы клиентов</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.reviews.map((r, i) => (
              <div key={i} className="p-8 flex flex-col gap-6" style={{ border: "1px solid rgba(201,168,76,0.12)" }}>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="Star" size={12} style={{ color: s < r.rating ? "var(--gold)" : "rgba(201,168,76,0.2)" } as React.CSSProperties} />
                  ))}
                </div>
                <p className="font-cormorant text-lg font-light leading-relaxed flex-1" style={{ color: "rgba(212,197,169,0.85)" }}>«{r.text}»</p>
                <div>
                  <div className="font-montserrat text-xs" style={{ color: "var(--cream)" }}>{r.name}</div>
                  <div className="font-montserrat text-[10px] mt-1" style={{ color: "rgba(212,197,169,0.35)" }}>{r.date}</div>
                </div>
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