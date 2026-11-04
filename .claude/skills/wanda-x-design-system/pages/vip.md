# Loyalty (VIP Club) — сторінка `33498:684868`

Статус: **сет `VIP Club` (стан Authorized) зібрав Андрей 2026-11-04 — еталон**; сет `VIP Club — Guest` зібрав Claude 2026-11-04 (копія еталона, див. нижче).

**Порядок сторінки (з 2026-11-04):** `VIP Club` x 0 → `VIP Club — Guest` x 2256 → компоненти `VIP Club/Card|Benefit|Level` і попап Section `1` x 4512 → чорні `Old — …` від x 6232 (усе праворуч від Guest зсунуто на +2256, вміст не змінювався).

## Розкладка сторінки після впорядкування
Старі вузли складено в **чорні** Section (`#000000`, правило 2026-11-04), 80 padding / 80 між вузлами, 600 між Section. Нові сети — сірі (`#BBBBBB`). Вміст вузлів не змінювався, нічого не видалено.

| Section | ID | Що всередині |
|---|---|---|
| `Old — Components` | 80498:53357 | 14 старих локальних компонентів: `VIP content`, `header/Header user`, `slider statuses`, `[M] Vip-club card`, `glow`, `benefit_card`, `benefits_section`, `terms`, `bullet-lvl-rewards`, `Content-congrats-popup`, `dialog modal content`, `slider dots`, `dots`, `lvl prize` — **не використовувати**, лише довідка (`rules/build-page.md`) |
| `Old — Authorized` | 80498:53372 | `.Desktop page (Debricate)` 1920 / 1288 / 1096 + `.Mobile page (Debricate)` 640 / 412 / 360 — стан з прогресом гравця (`Your Status`, бали, `Level`, `… left`) |
| `Old — Guest` | 80498:53379 | ті самі 6 брейкпоінтів — стан без прогресу (блок `Level Rewards`) |
| `Old — Card states` | 80498:53386 | 2 фрейми `Desktop page` (слайдер карток статусів: з `Your Status` і без) + 4 інстанси `[M] Vip-club card` |
| — (без Section, на корені сторінки) | — | `Modal/Default` 3xs «Level Rewards» (80367:306926, x 26764 y 0) і старий `Popup` (62484:18326, поруч праворуч) — **Андрей попросив лишити як були, без Section; не чіпати** |

## Композиція старого макета (зверху вниз)
Hero-банер «Welcome to … loyalty program» (картинка з текстом, без Heading Primary) → слайдер карток статусів + точки рівнів → блок нагород рівня (3 картки + CTA) → Terms / FAQ (акордеони) → футер.

## Еталон Андрея — сет `VIP Club` (Section 80510:16829, x 0 y 0, 1656×5334)
`Layout/3xs` 80510:18555 (x 80) + `Layout/xl` 80510:20649 (x 480), як у стандарті. Нові сети сторінки стоять **ліворуч** від чорних старих (x 0 … 3368), компоненти — сірими Section праворуч від сету (x 2256), попапи — Section `1` під ними.

### Структура `Main Area` (xl / 3xs однакові за блоками)
```
Main Area (V, gap 0, padding-bottom 48 | 32)
├─ Banner   V · center · gap 16 · p 48/32 (xl) | 32/16 (3xs) · FILL/HUG   ← ПОЗА Container, на всю ширину
│  ├─ Image  Type=Default, Slot=False — фон (absolute)
│  ├─ Title        «Welcome to / Winzaro Loyalty Program»
│  ├─ Description  «Play your favorite slots, earn points, and climb the Loyalty…»
│  └─ Button Primary lg «Earn points»
└─ Container  V · gap 32 | 24 · p 16/32 | 16/16
   ├─ Wrapper (V gap 16, center) — Heading Secondary «Statuses and levels»
   │  ├─ Cards   H gap 16 — VIP Club/Card ×3 (Completed · Current · Locked) на xl; на 3xs лише Current
   │  └─ Levels  H gap 8 — VIP Club/Level ×7 (перший Active)
   ├─ Wrapper (V gap 16, center) — Heading Secondary «The higher your level, the better your rewards»
   │  ├─ Benefits  H gap 16 (xl) | V gap 8 (3xs) — VIP Club/Benefit ×3 (VIP Rewards · Points · Extras)
   │  └─ Button Primary lg «Go to Game Hall» (по центру)
   └─ Wrapper (V gap 16) — Heading Secondary «Terms and Conditions»
      └─ Accordions  V gap 8 — Accordion ×4 (другий Opened)
```
Прийоми, які взяти за стандарт:
- **Банер сторінки — фрейм `Banner` прямо в `Main Area`, поза `Container`** (і на xl, і на 3xs): `Image` фоном + `Title` + `Description` + CTA, все по центру. Без Heading Primary — як у старому макеті.
- Блок = `Wrapper` V gap 16 з `Heading Secondary` + **іменований ряд** (`Cards`, `Levels`, `Benefits`, `Accordions`) — ряди мають назву за вмістом, не `Wrapper`.
- Продуктові компоненти — нові, чисті, кожен у своїй сірій Section праворуч від сету: `VIP Club/Card` (`Type = Completed | Current | Locked`, Boolean `Progress`), `VIP Club/Benefit`, `VIP Club/Level` (`State = Default | Active`). Старі локальні не використано.

