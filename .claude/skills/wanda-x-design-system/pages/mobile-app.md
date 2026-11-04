# Mobile Application page — сторінка `34730:1024724`

Статус: **сет `Mobile App` зібрано 2026-11-04** (Claude, за `rules/build-page.md` і еталоном VIP `pages/vip.md`). Старе — у чорних Section праворуч, вміст не змінювався, нічого не видалено.

## Розкладка сторінки
| x | Section | ID | Що всередині |
|---|---|---|---|
| 0 | `Mobile App` (сіра) | 80587:5693 | `Layout/3xs` 80587:5694 (x 80) + `Layout/xl` 80587:7449 (x 480), 1656×4231 |
| 2256 | `1` (сіра) | 80363:292815 | попап «How to install the App:» — `Modal/Default` 3xs + xl, **зібрав Андрей**, вміст і назву не чіпали, лише поставлено в ряд |
| 4512 | `Mobile App/Benefit` (сіра) | 80587:5689 | новий компонент `Mobile App/Benefit` 80587:5690 |
| 5517 | `Old — Pages` (чорна) | 80587:5672 | старий `Layout/xl` 1096 (зі старим `Mobile App / Content`), `.Mobile page (Debricate)` 640 і 360 |
| 8773 | `Old — Components` (чорна) | 80587:5673 | 12 старих локальних: `Mobile App / Content`, `Mob-app/banner`, `Mobile App / Banner`, `Benefits`, `Benefit card` + 3 вільні інстанси, `How to install`, `mobileapp/steps`, `qr code`, `Mob-app-Popup-content` — **не використовувати** |

Section `Design` на сторінці не було — контент і композицію взято зі старого `Mobile App / Content` (`>1096 px` і `<1024 p`).

## Композиція (зверху вниз, xl і 3xs однакові за блоками)
Банер-картинка з назвою і способами завантажити → карусель переваг (3 картки) → «General questions» (6 акордеонів, другий відкритий) → футер.

## Структура `Main Area`
```
Main Area (V, gap 0)                                  ← конфіг Layout узято копією сету VIP Club
├─ Banner  ПОЗА Container, на всю ширину, Image (absolute) фоном
│  xl:  H · gap spacing/800 · center · p 48/32
│  │  ├─ Wrapper V gap spacing/400 (Fill): Title (heading/xxl) · Segmented lg (iOS Active | Android, іконки apple / android зі Static)
│  │  │                                    · Description «Scan to download app» · Image 136 (QR) · Button Tertiary [Invert] lg «How to install»
│  │  └─ Image 360×404 (телефони)
│  3xs: V · gap spacing/600 · center: Title (heading/xl) · Image Fill (телефони) · Buttons H gap spacing/400: Button Primary lg ⬅️android «Download» + Tertiary [Invert] lg «How to install» (обидві Fill)
└─ Container  (як у VIP)
   ├─ Wrapper V gap spacing/400, center
   │  ├─ Benefits H gap spacing/400, padding-top spacing/1200 (під картинку, що виступає)
   │  │     xl: Button Tertiary sm chevron-left · Mobile App/Benefit ×3 (Fill) · Button chevron-right
   │  │     3xs: Mobile App/Benefit ×1 (Fill)
   │  └─ Navigator
   └─ Wrapper V gap 16 — Heading Secondary + Accordions V gap 8 — Accordion ×6 (Closed / **Opened** / Closed ×4)
```
Тексти акордеонів — як у старому макеті (`What is verification?`, `Title` + `Description...`, `What is Brionis?`, `What is the minimum withdrawal amount?`, `How to play on your site?`, `How quickly is the payout of winnings processed?`).

## Компонент `Mobile App/Benefit` (80587:5690)
V · center · 245 FIXED / HUG · fill `contextual.mobile-application.card.fill` · радіус `border-radius.card.general` · padding top `spacing.1600`, інші `spacing.600` · gap `spacing.200` (токен на шарі + змінна).
- `Image` (Image/Single 96, ABSOLUTE, по центру, y −38 — виступає над карткою, як в оригіналі)
- `Title` — `text/lg-stronger`, `semantic/text/default/heading`, по центру
- Еліпс-«світіння» оригіналу (вектор `core/brand-60/400`) не перенесено — векторів у ДС не робимо.

## Відхилення / відкриті питання (після збирання 2026-11-04)
| # | Де | Що | Пропозиція |
|---|---|---|---|
| 1 | `Mobile App/Benefit` у MB | `contextual.mobile-application.card.fill` = `{core.grey.700}` (core, не alias) — у MB темно-синя картка з темним текстом, текст ледь видно | перевести на alias, напр. `{semantic.background.1}` — потрібна свіжа JSON `component` MB + XON |
| 2 | `Segmented` на темному банері | неактивний сегмент «Android» зливається з фоном; `Inverted` у `Segmented` нема | додати `Inverted` у `Segmented` або підкладку — питання команді |
| 3 | Banner, фон | `Image` з фото + radial-gradient зі старого `mob-app/bg2` (градієнт без токена) | замінити на чисту картинку-фон або gradient-стиль, коли буде |
| 4 | Тексти MrBet | `Heading` «Terms and Conditions» (з копії VIP) — конектор не може змінити `heading/*` | **вручну:** обидва `Heading` → «General questions» |
| 5 | Банер xl ↔ 3xs | xl: перемикач iOS/Android + QR; 3xs: кнопки «Download» / «How to install» | так в оригіналі (QR на десктопі, пряме завантаження на мобайлі) — блоки ті самі, різна функція; підтвердити |
| 6 | Тексти кнопок | в оригіналі `Label`; поставлено «Download», «How to install» (Tertiary відкриває попап з Section `1`) | підтвердити тексти |
| 7 | Карусель на 3xs | одна картка + Navigator (в оригіналі ряд обрізався маскою мобайла) | ок за правилом «без обрізань» або 3 картки в ряд — як скажеш |
| 8 | Section `1` | назва за стандартом — суть попапу (`How to install`) | перейменувати, якщо погодиш (наш стандарт: старе / чуже не перейменовуємо без запиту) |
| 9 | Стрілки каруселі xl | в оригіналі накладались на картки (gap −16); тут — поруч, gap 16 | ок? |

## Картинки → `Image` (2026-11-04)
`Mobile App/Benefit` — у мейні порожній `Image` 96; 3 приклади над Section; у сеті картинки заливкою `Image`.
