import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.argv[2] || 8769);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png' };
const allowedFiles = new Set(['index.html', 'styles.css', 'app.js', 'ui-notes.js', 'patient-avatar.png', 'patient-avatar-female.png', 'assets/ai-assistant-persona.png', 'assets/family-avatar-sprite.png', 'assets/echarts.min.js']);

createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    const path = pathname === '/' ? 'index.html' : decodeURIComponent(pathname.slice(1));
    if (!allowedFiles.has(path)) throw new Error('Unsupported preview asset');
    const file = await readFile(join(root, path));
    response.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream' });
    response.end(file);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
}).listen(port, '127.0.0.1');
