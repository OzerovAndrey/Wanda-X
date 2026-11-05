# Build page — як зібрати наступну продуктову сторінку

Єдиний файл, потрібний для збірки сторінки (разом із `rules/core.md`). Еталонні сторінки (`pages/*.md`) **не читати** — їхній стандарт уже тут. `pages/<page>.md` відкривати лише для сторінки, яку зараз збираєш / правиш, і лише якщо він існує.

## 1. Перед збиранням
1. **Свіжий обхід файлу** (компоненти міняються щодня): `figma.root.children` → інвентар `scripts/inventory.js` (батчі по 6–7 сторінок, паралельні `use_figma`, read-only) → порівняти з `references/component-registry.md` → оновити реєстр + `reports/inventory-<дата>.md`. Без цього не збираємо.
2. **Вивчити сторінку**: верхній рівень (Section, `.Desktop/.Mobile page (Debricate)`, локальні компоненти) + скриншоти → список станів (список · деталі · архів · деталі завершеного · порожній · попапи).
3. **Джерело контенту і структури:**
   - є Section `Design` → **тільки вона** (картинки не переносимо, якщо не сказано); старе — довідка;
   - те саме для Section `Preview` / `… pages preview` (remote-превʼю свіжого дизайну) — це `Design`, звіряти **кожен** стан до збирання; саму Section не змінювати — ні назви, ні кольору, ні вмісту; позиція — одразу за сетами (`rules/core.md`);
   - інакше — звірити з **усіма** старими прикладами (`.Desktop page`, `.Mobile page`, `…/content`) і взяти найповнішу структуру.
4. **Композиція — як в оригіналі**: що першим (банер-картинка чи `Heading Primary`), що на всю ширину, що по центру, порядок блоків, варіанти кнопок. Типових блоків, яких нема в оригіналі, не додаємо.
5. **Старі локальні компоненти не використовуємо** навіть як джерело шарів — збираємо чистий новий `<Сторінка>/<Блок>` у власній сірій Section (див. §5). Чужий компонент як «носій» тексту — заборонено.
6. Для кожного блоку — чим він стає: інстанс ДС (за свіжим інвентарем) / продуктова картка з `↳ Cards` / новий компонент сторінки. Нема компонента — у «Відкриті питання».

## 2. Розкладка сторінки
- Нові сети — **сірі** `#BBBBBB`, з **`x = 0, y = 0`**, в рядок, **600 px** між ними: стани сторінки → попапи → нові компоненти сторінки.
- Референс (`Design`, `Preview`) — одразу за сетами (600 px), далі `Old — …`; вміст, назву, колір референсу не чіпаємо.
- Старе — **праворуч**, у **чорних** Section `#000000` (обведення чорне 10 %, радіус 2), `y = 0`, 600 між ними, порядок: `Old — Design` → `Old — Pages` (спершу десктопи) → `Old — Popups` → `Old — Components`. Всередині — ряд, padding 80, 200 між вузлами, по верху; накладені елементи — зі збереженим зсувом.
- Переносити у Section: `figma.group([n], section)` + `figma.ungroup(g)` (обходить MrBet Black).
- Попапи, які Андрей сам поклав на сторінку, — не чіпаємо, лишаємо як є.
- Вміст старих вузлів не змінюємо, нічого не видаляємо.

## 3. Сет = Section на один стан
| | |
|---|---|
| Назва | `<Сторінка> — <Стан>` (`Tournaments`, `Tournament — Active`, `Tournaments — Empty`); попап — суть без префікса (`Bonus`, `How to install`) |
| Вміст | `Layout/3xs` (x 80, y 80) + `Layout/xl` (x 480, y 80) |
| Розмір | ширина `80+320+80+1096+80 = 1656`; висота `80 + max(h) + 80` — **перераховувати після кожної правки** |
| Попап | картинка в шапці (слот `↳ 💠`) — порожній `Image/Single` того ж розміру, сама картинка — над Section сету; `Modal/Default` (сторінка `↳ Modal`) `Breakpoint=3xs` (x 80, екран 320×640, вікно знизу) + `Breakpoint=xl` (x 480, 1096×768, по центру). `Header`, `↳ Title`, `↳ Description`, `Closable` = true, решта false. Довгий вміст — `Max. height = True`; CTA — у футері (`Footer = true`, слот `↳ 💠`) |

