# Wanda X Design system

Робочий репозиторій команди для очистки Figma-файлу **[Wanda X] Design system** (`3MbdWPLOGBjBj92Y3EnPYN`, бренди MB / XON).

## Структура

```
.claude/skills/wanda-x-design-system/
├── SKILL.md              # індекс: що читати під яку задачу (~3 КБ)
├── rules/                # ШВИДКІ правила — читаються щоразу
│   ├── core.md           # усі жорсткі правила
│   └── build-page.md     # як зібрати наступну сторінку
├── pages/                # база знань по сторінках (Tournaments, Lottery, VIP …) — лише для своєї сторінки
└── references/           # довідники за потребою: компоненти, токени, неймінг, пастки API
CHANGELOG.md              # журнал рішень (історія, не читається щоразу)
scripts/                  # скрипти Figma / python — виконуються, не читаються
tokens/ snapshots/ reports/
```

## Правила оновлення
- Нове правило → одним рядком у `rules/core.md` або `rules/build-page.md`, без історії.
- Що зроблено і чому → рядок у `CHANGELOG.md`.
- Сторінка зібрана → `pages/<page>.md` (ID сетів, відхилення, питання).
- Повторний аудит → `reports/audit-YYYY-MM-DD.md`.

## Як користуватись
- **Claude Code**: відкрити репо — скіл з `.claude/skills/` підхоплюється автоматично.
- **Claude app**: заархівувати `.claude/skills/wanda-x-design-system` у zip і завантажити як skill.