### Компоненти
| Компонент | ID | Анатомія |
|---|---|---|
| `VIP Club/Card` (set) | 80510:16797 | V gap 12 p 24, 296 FIXED/HUG: `Gradient` фон → `Level` (124, ілюстрація статусу) → `Status` (Caption «Your Status | Completed | Status» + Title) → `Progress` (рядок Level `Label`/`Value`, `Progress Line md`, рядок `Points`/`Left`) → Divider → `Exch. rate` → Divider → `Cashback` → Divider → `Button Tertiary lg` |
| `VIP Club/Benefit` | 80510:16813 | V gap 8 p 24, 244 FIXED/HUG: `Gradient` фон → `Title` → `Description` → `Image` 148 |
| `VIP Club/Level` (set) | 80510:16828 | 56×56 FIXED: `Image/Single` 40 |

### Що в еталоні ще не так (знайдено при перегляді 2026-11-04, Figma не чіпав)
| # | Де | Що | Як за правилами |
|---|---|---|---|
| 1 | 3xs `Cards` | лише одна картка (Current); у старому мобайлі — карусель з Completed / Current / Locked | однаковий контент: 3 картки (ряд-карусель на всю ширину) |
| 2 | 3xs кнопки | тексти `Label` у банері й під Benefits | «Earn points», «Go to Game Hall», як на xl |
| 3 | Section `VIP Club` | `Layout/3xs` 5222 + 80 зверху → знизу лише 32 | Section 80 з усіх боків → висота 5382 |
| 4 | 3xs `Main Area` | `clipsContent = true` | Clip off |
| 5 | ряди `Cards`, `Levels`, `Benefits` | `counterAxisAlignItems = MIN` | по центру по висоті; `Benefit` різної висоти (250 / 266) — вирівняти (Fill по висоті або однаковий текст) |
| 6 | 3xs `Levels` | 7×56 не влазить у 288 → перенос у 2 рядки (wrap) | перевірити зі старим мобайлом (там один ряд) |
| 7 | Section `VIP Club/Level` | загублений інстанс `Level` 80510:16820 поверх Section | у Section лише мейн-компоненти |
| 8 | `Container` | gap / padding без змінних | як у Tournaments — уточнити, чи це норма |
| 9 | стан **Guest** | не зібрано: у старому `Old — Guest` замість прогресу блок «Level Rewards» | окремий сет `VIP Club — Guest` |

## Сет `VIP Club — Guest` (Section 80617:22161, x 2256 y 0, 1656×5308) — 2026-11-04
Джерело — Section Андрея `Old` (80613:45785: `Desktop page` 80613:42929, `Mobile page` 80613:42930). `Layout/3xs` 80617:22162 · `Layout/xl` 80617:22163.
Копія `VIP Club`; відмінності від Authorized — лише картки статусів:
- `VIP Club/Card` `Progress = False` (без рівня, смуги, балів); xl — `Locked · Current · Locked`, 3xs — `Current`; Caption у всіх — «Status» (як в оригіналі).
- Кнопка картки — `Button Tertiary lg` «Level Rewards», `⬅️ Icon` = `gift-filled` (Static).
- Решта (Banner, Levels, Benefits + «Go to Game Hall», Terms and Conditions) — як у `VIP Club`.
Виправлено в Guest відносно еталона (за правилами): 3xs тексти кнопок «Earn points» / «Go to Game Hall», `Main Area` 3xs Clip off, ряди `Cards` / `Levels` / `Benefits` по центру, Section 80 з усіх боків. Аудит `layout-audit.js` — 0.

### Питання по Guest
| # | Що | Пропозиція |
|---|---|---|
| G1 | У `VIP Club/Card` нема нейтрального типу: `Locked` має замок на медалі, `Completed` — галочку, а в гостьовому оригіналі медалі без позначок | додати `Type = Default` (без позначки, без підсвітки) — для бічних карток гостя |
| G2 | Хедер в оригіналі гостя — з балансом і Deposit (як Authorized) | лишив `Authorized=True`; якщо гість = незалогінений — переключити `Header/* Authorized=False`, `Sidebar` без бонусів |
| G3 | 3xs — одна картка (як у твоєму еталоні); в оригіналі — карусель | як вирішиш для еталона (#1 вище) — так само тут |
| G4 | Section `Old` (80613:45785) названа без `— <що>` | перейменувати в `Old — Guest (new)` або злити з `Old — Guest` — скажи |
| G5 | Зауваження #3–#5 у твоєму сеті `VIP Club` (Section 80 знизу, Clip, ряди) — у Guest уже виправлено | виправити й у `VIP Club`? |
