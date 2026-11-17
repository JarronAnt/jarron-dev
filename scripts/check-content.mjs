import fs from 'node:fs';
import path from 'node:path';

const folder = path.resolve('src/content/blog');
const projectsText = fs.readFileSync('src/data/projects.ts', 'utf8');
const projectIds = [...projectsText.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);
const filenames = fs.readdirSync(folder).filter(name => /\.mdx?$/.test(name));
const errors = [];
const published = new Set();
for (const filename of filenames) {
  const source = fs.readFileSync(path.join(folder, filename), 'utf8');
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source)?.[1];
  const issue = s => errors.push(`${filename}: ${s}`);
  if (!frontmatter) { issue('missing frontmatter'); continue; }
  for (const name of ['title', 'description', 'publishedAt', 'tags', 'draft']) {
    if (!new RegExp(`^${name}:`, 'm').test(frontmatter)) issue(`missing ${name}`);
  }
  const project = /^project:\s*(.+)$/m.exec(frontmatter)?.[1].trim().replace(/['"]/g, '');
  if (project && !projectIds.includes(project)) issue(`unknown project slug ${project}`);
  const date = /^publishedAt:\s*(.+)$/m.exec(frontmatter)?.[1];
  if (date && Number.isNaN(Date.parse(date))) issue('publishedAt is not a valid date');
  if (!/^draft:\s*(true|false)$/m.test(frontmatter)) issue('draft must be true or false');
  if (/^draft:\s*false$/m.test(frontmatter)) published.add(filename.replace(/\.mdx?$/, ''));
  if (!/^##\s+\S/m.test(source)) issue('article needs at least one h2');
  if (!/https:\/\/github\.com\/JarronAnt\//.test(source)) issue('add a link to project source code');
}
if (errors.length) {
  console.error('Content QA failed:\n' + errors.map(x => ' - ' + x).join('\n'));
  process.exitCode = 1;
} else console.log(`Content QA passed: ${filenames.length} articles, ${published.size} published, ${projectIds.length} projects.`);
