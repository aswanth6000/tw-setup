import { execSync } from 'child_process';
import fs from 'fs';

export async function setupTailwindNext() {
  console.log('📦 Installing Tailwind CSS...');
  execSync('npm install -D tailwindcss postcss autoprefixer', { stdio: 'inherit' });

  console.log('⚙️ Initializing Tailwind config...');
  execSync('npx tailwindcss init -p', { stdio: 'inherit' });

  const cssPath = 'styles/globals.css';
  if (fs.existsSync(cssPath)) {
    fs.writeFileSync(
      cssPath,
      `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n`
    );
    console.log('✅ Tailwind directives added to styles/globals.css');
  }
}
