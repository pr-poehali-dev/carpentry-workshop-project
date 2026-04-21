import { useParams, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const LOGO_URL = "https://cdn.poehali.dev/files/d88fbb65-fb4c-4958-a30a-0899c387c3bc.jpg";
const IMG_TABLE = "https://cdn.poehali.dev/projects/864709f9-7445-4d2e-b018-c8baee70db89/files/26f8de09-f389-41b7-946d-d3320b3d2a5a.jpg";
const IMG_CHAIR = "https://cdn.poehali.dev/projects/864709f9-7445-4d2e-b018-c8baee70db89/files/eef3fdd5-5c6b-435b-aa14-66a3ad3ce448.jpg";
const IMG_WARDROBE = "https://cdn.poehali.dev/projects/864709f9-7445-4d2e-b018-c8baee70db89/files/02f1d428-7146-408d-bac1-9017c9d88218.jpg";

const CATEGORIES = [
  { id: 1,  title: "Интерьерная мебель ресторана", icon: "UtensilsCrossed" },
  { id: 2,  title: "Лестницы",                     icon: "MoveUp" },
  { id: 3,  title: "Кухни",                        icon: "ChefHat" },
  { id: 4,  title: "Шкафы",                        icon: "Package" },
  { id: 5,  title: "Буфеты",                       icon: "Archive" },
  { id: 6,  title: "Обеденные столы",              icon: "Square" },
  { id: 7,  title: "Стенки",                       icon: "Layers" },
  { id: 8,  title: "Прихожие",                     icon: "DoorOpen" },
  { id: 9,  title: "Двери межкомнатные",           icon: "DoorClosed" },
  { id: 10, title: "Двери входные",                icon: "Shield" },
  { id: 11, title: "Библиотека",                   icon: "BookOpen" },
  { id: 12, title: "Кабинеты",                     icon: "Briefcase" },
  { id: 13, title: "Кровати",                      icon: "Bed" },
  { id: 14, title: "Ванные",                       icon: "Droplets" },
  { id: 15, title: "Садовая мебель",               icon: "Flower2" },
  { id: 16, title: "Детские",                      icon: "Star" },
  { id: 17, title: "Предметы интерьера",           icon: "Lamp" },
  { id: 18, title: "Беседки",                      icon: "Home" },
  { id: 19, title: "Настилы / Сад",               icon: "TreePine" },
  { id: 20, title: "Шпон",                         icon: "Palette" },
];

const WORKS_BY_CATEGORY: Record<number, { id: number; img: string; title: string; material: string; year: string }[]> = {
  1:  [
    { id: 1, img: IMG_TABLE,    title: "Барная стойка «Рустик»",       material: "Массив дуба",    year: "2024" },
    { id: 2, img: IMG_CHAIR,    title: "Кресло для ресторана «Лофт»",  material: "Орех, Кожа",     year: "2024" },
    { id: 3, img: IMG_WARDROBE, title: "Буфет ресторанный «Прованс»",  material: "Беленый дуб",    year: "2023" },
    { id: 4, img: IMG_TABLE,    title: "Стол-консоль «Бистро»",        material: "Сталь, Дуб",     year: "2023" },
    { id: 5, img: IMG_CHAIR,    title: "Банкетка «Гранд»",             material: "Велюр, Массив",  year: "2023" },
    { id: 6, img: IMG_WARDROBE, title: "Витрина «Шеф»",               material: "Стекло, Орех",   year: "2022" },
  ],
  2:  [
    { id: 1, img: IMG_TABLE,    title: "Лестница «Спираль»",           material: "Дуб, Металл",    year: "2024" },
    { id: 2, img: IMG_CHAIR,    title: "Лестница «Марш»",              material: "Массив ореха",   year: "2024" },
    { id: 3, img: IMG_WARDROBE, title: "Ограждение «Модерн»",          material: "Стекло, Дуб",    year: "2023" },
    { id: 4, img: IMG_TABLE,    title: "Лестница «Классика»",          material: "Сосна, Ясень",   year: "2023" },
  ],
  3:  [
    { id: 1, img: IMG_TABLE,    title: "Кухня «Монолит»",              material: "Шпон дуба",      year: "2024" },
    { id: 2, img: IMG_CHAIR,    title: "Кухня «Альпийская»",           material: "Массив сосны",   year: "2024" },
    { id: 3, img: IMG_WARDROBE, title: "Кухня «Лофт»",                material: "МДФ, Металл",     year: "2023" },
    { id: 4, img: IMG_TABLE,    title: "Остров «Шеф»",                 material: "Гранит, Дуб",    year: "2023" },
    { id: 5, img: IMG_CHAIR,    title: "Кухня «Классика»",             material: "Крашеный МДФ",   year: "2022" },
    { id: 6, img: IMG_WARDROBE, title: "Гарнитур «Скандинав»",        material: "Белый ясень",     year: "2022" },
  ],
  4:  [
    { id: 1, img: IMG_WARDROBE, title: "Шкаф-купе «Монако»",          material: "Шпон дуба",      year: "2024" },
    { id: 2, img: IMG_TABLE,    title: "Гардеробная «Альба»",          material: "Беленый дуб",    year: "2024" },
    { id: 3, img: IMG_CHAIR,    title: "Шкаф «Прованс»",              material: "Массив сосны",   year: "2023" },
    { id: 4, img: IMG_WARDROBE, title: "Встроенный шкаф «Минимал»",   material: "Эмаль, МДФ",     year: "2023" },
  ],
  5:  [
    { id: 1, img: IMG_TABLE,    title: "Буфет «Дубрава»",             material: "Массив дуба",    year: "2024" },
    { id: 2, img: IMG_WARDROBE, title: "Буфет «Барокко»",             material: "Орех, Латунь",   year: "2023" },
    { id: 3, img: IMG_CHAIR,    title: "Буфет «Кантри»",              material: "Сосна",           year: "2022" },
  ],
  6:  [
    { id: 1, img: IMG_TABLE,    title: "Стол «Дубрава»",              material: "Орех",            year: "2024" },
    { id: 2, img: IMG_CHAIR,    title: "Стол «Форт»",                 material: "Массив",          year: "2024" },
    { id: 3, img: IMG_WARDROBE, title: "Стол «Овал»",                 material: "Дуб, Стекло",    year: "2023" },
    { id: 4, img: IMG_TABLE,    title: "Стол «Лофт»",                 material: "Сталь, Дуб",     year: "2023" },
    { id: 5, img: IMG_CHAIR,    title: "Раздвижной стол «Прайм»",    material: "Шпон ореха",      year: "2022" },
  ],
  7:  [
    { id: 1, img: IMG_WARDROBE, title: "Стенка «Верона»",             material: "МДФ, Зеркало",   year: "2024" },
    { id: 2, img: IMG_TABLE,    title: "Стенка «Классик»",            material: "Шпон дуба",      year: "2023" },
    { id: 3, img: IMG_CHAIR,    title: "Стенка «Модерн»",             material: "Лакобель",       year: "2022" },
  ],
  8:  [
    { id: 1, img: IMG_CHAIR,    title: "Прихожая «Шале»",             material: "Массив сосны",   year: "2024" },
    { id: 2, img: IMG_TABLE,    title: "Прихожая «Лофт»",             material: "Металл, МДФ",    year: "2023" },
    { id: 3, img: IMG_WARDROBE, title: "Шкаф-прихожая «Минимал»",    material: "Беленый дуб",    year: "2022" },
  ],
  9:  [
    { id: 1, img: IMG_TABLE,    title: "Дверь «Классика»",            material: "Шпон ореха",     year: "2024" },
    { id: 2, img: IMG_WARDROBE, title: "Дверь «Лофт»",               material: "МДФ, Стекло",    year: "2023" },
    { id: 3, img: IMG_CHAIR,    title: "Дверь «Барокко»",             material: "Массив дуба",    year: "2022" },
    { id: 4, img: IMG_TABLE,    title: "Раздвижная дверь «Слайд»",   material: "Стекло, Дуб",    year: "2022" },
  ],
  10: [
    { id: 1, img: IMG_WARDROBE, title: "Дверь входная «Форт»",       material: "Дуб, Металл",    year: "2024" },
    { id: 2, img: IMG_TABLE,    title: "Дверь «Премиум»",             material: "Массив ореха",   year: "2023" },
    { id: 3, img: IMG_CHAIR,    title: "Дверь «Элит»",               material: "Шпон, Сталь",    year: "2022" },
  ],
  11: [
    { id: 1, img: IMG_TABLE,    title: "Библиотека «Лондон»",         material: "Массив дуба",    year: "2024" },
    { id: 2, img: IMG_WARDROBE, title: "Книжный шкаф «Классик»",     material: "Шпон ореха",     year: "2023" },
    { id: 3, img: IMG_CHAIR,    title: "Стеллаж «Лофт»",             material: "Металл, Дуб",    year: "2022" },
    { id: 4, img: IMG_TABLE,    title: "Библиотека «Барокко»",        material: "Красное дерево", year: "2021" },
  ],
  12: [
    { id: 1, img: IMG_TABLE,    title: "Кабинет «Директор»",          material: "Массив ореха",   year: "2024" },
    { id: 2, img: IMG_CHAIR,    title: "Рабочий стол «Форт»",         material: "Дуб, Сталь",     year: "2023" },
    { id: 3, img: IMG_WARDROBE, title: "Кабинет «Классик»",           material: "Шпон дуба",      year: "2022" },
  ],
  13: [
    { id: 1, img: IMG_CHAIR,    title: "Кровать «Либра»",             material: "Дуб, Кожа",      year: "2024" },
    { id: 2, img: IMG_TABLE,    title: "Кровать «Венеция»",           material: "Массив ореха",   year: "2024" },
    { id: 3, img: IMG_WARDROBE, title: "Кровать «Скандинав»",         material: "Беленый дуб",    year: "2023" },
    { id: 4, img: IMG_CHAIR,    title: "Двуспальная «Прованс»",       material: "Сосна",           year: "2023" },
    { id: 5, img: IMG_TABLE,    title: "Кровать с подъёмом «Лофт»",  material: "МДФ, Ткань",     year: "2022" },
  ],
  14: [
    { id: 1, img: IMG_WARDROBE, title: "Тумба «Аква»",               material: "Массив тика",    year: "2024" },
    { id: 2, img: IMG_TABLE,    title: "Зеркало «Спа»",              material: "Дуб, Стекло",    year: "2023" },
    { id: 3, img: IMG_CHAIR,    title: "Стеллаж «Ванная»",           material: "Влагостойкий МДФ", year: "2022" },
  ],
  15: [
    { id: 1, img: IMG_TABLE,    title: "Садовый стол «Терраса»",     material: "Лиственница",    year: "2024" },
    { id: 2, img: IMG_CHAIR,    title: "Кресло «Сад»",               material: "Тик",             year: "2024" },
    { id: 3, img: IMG_WARDROBE, title: "Шезлонг «Ривьера»",          material: "Акация",          year: "2023" },
    { id: 4, img: IMG_TABLE,    title: "Скамья «Парк»",              material: "Дуб, Металл",    year: "2023" },
  ],
  16: [
    { id: 1, img: IMG_CHAIR,    title: "Кровать «Замок»",             material: "Сосна",           year: "2024" },
    { id: 2, img: IMG_TABLE,    title: "Письменный стол «Юниор»",    material: "Береза",          year: "2024" },
    { id: 3, img: IMG_WARDROBE, title: "Шкаф «Радуга»",              material: "МДФ, Эмаль",     year: "2023" },
    { id: 4, img: IMG_CHAIR,    title: "Кровать-чердак «Капитан»",   material: "Сосна, Металл",  year: "2023" },
    { id: 5, img: IMG_TABLE,    title: "Детская горка «Старт»",      material: "Фанера, Дуб",    year: "2022" },
  ],
  17: [
    { id: 1, img: IMG_TABLE,    title: "Консоль «Фьюжн»",            material: "Орех, Латунь",   year: "2024" },
    { id: 2, img: IMG_WARDROBE, title: "Каминный портал «Гранд»",   material: "Массив дуба",    year: "2023" },
    { id: 3, img: IMG_CHAIR,    title: "Зеркало «Антик»",            material: "Дуб, Золото",    year: "2022" },
  ],
  18: [
    { id: 1, img: IMG_TABLE,    title: "Беседка «Шале»",             material: "Лиственница",    year: "2024" },
    { id: 2, img: IMG_WARDROBE, title: "Беседка «Классика»",         material: "Сосна, Поликарбонат", year: "2023" },
    { id: 3, img: IMG_CHAIR,    title: "Беседка «Минимал»",          material: "Металл, Дерево", year: "2022" },
  ],
  19: [
    { id: 1, img: IMG_WARDROBE, title: "Террасная доска «Натур»",   material: "Лиственница",    year: "2024" },
    { id: 2, img: IMG_TABLE,    title: "Настил «Декор»",             material: "Тик",             year: "2023" },
    { id: 3, img: IMG_CHAIR,    title: "Садовая дорожка «Парк»",    material: "Акация, Гравий",  year: "2022" },
  ],
  20: [
    { id: 1, img: IMG_TABLE,    title: "Шпон «Американский орех»",   material: "Орех",            year: "2024" },
    { id: 2, img: IMG_WARDROBE, title: "Шпон «Европейский дуб»",    material: "Дуб",             year: "2024" },
    { id: 3, img: IMG_CHAIR,    title: "Шпон «Берёза»",              material: "Берёза",          year: "2023" },
    { id: 4, img: IMG_TABLE,    title: "Шпон «Ясень»",              material: "Ясень",            year: "2023" },
  ],
};

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const catId = Number(id);
  const category = CATEGORIES.find((c) => c.id === catId);
  const works = WORKS_BY_CATEGORY[catId] ?? [];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--dark-1)" }}>
        <p className="font-cormorant text-3xl" style={{ color: "rgba(212,197,169,0.5)" }}>Рубрика не найдена</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-1)", color: "var(--cream)" }}>
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12"
        style={{ height: "72px", background: "rgba(14,12,10,0.92)", borderBottom: "1px solid rgba(201,168,76,0.12)", backdropFilter: "blur(12px)" }}
      >
        <button onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer">
          <img src={LOGO_URL} alt="Лого" className="h-9 w-auto object-contain" style={{ filter: "brightness(1.05)" }} />
        </button>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-montserrat text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-70"
          style={{ color: "var(--gold)" }}
        >
          <Icon name="ArrowLeft" size={14} />
          Назад
        </button>
      </header>

      {/* HERO */}
      <section className="pt-40 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase text-gold flex items-center gap-2">
              <Icon name={category.icon as string} size={13} />
              Портфолио
            </span>
          </div>
          <h1 className="font-cormorant text-5xl lg:text-7xl font-light mb-6">{category.title}</h1>
          <p className="font-montserrat text-sm leading-relaxed" style={{ color: "rgba(212,197,169,0.55)", maxWidth: "480px" }}>
            Избранные работы нашей мастерской — каждое изделие создано вручную по индивидуальному проекту.
          </p>
        </div>
      </section>

      {/* WORKS GRID */}
      <section className="pb-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {works.length === 0 ? (
            <div className="py-32 text-center">
              <Icon name="Clock" size={32} className="mx-auto mb-6 opacity-20" style={{ color: "var(--gold)" } as React.CSSProperties} />
              <p className="font-cormorant text-3xl font-light" style={{ color: "rgba(212,197,169,0.35)" }}>Скоро здесь появятся работы</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {works.map((work) => (
                <div
                  key={work.id}
                  className="group relative overflow-hidden cursor-pointer"
                  style={{ aspectRatio: "4/5" }}
                >
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-400"
                    style={{ background: "linear-gradient(to top, rgba(14,12,10,0.9) 0%, rgba(14,12,10,0.2) 60%, transparent 100%)" }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: "rgba(14,12,10,0.35)" }}
                  />
                  {/* gold top border */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: "var(--gold)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="font-montserrat text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--gold)" }}>
                      {work.material} · {work.year}
                    </div>
                    <div className="font-cormorant text-xl font-light text-white">{work.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 pt-16 flex flex-col md:flex-row items-center justify-between gap-8" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
            <div>
              <p className="font-cormorant text-3xl font-light mb-2">Нужно что-то подобное?</p>
              <p className="font-montserrat text-sm" style={{ color: "rgba(212,197,169,0.5)" }}>Обсудим ваш проект и подберём оптимальное решение</p>
            </div>
            <button
              onClick={() => { navigate("/"); setTimeout(() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" }), 100); }}
              className="flex items-center gap-3 px-8 py-4 font-montserrat text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:gap-5"
              style={{ background: "var(--gold)", color: "var(--dark-1)" }}
            >
              Связаться с нами
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
