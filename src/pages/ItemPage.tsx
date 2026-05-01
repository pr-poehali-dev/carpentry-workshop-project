import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
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

const ALL_IMGS = [IMG_TABLE, IMG_CHAIR, IMG_WARDROBE, IMG_TABLE, IMG_CHAIR, IMG_WARDROBE, IMG_TABLE, IMG_CHAIR, IMG_WARDROBE, IMG_TABLE];

const WORKS_BY_CATEGORY: Record<number, { id: number; img: string; photos: string[]; title: string; material: string; year: string; description?: string }[]> = {
  1: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Барная стойка «Рустик»",       material: "Массив дуба",    year: "2024", description: "Монументальная барная стойка из цельного массива дуба. Тщательно отобранные доски с выраженной текстурой, покрытые натуральным маслом." },
    { id: 2, img: IMG_CHAIR,    photos: [IMG_CHAIR, IMG_TABLE, IMG_WARDROBE, IMG_CHAIR, IMG_TABLE, IMG_WARDROBE, IMG_CHAIR], title: "Кресло для ресторана «Лофт»",  material: "Орех, Кожа",     year: "2024", description: "Кресло в стиле лофт с каркасом из массива ореха и сиденьем из натуральной кожи. Идеально для ресторанов и кафе." },
    { id: 3, img: IMG_WARDROBE, photos: [IMG_WARDROBE, IMG_TABLE, IMG_CHAIR, IMG_WARDROBE, IMG_TABLE], title: "Буфет ресторанный «Прованс»",  material: "Беленый дуб",    year: "2023", description: "Вместительный буфет в стиле прованс из беленого дуба. Множество отделений для хранения." },
    { id: 4, img: IMG_TABLE,    photos: [IMG_TABLE, IMG_WARDROBE, IMG_CHAIR, IMG_TABLE, IMG_WARDROBE, IMG_CHAIR, IMG_TABLE, IMG_WARDROBE], title: "Стол-консоль «Бистро»",        material: "Сталь, Дуб",     year: "2023", description: "Лаконичный стол-консоль с металлическим каркасом и столешницей из массива дуба." },
    { id: 5, img: IMG_CHAIR,    photos: [IMG_CHAIR, IMG_WARDROBE, IMG_TABLE, IMG_CHAIR, IMG_WARDROBE, IMG_TABLE], title: "Банкетка «Гранд»",             material: "Велюр, Массив",  year: "2023", description: "Роскошная банкетка с мягким велюровым сиденьем и ножками из массива дерева." },
    { id: 6, img: IMG_WARDROBE, photos: [IMG_WARDROBE, IMG_CHAIR, IMG_TABLE, IMG_WARDROBE, IMG_CHAIR], title: "Витрина «Шеф»",               material: "Стекло, Орех",   year: "2022", description: "Элегантная витрина со стеклянными дверцами и каркасом из массива ореха." },
  ],
  2: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Лестница «Спираль»",           material: "Дуб, Металл",    year: "2024", description: "Изящная спиральная лестница с деревянными ступенями из дуба и коваными металлическими перилами." },
    { id: 2, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Лестница «Марш»",              material: "Массив ореха",   year: "2024", description: "Классическая маршевая лестница из цельного массива ореха. Плавные линии и надёжная конструкция." },
    { id: 3, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Ограждение «Модерн»",          material: "Стекло, Дуб",    year: "2023", description: "Современное ограждение лестницы с закалённым стеклом и деревянными поручнями из дуба." },
    { id: 4, img: IMG_TABLE,    photos: ALL_IMGS, title: "Лестница «Классика»",          material: "Сосна, Ясень",   year: "2023", description: "Традиционная лестница из сосны и ясеня с резными балясинами." },
  ],
  3: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Кухня «Монолит»",              material: "Шпон дуба",      year: "2024", description: "Кухонный гарнитур в стиле минимализм с фасадами из шпона дуба. Строгие линии, функциональность." },
    { id: 2, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Кухня «Альпийская»",           material: "Массив сосны",   year: "2024", description: "Уютная кухня из массива сосны в скандинавском стиле. Тёплые оттенки натурального дерева." },
    { id: 3, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Кухня «Лофт»",                material: "МДФ, Металл",     year: "2023", description: "Кухня в стиле лофт с матовыми фасадами МДФ и металлическими акцентами." },
    { id: 4, img: IMG_TABLE,    photos: ALL_IMGS, title: "Остров «Шеф»",                 material: "Гранит, Дуб",    year: "2023", description: "Кухонный остров с гранитной столешницей и деревянным основанием из дуба." },
    { id: 5, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Кухня «Классика»",             material: "Крашеный МДФ",   year: "2022", description: "Классическая кухня с крашеными фасадами МДФ и фрезеровкой." },
    { id: 6, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Гарнитур «Скандинав»",        material: "Белый ясень",     year: "2022", description: "Светлый кухонный гарнитур из белого ясеня в скандинавском стиле." },
  ],
  4: [
    { id: 1, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Шкаф-купе «Монако»",          material: "Шпон дуба",      year: "2024", description: "Вместительный шкаф-купе с фасадами из шпона дуба и зеркальными вставками." },
    { id: 2, img: IMG_TABLE,    photos: ALL_IMGS, title: "Гардеробная «Альба»",          material: "Беленый дуб",    year: "2024", description: "Просторная гардеробная из беленого дуба с продуманной системой хранения." },
    { id: 3, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Шкаф «Прованс»",              material: "Массив сосны",   year: "2023", description: "Шкаф в стиле прованс из массива сосны с патиной и кованой фурнитурой." },
    { id: 4, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Встроенный шкаф «Минимал»",   material: "Эмаль, МДФ",     year: "2023", description: "Встроенный шкаф с глянцевыми эмалевыми фасадами. Минималистичный дизайн." },
  ],
  5: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Буфет «Дубрава»",             material: "Массив дуба",    year: "2024", description: "Классический буфет из цельного массива дуба с резными элементами." },
    { id: 2, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Буфет «Барокко»",             material: "Орех, Латунь",   year: "2023", description: "Роскошный буфет в стиле барокко из ореха с латунными ручками." },
    { id: 3, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Буфет «Кантри»",              material: "Сосна",           year: "2022", description: "Деревенский буфет из сосны с открытыми полками и закрытыми отделениями." },
  ],
  6: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Стол «Дубрава»",              material: "Орех",            year: "2024", description: "Обеденный стол из массива ореха на 8 персон. Натуральная текстура дерева." },
    { id: 2, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Стол «Форт»",                 material: "Массив",          year: "2024", description: "Массивный обеденный стол из цельного дерева с монолитным основанием." },
    { id: 3, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Стол «Овал»",                 material: "Дуб, Стекло",    year: "2023", description: "Овальный стол с дубовым основанием и стеклянной столешницей." },
    { id: 4, img: IMG_TABLE,    photos: ALL_IMGS, title: "Стол «Лофт»",                 material: "Сталь, Дуб",     year: "2023", description: "Обеденный стол в стиле лофт со стальным каркасом и столешницей из дуба." },
    { id: 5, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Раздвижной стол «Прайм»",    material: "Шпон ореха",      year: "2022", description: "Раздвижной обеденный стол с фасадом из шпона ореха. Расширяется до 240 см." },
  ],
  7: [
    { id: 1, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Стенка «Верона»",             material: "МДФ, Зеркало",   year: "2024", description: "Модульная стенка с зеркальными фасадами и подсветкой." },
    { id: 2, img: IMG_TABLE,    photos: ALL_IMGS, title: "Стенка «Классик»",            material: "Шпон дуба",      year: "2023", description: "Классическая стенка из шпона дуба с витриной и закрытыми секциями." },
    { id: 3, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Стенка «Модерн»",             material: "Лакобель",       year: "2022", description: "Современная стенка с глянцевыми лакобельными фасадами." },
  ],
  8: [
    { id: 1, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Прихожая «Шале»",             material: "Массив сосны",   year: "2024", description: "Уютная прихожая из массива сосны с вешалкой, скамьей и зеркалом." },
    { id: 2, img: IMG_TABLE,    photos: ALL_IMGS, title: "Прихожая «Лофт»",             material: "Металл, МДФ",    year: "2023", description: "Функциональная прихожая в стиле лофт с металлическим каркасом." },
    { id: 3, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Шкаф-прихожая «Минимал»",    material: "Беленый дуб",    year: "2022", description: "Встроенный шкаф для прихожей из беленого дуба с зеркальными дверями." },
  ],
  9: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Дверь «Классика»",            material: "Шпон ореха",     year: "2024", description: "Межкомнатная дверь в классическом стиле с покрытием из шпона ореха." },
    { id: 2, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Дверь «Лофт»",               material: "МДФ, Стекло",    year: "2023", description: "Современная дверь в стиле лофт с матовым стеклом и МДФ фасадом." },
    { id: 3, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Дверь «Барокко»",             material: "Массив дуба",    year: "2022", description: "Дверь в стиле барокко из цельного массива дуба с резными элементами." },
    { id: 4, img: IMG_TABLE,    photos: ALL_IMGS, title: "Раздвижная дверь «Слайд»",   material: "Стекло, Дуб",    year: "2022", description: "Раздвижная дверь с закалённым стеклом и деревянной рамой из дуба." },
  ],
  10: [
    { id: 1, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Дверь входная «Форт»",       material: "Дуб, Металл",    year: "2024", description: "Надёжная входная дверь из дуба с металлическим усилением и современной фурнитурой." },
    { id: 2, img: IMG_TABLE,    photos: ALL_IMGS, title: "Дверь «Премиум»",             material: "Массив ореха",   year: "2023", description: "Представительная входная дверь из цельного массива ореха." },
    { id: 3, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Дверь «Элит»",               material: "Шпон, Сталь",    year: "2022", description: "Элитная входная дверь с отделкой шпоном и стальным каркасом." },
  ],
  11: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Библиотека «Лондон»",         material: "Массив дуба",    year: "2024", description: "Величественная библиотека из цельного массива дуба от пола до потолка." },
    { id: 2, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Книжный шкаф «Классик»",     material: "Шпон ореха",     year: "2023", description: "Книжный шкаф в классическом стиле из шпона ореха со стеклянными дверцами." },
    { id: 3, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Стеллаж «Лофт»",             material: "Металл, Дуб",    year: "2022", description: "Открытый стеллаж в стиле лофт из металла и дерева." },
    { id: 4, img: IMG_TABLE,    photos: ALL_IMGS, title: "Библиотека «Барокко»",        material: "Красное дерево", year: "2021", description: "Роскошная библиотека из красного дерева с резными украшениями." },
  ],
  12: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Кабинет «Директор»",          material: "Массив ореха",   year: "2024", description: "Представительный кабинет из массива ореха: рабочий стол, шкафы и кресло." },
    { id: 2, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Рабочий стол «Форт»",         material: "Дуб, Сталь",     year: "2023", description: "Мощный рабочий стол с дубовой столешницей и стальными ногами." },
    { id: 3, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Кабинет «Классик»",           material: "Шпон дуба",      year: "2022", description: "Классический кабинет из шпона дуба с книжными полками и рабочей зоной." },
  ],
  13: [
    { id: 1, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Кровать «Либра»",             material: "Дуб, Кожа",      year: "2024", description: "Кровать с мягким изголовьем из натуральной кожи и основанием из дуба." },
    { id: 2, img: IMG_TABLE,    photos: ALL_IMGS, title: "Кровать «Венеция»",           material: "Массив ореха",   year: "2024", description: "Роскошная кровать из цельного массива ореха в венецианском стиле." },
    { id: 3, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Кровать «Скандинав»",         material: "Беленый дуб",    year: "2023", description: "Лаконичная кровать в скандинавском стиле из беленого дуба." },
    { id: 4, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Двуспальная «Прованс»",       material: "Сосна",           year: "2023", description: "Двуспальная кровать в стиле прованс из массива сосны." },
    { id: 5, img: IMG_TABLE,    photos: ALL_IMGS, title: "Кровать с подъёмом «Лофт»",  material: "МДФ, Ткань",     year: "2022", description: "Кровать с подъёмным механизмом и вместительным ящиком для хранения." },
  ],
  14: [
    { id: 1, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Тумба «Аква»",               material: "Массив тика",    year: "2024", description: "Влагостойкая тумба под раковину из массива тика для ванной комнаты." },
    { id: 2, img: IMG_TABLE,    photos: ALL_IMGS, title: "Зеркало «Спа»",              material: "Дуб, Стекло",    year: "2023", description: "Зеркало с деревянной рамой из дуба и встроенной подсветкой." },
    { id: 3, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Стеллаж «Ванная»",           material: "Влагостойкий МДФ", year: "2022", description: "Открытый стеллаж из влагостойкого МДФ для ванной комнаты." },
  ],
  15: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Садовый стол «Терраса»",     material: "Лиственница",    year: "2024", description: "Обеденный садовый стол из лиственницы. Устойчив к любым погодным условиям." },
    { id: 2, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Кресло «Сад»",               material: "Тик",             year: "2024", description: "Садовое кресло из тика с удобным сиденьем и подлокотниками." },
    { id: 3, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Шезлонг «Ривьера»",          material: "Акация",          year: "2023", description: "Складной шезлонг из акации для отдыха на террасе или у бассейна." },
    { id: 4, img: IMG_TABLE,    photos: ALL_IMGS, title: "Скамья «Парк»",              material: "Лиственница",    year: "2023", description: "Садовая скамья из лиственницы с вместительным ящиком для хранения." },
  ],
  16: [
    { id: 1, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Кровать «Мечта»",            material: "Береза",          year: "2024", description: "Детская кровать из берёзы с бортиками и встроенными ящиками." },
    { id: 2, img: IMG_TABLE,    photos: ALL_IMGS, title: "Стол учебный «Умник»",       material: "МДФ, Сосна",     year: "2024", description: "Регулируемый по высоте письменный стол для детей из МДФ и сосны." },
    { id: 3, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Шкаф «Звёздочка»",           material: "Краш. МДФ",      year: "2023", description: "Яркий детский шкаф из крашеного МДФ с открытыми полками." },
    { id: 4, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Кровать-чердак «Форт»",      material: "Сосна",           year: "2022", description: "Кровать-чердак из массива сосны со встроенным игровым пространством." },
  ],
  17: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Консоль «Арт»",              material: "Орех, Металл",   year: "2024", description: "Дизайнерская консоль из ореха с металлическими ножками для интерьера." },
    { id: 2, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Зеркало «Рама»",             material: "Массив дуба",    year: "2023", description: "Декоративное зеркало в широкой раме из массива дуба." },
    { id: 3, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Полка «Галерея»",            material: "Дуб, Сталь",     year: "2022", description: "Настенные полки из дуба и стали для декора и хранения." },
  ],
  18: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Беседка «Усадьба»",          material: "Лиственница",    year: "2024", description: "Просторная садовая беседка из лиственницы с резными элементами." },
    { id: 2, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Беседка «Шале»",             material: "Кедр",            year: "2023", description: "Уютная беседка из кедра в стиле шале с двускатной крышей." },
    { id: 3, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Беседка «Минимал»",          material: "Термодерево",    year: "2022", description: "Современная беседка из термодерева с открытыми стенами." },
  ],
  19: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Настил «Терраса»",           material: "Лиственница",    year: "2024", description: "Террасный настил из лиственницы с системой скрытого крепления." },
    { id: 2, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Дорожка «Парк»",             material: "Тик",             year: "2023", description: "Садовые дорожки из тика с антискользящим покрытием." },
    { id: 3, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Настил «Эко»",               material: "Термодерево",    year: "2022", description: "Экологичный настил из термодерева устойчивый к влаге и гниению." },
  ],
  20: [
    { id: 1, img: IMG_TABLE,    photos: ALL_IMGS, title: "Шпон «Классик»",             material: "Дуб",             year: "2024", description: "Натуральный дубовый шпон для отделки мебели и интерьеров." },
    { id: 2, img: IMG_CHAIR,    photos: ALL_IMGS, title: "Шпон «Орех»",                material: "Орех",            year: "2024", description: "Шпон из ореха с выраженным рисунком для премиальной отделки." },
    { id: 3, img: IMG_WARDROBE, photos: ALL_IMGS, title: "Шпон «Ясень»",               material: "Ясень",           year: "2023", description: "Шпон ясеня с волнистой текстурой — популярный материал для мебели." },
  ],
};

export default function ItemPage() {
  const { id, itemId } = useParams<{ id: string; itemId: string }>();
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const catId = Number(id);
  const category = CATEGORIES.find((c) => c.id === catId);
  const works = WORKS_BY_CATEGORY[catId] ?? [];
  const work = works.find((w) => w.id === Number(itemId));

  if (!category || !work) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--dark-1)" }}>
        <p className="font-cormorant text-3xl" style={{ color: "rgba(212,197,169,0.5)" }}>Работа не найдена</p>
      </div>
    );
  }

  const otherWorks = works.filter((w) => w.id !== work.id).slice(0, 3);
  const photos = work.photos ?? [work.img];

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
          onClick={() => navigate(`/category/${catId}`)}
          className="flex items-center gap-2 font-montserrat text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-70"
          style={{ color: "var(--gold)" }}
        >
          <Icon name="ArrowLeft" size={14} />
          {category.title}
        </button>
      </header>

      {/* HERO IMAGE */}
      <div className="pt-[72px]">
        <div className="relative w-full" style={{ height: "65vh", minHeight: "420px" }}>
          <img
            src={work.img}
            alt={work.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,12,10,0.15) 0%, rgba(14,12,10,0.7) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-px w-8" style={{ background: "var(--gold)" }} />
                <span className="font-montserrat text-[10px] tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>
                  {category.title}
                </span>
              </div>
              <h1 className="font-cormorant text-5xl lg:text-6xl font-light text-white">{work.title}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          {/* LEFT — info */}
          <div className="lg:col-span-2">
            <p className="font-montserrat text-sm leading-loose mb-12" style={{ color: "rgba(212,197,169,0.75)", maxWidth: "640px" }}>
              {work.description ?? "Изделие выполнено вручную по индивидуальному проекту в нашей мастерской."}
            </p>

            {/* GALLERY */}
            {photos.length > 1 && (
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-8" style={{ background: "var(--gold)" }} />
                  <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>
                    Фотографии · {photos.length}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {photos.map((src, i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden cursor-zoom-in"
                      style={{ aspectRatio: "4/3" }}
                      onClick={() => setLightbox(i)}
                    >
                      <img src={src} alt={`${work.title} — фото ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ background: "rgba(14,12,10,0.4)" }}>
                        <Icon name="ZoomIn" size={22} className="text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 font-montserrat text-[9px]" style={{ color: "rgba(255,255,255,0.5)" }}>{i + 1}/{photos.length}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LIGHTBOX */}
            {lightbox !== null && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center"
                style={{ background: "rgba(14,12,10,0.95)" }}
                onClick={() => setLightbox(null)}
              >
                <button
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)" }}
                  onClick={() => setLightbox(null)}
                >
                  <Icon name="X" size={18} />
                </button>
                <button
                  className="absolute left-4 lg:left-8 w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)" }}
                  onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <img
                  src={photos[lightbox]}
                  alt={work.title}
                  className="max-h-[85vh] max-w-[85vw] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  className="absolute right-4 lg:right-20 w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)" }}
                  onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
                <div className="absolute bottom-6 font-montserrat text-[10px] tracking-[0.2em]" style={{ color: "rgba(201,168,76,0.5)" }}>
                  {lightbox + 1} / {photos.length}
                </div>
              </div>
            )}

            {otherWorks.length > 0 && (
              <div className="mt-20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-8" style={{ background: "var(--gold)" }} />
                  <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>
                    Другие работы рубрики
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {otherWorks.map((w) => (
                    <div
                      key={w.id}
                      className="group relative overflow-hidden cursor-pointer"
                      style={{ aspectRatio: "4/5" }}
                      onClick={() => navigate(`/category/${catId}/item/${w.id}`)}
                    >
                      <img src={w.img} alt={w.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,12,10,0.85) 0%, transparent 60%)" }} />
                      <div className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: "var(--gold)" }} />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="font-montserrat text-[8px] tracking-[0.25em] uppercase mb-1" style={{ color: "var(--gold)" }}>{w.material} · {w.year}</div>
                        <div className="font-cormorant text-base font-light text-white">{w.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — details */}
          <div>
            <div className="sticky top-24" style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(30,26,21,0.5)" }}>
              <div className="p-8">
                <div className="flex flex-col gap-6 mb-8">
                  {[
                    { label: "Материал", value: work.material },
                    { label: "Год изготовления", value: work.year },
                    { label: "Производство", value: "Ручная работа" },
                    { label: "Гарантия", value: "5 лет" },
                  ].map((row) => (
                    <div key={row.label} className="flex flex-col gap-1" style={{ borderBottom: "1px solid rgba(201,168,76,0.08)", paddingBottom: "1.5rem" }}>
                      <div className="font-montserrat text-[9px] tracking-[0.25em] uppercase" style={{ color: "rgba(201,168,76,0.5)" }}>{row.label}</div>
                      <div className="font-montserrat text-sm" style={{ color: "rgba(212,197,169,0.85)" }}>{row.value}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => { navigate("/"); setTimeout(() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" }), 100); }}
                  className="w-full flex items-center justify-center gap-3 py-4 font-montserrat text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:opacity-90"
                  style={{ background: "var(--gold)", color: "var(--dark-1)" }}
                >
                  Заказать подобное
                  <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}