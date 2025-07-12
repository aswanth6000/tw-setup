#!/usr/bin/env node

import { detectProject } from '../src/detectProject.js';
import { setupTailwindVite } from '../src/setupVite.js';
import { setupTailwindNext } from '../src/setupNext.js';

const type = await detectProject();

if (type === 'vite') {
  await setupTailwindVite();
} else if (type === 'next') {
  await setupTailwindNext();
} else {
  console.error('❌ Could not detect Vite or Next.js project.');
}
    