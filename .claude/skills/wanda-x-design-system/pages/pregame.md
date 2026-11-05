# Сторінка `↳Pregame +` — зібрано 2026-11-05

Page id `32048:193957`. Сторінка гри перед запуском (pregame / unlogged game page) + попапи.

**Pregame — тільки мобільна версія**: сет = лише `Layout/3xs` / `Modal/Default 3xs` (x 80, y 80), Section 480 × (80+h+80); xl не збираємо.

## Джерело
Чорні Section-референси (від команди, вміст / назви / колір **не чіпати**; стоять у ряду одразу за сетами, y 0): `Content` 80892:65514 (компоненти `Pregame/Components`), `Pregame` 80892:65698 (мобільні сторінки), `Pregame modal window` 80892:65635, `Game not found` 80892:65638. Десктопного макета нема — сторінка лише мобільна.

## Розкладка (y = 0, 600 між)
| x | Section | ID |
|---|---|---|
| 0 | `Pregame` (Guest, Registration) | 80902:1641 |
| 1080 | `Pregame — Authorized` (Top up account) | 80907:5333 |
| 2160 | `Pregame — Unavailable` (Thumb `State=Unavailable` + Notice «unavailable in your region») | 80907:8482 |
| 3240 | `Pregame — Not found` (`Empty` + рекомендації + See all games) | 80907:9911 |
| 4320 | `Pregame — Game unavailable` (`Empty`) | 80907:11407 |
| 5400 | попап `Pregame` (`Modal/Default` 3xs) | 80908:10740 |
| 6480 | попап `Game not found` (Footer: See all games) | 80908:10986 |
| 7560 → | референси: `Pregame` 80892:65698 → `Pregame modal window` 80892:65635 → `Game not found` 80892:65638 → `Content` 80892:65514 | |
| 16989 → | `Old — Pages` 80900:1641 (2 `.Mobile page`) · `Old — Popups` 80900:1644 (порожній `Modal/Default` TITLE) · `Old — Components` 80900:1646 (7 локальних `Pregame_*`) | |

## Структура `Main Area` (3xs)
```
Main Area
├─ Game        V · SPACE_BETWEEN · center · FILL × Fixed 456 · p 16/16 — поза Container
│  ├─ Image    Image/Single Slot=False, absolute STRETCH (фон гри, порожній)
│  ├─ Header   H gap 8: Title (heading/lg, default-invert) + Favourite (Button Text [Invert] md, Label=False, star)
│  ├─ Thumb    Thumb/Default (Unavailable — State=Unavailable)
│  └─ Actions  V gap 8 · FILL: Button Primary lg FILL (Registration | Top up account) або Notice · Demo (Button Text [Invert] md)
└─ Container   стандарт
   ├─ Wrapper  Title (heading/md) + Description
   └─ Wrapper  Title + Description + List (3 × List/Item — Default Ordered=False) + Description
```
Not found / Game unavailable: `Container` → `Empty` (Card=False) [+ `Wrapper` center: `Heading` Secondary + `Cards` (Thumb ×3, FILL) + Button Secondary md «See all games»].
Notice — `Wrapper` fill `semantic.fill.default`, радіус `border-radius.global.md`, p 16 + `Description`. Нових компонентів і токенів нема. Прив'язки — колекція `Theme`.

## Вручну (MrBet Black — конектор не змінює)
| Де | Зараз | Має бути |
|---|---|---|
| `Pregame — Not found` › `Empty` Title | Choose your welcome bonus | Game not found |
| `Pregame — Not found` › `Heading` | Title | We also recommend |
| `Pregame — Game unavailable` › `Empty` Title | Choose your welcome bonus | Game unavailable |
| попап `Pregame` Title | Title | Sweet Bonanza 1000 |
| попап `Game not found` Title | Title | Game not found |

## Відкрите
1. Варіанти «Sign up / Top up + Play in app» (застосунок) і «Default horizontal» зібрано лише в попапі `Pregame`; на сторінці — окремий стан потрібен?
2. Breadcrumbs у SEO-тексті (`content=2`) — компонента в ДС нема (сторінка `Breadcrumbs` прибрана), не додано.
3. Логотип провайдера в попапі — лише текст `Evoplay` (логотипа в ДС нема).
4. Header на всіх станах — `Authorized=True` за стандартом; для Guest-стану потрібен `Authorized=False`?
5. Картинки-приклади (фон гри, лупа, слот-машина) над Section не викладені — у референсі вони remote.
