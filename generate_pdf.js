const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    const filePath = 'file:///' + path.resolve(__dirname, 'briefing_cliente.html').replace(/\\/g, '/');
    await page.goto(filePath, { waitUntil: 'networkidle2', timeout: 30000 });

    await page.pdf({
        path: path.resolve(__dirname, 'Briefing_Novos_Clientes.pdf'),
        format: 'A4',
        printBackground: true,
        margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' }
    });

    await browser.close();
    console.log('PDF gerado com sucesso: Briefing_Novos_Clientes.pdf');
})();
