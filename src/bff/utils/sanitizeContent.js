export const sanitizeContent = (content) =>
  content
    .replaceAll('&nbsp;', ' ')
    .replace(/ +/, ' ')
    .replaceAll('<div><vr></div>', '\n')
    .replaceAll('<div>', '\n')
    .replaceAll('</div>', '');
