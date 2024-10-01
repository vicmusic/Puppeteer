const puppeteer = require('puppeteer')

describe('1er test', () => {
    it('debe abrir browser', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            //slowMo: 1000,
            //devtools: false,
            defaultViewport: null
        })
        const page = await browser.newPage()
        await page.goto('http://t-iris-logistica.qi.local:31707/login')
        //await page.waitForTimeout(2000)
        await page.waitForSelector('body > div.app-content.content > div.content-wrapper > div > section > div > div > div > div.card-header.border-0 > div > img')
        
        await browser.close()
    }, 20000)
})