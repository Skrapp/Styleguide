function getHomePage(){
    return `<h1>Welcome home</h1>
    <h2>subtitel</h2>
    <p>homepage</p>`;
}

function getWebComponentsPage(){
    return `<h1>Welcome to webcomponents</h1>
    <p>webcomponents</p>`;
}

function getLogoPage(){
    return `<h1>Loggor</h1>    
        <p>Riksorganisationen Auktoriserade Dramapedagoger (RAD) har en logga som används i all media. Främst ska den runda loggan användas men om den ska användas i mindre än 80px i höjd ska någon av de mindre loggorna användas.</p>
        <div class="flex-container">
            <div>
                <img src="/imgs/Logga RAD.png" alt="Logga för Riksorganisationen Auktoriserade Dramapedagoger" height="400">
                <br>
                <a href="/imgs/Logga RAD.png" download="Logga RAD">
                    <button class="function-btn">Ladda ner <i class="bi bi-download"></i></button>
                </a>
            </div>

            <div>
                <img src="/imgs/Logga RAD mindre.png" alt="Mindre logga för Riksorganisationen Auktoriserade Dramapedagoger" height="80">
                <br>
                <a href="/imgs/Logga RAD mindre.png" download="Logga RAD mindre">
                    <button class="function-btn">Ladda ner <i class="bi bi-download"></i></button>
                </a>
            </div>

            <div>
                <img src="/imgs/Logga RAD ruta.png" alt="Mindre logga i kvadrat för Riksorganisationen Auktoriserade Dramapedagoger" height="80">
                <br>
                <a href="/imgs/Logga RAD ruta.png" download="Logga RAD">
                    <button class="function-btn">Ladda ner <i class="bi bi-download"></i></button>
                </a>
            </div>
       </div>`
}

