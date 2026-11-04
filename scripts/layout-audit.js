// Аудит сету сторінки (read-only): вектори, тексти без стилю, hardcode-заливки, remote-інстанси, фрейми без AL — лише вміст Main Area.
// Підставити SECTION_ID сету.
const sec = await figma.getNodeByIdAsync('SECTION_ID');
const r = { vectors: [], textNoStyle: [], hardFills: [], remote: {}, comps: {}, noAL: [], clip: [], minSize: [] };
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
    if (n.type === 'FRAME') {
      if (n.fills.some(f => f.visible !== false && !(f.boundVariables && f.boundVariables.color))) r.hardFills.push(lay.name + ':' + n.name);
      if (n.layoutMode === 'NONE' && n.children.length > 1) r.noAL.push(lay.name + ':' + n.name);
      if (n.clipsContent) r.clip.push(lay.name + ':' + n.name);
      if (n.name !== 'Container' && (n.minWidth || n.minHeight || n.maxWidth || n.maxHeight)) r.minSize.push(lay.name + ':' + n.name);
    }
    if ('children' in n) stack.push(...n.children);
  }
}
return r;
