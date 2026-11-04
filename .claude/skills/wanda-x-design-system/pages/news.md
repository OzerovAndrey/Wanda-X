# News — сторінка `31597:416750` («News - Ozerov»)

Статус: **розкладено 2026-11-04** (старе — у чорні Section); нові сети ще не зібрані. Section `Design` нема → джерело — старі макети.

**Порядок сторінки:** нові сети з x 0 (`News` → `News — Empty` → `News — Article` → компоненти `News/…`) → чорні `Old — …` з x 9024.

| Section | ID | Що всередині |
|---|---|---|
| `Old — News` | 80638:12938 | `.Desktop page (Debricate)` 1920 / 1288 / 1096 / 1096 + `.Mobile page (Debricate)` 640 / 412 / 360 — список новин (сітка карток + «See more») |
| `Old — Article` | 80638:12946 | ті самі 7 брейкпоінтів — відкрита новина |
| `Old — Components` | 80638:12954 | старі локальні `News Card content` (set: `Type=Mobile|Desktop`, `Empty=no|yes`) і `Open news content` — **не використовувати**, лише довідка |

## Композиція старого макета
- **Список:** `Heading Primary` «News» → сітка карток (xl 2 кол., 3xs 1 кол.) → «See more». Картка: бейджі перегляди + дата, фон-картинка, Title (2 рядки), Description, кнопка. Дві заливки карток — темна і синя (в `Old — Components` сітка 3 кол.).
- **Порожній:** `Heading Primary` «News» + блок `Empty`.
- **Відкрита новина:** «Back to News» → Title → дата → картинка → текст статті (абзаци, список «How it works», список призів) → відео-embed → `Heading` «Latest News» → карусель карток + точки.
