# Wanda X Design system — інструкція для Claude

> **Зараз у Figma нічого не змінювати** — команда сама доробляє компоненти й скаже, коли підключатися. Дозволено лише читати.

Перед будь-якою роботою з компонентами, токенами чи лейаутами Figma-файлу **[Wanda X] Design system** (`3MbdWPLOGBjBj92Y3EnPYN`):

0. **Спитай, чи були нові зміни в Token Studio, і попроси свіжий архів JSON** — колеги змінюють токени щодня. Онови `tokens/system/` і покажи diff (`scripts/tokens-diff.py`, порядок — `references/token-studio.md` → Свіжість експорту). Без свіжого архіву — працюй з останнім експортом і скажи, від якої він дати.
1. Прочитай `.claude/skills/wanda-x-design-system/SKILL.md` → `rules/core.md` → **один** файл під задачу (таблиця «Задача → файл»). Збірка сторінки — `rules/build-page.md`; еталонні сторінки `pages/*.md` не читати.
2. Працюй лише з актуальною версією з гілки `main`. Якщо копія файлів у проєкті claude.ai може бути застарілою — склонуй репо і бери правила звідти.
3. Еталон компонента, Section, відступів і Inverted-версії в обох брендах (MB / XON) — `Anchor` (`references/components/anchor.md`).
4. **Режим навчання:** коли команда каже, що оновила чи додала компонент, — цикл `references/learning-workflow.md` (знімок → diff → `components/<c>.md` → `component-registry.md`). У Figma нічого не правити.
5. Зміни правил і документації — комітом у `main`; нове правило — одним рядком у `rules/core.md` / `rules/build-page.md`, історія — у `CHANGELOG.md`.
