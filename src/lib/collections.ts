import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';

/** Safe getCollection — returns [] when empty or missing (no throw). */
export async function safeCollection<C extends CollectionKey>(
  name: C,
  filter?: (entry: CollectionEntry<C>) => boolean
): Promise<CollectionEntry<C>[]> {
  try {
    const all = await getCollection(name);
    return filter ? all.filter(filter) : all;
  } catch {
    return [];
  }
}
