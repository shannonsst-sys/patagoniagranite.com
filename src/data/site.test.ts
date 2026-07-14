import { describe, expect, it } from 'vitest';
import { site, navigation } from './site';
import { slabs } from './slabs';
import { posts } from './posts';

describe('site content', () => {
  it('uses the requested production domain and form endpoint', () => {
    expect(site.domain).toBe('https://patagoniagranite.com');
    expect(site.formEndpoint).toBe('https://formspree.io/f/mnjylywy');
  });
  it('keeps unique slab and article routes', () => {
    expect(new Set(slabs.map((item) => item.slug)).size).toBe(slabs.length);
    expect(new Set(posts.map((item) => item.slug)).size).toBe(posts.length);
  });
  it('includes core conversion pages', () => {
    expect(navigation.some((item) => item.href === '/contact/')).toBe(true);
    expect(slabs).toHaveLength(14);
    expect(posts.length).toBeGreaterThanOrEqual(4);
  });
});
