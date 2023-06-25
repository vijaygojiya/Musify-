export function getImageUrl(imageUrl: string, quality: quality = 'high') {
  if (!imageUrl) {
    return '';
  }
  switch (quality) {
    case 'high':
      return imageUrl
        .trim()
        .replace(/http:/g, 'https:')
        .replace(/50x50/g, '500x500')
        .replace(/150x150/g, '500x500');
    case 'medium':
      return imageUrl
        .trim()
        .replace(/http:/g, 'https:')
        .replace(/50x50/g, '150x150')
        .replace(/500x500/g, '150x150');
    case 'low':
      return imageUrl
        .trim()
        .replace(/http:/g, 'https:')
        .replace(/150x150/g, '50x50')
        .replace(/500x500/g, '50x50');
    default:
      return imageUrl
        .trim()
        .replace(/http:/g, 'https:')
        .replace(/50x50/g, '500x500')
        .replace(/150x150/g, '500x500');
  }
}
type quality = 'high' | 'medium' | 'low';
