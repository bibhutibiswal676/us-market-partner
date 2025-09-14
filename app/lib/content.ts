import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { HomeContent } from '@/types/content';

export async function getHomeContent(): Promise<HomeContent> {
  const filePath = path.join(process.cwd(), 'data', 'home.json');
  const raw = await fs.readFile(filePath, 'utf-8');
  const json = JSON.parse(raw) as HomeContent;
  return json;
}
