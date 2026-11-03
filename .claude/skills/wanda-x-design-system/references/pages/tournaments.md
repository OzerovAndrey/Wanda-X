# Сторінка `Tournaments - Ozerov 💜` — еталон збірки сторінки

Page id `30121:5839874` · вивчено 2026-11-03 · стандарт, виведений з неї, — `page-rebuild.md` §3.

## Що на сторінці

**Нова збірка (еталон)** — 5 сетів у ряд, `y = 0`, 600 px між ними:

| Сет (Figma Section) | id | x | `Layout/3xs` | `Layout/xl` | Що показує |
|---|---|---|---|---|---|
| `Tournaments` | 80078:100446 | 0 | 80078:99146 | 80078:108545 | список: hero, Active (3 картки), Coming soon (3 картки) |
| `Tournament — Active` | 80180:53781 | 2279 | 80180:53782 | 80180:53783 | деталі турніру: назад, hero + Results, теги, Terms, Rules, ігри, My progress, Leaders, Multipliers |
| `Tournaments — Archived` | 80180:61815 | 4535 | 80180:61816 | 80180:61817 | список, вкладка Archived (картки finished) |
| `Tournament — Archived` | 80180:59946 | 6791 | 80180:59947 | 80180:59948 | деталі завершеного турніру (без My progress і Multipliers) |
| `Tournaments — Empty` | 80180:64435 | 9047 | 80180:64436 | 80180:64437 | список без турнірів — `Empty` |

**Старе (не чіпати):** `.Desktop page (Debricate)` ×3 (67684:229314, 71701:321292, 67722:86641), `.Mobile page (Debricate)` 67742:242479 (y ≈ 11718); локальні набори `Tournament/content`, `tornaments/content`, `Header_tornments`, `About`, `Leaders`, `Leaders/Multipliers`, `players`, `VIP status`, `Tournament/ My progress`, `Tournament / lottery / card one`, `Full page content`.

## Як зібрано (`Layout/xl` → `Main Area` → `Container`)
```
Container  V · padding 16/32 · gap 32            (3xs: 16/16 · gap 24)
├─ Wrapper (назад + hero)  V gap 16
│   ├─ Wrapper H gap 8: Button Text md (Label=False, chevron-left) + TEXT "Go to tournaments"
│   └─ Wrapper H gap 24 · p16 · r20 · fill змінною
│       ├─ Image/Multi 400×204 (Slot=False, Position=Center)
│       └─ Wrapper V gap 16: [назва з декором · TEXT Prize · Time Date=True Highlighted=True] + Card / Lottery-tournament / Results (Insufficient)
│                              або кнопки Button Primary lg + Tertiary [Invert] lg (у списку)
├─ Wrapper H gap 8: Tag ×3
├─ Wrapper V gap 16: Heading Secondary + TEXT (Terms) + TEXT (Prize fund)
├─ Wrapper V gap 16: Heading + TEXT (Rules)
├─ Wrapper V gap 16: Heading + GRID 5×2 Thumb/Default (3xs: 2×2 + Show more)
├─ Wrapper V gap 16: Heading + Table/Leaderboard **Card** (My progress: без Head, рядок поточного гравця Selected)
├─ Wrapper V gap 16: Heading + Table/Leaderboard **Card** (Head + 5 рядків, місця 1–3 — `Image` = `brand/tournaments/cup-1..3`) + Button Secondary md «Show more»
└─ Wrapper V gap 16: Heading + GRID 2 кол. Card / Lottery-tournament + Button «Show more»
```
Сторінка-список: `Heading Variant=Primary` + `Tabs Variant=Navigation` (Active / Archived) + hero з кнопками + блоки `Active` / `Coming soon` з `Card / Lottery-tournament` (`Type=active | Soon | finished`).

## Використані компоненти ДС (2026-11-03)
`Layout/3xs`, `Layout/xl`, `Heading`, `Tabs` + `Tabs/Item — Navigation`, `Image/Multi`, `Time`, `Button`, `Tag`, `Thumb/Default`, `Table/Leaderboard` + `/Row`, `Table/Cell`, `Table/Head/Cell`, `Empty`; продуктові картки `Card / Lottery-tournament`, `Card / Lottery-tournament / Results` (`↳ Cards`).

## Відхилення від правил (аудит 2026-11-03, лише читання)
| # | Де | Що | Як має бути (пропозиція) |
|---|---|---|---|
| 1 | hero у `Tournaments`, `Tournament — Active / Archived` (обидва брейкпоінти) | декор біля назви — 2 вектори `Union` (правило 13: векторів у лейауті нема) | іконка-орнамент зі `Static — Icons` або частина компонента hero — **питання** |
| 2 | назад до списку | `Button` (icon-only) + окремий TEXT «Go to tournaments» | один `Button Variant=Text, ⬅️ Icon=True, Label=True` або `Link` — **питання** |
| 3 | ~~лідерборд, місця 1–3: кубки в `↳ Slot`~~ | виправлено 2026-11-03: `Image=True` + swap `↳ 💠 Image` |
| 4 | `Container`, `Wrapper`, GRID | gap / padding hardcode (32/24/16/8) без токенів | токени `layout.*` / `spacing.*` — **питання**: які токени сторінки |
| 5 | тексти Terms / Rules | шари названі `Редкая птица долетит` | `Description`, `Prize fund`, `Rules` |
| 6 | hero | повторюється на Tournaments / Lottery / Races (назва, приз, дати, CTA) | кандидат у компонент `Hero` (лише якщо команда попросить) |
| 7 | `Tournaments — Empty` | картинка `brand/tournaments/empty` (remote) у `Empty` | ок, якщо `brand/*` — дозволена бібліотека ілюстрацій — **питання** |

