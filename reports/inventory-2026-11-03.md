# Інвентар компонентів Wanda X — 2026-11-03

Повний обхід розділів `Components` · `Atoms` · `Molecules` · `Organisms` · `Cards` · `[???]` (лише читання, `page-rebuild.md` §0). Формат: `id Назва [варіантів] {властивості}`.

## Що змінилось з минулого обходу (2026-10-21 / точкові до 2026-11-02)

**Сторінки**
- `↳ Controls` розділено на `↳ Checkbox`, `↳ Radio`, `↳ Toggle`; `↳ Chip & Tag` → `↳ Chip` + `↳ Tag`; `↳ Timer` → `↳ Time`; `↳ Banner` → `↳ Slider/Banner - Ден`; `↳ Notifications, Cookies, Toast` → `↳ Notification`; `Quick pay` → `↳ Fast Click Payment`.
- Нові: `↳ Segmented`, `↳ Popover 🔴` (знову в Atoms), `↳ Cards` в Organisms.
- Зникли зі списку: `↳ Anchor`, `↳ Switcher`.
- На більшості сторінок Atoms/Molecules з'явилась друга Section `<Компонент> — Specs` (розкладка властивостей для фронтів).
- Позначки: `💜` — сторінки, зроблені з Ozerov (Datepicker, Filter & Sorting, Table, Scrollbar, Progress, Calendar, Tournaments).

**Компоненти (нове / змінене)**
| Компонент | Що |
|---|---|
| `Popup/Default` 79637:25109 | **новий** єдиний попап: `Breakpoint = xl \| 2xs \| 3xs`, `Centered`, `Max. height`, слоти Body/Labels/Slots, Header/Footer/Hero/Back … (12v). Нашої збірки `Popup` 79597:7480 / `Drawer` / `Modal` на сторінці вже немає — лише `Originals` |
| `Notification/System` 79448:3428 (4v Variant), `Notification/Sticky`, `/Cookie`, `/Default`, `/Onboarding` | **нові** — замість Toast / Cookies |
| `Segmented` 78970:888 + `Segmented/Item` 78970:859 (Size lg\|md\|sm × State) | **нові** |
| `Status` 47052:2374 | один набір 42v: `Variant × Style (Text\|Weak\|Strong) × Size` (раніше `Status/Badge` + `Status/Indicator`) |
| `Time` 77857:445144 | колишній Timer, 48v: `Date × Size (md\|sm\|xs) × Background × Inverted × Highlighted` |
| `Checkbox` / `Radio` / `Toggle` | ті самі набори, кожен на своїй сторінці; на `↳ Radio` лежить продуктовий `shop price` |
| `Chip` 46859:45827 | +`Badge`, swap іконок |
| `Tag` 78589:294536 | State Default\|Hover\|Disabled, іконки ліворуч/праворуч |
| `Divider` 78008:324202 | 4v: `Label` (Boolean) × `Variant Primary\|Secondary` × `Vertical` |
| `Empty` 78315:449009 | `Card × Breakpoint (3xs\|xl)` + Title/Description/Button/Img |
| `Input` 78201:1158 + **`TextArea`** 79337:85827 | TextArea новий |
| `List/Item — Default` 47820:58472 (`Ordered`), `List/Bullet` 30276:434400 | |
| `Thumb/Default` 46535:3315, **`Thumb/Simple`** 79583:6580, **`Thumb/Provider`** 79546:81688, **`Thumb/Random`** 79539:77322, **`Thumb/Button`** 79539:81619 | нові під-набори Thumb |
| `Heading` 67251:370203 | `Variant Primary\|Secondary × Breakpoint lg\|3xs`, Booleans All/Icon/Arrows/Badge/Info/Filter/Amount/Slot |
| `Section` 78117:335001 | `Breakpoint xl\|3xs`, слоти `Layout` і фон `↳ 💠`, Boolean `Back`; використовується лише для Winning-now на Home |
| `Tabs` 77999:315447, `Tabs/Item — Default` 46834:368349, `Tabs/Item — Navigation` 77999:315583 | Size `Md\|Lg` (з великої — порушує `naming.md`) |
| `Layout/3xs … /3xl` (9 компонентів) | слот `Main Area`, Booleans `Footer`, `TabBar` (до lg) |
| `Header/3xs\|xl\|2xl\|2xs` | `Header/2xs` має `Property 1 / Property 2` — неймінг |
| `Account` 78065:174908 (слот Menu), `Account/Balance`, `/Notification`, `/Loyalty program` | |
| `Sidebar/Desktop` 66988:241428, `/Mobile`, `/Item`, `/Banner`, `/Mini banner` | |
| `FastClickPayment` 28031:69022 | 5v Variant |
| `↳ Cards` | +`Card / Achievement`, `Card / Achievement Rewards`, `Gradient/*` (Winning-now, Ticket, Welcome, Achievement…), `Back/Special` |
| `Progress` 79804:4510 (наша збірка) | поруч ще лежать старі `Progres/Step`, `Progress/Linear`, `Progress/Steps`, `Progress line`, `Registration progress` |

## Повний список (стисло)

**Components:** Slider/Banner — `Banner` 78285:719 (Device), `Banner` 78647:15753 (device xs\|lg, слот), `Slider` 78127:161267 + legacy (`[M] Banner-Component`, `Banner / Shop_Lootboxes_Calendar`, `Banner Achievements`, `Strip_Header`, `Banner RP mob`, `Header_Strip`, `Homepage / Banner`). Datepicker 78766:265 + `/Date` `/Month` `/Week day` `/Select`. Filter & Sorting — `Tabs-sort` 78821:132, `Filter-sort/Item` 78821:89, `Gamehall / Open-thumb-provider`. Input, TextArea, `Input/⬅️ Addon`, `Input/Addon ➡️`. Table — `Table`, `/Row`, `/Leaderboard`, `/Leaderboard/Row`, `/History`, `/History/Row`, `/Cell`, `/Head/Cell` + 4 Section Originals. Scrollbar 79774:18.

**Atoms:** Accordion 33405:879002 · Badge 46851:515 · Button 27590:27154 (240v) · Checkbox 78315:499124 · Chip · Divider · Dropdown 77787:316988 + `/Item` · Empty · Image/Single, /Multi · Label 46854:7959 (84v) · Link 29703:172586 · List · Profile-menu (+/Item, /Subitem) · Navigator 78112:227231 · Notification/* · Popup/Default + Originals · Radio · Popover 47130:6906 (🔴) · Progress · Segmented · Spinner 47531:173652 · Status · Tag · Time · Toggle 78315:499274 · Tooltip 27803:186739.

**Molecules:** Heading · Navigation 67415:182038 + `/Item` · Tabs · Thumb/* · FastClickPayment.

**Organisms:** Account · Balance details 49367:47288 · Footer/3xs…/xl + App/Help banner · Header/* + `Header/Balance`, `Header/Welcome bonus` · Layout/* · Sidebar/* · Section · TabBar 46941:882007 + `/Item` · Cards (17 наборів, 9 компонентів).

**[???]:** `Bonus cards`, `icon` (Property 1 = conditions…), `Top Lottery`, `dialog modal content`, `anchor states/v2`, `anchors`, `Text wrap Lottery/Tournaments` — legacy.
