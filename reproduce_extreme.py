import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Extremely Narrow Portrait
        context = await browser.new_context(viewport={'width': 280, 'height': 653}, user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1')
        page = await context.new_page()

        url = 'file://' + os.path.join(os.getcwd(), 'recipe_browser.html') + '?view=CostanzoRecipes_Entrees_SourdoughPasta'
        await page.goto(url)
        await page.wait_for_timeout(3000)

        await page.screenshot(path='extremely_narrow_issue.png')

        # Check if rightCol is visible
        is_right_col_visible = await page.is_visible('#rightCol')
        print(f"Is rightCol visible? {is_right_col_visible}")

        # Check height of recipeColumns
        height = await page.evaluate("document.getElementById('recipeColumns').offsetHeight")
        print(f"recipeColumns height: {height}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