## Аудит збірки (скрипт)
```js
// для кожного сету: вектори, тексти без стилю, hardcode-заливки, remote-інстанси, фрейми без AL — лише вміст Main Area
const r = { vectors: [], textNoStyle: [], hardFills: [], remote: {}, comps: {}, noAL: [] };
for (const lay of sec.children) {
  const ma = lay.findOne(n => n.name === 'Main Area'); if (!ma) continue;
  const stack = [...ma.children];
  while (stack.length) {
    const n = stack.pop();
    if (n.type === 'INSTANCE') {
      const mc = await n.getMainComponentAsync();
      const o = mc ? (mc.parent && mc.parent.type === 'COMPONENT_SET' ? mc.parent : mc) : null;
      const k = o ? o.name : '?';
      if (mc && mc.remote) r.remote[k] = (r.remote[k] || 0) + 1; else r.comps[k] = (r.comps[k] || 0) + 1;
      for (const s of n.findAll(x => x.type === 'SLOT')) stack.push(...s.children);
      continue;
    }
    if (['VECTOR', 'BOOLEAN_OPERATION', 'RECTANGLE', 'ELLIPSE'].includes(n.type)) r.vectors.push(lay.name + ':' + n.name);
    if (n.type === 'TEXT' && !n.textStyleId) r.textNoStyle.push(lay.name + ':' + n.name);
    if (n.type === 'FRAME' && n.fills.some(f => f.visible !== false && !(f.boundVariables && f.boundVariables.color))) r.hardFills.push(lay.name + ':' + n.name);
    if (n.type === 'FRAME' && n.layoutMode === 'NONE' && n.children.length > 1) r.noAL.push(lay.name + ':' + n.name);
    if ('children' in n) stack.push(...n.children);
  }
}
```
Результат 2026-11-03: текстів без стилю 0, hardcode-заливок 0, фреймів без AL 0; вектори — лише декор hero (№1); remote — кубки (№3) і ілюстрація Empty (№7).

## Зміни 2026-11-03
- На запит Андрея лідерборди (My progress, Leaders) у `Tournament — Active` і `Tournament — Archived`, обидва брейкпоінти, переведено на вигляд як у Hall of Fame: `Table/Leaderboard Variant=Card`, рядки `Variant=Card, Inverted=False` (світлі картки), `Table/Head/Cell` і `Table/Cell` `Inverted=False`; поточний гравець — `State=Selected`. Кубки — `Image` swap замість слота.

## Таблиці як в оригіналі (2026-11-03, друга ітерація)
Андрей: таблиці мають бути як у старому макеті (`.Desktop page (Debricate)` 67722:86641). Оригінал робився під темну тему: у MB рядки `even` (`slate-1`, тепер світлий) і `odd` (`#001e76`) дають світло-темну «зебру» з невидимим текстом — це поломка, не задум.
- **Leaders** — `Table/Leaderboard Variant=Striped`, `Show head`; рядки `Inverted=True`, непарні місця `Plain`, парні `Stripe` (як even/odd оригіналу), 10 рядків.
  - xl: `Player` (200: кубок `Image` для 1–3 / `List/Bullet` № + нік) · `Results` (120, `510 765 X.2` — X.2 кольором `semantic/text/brand/secondary`) · `Sum / Prize` (Right, Fill: сума + призи).
  - 3xs: комірки `Size=sm`; `Player / Results` (нік + Subtext номер квитка / X.2) · `Sum / Prize` (Right, 120: сума + Subtext призи).
  - Поточний гравець (4) — `State=Selected` + текст комірок `semantic/text/brand/primary` (оверрайд), `List/Bullet Type=Active`.
  - Номери на темному: `List/Bullet` без Inverted → оверрайд fill `semantic/fill/subtle-invert`, текст `semantic/text/default-invert/primary` (**питання: додати `Inverted` у `List/Bullet`**).
- **My progress** — `Variant=Card`, без Head: 55 / 57 — `Card Default` (світлі), 56 (я) — `Card Selected Inverted=True` (темний) + помаранчевий текст; праворуч `X.2  2 061 835`.
- **Фікс компонента:** `contextual.table.leaderboard.row.inverted.fill.selected` = `{semantic.background.slate-dark-2}` (було `{semantic.fill.active}` — світло-блакитна плашка). Змінна в Figma оновлена (MB, XON), JSON — `tokens/system/*/component.json`, `tokens/table.*.component.json`; **вставити в Token Studio до наступного Export**.
