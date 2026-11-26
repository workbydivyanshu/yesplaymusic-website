/* Zero-dependency build: fills {{TOKEN}} placeholders in root *.html files
 * for the selected target (github | gitlab). Idempotent: safe to run twice. */
const fs = require('fs');
const path = require('path');
const config = require('./site.config.js');

const target = process.argv[2] === 'gitlab' ? 'gitlab' : 'github';
const t = config[target];
if (!t) { console.error('Unknown target:', target); process.exit(1); }

const TOKEN = {
  CANONICAL_URL: t.canonicalUrl,
  REPO_URL: t.repoUrl,
  DISPLAY_REPO_URL: t.displayRepoUrl,
  PLATFORM_NAME: t.platformName,
  WEBSITE_REPO_URL: t.websiteRepoUrl,
  RELEASE_BASE_URL: t.releaseBaseUrl,
  TARGET: t.target,
  SHOW_RECRUITER: t.showRecruiterLinks ? 'true' : 'false',
};

const root = __dirname;
const htmlFiles = fs.readdirSync(root).filter((f) => f.toLowerCase().endsWith('.html'));
const targetFiles = [
  ...htmlFiles,
  'locales/en.json',
  'locales/zh-CN.json',
  'js/i18n.js',
];

let totalReplacements = 0;
const summary = [];

for (const file of targetFiles) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) continue;
  let src = fs.readFileSync(full, 'utf8');
  const before = src;

  // Normalise any previously-baked values (either target) back to tokens so a
  // re-run for a different target still works. Running twice is a no-op.
  // IMPORTANT: Longer strings MUST be replaced before prefixes (e.g. RELEASE_BASE_URL before REPO_URL)
  for (const cfg of Object.values(config)) {
    const entries = [
      ['RELEASE_BASE_URL', cfg.releaseBaseUrl],
      ['RELEASE_BASE_URL', 'https://github.com/workbydivyanshu/YesPlayMusic/releases/download/v3.0.4'],
      ['WEBSITE_REPO_URL', cfg.websiteRepoUrl],
      ['WEBSITE_REPO_URL', 'https://github.com/workbydivyanshu/yesplaymusic-website'],
      ['WEBSITE_REPO_URL', cfg.websiteRepoUrl ? cfg.websiteRepoUrl.toLowerCase() : null],
      ['REPO_URL', cfg.repoUrl],
      ['REPO_URL', 'https://github.com/workbydivyanshu/YesPlayMusic'],
      ['REPO_URL', cfg.repoUrl ? cfg.repoUrl.toLowerCase() : null],
      ['DISPLAY_REPO_URL', cfg.displayRepoUrl],
      ['DISPLAY_REPO_URL', 'github.com/workbydivyanshu/YesPlayMusic'],
      ['DISPLAY_REPO_URL', cfg.displayRepoUrl ? cfg.displayRepoUrl.toLowerCase() : null],
      ['CANONICAL_URL', cfg.canonicalUrl],
      ['PLATFORM_NAME', cfg.platformName],
    ].filter(([, val]) => Boolean(val));

    entries.sort((a, b) => b[1].length - a[1].length);

    for (const [key, val] of entries) {
      src = src.split(val).join('{{' + key + '}}');
    }
  }

  let count = 0;
  for (const [key, val] of Object.entries(TOKEN)) {
    const token = '{{' + key + '}}';
    const parts = src.split(token);
    count += parts.length - 1;
    src = parts.join(val);
  }

  if (src !== before) {
    fs.writeFileSync(full, src);
    totalReplacements += count;
    summary.push(`  ${file}: ${count} placeholder(s) filled`);
  } else {
    summary.push(`  ${file}: no change`);
  }
}

console.log(`build: target=${target} brand=${t.brandName} badge="${t.badge}"`);
console.log(`build: ${targetFiles.length} file(s) scanned`);
summary.forEach((l) => console.log(l));
console.log(`build: done — ${totalReplacements} placeholder(s) replaced`);
