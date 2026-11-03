# Перезбирання продуктових сторінок (лейаутів)

Правило Андрея 2026-11-03. Читати перед будь-якою роботою з продуктовою сторінкою (`Tournaments`, `Lottery +`, `Races +`, `Profile +` …).

## 0. ОБОВ'ЯЗКОВО перед кожною наступною сторінкою — свіжий обхід файлу

Компоненти команда допрацьовує щодня, тому **перед тим як будувати будь-яку наступну сторінку**:

1. **Список сторінок** (`figma.root.children`) — нові / перейменовані / зниклі сторінки, позначки (`💛` оновила команда, `💜` зроблено з Ozerov, `🔴` в роботі).
2. **Інвентар компонентів** — для кожної сторінки розділів `Components` / `Atoms` / `Molecules` / `Organisms` / `Cards`: усі `COMPONENT_SET` і окремі `COMPONENT`, їхні властивості й Section, у якій вони лежать. Скрипт — нижче (батчі по 6–7 сторінок, паралельні виклики `use_figma`, лише читання).
3. **Порівняти з `component-registry.md`** — що з'явилось, що змінило властивості, що переїхало в `Originals`. Оновити реєстр і записати інвентар у `reports/inventory-<дата>.md`.
4. **Вивчити сторінку, яку будуємо** (§2) — і тільки потім збирати.

Без цього кроку сторінку не будуємо: інакше збираємо зі старих наборів, які вже замінено.

```js
// Інвентар: підставити IDS сторінок (6–7 на виклик)
const IDS = ['…'];
const out = [];
for (const pid of IDS) {
  const page = await figma.getNodeByIdAsync(pid);
  await page.loadAsync();
  const sets = page.findAllWithCriteria({ types: ['COMPONENT_SET'] });
  const comps = page.findAllWithCriteria({ types: ['COMPONENT'] }).filter(c => !c.parent || c.parent.type !== 'COMPONENT_SET');
  const top = n => { let c = n; while (c.parent && c.parent.type !== 'PAGE') c = c.parent; return c.name; };
  const props = o => { try { return Object.entries(o.componentPropertyDefinitions).map(([k, v]) => k.split('#')[0] + (v.type === 'VARIANT' ? '=' + v.variantOptions.join('|') : ':' + v.type[0])).join('; '); } catch (e) { return 'ERR'; } };
  out.push({ page: page.name,
    sections: page.children.filter(n => n.type === 'SECTION').map(s => s.name),
    sets: sets.map(s => `${s.id} ${s.name} [${s.children.length}v] {${props(s)}} @${top(s)}`),
    comps: comps.map(c => `${c.id} ${c.name} {${props(c)}} @${top(c)}`) });
}
return out;
```

## 1. Нічого не ламаємо — нова збірка праворуч

- Старі макети, `(Debricate)`-сторінки, локальні набори на сторінці — **не чіпаємо і не видаляємо**.
- Нову збірку ставимо **праворуч від усього, що є на сторінці** (на одному рівні `y = 0`), стандартними сетами (§3).
- Перейменувати / видалити старе — тільки на прямий запит Андрея.

## 2. Як вивчати сторінку перед збиранням

1. Верхній рівень сторінки: Section, старі `.Desktop page (Debricate)` / `.Mobile page (Debricate)`, локальні `COMPONENT`/`COMPONENT_SET` (продуктові блоки сторінки).
2. Скриншоти старих макетів — які екрани/стани є (список, деталі, архів, порожній стан, попапи).
3. **Старі локальні компоненти сторінки не використовуємо** (навіть як джерело шарів) — дивимось на них і збираємо чистий новий компонент поруч із новою збіркою, у власній сірій Section, за правилами ДС (рішення Андрея 2026-11-03, `Hall of Fame/Prize`). Для кожного блоку — чим він стає в новій збірці: інстанс ДС (за свіжим інвентарем) / продуктова картка з `↳ Cards` / тимчасовий фрейм `Wrapper` з токенізованими властивостями (якщо компонента ще нема — записати в «Відкриті питання»).
4. Список станів сторінки → список Section (§3).
5. **Перед збиранням і після — звіряти зі старим оригіналом блок за блоком** (є заголовок чи ні, який варіант кнопки, що по центру): робимо так само, як в оригіналі, лише нашими компонентами і правилами. Типові блоки стандарту (§3) не додаємо, якщо їх немає в оригіналі (урок Hall of Fame: зайвий `Heading` над таблицею, `Show more` Secondary замість Primary lg).
5a. **Композицію беремо зі старого макета**, а не лише з правил: що стоїть першим (назва сторінки `Heading Primary` чи велика картинка з текстом), що на всю ширину, що по центру, порядок блоків. Стандарт — про збірку (компоненти, Wrapper, відступи), а не привід міняти вигляд сторінки (урок Hall of Fame 2026-11-03).
6. Записати вивчене в `references/pages/<page>.md` (структура як у `pages/tournaments.md`).

