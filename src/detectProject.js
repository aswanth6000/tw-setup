import fs from 'fs';

export async function detectProject() {
  if (fs.existsSync('vite.config.js') || fs.existsSync('vite.config.ts')) {
    return 'vite';
  }
  if (fs.existsSync('next.config.js')) {
    return 'next';
  }

  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
  if (pkg.dependencies?.next) return 'next';
  if (pkg.dependencies?.vite) return 'vite';

  return null;
}
