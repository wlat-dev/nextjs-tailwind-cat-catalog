# nextjs-tailwind-cat-catalog
Responsive "cat catalog" demoing data retrieval from an external API, static generation, and dynamic routing in Next.js. Styling done via TailwindCSS.

./components/pages/cats/index.js 
- getStaticProps fetches data, making an async API call to The Cat API's breed listing and returning the catBreeds object.
- CatHome returns the frontend catalog, iterating through the catBreeds object properties, which are displayed as badges and progress bars (../../components/ProgressBar.js) under each respective cat breed card. Each cat breed card may be clicked on, taking the user to a dynamically generated URL. Images are generated using next/image.

./components/pages/cats/[id].js
- getStaticPaths pre-renders paths for all cat breeds.
- getStaticProps consumes the context parameter to call The Cat API for the selected cat breed. 
- CatDetails enumerates the cat object properties as progress bars.