## 3. Стандарт збірки (еталони — `Tournaments - Ozerov 💜` → `pages/tournaments.md`, `Calendar - Ozerov 💜` → `pages/calendar.md`)

**Сет = Figma Section на один стан сторінки**
| | |
|---|---|
| Назва | `<Сторінка> — <Стан>`: `Tournaments`, `Tournament — Active`, `Tournaments — Archived`, `Tournaments — Empty` |
| Стиль | як у компонентів (`section-layout.md`): заливка `#BBBBBB`, обведення чорне 10 % 1 px |
| Вміст | два інстанси: **`Layout/3xs`** (x 80) і **`Layout/xl`** (x 480), обидва `y = 80` |
| Відступи | 80 від країв, 80 між мобайлом і десктопом → ширина `80 + 320 + 80 + 1096 + 80 = 1656`; висота по вмісту + 80 |
| Розкладка сетів | в рядок, `y = 0`, **600 px** між сетами; спершу стани сторінки, потім попапи |
| Сет попапу | та сама Section: `Popup/Default Breakpoint=3xs` (x 80, екран 320×640, вікно знизу) + `Popup/Default Breakpoint=xl` (x 480, екран 1096×768, вікно по центру). Назва — суть попапу без префікса сторінки (`Bonus`, `Bonus + Signup`). Довгий вміст — `Max. height = True`; CTA — у футері (`Footer = true`, слот `↳ 💠`) |

**Layout**
- `Layout/3xs`: `TabBar = true`, `Footer = true`; `Header/3xs Authorized=True`, `TabBar Breakpoint=3xs`, `Footer/3xs Banner=true`.
- `Layout/xl`: `Footer = true`; `Sidebar/Desktop Authorized=True, Collapsed=False`, `Header/xl Authorized=True`, `Footer/xl Banner=true`.
- Вміст — у слот `Main Area` одним фреймом **`Container`** (VERTICAL, FILL/HUG):
  - xl: padding 16 / 32, gap між блоками **32**;
  - 3xs: padding 16 / 16, gap **24**.

**Блок сторінки** — фрейм `Wrapper` (VERTICAL, gap **16**, FILL/HUG):
- заголовок — `Heading` `Variant=Secondary`, `Breakpoint=lg | 3xs` (заголовок сторінки — `Variant=Primary`);
- контент (текст зі стилем `text/*`, таблиця, сітка карток);
- «Show more» — `Button Variant=Secondary, Size=md, Icon ➡️ = true` (chevron-down).

