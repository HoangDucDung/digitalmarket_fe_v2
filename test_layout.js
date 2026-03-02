import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

const results = await page.evaluate(() => {
  const card = document.querySelector('.product-card');
  if (!card) return { error: 'No product card found' };
  
  const rect = card.getBoundingClientRect();
  const style = window.getComputedStyle(card);
  
  const title = card.querySelector('.product-card__name');
  const titleStyle = title ? window.getComputedStyle(title) : null;
  const titleRect = title ? title.getBoundingClientRect() : null;
  
  const grid = document.querySelector('.featured-products__grid');
  const gridStyle = grid ? window.getComputedStyle(grid) : null;
  const gridRect = grid ? grid.getBoundingClientRect() : null;
  
  return {
    card: {
      width: rect.width,
      height: rect.height,
      display: style.display,
      visibility: style.visibility,
      opacity: style.opacity,
      background: style.backgroundColor
    },
    title: title ? {
      text: title.innerText,
      color: titleStyle.color,
      visibility: titleStyle.visibility,
      opacity: titleStyle.opacity,
      width: titleRect.width,
      height: titleRect.height,
      top: titleRect.top,
      left: titleRect.left
    } : 'No title found',
    grid: grid ? {
      width: gridRect.width,
      height: gridRect.height,
      display: gridStyle.display,
      gridTemplateColumns: gridStyle.gridTemplateColumns
    } : 'No grid found'
  };
});

console.log(JSON.stringify(results, null, 2));
await browser.close();
