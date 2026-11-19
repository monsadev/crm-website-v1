import { site } from '@/config/site';

export default function sitemap() {
  const routes = ['', '/product', '/about', '/contact', '/book-demo', '/privacy-policy', '/terms-and-conditions'];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    changeFrequency: r === '' || r === '/product' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : r === '/product' || r === '/book-demo' ? 0.9 : 0.6,
  }));
}
