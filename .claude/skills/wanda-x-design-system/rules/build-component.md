# Build component — перескласти / виправити компонент

Разом із `rules/core.md` цього достатньо. Токени — `rules/tokens.md`. Еталон для анатомії — `Anchor` (`references/components/anchor.md`) і Ready for dev (`references/reference-components.md`, лише якщо треба повторити конкретну анатомію).

## 1. Підготовка
1. Пробний запис (створити й видалити прямокутник). `read-only mode` → попросити Can edit для акаунта конектора, не обходити.
2. **Розібрати оригінал (read-only)**: дерево, auto layout, розміри, `boundVariables` (remote?), text styles, override-и в інстансах, звідки іконки. Типові знахідки: чужі змінні, override розміру / кольору чужого компонента, кешований колір ≠ токен (копія йде за токеном, розбіжність — у питання), іконки не зі Static.
3. **Аналіз використань** (перед злиттям / оптимізацією): `getInstancesAsync()` → сторінка, власник, override-и, фон-предок (чи потрібен Inverted). Пастки — `references/figma-pitfalls.md` → Аналіз використань.

## 2. Збірка
- **Точна копія** оригіналу: розміри, елементи, стани; нова Section **праворуч**, оригінали — Section `Originals — <назва> (не використовувати)`.
- Під-компонент — власний (`Anchor/Item`), з власними токенами; батьківський — інстанси під-компонента. Чужий компонент з override-ами не перевикористовувати.
- Іконки — інстанс зі `Static — Icons`, шар `Icon`, розмір і колір — токенами. Після swap: шар назад у `Icon`, колір вектора прив'язати заново (Static має свою сіру заливку).
- Text — text style + колір `semantic.text.*`.
- `resize()` скидає sizing у FIXED → повернути `primaryAxisSizingMode = 'AUTO'`, звірити розміри з оригіналом.
- Прозорий стан — шар без fill, без токена.
- Картинка в компоненті — порожній `Image/Single`; приклади — над Section (`rules/core.md` → Компоненти).

## 3. Властивості (порядок: `Variant → Size → State → решта`)
| Тип | Ключ / значення |
|---|---|
| Variant | Title Case: `Variant=Primary`, `State=Hover` |
| `Size` | `xl \| lg \| md \| sm \| xs` малими; варіанти **створювати одразу від `xl` до `xs`** (Figma бере порядок створення) |
| Binary | `True \| False` (`Inverted=False`) |
| Breakpoint | `3xs \| sm \| lg \| xl \| 2xl` — лише якщо різна **структура**; різна ширина → один компонент з FILL |
| Boolean | `⬅️ Icon`, `Icon ➡️`, `Show`, `Item #1…#N` |
| Swap | `↳ 💠 Icon left` |
| Slot | `Items`, `Trigger`, `Body`, `Head`, `Rows`, `Cells`, `Content`, `Details` |
| Text | **не використовується** |

- State: `Default | Hover | Active | Selected | Disabled` (+ `Error`, `Filled`, `Focus` у формах); `Open` = активний + розкритий. Інтерактивним — мінімум Default / Hover / Active|Selected / Disabled.
- **Інверсія — тільки через `Theme = Inverse`** (колекція змінних `Theme`, сети `default` / `inverse`): компонент прив'язаний до alias-змінних, на темному фоні режим `Inverse` ставиться на контейнер / слот. Властивість `Inverted`, `State=Invert`, `Variant=…[Invert]`, окремий набір — не робимо. Inverse ≠ бренд XON.
- Список однакових пунктів — **SLOT** (`componentNode.createSlot()`), gap токеном на слоті. Фіксовані різні вкладені елементи — exposed instances + Boolean `Item #N`, шар з тією ж назвою.
- Таблиці: `Variant = Divider | Card | Striped | Panel`, рядок — `Stripe | Plain`.
- Наявні TEXT-властивості при перескладанні прибрати, зберігши тексти в інстансах.

## 4. Неймінг (коротко; повний список заборон і опечаток — `references/naming.md`)
- Набір — однина, Title Case, під-компонент через `/`, різновид через ` — ` (`Tabs/Item — Default`). Службовий базовий — `.Input/Base` + `hiddenFromPublishing`; застарілий — `Deprecated/<Name>`.
- Заборонено: snake_case, lowercase, `[M]`, `[BASE]`, `(Cashbox)`, `mob/web` у назві, назви фіч, `Property 1`, `yes|no`, `on|off`.
- Шари: `Icon`, `Label`, `Content`, `Footer`, `Wrapper`; шар під властивість = назва властивості; порядок шарів = візуальний.

## 5. Section
Сіра `#BBBBBB` (скрипт `scripts/section-create.js`), назва = компонент, 80 px від країв і між компонентами, стовпчиком, основний зверху; у наборі 16 / 16; лише мейни, без нотаток / превʼю / загублених інстансів.

## 6. Перевірка (Definition of Done — усе ✅, інакше не Ready)
- [ ] Section за правилами, на сторінці нема сміття, один набір на сутність, `componentPropertyDefinitions` без помилок, не продуктовий.
- [ ] Неймінг: набір, властивості, 0 дефолтних назв шарів.
- [ ] Auto layout на 2+ дітях; absolute лише оверлеї / маски; ресайз — текст переноситься, нічого не обрізається.
- [ ] 0 hardcode fill/stroke (крім масок), 0 текстів без стилю, 0 effects без стилю; radius / height / padding / gap / icon size — токени.
- [ ] Лише свої компонентні + `semantic.*`; 0 `core.*` поза тінями / градієнтами; 0 чужих змінних; токени Token Studio на шарах (Inspect без ⬡).
- [ ] MB і XON, Theme Default і Inverse: тимчасово `setExplicitVariableModeForCollection` на Section → скриншот → повернути.
- [ ] Іконки зі Static через `↳ 💠`; вкладені елементи — інстанси ДС.
- [ ] `description` у Figma порожній.

## 7. Документація і здача
- `references/components/<c>.md` за `references/components/_template.md` (анатомія з node ID, властивості, токени MB / XON, рішення, питання).
- JSON — `tokens/<c>.{mb,xon}.component.json` (передача — `rules/tokens.md`).
- Рядок у `references/component-registry.md`, `CHANGELOG.md`, коміт `component(<c>): …`.
- Відкриті питання (контраст, вибір іконки) — команді; Ready for dev ставить команда.
