# Сторінка `Calendar - Ozerov 💜` — еталон: сторінка + попапи

Page id `31077:261828` · вивчено 2026-11-03 · доповнює `pages/tournaments.md`; узагальнено в `page-rebuild.md` §3.

## Що на сторінці

**Нова збірка** — 4 сети в ряд, `y = 0`, 600 px між ними (x 0 / 2256 / 4512 / 6768):

| Сет | id | Мобайл (x 80) | Десктоп (x 480) | Що показує |
|---|---|---|---|---|
| `Calendar — All` | 80216:74001 | `Layout/3xs` 80216:74013 | `Layout/xl` 80216:74025 | банер, дні тижня, вкладка All: Lottery / Tournaments / Bonuses / News по 2 картки + «All» |
| `Calendar — Bonuses` | 80238:140084 | `Layout/3xs` 80238:140085 | `Layout/xl` 80238:140086 | вкладка Bonuses: 5 `Card / Bonus` |
| `Bonus` | 80238:163499 | `Popup/Default Breakpoint=3xs` 80238:159293 | `Popup/Default Breakpoint=xl` 80238:159142 | інфо-попап про календар (заголовок, опис, кнопка) |
| `Bonus + Signup` | 80238:163559 | `Popup/Default 3xs, Max. height=True` 80238:163626 | `Popup/Default xl, Max. height=True` 80238:159356 | умови бонусу + Sign up у футері |

**Старе (не чіпати):** `.Desktop page (Debricate)` ×3, `.Mobile page (Debricate)` ×3, `Dropdown`, фрейми `mobile popup + overlay` ×3, `Calendar popup - 1096 px`, старий `Popup` (device=desktop) — усе на y ≈ 9750; локальні набори `Calendar / Sections-wrap`, `Calendar / Content`, `Calendar / Pop-up-content`; фрейм `BG` (80216:77504, група без заливки, x 3438 y 8949) — схоже, залишок.

## Як зібрано — сторінка (`Main Area`)
```
Layout/xl → Main Area → Container  V · p16/32 · gap 32
├─ Banner (78647:15753) device=lg · Content block · Slot · ↳ Subtitle
├─ Tabs Variant=Navigation — 7 днів (Today, Tue 03 … Sun 08), Badge=true, перший Selected
├─ Tabs Variant=Default — All / Bonuses (підвкладки)
└─ Wrapper ×N  V gap 16:  Heading Secondary lg (All=true — посилання «All», лише у вкладці All)
                          + Wrapper GRID 2 кол. gap 16: Card / Lottery-tournament | Card / Bonus | Card / News

Layout/3xs → Main Area
├─ Banner device=xs  — ПОЗА Container, на всю ширину 320
└─ Container  V · p16/16 · gap 24
    ├─ Wrapper H gap 24: Tabs Navigation (лише Selected-день) + Dropdown (Trigger: Button Neutral md, Icon ➡️; Body: 6 × Dropdown/Item) — решта днів у «More»
    ├─ Tabs Variant=Default — All / Bonuses
    └─ Wrapper ×N  V gap 16: Heading Secondary 3xs + GRID 1 кол. gap 8
```

## Як зібрано — попапи
- Сет попапу = та сама сіра Section 1656 завширшки: `Popup/Default Breakpoint=3xs` (x 80, 320×640 — екран з оверлеєм, на мобайлі вікно знизу) + `Popup/Default Breakpoint=xl` (x 480, 1096×768 — екран з оверлеєм, вікно по центру).
- Властивості: `Header`, `↳ Title`, `↳ Description`, `Closable` = true; решта (Hero, Back, Decor, Welcome / NoDeposit bonus, бічні слоти) = false.
- `Bonus`: у `💠 Body` — лише `Button Primary md` (текст — у Title/Description), `Footer = false`.
- `Bonus + Signup`: `Max. height = True` (тіло скролиться), `Footer = true`, у `↳ 💠` футера — `Button Primary md` «Sign up». Тіло: дві плашки `Wrapper` (fill + radius змінними, p16, gap 16: заголовок + список `List/Item — Default Ordered=False`) — на xl в ряд (H gap 16), на 3xs стовпчиком; під ними список умов `List/Item — Default` + рядки «1st deposit — at least 6 $» з трьох TEXT.
- Назви сетів попапів — без префікса сторінки (`Bonus`, `Bonus + Signup`), сторінкові — `Calendar — <вкладка>`.

## Використані компоненти ДС
`Layout/3xs`, `Layout/xl`, `Banner` (78647:15753), `Tabs` (Navigation + Default) з `Tabs/Item — Navigation | — Default`, `Dropdown` + `Dropdown/Item`, `Button`, `Heading`, `Popup/Default`, `List/Item — Default`; продуктові картки `Card / Lottery-tournament`, `Card / Bonus`, `Card / News`.

## Відхилення (аудит 2026-11-03, лише читання)
Тексти без стилю 0, hardcode-заливок 0, remote-інстансів 0, векторів 0 (Mask / 📐 Sizer у тілі `Dropdown` — дефолтний вміст слота компонента).

| # | Де | Що | Пропозиція |
|---|---|---|---|
| 1 | `Banner` на xl в обох сетах | у мейна `minWidth = 800`, а в Container доступно 792 → банер вилазить на 8 px за праве поле | прибрати / зменшити min width у `Banner` або Container — **питання команді** |
| 2 | рядки «1st deposit — at least 6 $» у `Bonus + Signup` | 3 окремі TEXT у `Wrapper` (gap 5, відступ 24) | `List/Item` з вкладеним рівнем, якщо такий з'явиться — **питання** |
| 3 | `Bonus + Signup` | фрейм `Bônus conditions` — опечатка, і обидві плашки з заголовком `Successful registration` (плейсхолдер) | `Conditions`; реальні заголовки (Deposit bonus / Free spins) |
| 4 | Container / Wrapper / GRID | gap і padding без токенів (як на Tournaments) | спільне питання про токени сторінки |
| 5 | фрейм `BG` 80216:77504 на канвасі | залишок без заливки | прибрати — лише за рішенням Андрея |

## Що нового відносно Tournaments
1. **Сети попапів**: `Popup/Default` 3xs + xl у тій самій Section, що й сторінки.
2. **Банер на мобайлі — поза Container**, на всю ширину; на десктопі — у Container.
3. **Довгі вкладки на мобайлі**: видно лише активну + `Dropdown` «More» з рештою (`Button Neutral md` + `Dropdown/Item`).
4. **Два рівні вкладок**: `Tabs Navigation` (основні) + `Tabs Default` (фільтр всередині).
5. **`Heading All=true`** — посилання «All» на блоках зведеної вкладки.
