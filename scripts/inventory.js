// Інвентар компонентів (read-only). Підставити IDS сторінок (6–7 на виклик), паралельні use_figma.
const IDS = ['…'];
const out = [];
for (const pid of IDS) {
  const page = await figma.getNodeByIdAsync(pid);
  await page.loadAsync();
  const sets = page.findAllWithCriteria({ types: ['COMPONENT_SET'] });
  const comps = page.findAllWithCriteria({ types: ['COMPONENT'] }).filter(c => !c.parent || c.parent.type !== 'COMPONENT_SET');
  const top = n => { let c = n; while (c.parent && c.parent.type !== 'PAGE') c = c.parent; return c.name; };
  const props = o => { try { return Object.entries(o.componentPropertyDefinitions).map(([k, v]) => k.split('#')[0] + (v.type === 'VARIANT' ? '=' + v.variantOptions.join('|') : ':' + v.type[0])).join('; '); } catch (e) { return 'ERR'; } };
  out.push({ page: page.name,
    sections: page.children.filter(n => n.type === 'SECTION').map(s => s.name),
    sets: sets.map(s => `${s.id} ${s.name} [${s.children.length}v] {${props(s)}} @${top(s)}`),
    comps: comps.map(c => `${c.id} ${c.name} {${props(c)}} @${top(c)}`) });
}
return out;
