import './styles.css'

const siteUnderConstruction = false;

if (siteUnderConstruction) {
    document.body.innerHTML = `
    <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-center text-gray-800 dark:text-gray-200">
      <h1 class="text-4xl font-bold mb-4">🚧 Site Under Construction 🚧</h1>
      <p class="text-lg">We're working hard to launch something awesome. Check back soon!</p>
    </div>
  `;
}
