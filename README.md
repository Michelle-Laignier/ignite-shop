# Ignite Shop

Online t-shirts shop integrated with Stripe. <br>
There are three pages: <br>
- Home page, with the products catalog. <br>
- Product page, for each product. <br>
- Success page, which shows confirmation and details about the purchased shirt. This page can only be accessed if the payment was done successfuly. <br>

## Techs
- React <br>
- Next <br>
- TypeScript <br>
- Stitches <br>
- Axios <br>
- keen-slider <br>
- Stripe <br>
- SSR <br>
- SSG <br>
<br>
The Home and Product pages are rendered using SSG. <br>
The Success page is rendered using SSR, since it's a page that will not be the same for all users, and it's necessary to have the context of the requests.