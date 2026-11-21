import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gunzipSync } from 'node:zlib';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.resolve(process.argv[2] || path.join(root, 'source'));
const bundleDir = path.join(root, 'assets', 'bundle');
const partCount = 18;

try {
  const chunks = await Promise.all(
    Array.from({ length: partCount }, async (_, index) => {
      const name = 'part-' + String(index + 1).padStart(2, '0') + '.txt';
      return readFile(path.join(bundleDir, name), 'utf8');
    })
  );

  const packed = Buffer.from(chunks.join('').trim(), 'base64');
  const files = JSON.parse(gunzipSync(packed).toString('utf8'));

  for (const [relativePath, content] of Object.entries(files)) {
    const destination = path.resolve(output, relativePath);
    if (!destination.startsWith(output + path.sep)) {
      throw new Error('Caminho inesperado no pacote: ' + relativePath);
    }
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, content, 'utf8');
    process.stdout.write('Extraído: ' + path.relative(output, destination) + '\n');
  }

  process.stdout.write('\nFontes restaurados em: ' + output + '\n');
} catch (error) {
  process.stderr.write('Falha ao extrair o NeuroBingo: ' + (error?.message || error) + '\n');
  process.exitCode = 1;
}
