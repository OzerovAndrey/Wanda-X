# Messages — сторінка `35102:995431` (`     ↳ Messages - Ozerov`)

Messages — це **попап** (не сторінка в Layout): сети = `Modal/Default` 3xs + xl.

## Розкладка (y 0, 600 між)
`Messages` 81462:2727 (x 0) · `Messages — Empty` 81462:3094 (x 2256) → колишні референси (чорні): `Old — Preview` 81453:285715 · `Old — Messages` 81453:285793 · `Old — Components (Design)` 81453:285732 → `Old — Popups` 81459:2590 (3 старі `Messages-popup` + 5 модалок) → `Old — Components` 81459:2599 (`Messages / Content`, `Messages-content/messages buttons`).
Над сетом `Messages` — Section компонента `Messages/Card` (81460:2677), над нею приклад картинки `Image — example`.

| Сет | 3xs | xl |
|---|---|---|
| Messages | `Modal/Default` 3xs Centered=False Max. height=True; Footer: `Button Tertiary sm` «Mark all as read» по центру | xl lg Centered=True Max. height=True; Footer: `Wrapper` H space-between — «Mark all as read» + `Button Text sm` ⬅️ `bell-on` «Enable push notifications» |
| Messages — Empty | Max. height=False, без Footer | Max. height=False; Footer: «Enable push notifications» по центру |
Обидва: Header + Title + Closable; `↳ ⬇️ Slot` — `Tabs Default`: Promotion (Selected, Badge — лише в списку) / Notification. Body: список — `Messages` V gap `spacing.200` з 4 картками (Image+Actions · Actions · текст · Image); порожній — `Empty Card=False` (Title off, Description «You have no messages yet»).

## Компонент `Messages/Card` 81460:2651
Boolean `Image`, `Actions`. fill `background.slate2`, stroke `border.default.default`, radius `global.borderRadius.md` (12); `Image/Single` 114 (верхні кути `md`); `Wrapper` p `spacing.600` gap `spacing.400` → `Wrapper` gap `spacing.200` (`Wrapper` Date + Time `text.sm`/`text.default.tertiary`, `Title` `text.lgStronger`/heading, `Description` `text.md`/secondary) + `Actions` gap `spacing.300` (`Primary sm` + `Tertiary sm`); `Close` — `Button Text sm Label=False` `close`, absolute 8/8. Тексти за замовчуванням `Label`. Тінь старої картки не перенесено (глобального токена тіні нема).

## Вписати вручну
- `Title` модалок ×4 — «Messages» (MrBet).

## Відкриті питання
- Мобайл у референсі без «Enable push notifications» (і без футера в Empty) — зібрано як у референсі, хоча правило «однаковий контент»; підтвердити.
- Вміст вкладки Notification у референсі не показано — окремий стан не збирали.
- Тінь картки (`DROP_SHADOW` у старій) — потрібен токен?