**Layout**
- `Layout/3xs`: `TabBar = true`, `Footer = true`; `Header/3xs Authorized=True`, `TabBar Breakpoint=3xs`, `Footer/3xs Banner=true`.
- `Layout/xl`: `Footer = true`; `Sidebar/Desktop Authorized=True, Collapsed=False`, `Header/xl Authorized=True`, `Footer/xl Banner=true`.

**Дерево `Main Area`**
```
Main Area
├─ Banner            ← банер сторінки (картинка з текстом) — ПОЗА Container, на всю ширину, обидва брейкпоінти
└─ Container         V · FILL/HUG · xl p 16/32 gap 32 · 3xs p 16/16 gap 24 · maxWidth 1200 (навмисний)
   └─ Wrapper ×N     блок: V gap 16 · FILL/HUG
      ├─ Heading     Variant=Secondary, Breakpoint=lg | 3xs (заголовок сторінки — Primary)
      ├─ <ряд>       іменований за вмістом: Cards / Levels / Benefits / Accordions …
      └─ Button      «Show more»: Secondary md, Icon ➡️ = true (chevron-down) — якщо є в оригіналі
```
**Ingame** (ігрове вікно) — без `Layout/*`: сет = `Ingame/Layout` `Breakpoint=3xs` (x 80) + `xl` (x 480), вміст — у слот `Panel`, активний пункт рейки — `State=Active`; деталі — `pages/ingame.md`.

**Десктоп і мобайл — однаковий контент** (ті самі блоки, той самий порядок); різниця лише в розкладці (колонки, ряд / стовпчик, кількість карток).

## 4. Типові блоки
| Що | Чим збирати |
|---|---|
| Банер сторінки (картинка + текст) | фрейм `Banner` V, center/center, gap 16, p 48/32 (xl) · 32/16 (3xs), FILL/HUG → `Image` (`Slot=False`, ABSOLUTE STRETCH, чисте фото **без фейдерів**) + `Title` + `Description` (`semantic/text/default-invert/*`) + CTA `Button Primary lg` |
| Промо-банер (компонент) | `Banner` 78647:15753: xl `device=lg` у Container; 3xs `device=xs` поза Container, першим у `Main Area` |
| Hero деталей (турнір / лотерея) | `Wrapper` fill `semantic/background/1`, радіус `border-radius/global/lg`, p 16; xl H gap 32 по центру, 3xs V gap 24 → `Image/Multi` + колонка тексту (назва, приз, `Time Date=True, Highlighted=True`) + `Button Primary/Secondary lg`. Однаковий на всіх сторінках деталей |
| Перемикач розділів | `Tabs Variant=Navigation` + `Tabs/Item — Navigation` |
| Другий рівень вкладок | `Tabs Variant=Default` + `Tabs/Item — Default` |
| Багато вкладок на 3xs | `Wrapper` H gap 24: `Tabs Navigation` лише з активною + `Dropdown` «More» (Trigger `Button Neutral md, Icon ➡️`, Body `Dropdown/Item`) |
| Посилання «All» | `Heading All=true` |
| Карусель | ряд **сам у своєму рядку на всю ширину**, картки **Fill**, + Navigator; суміжні блоки — під нею; на xl карток більше |
| Сітка карток | `Wrapper` GRID: xl 2 кол. gap 16 · 3xs 1 кол. gap 8 · `Card / …` FILL |
| Сітка ігор | `Wrapper` GRID: xl 5 кол. gap 8 · 3xs 2 кол. gap 8 · `Thumb/Default` FILL |
| Лідерборд / мій прогрес | **як в оригіналі**: світлі картки — `Table/Leaderboard Variant=Card`; темна зебра — `Variant=Striped`, рядки `Inverted=True`, `Plain`/`Stripe` по черзі. Мій прогрес — той самий стиль, без Head. Поточний гравець — `State=Selected` + текст `semantic/text/brand/primary`. Місце — `List/Bullet` або `Image` (медаль / кубок), не слот. Таблиці на сторінці — в одному стилі |
| Списки умов / правил | `List/Item — Default Ordered=False` |
| Терміни / FAQ | `Accordion` у ряді `Accordions` V gap 8 |
| Теги | `Tag`, ряд gap 8 |
| Назад до списку | `Button Variant=Text, Size=md` + TEXT |
| Порожній стан | `Empty` |
| Заголовок + опис | `Title` + `Description` прямо в батьківському фреймі |