function getTextPage(){
    return `<h1>Rubriker och text</h1>
        <p>Dessa typsnitt och storlekar används över alla RAD:s webbplattformar. De typsnitt som används är "Raleway" och "Oswald". 
            Båda hämtas från <a href="https://fonts.google.com/" target="_blank"> Google APIs </a>. Om typsnitten inte funkar ska det falla tillbaka till "sans-serif"</p>
        <img src="/imgs/Exempel text.png" alt="Bild av typsnitt vid olika andvändningar, navigation, rubriker, brödtext och knappar">
        <h2>Kom igång</h2>
        <p>För att komma igång inkludera detta i projektet</p>
        <div class="code-container">
            <div class="code-block">
                <p><b>HTML:</b> Inkludera i &lt;head&gt;</p>
                <pre>
                    <code>    &lt;link rel&#x3D;&quot;preconnect&quot; href&#x3D;&quot;https:&#x2F;&#x2F;fonts.googleapis.com&quot;&gt;
    &lt;link rel&#x3D;&quot;preconnect&quot; href&#x3D;&quot;https:&#x2F;&#x2F;fonts.gstatic.com&quot; crossorigin&gt;
    &lt;link href&#x3D;&quot;https:&#x2F;&#x2F;fonts.googleapis.com&#x2F;css2?family&#x3D;Raleway:wght@100..900&amp;display&#x3D;swap&quot; rel&#x3D;&quot;stylesheet&quot;&gt;
    &lt;link href&#x3D;&quot;https:&#x2F;&#x2F;fonts.googleapis.com&#x2F;css2?family&#x3D;Oswald:wght@200..700&amp;family&#x3D;Raleway:wght@100..900&amp;display&#x3D;swap&quot; rel&#x3D;&quot;stylesheet&quot;&gt;</code>
                </pre>
                <button class="code-btn">Kopiera kod</button>
            </div>
            <div class="code-block">
                <p><b>CSS</b></p>
                <pre>
                    <code>/*Body text*/
body{
    font-family: "Raleway", sans-serif;
    font-style: normal;
    color: var(--text-color-dark);
}

/*Navigation font*/
nav{
    font-family: "Oswald", sans-serif;
    font-size: 1.2em;
    font-weight: 600;
}

/*Links inside the navigation */
nav a {
    text-decoration: none;
    color: var(--text-color-dark);
}

/* Headings*/
h1{
    font-family: "Oswald", sans-serif;
    font-weight: bold;
}
h2{
    font-family: "Oswald", sans-serif;
    font-weight: 400;
}
h3{
    font-family: "Oswald", sans-serif;
    font-weight: 300;
}

/* Special text */
.error-text{
    color: var(--text-color-error);
    font-weight: 600;
}

.btn-confirmation{
    font-size: small;
    margin: 0.3em; 
}

/* Buttons */
button{
    min-width: 48px;
    min-height: 48px;

    font-family: "Raleway", sans-serif;
    font-size: medium;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--text-color-light);

    background-color: var(--primary-color);
    border: none;
    border-radius: 0.75em;
    padding: 0.75em 1.25em;
    cursor: pointer;
}

button .dark{
background-color: var(--accent-color);
}

button:hover {
    background-color: var(--primary-color-darker);
    color: var(--text-color-light-btn-hover);
}

button .dark:hover{
    background-color: var(--accent-color-darker);
}</code>
                </pre>
                <button class="code-btn">Kopiera kod</button>
            </div>
        </div>
        <h2>Användning</h2>
        <p>Nedan visas exempel på hur de olika elementen används och ser ut i nuvarande webbläsare.</p>
        
        <h3>Rubriker</h3>
        <h1>Rubrik 1 används för titel på sidan</h1>
        <h2>Rubrik 2 används för underrubriker på sidan</h2>
        <h3>Rubrik 3 används i enstaka fall när det behövs ytterligare en nivå av underrubrik</h3>

        <hr>
        <h3>Brödtext</h3>
        <p>Brödtexten är den text som fyller ut sidan mest och innehåller informationen som användaren söker.</p>
        <p>En bra text är uppdelad i tydliga stycken och det inte blir för långa textrader, därav är det viktigt att se till att huvudelementet texten befinner sig i har en bekväm maxbredd.</p>
        <p>I flödande text kan länkar användas för att guida användaren till relevant info. Länkar som refererar till en annan domämn än den egna ska öppnas i ett separat flik, se då till att använda <code>target="_blank"</code> i HTML-elementet.</code></p>

        <hr>
        <h3>Knappar</h3>
        <button>Klicka mig</button>
        <p>Knappar används för flertalet olika situationer, så som formulär eller Call-to-Action element. För mer specifika situationer <a href="/#/button">läs mer här.</a></p>
        <p>Texten i knappar ska vara kort och tydlig, maximalt tre ord eller 15 tecken.</p>
        <p>En knapp kan aktivera en konfirmationstext om användaren behöver bli informerad att något skett. 
            En konfirmationstext kan vara att ett formulär skickats eller en fil laddats ner. Konfirmationstexten ska tydligt beskriva vad som skett. Använd klassen <code>btn-confirmation</code> på konfirmationstexten.</p>
        
        <hr>
        <h3>Special text</h3>
        <p class="error-text">Errormeddelande</p>
        <p>Om en text visar ett errormeddelande ska den texten använda classen <code>error-text</code>. Om errormeddelandet riskerar att hamna på en bakgrund som gör att det är svårt att läsa så ska en ljus bakgrund användas så som "--bg-color".</p>
`;
}