**Типові блоки**
| Що | Чим збирати |
|---|---|
| Перемикач розділів (Active / Archived) | `Tabs Variant=Navigation` + `Tabs/Item — Navigation` |
| Другий рівень вкладок (фільтр у розділі) | `Tabs Variant=Default` + `Tabs/Item — Default` |
| Багато вкладок на мобайлі | `Wrapper` H gap 24: `Tabs Navigation` лише з активною + `Dropdown` «More» (Trigger `Button Neutral md, Icon ➡️`, Body — `Dropdown/Item`) |
| Промо-банер сторінки | `Banner` (78647:15753) `device=lg` у Container; на 3xs `device=xs` **поза Container**, першим у `Main Area`, на всю ширину |
| Посилання «All» біля заголовка | `Heading All=true` |
| Списки умов / правил | `List/Item — Default Ordered=False` |
| Назад до списку | `Button Variant=Text, Size=md` + текст (див. відхилення в `pages/tournaments.md`) |
| Hero (картинка + назва + приз + дати + CTA) | `Wrapper` (fill + radius змінними) → `Image/Multi` + текст + `Time Date=True, Highlighted=True` + `Button Primary/Secondary lg` |
| Теги | `Tag`, ряд gap 8 |
| Сітка ігор | `Wrapper` **GRID**: xl 5 колонок (gap 8), 3xs 2 колонки (gap 8) з `Thumb/Default` FILL |
| Сітка карток | `Wrapper` **GRID**: xl 2 колонки (gap 16), 3xs 1 колонка (gap 8) з `Card / …` FILL |
| Лідерборд / мій прогрес | `Table/Leaderboard Variant=Card`, рядки `Table/Leaderboard/Row Variant=Card, Inverted=False`, поточний гравець `State=Selected`; місце — `List/Bullet` або `Image` (медаль / кубок), не слот (рішення 2026-11-03: як на Hall of Fame; Striped на темному більше не використовуємо) |
| Порожній стан | `Empty` |
| Заголовок + опис (будь-де) | два TEXT прямо в батьківському фреймі: **`Title`** (один шар, перенос через Auto height) і **`Description`**, без обгорток (`naming.md` → Текстові конструкції) |
| Банер-картинка з текстом | фрейм `Banner` (V, center/center, FIXED висота, clip) → `Image/Single Slot=False` ABSOLUTE STRETCH з fill-фото (**без фейдерів**) + заголовок + опис по центру, кольори `semantic/text/default-invert/*` (`pages/hall-of-fame.md`) |

**Загальні правила лейауту** — `layouts.md` (інстанси ДС, auto layout, `Wrapper` для обгорток, тексти зі стилем, кольори змінними, іконки зі `Static — Icons`, перевірка в MB і XON).

## 3a. Шрифт MrBet Black — як збирати через конектор (перевірено 2026-11-03)
Конектор не має шрифту `MrBet Black` (стилі `heading/*`). Будь-який `appendChild` / `insertChild` вузла, де є такий текст (`Heading`, `Layout/*` з футером, копія заголовка), падає з `unloaded font "MrBet Black"`, а створений інстанс лишається на корені сторінки — **прибирати залишки**.
- **Перенести вузол з MrBet у інший фрейм можна:** `const g = figma.group([node], targetParent, index); figma.ungroup(g);` — group/ungroup не має перевірки шрифту (перевірено 2026-11-03). Так само для копії: `node.clone()` → group/ungroup у потрібний фрейм. Змінювати сам текст (characters, textAutoResize, стиль) — все одно не можна; `fills`, `layoutSizing*` — можна.
- Обхід: вставити тимчасовий інстанс без MrBet (`Spinner` 47531:173652) у потрібне місце і зробити `swapComponent(<Layout/xl | Heading …>)` — swap шари не переносить і працює. Після swap: `unlockAspectRatio()`, `resize(w, main.height)`, `FILL` / `FIXED` (інакше береться квадрат Spinner).
- Слот `Main Area` у такого Layout можна чистити і наповнювати вмістом без MrBet; `Heading` усередині — теж через placeholder + swap **після** того, як контейнер уже в слоті.
- Override `constraints` в інстансі заборонений («cannot be overridden in an instance»); hug-висоту інстансу — через `primaryAxisSizingMode = 'AUTO'`. Накладання блоків (подіум на картинку) — від'ємний `itemSpacing` в auto layout.
- **Не використовувати чужий / продуктовий компонент як «носій» тексту** — Андрею потрібна проста збірка (рішення 2026-11-03). Якщо текст MrBet потрібен, а створити його не можна: від'єднати (`detachInstance`) і прибрати зайве, решту (перенести TEXT у потрібний фрейм) — вручну, назвати в відповіді.
- Тексти `Heading` (дефолт `Title`) і будь-які `heading/*` конектор змінити не може — у відповіді перелічити, що вписати вручну.

## 4. Після збирання
- Скриншот кожного сету; звірка зі старим макетом (нічого не загублено з контенту).
- Аудит збірки (вектори, тексти без стилю, hardcode-заливки, remote-інстанси) — скрипт у `pages/tournaments.md` → Аудит.
- `pages/<page>.md`: що зібрано, ID сетів, відхилення, питання. Рядок у журнал `SKILL.md`, коміт `page(<page>): …`.
