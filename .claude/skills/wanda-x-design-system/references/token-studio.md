# Token Studio у Figma-файлі [Wanda X] Design system

## Структура
- Версія плагіна 2.13, storage `local` (токени живуть у самому Figma-файлі).
- Сети: `mb/core`, `mb/alias`, `mb/component`, `xon/core`, `xon/alias`, `xon/component`. Тема `Product` → режими MB / XON колекції `Product`.
- Компонентні токени — **тільки** в `*/component`.

## Джерело правди
Повний експорт усіх сетів і тем — `tokens/system/` у корені репо (`$themes.json`, `$metadata.json`, `mb/*`, `xon/*`, `default/*`, `inverse/*`). Перед роботою з токенами читати звідти; після змін у Token Studio — оновлювати експорт.

**Останній експорт у репо: 2026-11-09** (з GitLab; 8 сетів: mb|xon core 238 + override 140, default alias 156 + component 960, inverse alias 88 + component 6).

> Правила токенів, іменування, прив'язка, JSON-handoff, свіжий архів — `rules/tokens.md`. Тут — лише довідка.

## Як вставляти JSON вручну (JSON-вкладка сету)
Сет — один великий JSON-обʼєкт. **Ніколи** не вставляти новий обʼєкт `{ … }` у кінець файлу і **не дублювати кореневі ключі** `border-radius`, `contextual` — дубль ключа перезапише всю групу (всі `contextual.*` сету зникнуть).
1. Новий кореневий блок (`"anchor": {…}`) — перед останньою `}`: на попередньому закривальному рядку додати кому, вставити блок без коми в кінці.
2. `border-radius.<component>` — всередину **наявного** кореневого `"border-radius": {` (відступ 2 пробіли), одразу після `{`, з комою в кінці.
3. `contextual.<component>` — так само всередину наявного кореневого `"contextual": {`.
4. Перед **Save JSON** — жодної червоної помилки внизу. `Unable to read JSON: lineNumber …` = зайва/відсутня дужка або кома.
5. Повторити для `xon/component`.
6. **Styles & Variables → Export** у колекцію `Product`; опцію видалення змінних без звʼязку не вмикати.

## Запис токенів напряму в storage (Claude) — НЕ ВИКОРИСТОВУВАТИ
Storage перезаписує синхронізація з GitHub (перевірено 2026-10-21). Лише для довідки:
- Дані: `figma.root` shared plugin data, namespace `tokens`: `values_meta` = `{"type":"chunked","count":N}`, `values_chunk_0..N-1` = LZ-string `compressToUTF16` від JSON `{ "<set>": [{name, value, type}] }`. Читати рівно `count` чанків (у файлі бувають залишкові чанки поза `count`).
- Ліміт Plugin API — 100 kB (UTF-8) на запис → чанки ≤ 30 000 символів; оновити `values_meta.count`, очистити зайві чанки, оновити `updatedAt`.
- Обовʼязково: закритий плагін Token Studio; бекап оригіналу в namespace `claude_backup`; roundtrip-перевірка компресора до запису і після.
- Після запису: перезапустити Token Studio → Inspect → Refresh.

## Діагностика в Inspect
| Значок | Значення | Що робити |
|---|---|---|
| ⬡ біля токена | прив'язка лише через Figma-змінну | поставити токен на шар (plugin data) |
| розірваний ланцюг | токена немає в активних сетах | дописати токен у `mb/component` і `xon/component` |

