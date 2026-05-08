function getHomePage(){
    return `<h1>Welcome home</h1>
    <p>homepage</p>`;
}

function getWebComponentsPage(){
    return `<h1>Welcome to webcomponents</h1>
    <p>webcomponents</p>`;
}

const routes = {
    '#/': getHomePage,
    '#/button': getWebComponentsPage
};

function handleRoute() {
    const hash = window.location.hash || '#/'; // Default to home if no hash
    const content = routes[hash] ? routes[hash]() : '<h1>Page Not Found</h1>';
    document.getElementById('content').innerHTML = content;
}

// Listen for navigation events
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

