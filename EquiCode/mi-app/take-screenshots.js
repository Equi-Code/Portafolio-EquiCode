import puppeteer from 'puppeteer';
import path from 'path';

const SITES = [
  { url: 'https://magalisolcerezo.com', name: 'magali.webp' },
  { url: 'https://www.consultoresmodernos.com', name: 'consultores.webp' },
  { url: 'https://equi-code.github.io/bagriecotizaciones/', name: 'cotizaciones.webp' },
  { url: 'https://equi-code.github.io/OESTECH/', name: 'oestech.webp' },
];

async function capture() {
  console.log('🚀 Iniciando captura de pantallas...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Seteamos la pantalla en 1280x800
  await page.setViewport({ width: 1280, height: 800 });

  for (const site of SITES) {
    console.log(`📸 Capturando: ${site.url}`);
    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      const outputPath = path.join(process.cwd(), 'public', 'projects', site.name);

      // Guarda la imagen directamente en formato WebP optimizado
      await page.screenshot({ path: outputPath, type: 'webp', quality: 80 });
      console.log(`✅ Guardado en public/projects/${site.name}`);
    } catch (error) {
      console.error(`❌ Error al capturar ${site.url}:`, error.message);
    }
  }

  await browser.close();
  console.log('🎉 ¡Todas las capturas listas!');
}

capture();