function getButtonPage(){
    return `<h1>Knappar</h1>
        <p>Knappar används för flertalet olika situationer, så som formulär eller Call-to-Action element. Beroende på funktion och placering används olika knappar på RAD:s webbplattformar.</p>
        <img src="imgs/exempel knappar.png" alt="Bild på hur knappar kan se ut i olika situationer">
        
        <h2>Kom igång</h2>
        <p>För att komma igång inkludera detta i projektet.</p>
        <div class="code-container">
            <div class="code-block">
                <p><b>CSS</b></p>
                <pre>
                    <code>/* Buttons */
button{
    min-width: 48px;
    min-height: 48px;

    font-family: "Raleway", sans-serif;
    font-size: medium;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--text-color-light);

    background-color: var(--primary-color);
    border: none;
    border-radius: 0.75em;
    padding: 0.75em 1.25em;
    cursor: pointer;
}

.function-btn{
    border-radius: 0;
}

.dark-btn{
    background-color: var(--accent-color);
}

.positive-btn{
    background-color: var(--secondary-color);
    color: var(--text-color-dark);
    border: solid 2px var(--primary-color);
}

.negative-btn{
    background-color: var(--negative-color-btn);
}

.neutral-btn{
    background-color: var(--neutral-color);
    color: var(--text-color-dark);
    font-size: small;
    border: solid 2px var(--neutral-color-darker);
}

button:hover, 
button:focus {
    background-color: var(--primary-color-darker);
    color: var(--text-color-light-btn-hover);
}

.dark-btn:hover,
.dark-btn:focus-within{
    background-color: var(--accent-color-darker);
}

.negative-btn:hover,
.negative-btn:focus-within{
    background-color: var(--negative-color-btn-darker);
}

.neutral-btn:hover,
.neutral-btn:focus-within{
    background-color: var(--neutral-color-darker);
}</code>
                </pre>
                <button class="code-btn">Kopiera kod</button>
            </div>
        </div>

        <h2>Användning</h2>
        <p>Nedan visas exempel på hur de olika elementen används och ser ut i nuvarande webbläsare.</p>
        
        <h3>Standard</h3>
        <button>Klicka mig</button>
        <p>Texten i knappar ska vara kort och tydlig, maximalt tre ord eller 15 tecken.</p>
        <p>En knapp kan aktivera en konfirmationstext om användaren behöver bli informerad att något skett. 
            En konfirmationstext kan vara att ett formulär skickats eller en fil laddats ner. Konfirmationstexten ska tydligt beskriva vad som skett. Använd klassen <code>btn-confirmation</code> på konfirmationstexten.</p>
        
        <hr>
        <h3>Alternativ färg</h3>
        <button class="dark-btn">Klicka mig</button>
        <p>Alternativt kan den mörkare varianten av knappen användas, här används <code>--accent-color</code> istället för <code>--primary-color</code>. </p>
        <p>Använd klassen <code>dark-btn</code> för att få denna styling.</p>

        <hr>
        <h3>Funktions knappar</h3>
        <button class="function-btn">Klicka mig <i class="bi bi-download"></i></button>
        <p>För att särskilja funktionsknappar från andra knappar används denna typ av knapp. 
            En funktionsknapp bör ha en ikon i sig för att det ska vara tydligt vad knappen gör.</p>
        
        <hr>
        <h3>Positiv knapp</h3>
        <button class="positive-btn">Klicka mig </button>
        <p>Positiva knappar används vid situationer användaren ska spara, skapa eller godkänna.</p>

        <hr>
        <h3>Negativ knapp</h3>
        <button class="negative-btn">Klicka mig</button>
        <p>Negativa knappar används vid situationer användaren ska ångra, ta bort eller avbryta något. Aktioner som permanent gör material otillgängligt.</p>

        <hr>
        <h3>Neutral knapp</h3>
        <button class="neutral-btn">Klicka mig</button>
        <p>Neutrala knappar används vid situationer när knappen bör finnas men inte ska väcka så mycket uppmärksamhet.</p>
`
}


const routes = {
    '#/': getHomePage,
    '#/web-components': getWebComponentsPage,
    '#/design-guidelines/text':getTextPage,
    '#/design-guidelines/logo':getLogoPage,
    '#/web-components/button':getButtonPage
};

function handleRoute() {
    const hash = window.location.hash || '#/'; // Default to home if no hash
    const content = routes[hash] ? routes[hash]() : '<h1>Page Not Found</h1>';
    //document.getElementById('content').innerHTML = content;
}

// Listen for navigation events
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

// Om man klickar på en code-btn ska man kopiera ovanstående kodtext
document.addEventListener('click', function(event) {
    // Kontrollera om det som klickades är en code-btn
    if (event.target.classList.contains('code-btn')) {

        // Hitta närmaste code-block
        const codeBlock = event.target.closest('.code-block');

        // Hitta code-elementet inuti blocket
        const codeElement = codeBlock.querySelector('code');

        if(!codeElement) return;

        // Hämta texten
        const codeText = codeElement.textContent;

        if(!codeText){

        }

        // Kopiera till clipboard
        navigator.clipboard.writeText(codeText);

        // Ta bort tidigare konfirmationer av kopieringar
        const earlierConfirmations = document.querySelectorAll(".btn-confirmation");
        for(let earlier of earlierConfirmations){
            earlier.remove();
        }

        // Lägger till en konfirmering av kopiering av kod
        const copyConfirmedElement = document.createElement("p");
        copyConfirmedElement.classList.add("btn-confirmation");
        copyConfirmedElement.innerText = `Kod kopierad`;
        codeBlock.appendChild(copyConfirmedElement);
        console.log('Kopierad kod:', codeText);
    }
});

