import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 320, 'height': 480})
        page = await context.new_page()

        url = 'file://' + os.path.join(os.getcwd(), 'recipe_browser.html') + '?view=CostanzoRecipes_Entrees_SourdoughPasta'
        await page.goto(url)
        await page.wait_for_timeout(3000)

        # Try to scroll down in recipeColumns
        await page.evaluate("document.getElementById('recipeColumns').scrollTop = 500")
        await page.wait_for_timeout(500)
        scroll_top = await page.evaluate("document.getElementById('recipeColumns').scrollTop")
        print(f"recipeColumns scrollTop after trying to scroll: {scroll_top}")

        await page.screenshot(path='scroll_test.png')

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