## 5. Новий компонент сторінки
- Назва `<Сторінка>/<Блок>` (`VIP Club/Card`, `Hall of Fame/Prize`, `Lottery/Ticket`), сіра Section праворуч від сетів сторінки, правила — `rules/core.md` (токени, Inverted, без text-властивостей, без обгорток).
- **Токени — спершу готові токени сторінки**: перед прив'язкою знайти, що стояло на старих локальних компонентах цієї сторінки (`contextual.<сторінка>.*` — напр. `contextual.vip-club.card.*`, paint styles з тими ж назвами) і поставити їх на ті самі ролі. Чужий продуктовий компонент / токен (`Gradient/Welcome`, `contextual.deals.*`) як фон — заборонено.
- Не плодити компоненти сторінки: якщо блок = компонент ДС + текст (прогрес із підписом тощо) — інстанс ДС + TEXT у `Wrapper`, без нового `<Сторінка>/<Блок>`.
- Фон-картинка / градієнт — absolute, розміри Fixed за оригіналом.
- Картинки — порожній `Image/Single` у мейні, приклади — над Section; інстанси в лейаутах картинок не мають — повністю наслідують компонент (`rules/core.md` → Компоненти).

## 6. Швидкий старт
Є схожий новий сет на іншій сторінці → `clone()` його `Layout/*` + group/ungroup у свою Section (переносить MrBet-тексти й override-и Heading) і міняти вміст за оригіналом. Після clone — перевірити тексти вкладок / кнопок (override-и злітають) і прибрати залишки на корені сторінки.

**Заголовки з текстом**: конектор не пише MrBet → клонувати готовий TEXT `heading/*` з потрібним текстом зі старих макетів цієї сторінки (clone + group/ungroup, Fill, висота — перевірити) замість `Heading` з чужим текстом. Сети не клонувати з інших сторінок.

**MrBet Black** (`heading/*`) конектор не завантажує: `appendChild` падає → `group/ungroup` або placeholder `Spinner` 47531:173652 + `swapComponent`. Тексти `Heading` змінити не можна — перелічити у відповіді, що вписати вручну. Деталі — `references/figma-pitfalls.md` → MrBet.

## 7. Після збирання (чекліст)
- [ ] Блоки `Container` у 3xs і xl збігаються.
- [ ] Section — 80 px з усіх боків.
- [ ] `clipsContent = false` на своїх фреймах у `Main Area`.
- [ ] Нема `minWidth` / `minHeight` на своїх фреймах (часто з'являються після group/ungroup).
- [ ] Нема зайвих обгорток (фрейм з одним дочірнім, `Wrapper` у `Wrapper` того ж напрямку); рядки — по центру по висоті; Fill там, де праворуч вільно.
- [ ] Аудит: `scripts/layout-audit.js` (вектори, тексти без стилю, hardcode-заливки, remote-інстанси, фрейми без AL) = 0, крім погоджених винятків.
- [ ] Скриншот кожного сету, звірка зі старим блок за блоком — контент не загублено.
- [ ] Перевірка в MB і XON.
- [ ] `pages/<page>.md` (коротко: ID сетів, нові компоненти, відхилення, питання) + рядок у `CHANGELOG.md` + коміт `page(<page>): …`.
