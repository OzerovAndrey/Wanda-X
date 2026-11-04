// Сіра Section компонента / нового сету (для старого — color 0,0,0 і назва `Old — <що>`).
const section = figma.createSection();
section.name = '<Component>';
section.fills = [{ type: 'SOLID', color: { r: 187/255, g: 187/255, b: 187/255 } }];
section.strokes = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 0.1 }];
section.strokeWeight = 1;
section.cornerRadius = 2;
