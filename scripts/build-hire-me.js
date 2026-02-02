/**
 * Build script for the standalone Hire Me landing page
 *
 * This script temporarily swaps the entry point to build
 * the hire-me site as a separate application.
 *
 * Usage: node scripts/build-hire-me.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const PUBLIC = path.join(ROOT, 'public');

// File paths
const indexJs = path.join(SRC, 'index.js');
const indexJsBackup = path.join(SRC, 'index.js.backup');
const hireMeJs = path.join(SRC, 'hire-me.js');

const indexHtml = path.join(PUBLIC, 'index.html');
const indexHtmlBackup = path.join(PUBLIC, 'index.html.backup');
const hireMeHtml = path.join(PUBLIC, 'hire-me.html');

console.log('🚀 Building Hire Me standalone site...\n');

try {
  // Step 1: Backup original files
  console.log('📦 Backing up original files...');
  fs.copyFileSync(indexJs, indexJsBackup);
  fs.copyFileSync(indexHtml, indexHtmlBackup);

  // Step 2: Swap entry points
  console.log('🔄 Swapping entry points...');
  fs.copyFileSync(hireMeJs, indexJs);
  fs.copyFileSync(hireMeHtml, indexHtml);

  // Step 3: Run build
  console.log('🔨 Running production build...\n');
  execSync('npm run build', {
    cwd: ROOT,
    stdio: 'inherit',
    env: { ...process.env, GENERATE_SOURCEMAP: 'false' }
  });

  console.log('\n✅ Build complete! Output in /build folder');

} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);

} finally {
  // Step 4: Restore original files
  console.log('\n🔄 Restoring original files...');

  if (fs.existsSync(indexJsBackup)) {
    fs.copyFileSync(indexJsBackup, indexJs);
    fs.unlinkSync(indexJsBackup);
  }

  if (fs.existsSync(indexHtmlBackup)) {
    fs.copyFileSync(indexHtmlBackup, indexHtml);
    fs.unlinkSync(indexHtmlBackup);
  }

  console.log('✨ Done!\n');
}
