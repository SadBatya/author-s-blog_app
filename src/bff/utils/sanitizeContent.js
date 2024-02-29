export const sanitizeContent = (content) => 
  content
  .replaceAll('<div><vr></div>', '\\n\\n')
  .replaceAll('<div>', '\\n')
  .replaceAll('</div>', '')
