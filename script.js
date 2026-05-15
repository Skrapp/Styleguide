// Sidbyggare - bygger sidor från konfiguration istället för repeterad HTML
function buildPage(config) {
    let html = `<h1>${config.title}</h1>`;
    html += `<p>${config.description}</p>`;
    
    if (config.image) {
        html += `<img class="example-img" src="${config.image.src}" alt="${config.image.alt}">`;
    }
    
    if (config.codeExamples && config.codeExamples.length > 0) {
        html += `<h2>Kom igång</h2>`;
        html += `<p>${config.getStartedText || 'För att komma igång inkludera detta i projektet'}</p>`;
        html += `<div class="code-container">`;
        
        config.codeExamples.forEach(example => {
            html += `<div class="code-block">`;
            html += `<p><b>${example.label}</b></p>`;
            html += `<pre><code>${example.code}</code></pre>`;
            html += `<button class="code-btn">Kopiera kod</button>`;
            html += `</div>`;
        });
        
        html += `</div>`;
    }
    
    if (config.usageHtml && (Array.isArray(config.usageHtml) ? config.usageHtml.length > 0 : true)) {
        html += `<h2>Användning</h2>`;
        html += `<p>${config.usageIntroText || 'Nedan visas exempel på hur de olika elementen används och ser ut i nuvarande webbläsare.'}</p>`;

        if (Array.isArray(config.usageHtml)) {
            config.usageHtml.forEach(section => {
                html += `<div class="usage-container">`
                if (section.title) {
                    html += `<h3>${section.title}</h3>`;
                }
                if (section.element) {
                    html += section.element;
                }
                if (section.description) {
                    html += `<div class="usage-description">${section.description}</div>`;
                }
                html += `</div>`
            });
        } else {
            html += config.usageHtml;
        }
    }
    
    return html;
}

// ============ Page Configs ============

const textPageConfig = {
    title: 'Rubriker och text',
    description: 'Dessa typsnitt och storlekar används över alla RAD:s webbplattformar. De typsnitt som används är "Raleway" och "Oswald". Båda hämtas från <a href="https://fonts.google.com/" target="_blank"> Google APIs </a>. Om typsnitten inte funkar ska det falla tillbaka till "sans-serif"',
    image: {
        src: '/imgs/Exempel text.png',
        alt: 'Bild av typsnitt vid olika andvändningar, navigation, rubriker, brödtext och knappar'
    },
    codeExamples: [
        {
            label: 'HTML: Inkludera i &lt;head&gt;',
            code: `    &lt;link rel&#x3D;&quot;preconnect&quot; href&#x3D;&quot;https:&#x2F;&#x2F;fonts.googleapis.com&quot;&gt;
    &lt;link rel&#x3D;&quot;preconnect&quot; href&#x3D;&quot;https:&#x2F;&#x2F;fonts.gstatic.com&quot; crossorigin&gt;
    &lt;link href&#x3D;&quot;https:&#x2F;&#x2F;fonts.googleapis.com&#x2F;css2?family&#x3D;Raleway:wght@100..900&amp;display&#x3D;swap&quot; rel&#x3D;&quot;stylesheet&quot;&gt;
    &lt;link href&#x3D;&quot;https:&#x2F;&#x2F;fonts.googleapis.com&#x2F;css2?family&#x3D;Oswald:wght@200..700&amp;family&#x3D;Raleway:wght@100..900&amp;display&#x3D;swap&quot; rel&#x3D;&quot;stylesheet&quot;&gt;`
        },
        {
            label: 'CSS',
            code: `/*Body text*/
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
}`
        }
    ],
    usageHtml: [
        {
            title: 'Rubriker',
            element: `<h1>Rubrik 1 används för titel på sidan</h1>
                      <h2>Rubrik 2 används för underrubriker på sidan</h2>
                      <h3>Rubrik 3 används i enstaka fall när det behövs ytterligare en nivå av underrubrik</h3>`,
            description: ''
        },
        {
            title: 'Brödtext',
            element: `<p>Brödtexten är den text som fyller ut sidan mest och innehåller informationen som användaren söker.</p>
                      <p>En bra text är uppdelad i tydliga stycken och det inte blir för långa textrader, därav är det viktigt att se till att huvudelementet texten befinner sig i har en bekväm maxbredd.</p>
                      <p>I flödande text kan länkar användas för att guida användaren till relevant info. Länkar som refererar till en annan domämn än den egna ska öppnas i ett separat flik, se då till att använda <code>target="_blank"</code> i HTML-elementet.</p>`,
            description: ''
        },
        {
            title: 'Knappar',
            element: `<button>Klicka mig</button>`,
            description: `<p>Knappar används för flertalet olika situationer, så som formulär eller Call-to-Action element. För mer specifika situationer <a href="/#/button">läs mer här.</a></p>
                          <p>Texten i knappar ska vara kort och tydlig, maximalt tre ord eller 15 tecken.</p>
                          <p>En knapp kan aktivera en konfirmationstext om användaren behöver bli informerad att något skett. En konfirmationstext kan vara att ett formulär skickats eller en fil laddats ner. Konfirmationstexten ska tydligt beskriva vad som skett. Använd klassen <code>btn-confirmation</code> på konfirmationstexten.</p>`
        },
        {
            title: 'Special text',
            element: `<p class="error-text">Errormeddelande</p>`,
            description: `<p>Om en text visar ett errormeddelande ska den texten använda classen <code>error-text</code>. Om errormeddelandet riskerar att hamna på en bakgrund som gör att det är svårt att läsa så ska en ljus bakgrund användas så som "--bg-color".</p>`
        }
    ]
};

const buttonPageConfig = {
    title: 'Knappar',
    description: 'Knappar används för flertalet olika situationer, så som formulär eller Call-to-Action element. Beroende på funktion och placering används olika knappar på RAD:s webbplattformar.',
    image: {
        src: 'imgs/exempel knappar.png',
        alt: 'Bild på hur knappar kan se ut i olika situationer'
    },
    codeExamples: [
        {
            label: 'CSS',
            code: `/* Buttons */
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

button.dark{
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

    transition: background 0.2s ease;

}

button.dark:hover,
button.dark:focus-within{
    background-color: var(--accent-color-darker);
}

.negative-btn:hover,
.negative-btn:focus-within{
    background-color: var(--negative-color-btn-darker);
}

.neutral-btn:hover,
.neutral-btn:focus-within{
    background-color: var(--neutral-color-darker);
}`
        }
    ],
    usageHtml: [
        {
            title: 'Standard',
            element: `<button>Klicka mig</button>`,
            description: `<p>Texten i knappar ska vara kort och tydlig, maximalt tre ord eller 15 tecken.</p>
                          <p>En knapp kan aktivera en konfirmationstext om användaren behöver bli informerad att något skett. En konfirmationstext kan vara att ett formulär skickats eller en fil laddats ner. Konfirmationstexten ska tydligt beskriva vad som skett. Använd klassen <code>btn-confirmation</code> på konfirmationstexten.</p>`
        },
        {
            title: 'Alternativ färg',
            element: `<button class="dark">Klicka mig</button>`,
            description: `<p>Alternativt kan den mörkare varianten av knappen användas, här används <code>--accent-color</code> istället för <code>--primary-color</code>.</p>
                          <p>Använd klassen <code>dark</code> för att få denna styling.</p>`
        },
        {
            title: 'Funktionsknappar',
            element: `<button class="function-btn">Klicka mig <i class="bi bi-download"></i></button>`,
            description: `<p>För att särskilja funktionsknappar från andra knappar används denna typ av knapp. En funktionsknapp bör ha en ikon i sig för att det ska vara tydligt vad knappen gör.</p>`
        },
        {
            title: 'Positiv knapp',
            element: `<button class="positive-btn">Klicka mig</button>`,
            description: `<p>Positiva knappar används vid situationer användaren ska spara, skapa eller godkänna.</p>`
        },
        {
            title: 'Negativ knapp',
            element: `<button class="negative-btn">Klicka mig</button>`,
            description: `<p>Negativa knappar används vid situationer användaren ska ångra, ta bort eller avbryta något. Aktioner som permanent gör material otillgängligt.</p>`
        },
        {
            title: 'Neutral knapp',
            element: `<button class="neutral-btn">Klicka mig</button>`,
            description: `<p>Neutrala knappar används vid situationer när knappen bör finnas men inte ska väcka så mycket uppmärksamhet.</p>`
        }
    ]
};

const tablePageConfig = {
    title: 'Tabeller',
    description: 'RAD använder två olika typer av tabeller, en för fåtal kolumner och en för många kolumner.',
    image: {
        src: '/imgs/exempel tabell.png',
        alt: 'Bild på två exempel av tabeller'
    },
    codeExamples: [
        {
            label: 'HTML: struktur av tabell',
            code: `&lt;div class=&quot;table-wrapper&quot;&gt;
    &lt;table class="class-name"&gt;
        &lt;thead&gt;
            &lt;tr&gt;
                &lt;th&gt;titel1&lt;/th&gt;
                &lt;th&gt;titel2&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;
            &lt;tr&gt;
                &lt;td&gt;data1.1&lt;/td&gt;
                &lt;td&gt;data1.2&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;`
        },
        {
            label: 'CSS',
            code: `/* Table */
table {
    min-width: 400px;
    border-collapse: separate;
    border-spacing: 0;
    overflow: hidden;

    background-color: white;

    border-radius: 1em;
}
    
/* Wrapper for horizontal scrolling */
.table-wrapper {
    overflow-x: scroll;
}

/* Header */
thead {
    background-color: var(--primary-color);
    color: var(--text-color-light);
}

td, th{
    padding: 1rem 0.5rem 0.5rem;
}

th {
    text-align: left;
    font-weight: bold;
}

/* Body */
td {
    border-bottom: solid 1px var(--neutral-color);
    border-left: solid 1px var(--neutral-color);
}

/* Zebra stripes */
tbody tr:nth-child(even) {
    background-color: var(--neutral-color-lighter);
}

/* Hover effect */
tbody tr:hover {
    background-color: var(--neutral-color);
    transition: background 0.2s ease;
}

tbody tr:hover td {
    border-left-color: var(--neutral-color-lighter);
}
/* No left border on first column */
tbody td:first-child{
    border-left: none;
}

/* No bottom border on last row */
tbody tr:last-child td {
    border-bottom: none;
}

table.dark thead{
    background-color: var(--accent-color);
}

.airy-table th{
    padding: 2rem 5vw 1rem;
    text-align: center;
}
.airy-table td{
    border-left: none;
    padding: 2rem 5vw;
    text-align: center;
}

.compact-table{
    border-radius: 0.5em;
}

.compact-table th,
.compact-table td{
    padding: 0.3rem 0.3rem;
}`
        }
    ],
    usageHtml: [
        {
            title: 'Standard',
            element: `<div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Boktitel</th>
                                <th>Författare</th>
                                <th>Pris</th>
                                <th>Sidor</th>
                                <th>År</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rollspel i teori och praktik</td>
                                <td>Björn Nilsson,Anna-Karin Waldemarson</td>
                                <td>150 kr</td>
                                <td>146</td>
                                <td>1988</td>
                            </tr>
                            <tr>
                                <td>Skapa vidd</td>
                                <td>Håkan Sandh (red)</td>
                                <td>200 kr</td>
                                <td>103</td>
                                <td>2003</td>
                            </tr>
                            <tr>
                                <td>Kreativa metoder</td>
                                <td>Katrin Byréus</td>
                                <td>200 kr</td>
                                <td>232</td>
                                <td>2012</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`,
            description: `<p>Som standard används denna styling, en balans mellan luftighet och kompakt.</p>
                          <p>Denna styling kräver ingen klass, se till att använda rätt struktur när du bygger upp tabellerna. 
                          Observera att <code>table</code> är inbäddad i en <code>div class="table-wrapper"</code>.</p>`
        },
        {
            title: 'Fåtal kolumner',
            element: `<div class="table-wrapper">
            <table class="airy-table">
                        <thead>
                            <tr>
                                <th>Medlemskap</th>
                                <th>Auktoriserad</th>
                                <th>Årsavgift</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Standard</td>
                                <td>Ja</td>
                                <td>350 kr</td>
                            </tr>
                            <tr>
                                <td>Student</td>
                                <td>Nej</td>
                                <td>150 kr</td>
                            </tr>
                            <tr>
                                <td>Pensionär</td>
                                <td>Nej</td>
                                <td>150 kr</td>
                            </tr>
                        </tbody>
                    </table></div>`,
            description: `<p>Denna styling används för kolumner med tre eller färre kolumner. Denna styling har mer luft. Tänk på att inte använda för mycket text i blocken.</p>
                          <p>Använd klassen <code>airy-table</code> på table elementet för att använda denna styling.</p>`
        },
        {
            title: 'Kompakt',
            element: `<div class="table-wrapper"><table class="compact-table">
                        <thead>
                            <tr>
                                <th>Övning</th>
                                <th>Syfte</th>
                                <th>Åldersgrupp</th>
                                <th>Tidsåtgång</th>
                                <th>Material</th>
                                <th>Fokusområde</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Statyövning</td>
                                <td>Träna kroppsspråk och samarbete</td>
                                <td>10-15 år</td>
                                <td>20 min</td>
                                <td>Inget</td>
                                <td>Icke-verbal kommunikation</td>
                            </tr>
                            <tr>
                                <td>Forumspel</td>
                                <td>Utforska konflikter och lösningar</td>
                                <td>13-18 år</td>
                                <td>45 min</td>
                                <td>Stolar och öppet golv</td>
                                <td>Konflikthantering</td>
                            </tr>
                            <tr>
                                <td>Improvisation</td>
                                <td>Utveckla spontanitet och kreativitet</td>
                                <td>Alla åldrar</td>
                                <td>30 min</td>
                                <td>Inget</td>
                                <td>Kreativt uttryck</td>
                            </tr>
                        </tbody>
                    </table></div>`,
            description: `<p>Denna styling används för tabeller med mycket info och/eller många kolumner.</p>
                          <p>Använd klassen <code>compact-table</code> på table elementet för att använda denan styling.</p>`
        },
        {
            title: 'Alternativ färg',
            element: `<div class="table-wrapper"><table class="dark">
                        <thead>
                            <tr>
                                <th>Övning</th>
                                <th>Syfte</th>
                                <th>Fokusområde</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Statyövning</td>
                                <td>Träna kroppsspråk och samarbete</td>
                                <td>Icke-verbal kommunikation</td>
                            </tr>
                            <tr>
                                <td>Forumspel</td>
                                <td>Utforska konflikter och lösningar</td>
                                <td>Konflikthantering</td>
                            </tr>
                            <tr>
                                <td>Improvisation</td>
                                <td>Utveckla spontanitet och kreativitet</td>
                                <td>Kreativt uttryck</td>
                            </tr>
                        </tbody>
                    </table></div>`,
            description: `<p>Alla tabeller kan få en annan färg. Inkludera klassen <code>dark</code> på table elementet.</p>`
        }
    ]
};

const menuPageConfig = {
    title: 'Menyer',
    description: 'Navigation sker främst i huvudmenyn.',
    image: {
        src: 'imgs/exempel meny.png',
        alt: 'Bild på navigationsmenyn på denna sida'
    },
    codeExamples: [
        {
            label: 'HTML: struktur av huvudmeny',
            code: `&lt;header&gt;
    &lt;nav&gt;
        &lt;img   src=&quot;/imgs/Logga RAD ruta.png&quot; alt=&quot;RAD logga&quot; height=&quot;70&quot;&gt;
        &lt;a href=&quot;#&quot; id=&quot;home-nav&quot;&gt;Hem&lt;/a&gt;
        &lt;a href=&quot;länk&quot; id=&quot;navigation-1-nav&quot;&gt;Navigation1&lt;/a&gt;
        &lt;div class=&quot;dropdown&quot;&gt;
            &lt;a class=&quot;dropbtn&quot; id=&quot;navigation-2-nav&quot;
                href=&quot;länk&quot;&gt;Navigation2 &lt;i class=&quot;bi bi-caret-down-fill&quot;&gt;&lt;/i&gt;
            &lt;/a&gt;                
            &lt;div class=&quot;dropdown-content&quot;&gt;
                &lt;a href=&quot;länk&quot; id=&quot;navigation-3-nav&quot;&gt;Navigation3&lt;/a&gt;
                &lt;a href=&quot;länk&quot; id=&quot;navigation-4-nav&quot;&gt;Navigation4&lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/nav&gt;
&lt;/header&gt;`
        },
        {
            label: 'CSS',
            code: `/*Sticky header*/
header{
    position: sticky;
    top: 0;
}

/*Navigation menu*/
nav{
    font-family: Oswald, sans-serif;
    font-size: 1.2em;
    font-weight: 600;
    text-align: center;

    background-color:var(--secondary-color);

    display: flex;
    align-items: center;
    justify-content: center;
}

/* Links inside the navbar 
Set transparant border*/
nav a {
    text-decoration: none;
    color: var(--text-color-dark);
    
    padding: 1em;
    border-width: 0.4em;
    border-style: none none solid none;
    border-color: transparent;
}

/* The dropdown container */
.dropdown {
    position: relative;
}

/* Dropdown button */
.dropdown .dropbtn {
    display: block;
}

/* Add a bordercolor to navbar links on hover */
nav a:hover,
nav a:focus-within {
    color: var(--text-focus-btn);
    border-style: none none solid none;
    border-color: var(--primary-color);
}

/* Dropdown content (hidden by default) */
.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--neutral-color-lighter);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
    font-size: 1em;
    font-weight: 500;
    text-decoration: none;
    display: block;
    text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover,
.dropdown-content a:focus-within{
    background-color: var(--neutral-color);
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content, 
.dropdown:focus-within .dropdown-content {
    display: block;
}`
        }
    ],
    usageHtml: [
        {
            title:`Menyn`,
            element: `<nav>
                    <img   src="/imgs/Logga RAD ruta.png" alt="RAD logga" height="70">
                    <a href="#menu">Simpel länk</a>

                    <div class="dropdown">
                        <a class="dropbtn"  
                            href="#menu">Gardin <i class="bi bi-caret-down-fill"></i></a>
                        <div class="dropdown-content">
                            <a href="#menu">Simpel länk</a>
                            <a href="#menu">Simpel länk</a>
                        </div>
                    </div>
                </nav>`,

            description: `<p>Menyn ska innehålla loggan och länkar till olika sidor på webbplatsen. Man kan använda 
                antingen simpla länkar eller dropdown element (som även de kan vara länkar). 
                </p>
                <p>Texten för varje länk ska inte vara lång, max 2 ord eller max 15 tecken. 
                    Texten ska tydligt beskriva vart användaren kommer när den länkas vidare
                </p>
                <p>
                    Se till att använda korrekt struktur när menyn byggs upp. Menyn består flera <code>&lt;a&gt;</code> element inne i en <code>&lt;nav&gt;</code> som är inne i <code>&lt;header&gt;</code>.
                </p>`
        },
        {    
            title: `Simpel länk`,
            element: `<nav>
                    <a href="#simple">Simpel länk</a>
                    <a href="#simple">Simpel länk</a>
                </nav>`,
            description: `<p>En simple länk används om sidan inte har några viktiga undersidor</p>
                <p>Simpla länkar behöver inga speciella klasser för att fungera.</p>`

        },
        {
            title: `Gradin element`,
            element:`<nav>
                    <div class="dropdown">
                        <a class="dropbtn"  
                            href="#dropdown">Gardin <i class="bi bi-caret-down-fill"></i></a>
                        <div class="dropdown-content">
                            <a href="#dropdown">Simpel länk</a>
                            <a href="#dropdown">Simpel länk</a>
                        </div>
                    </div>
                </nav>`,
            description: `<p>Gardin element används när det finns en eller flera undersidor till en sida.</p>
            <p>För att implementera används klassen <code>dropbox</code> på hela elementet, 
            klassen <code>dropbtn</code> på länken med högst hiarki och 
            klassen <code>dropdown-content</code> på elementet som innehåller alla undersidor.</p>`
        },
    ]
};

const colorSchemePageConfig = {
    title: 'Färgschema',
    description: 'RAD använder ett färgschema för att ha en enhetlig look som känns igen av de som kommer i kontakt med RAD.',
    image: {
        src: 'imgs/färgschema.png',
        alt: 'Bild på de met använda färgerna för RAD'
    },
    codeExamples: [
        {
            label: 'CSS',
            code: `/* Light mode - default */
:root{
    --bg-color: rgb(244, 242, 234);
    --primary-color:rgb(255, 179, 25);
    --primary-color-darker:rgb(224, 143, 22);
    --secondary-color:rgb(255, 225, 148);
    --neutral-color:rgb(211, 211, 211);
    --neutral-color-lighter:rgb(241, 241, 241);
    --neutral-color-darker:rgb(128, 128, 128);
    --accent-color:rgb(22, 65, 106);
    --accent-color-darker:rgb(12, 29, 44);
    --text-focus-btn:rgb(106, 62, 22);
    --text-color-dark:rgb(19, 19, 19);
    --text-color-light:rgb(252, 252, 252);
    --text-color-light-btn-hover:rgb(243, 243, 243);
    --text-color-error:rgb(216, 37, 37);
    --negative-color-btn:rgb(185, 52, 52);
    --negative-color-btn-darker:rgb(131, 37, 37);
}`
        }
    ],
    usageHtml: [
        {
            title: 'Färgschema',
            element: `<p>Färgschemat kan återfinnas genom flera element. När nya element ska designas ska man utgå från dessa variabler</p>
                      <table>
                          <thead>
                              <tr>
                                  <th>Färgkod</th>
                                  <th>Variabelnamn</th>
                                  <th>Exempel</th>
                                  <th>Användning</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>rgb(244, 242, 234)</td>
                                  <td>--bg-color</td>
                                  <td style="background-color: var(--bg-color); min-width: 4em;"></td>
                                  <td>Bakgrundsfärg för <code>body</code></td>
                              </tr>
                              <tr>
                                  <td>rgb(255, 179, 25)</td>
                                  <td>--primary-color</td>
                                  <td style="background-color: var(--primary-color); min-width: 4em;"></td>
                                  <td>Primär färg för designelement, står</td>
                              </tr>
                              <tr>
                                  <td>rgb(224, 143, 22)</td>
                                  <td>--primary-color-darker</td>
                                  <td style="background-color: var(--primary-color-darker); min-width: 4em;"></td>
                                  <td>Mörkare variant av primär färg, används främst när knappar i primärfärg hovras över</td>
                              </tr>
                              <tr>
                                  <td>rgb(255, 225, 148)</td>
                                  <td>--secondary-color</td>
                                  <td style="background-color: var(--secondary-color); min-width: 4em;"></td>
                                  <td>Sekundär färg, används främst som bakgrundsfärg för block</td>
                              </tr>
                              <tr>
                                  <td>rgb(211, 211, 211)</td>
                                  <td>--neutral-color</td>
                                  <td style="background-color: var(--neutral-color); min-width: 4em;"></td>
                                  <td>Neutral färg för kantlinjer och bakgrunder</td>
                              </tr>
                              <tr>
                                  <td>rgb(241, 241, 241)</td>
                                  <td>--neutral-color-lighter</td>
                                  <td style="background-color: var(--neutral-color-lighter); min-width: 4em;"></td>
                                  <td>Ljusare neutral färg för bakgrunder och kort</td>
                              </tr>
                              <tr>
                                  <td>rgb(128, 128, 128)</td>
                                  <td>--neutral-color-darker</td>
                                  <td style="background-color: var(--neutral-color-darker); min-width: 4em;"></td>
                                  <td>Mörkare neutral färg för text och detaljer</td>
                              </tr>
                              <tr>
                                  <td>rgb(22, 65, 106)</td>
                                  <td>--accent-color</td>
                                  <td style="background-color: var(--accent-color); min-width: 4em;"></td>
                                  <td>Accentfärg som används för att skapa kontrast</td>
                              </tr>
                              <tr>
                                <td>rgb(12, 29, 44)</td>
                                <td>--accent-color-darker</td>
                                <td style="background-color: var(--accent-color-darker); min-width: 4em;"></td>
                                <td>Mörkare variant av accentfärg, används främst när knappar i accentfärg hovras över</td>
                            </tr>
                            <tr>
                                <td>rgb(106, 62, 22)</td>
                                <td>--text-focus-btn</td>
                                <td style="background-color: var(--text-focus-btn); min-width: 4em;"></td>
                                <td>En färg för att indikera att länkar i menyn hovras över</td>
                            </tr>
                            <tr>
                                <td>rgb(19, 19, 19)</td>
                                <td>--text-color-dark</td>
                                <td style="background-color: var(--text-color-dark); min-width: 4em;"></td>
                                <td>En mörk textfärg, är den primära färgen för text</td>
                            </tr>
                            <tr>
                                <td>rgb(252, 252, 252)</td>
                                <td>--text-color-light</td>
                                <td style="background-color: var(--text-color-light); min-width: 4em;"></td>
                                <td>En ljus textfärg, används när bakgrunden är mörkare, som <code>--accent-color</code>, <code>--accent-color-darker</code>, även i fetstil för knappar i <code>--primary-color</code></td>
                            </tr>
                            <tr>
                                <td>rgb(243, 243, 243)</td>
                                <td>--text-color-light-btn-hover</td>
                                <td style="background-color: var(--text-color-light-btn-hover); min-width: 4em;"></td>
                                <td>En något mörkare variant av <code>--text-color-light</code>, används främst när knappar med ljus textfärg hovras över</td>
                            </tr>
                            <tr>
                                <td>rgb(216, 37, 37)</td>
                                <td>--text-color-error</td>
                                <td style="background-color: var(--text-color-error); min-width: 4em;"></td>
                                <td>Textfärg för korta errormeddelande</td>
                            </tr>
                            <tr>
                                <td>rgb(185, 52, 52)</td>
                                <td>--negative-color-btn</td>
                                <td style="background-color: var(--negative-color-btn); min-width: 4em;"></td>
                                <td>En färg när knappar med avbrytande funktionalitet</td>
                            </tr>
                            <tr>
                                <td>rgb(131, 37, 37)</td>
                                <td>--negative-color-btn-darker</td>
                                <td style="background-color: var(--negative-color-btn-darker); min-width: 4em;"></td>
                                <td>En färg för knappar med färgen <code>--negative-color-btn</code> hovras över</td>
                            </tr>
                          </tbody>
                      </table>`,
            description: ''
        }
    ]
                
    
};

const formPageConfig = {
    title: 'Formulär',
    description: 'Formulär används för kommentarsfält, kontaktformulär och anmälningar till evenemang.',
    image: {
        src: '/imgs/Exempel formulär.png',
        alt: 'Bild av ett kontaktformulär med fälten e-post, ämne, meddelande och bilaga'
    },
    codeExamples: [
        {
            label: 'HTML: struktur av formulär',
            code: `&lt;form action=&quot;url&quot;data-success-title="Valfri titel" data-success-message="Valfritt meddelande"&gt;
    &lt;fieldset&gt;
        &lt;legend&gt; Kontakta oss &lt;/legend&gt;
        &lt;div class=&quot;form-row&quot;&gt;
            &lt;label for=&quot;name&quot;&gt;Namn&lt;/label&gt;
            &lt;input type=&quot;text&quot; id=&quot;name&quot; name=&quot;name&quot; placeholder=&quot;Namn&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-row&quot;&gt;
            &lt;label for=&quot;email&quot;&gt;E-post&lt;/label&gt;
            &lt;input type=&quot;email&quot; id=&quot;email&quot; name=&quot;email&quot; placeholder=&quot;namn@exempel.se&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-row&quot;&gt;
            &lt;label for=&quot;topic&quot;&gt;Ämne&lt;/label&gt;
            &lt;select id=&quot;topic&quot; name=&quot;topic&quot;&gt;
                &lt;option value=&quot;&quot;&gt;Välj ett ämne&lt;/option&gt;
                &lt;option value=&quot;support&quot;&gt;Support&lt;/option&gt;
                &lt;option value=&quot;feedback&quot;&gt;Feedback&lt;/option&gt;
                &lt;option value=&quot;collaboration&quot;&gt;Samarbete&lt;/option&gt;
            &lt;/select&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-row&quot;&gt;
            &lt;label&gt;Prioritet&lt;/label&gt;
            &lt;div class=&quot;radio-group&quot;&gt;
                &lt;label&gt;&lt;input type=&quot;radio&quot; name=&quot;priority&quot; value=&quot;low&quot;&gt; Låg&lt;/label&gt;
                &lt;label&gt;&lt;input type=&quot;radio&quot; name=&quot;priority&quot; value=&quot;normal&quot;&gt; Normal&lt;/label&gt;
                &lt;label&gt;&lt;input type=&quot;radio&quot; name=&quot;priority&quot; value=&quot;high&quot;&gt; Hög&lt;/label&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-row&quot;&gt;
            &lt;label&gt;Nyhetsbrev&lt;/label&gt;
            &lt;div class=&quot;checkbox-group&quot;&gt;
                &lt;label&gt;&lt;input type=&quot;checkbox&quot; id=&quot;newsletter&quot; name=&quot;newsletter&quot;&gt; Ja tack, skicka nyheter&lt;/label&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-row&quot;&gt;
            &lt;label for=&quot;message&quot;&gt;Meddelande&lt;/label&gt;
            &lt;textarea id=&quot;message&quot; name=&quot;message&quot; rows=&quot;5&quot; placeholder=&quot;Skriv ditt meddelande här...&quot;&gt;&lt;/textarea&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-row&quot;&gt;
            &lt;label for=&quot;file&quot;&gt;Bilaga&lt;/label&gt;
            &lt;input type=&quot;file&quot; id=&quot;file&quot; name=&quot;file&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-actions&quot;&gt;
            &lt;input type=&quot;submit&quot; class=&quot;button positive-btn&quot; value=&quot;Skicka&quot;&gt;
            &lt;button type=&quot;reset&quot; class=&quot;button neutral-btn&quot;&gt;Rensa&lt;/button&gt;
        &lt;/div&gt;
    &lt;/fieldset&gt;
&lt;/form&gt;`
        },
        {
            label: 'CSS',
            code: `/*Form*/
form{
    width: 100%;
}
form fieldset{
    border: solid 1px var(--neutral-color);
    border-radius: 1em;
    padding: 1em;
    margin: 0.2em 0 5% 0;
}

form .form-row {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
    margin-bottom: 1.2em;
}

form legend {
    padding: 0 0.75em;
    font-weight: 700;
}

form label {
    font-weight: 600;
}

/* Form inputs */
form input[type="text"],
form input[type="email"],
form input[type="tel"],
form input[type="password"],
form input[type="date"],
form input[type="number"],
form input[type="file"],
form select,
form textarea {
    width: 100%;
    border: solid 1px var(--primary-color);
    border-radius: 1em;
    padding: 1em;
    margin-top: 0.2em;
    font-family: inherit;
    font-size: 1rem;
    background-color: white;
}

form input[type="file"]:hover,
form input[type="file"]:focus {
    background-color: var(--neutral-color-lighter);
    cursor: pointer;
}

.radio-group,
.checkbox-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25em;
    align-items: center;
    margin-top: 0.2em;
}

.radio-group label,
.checkbox-group label {
    font-weight: normal;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1em;
    flex-wrap: wrap;
    margin-top: 1em;
}

form input:focus,
form select:focus,
form textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 0.35rem rgba(255, 179, 25, 0.18);
}
 
/* Buttons */
button, 
.button,
input[type="file"]::file-selector-button{
    min-width: 48px;
    min-height: 48px;

    font-family: Raleway, sans-serif;
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

input[type="file"]::file-selector-button,
.function-btn{
    font-size: small;
    padding: 0em 1em;
    border-radius: 0;
}

.neutral-btn{
    background-color: var(--neutral-color);
    color: var(--text-color-dark);
    font-size: small;
    border: solid 2px var(--neutral-color-darker);
}

button:hover, 
.button:hover, 
button:focus,
.button:focus {
    background-color: var(--primary-color-darker);
    color: var(--text-color-light-btn-hover);
    
    transition: background 0.2s ease;
}

.neutral-btn:hover,
.neutral-btn:focus-within{
    background-color: var(--neutral-color-darker);
}`
        },
        {
            label:`JavaScript`,
            code:`//Byt ut formuläret mot ett meddelande
document.addEventListener(&apos;submit&apos;, function(event) {
    // Om det inte är ett formulär, gör ingenting
    if (!event.target.matches(&apos;form&apos;)) return;
    
    //Laddar inte om sidan
    event.preventDefault(); 

    const form = event.target;

    //Om det inte finns data-success-title eller data-success-message används default
    const successTitle = form.dataset.successTitle || &apos;Tack!&apos;;
    const successMessage = form.dataset.successMessage || &apos;Formuläret har skickats.&apos;;

    const successElement= document.createElement(&apos;div&apos;);
    successElement.className = &apos;form-success&apos;;
    successElement.innerHTML = &#96;&lt;h2&gt;&#36;{successTitle}&lt;/h2&gt;
        &lt;p&gt;&#36;{successMessage}&lt;/p&gt;&#96;;

    form.replaceWith(successElement);
});`
        }
    ],
    usageHtml: [
        {
            title:`Generellt`,
            element:`<form data-success-title="Tack för att du kontaktar oss!" data-success-message="Vi har tagit emot ditt mail, en kopia av det som skickats skickas även till din mail.">
                    <fieldset>
                        <legend> Kontakta oss </legend>
                        <div class="form-row">
                            <label for="name">Namn</label>
                            <input type="text" id="name" name="name" placeholder="Namn" required>
                        </div>
                        <div class="form-row">
                            <label for="email">E-post</label>
                            <input type="email" id="email" name="email" placeholder="namn@exempel.se" required>
                        </div>
                        <div class="form-row">
                            <label for="topic">Ämne</label>
                            <select id="topic" name="topic">
                                <option value="">Välj ett ämne</option>
                                <option value="support">Support</option>
                                <option value="feedback">Feedback</option>
                                <option value="collaboration">Samarbete</option>
                            </select>
                        </div>
                        <div class="form-row">
                            <label>Prioritet</label>
                            <div class="radio-group">
                                <label><input type="radio" name="priority" value="low"> Låg</label>
                                <label><input type="radio" name="priority" value="normal"> Normal</label>
                                <label><input type="radio" name="priority" value="high"> Hög</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <label>Nyhetsbrev</label>
                            <div class="checkbox-group">
                                <label><input type="checkbox" id="newsletter" name="newsletter"> Ja tack, skicka nyheter</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <label for="message">Meddelande</label>
                            <textarea id="message" name="message" rows="5" placeholder="Skriv ditt meddelande här..." required></textarea>                        </div>
                        <div class="form-row">
                            <label for="file">Bilaga</label>
                            <input type="file" id="file" name="file">
                        </div>
                        <div class="form-actions">
                            <input type="submit" class="button positive-btn" value="Skicka">
                            <button type="reset" class="button neutral-btn">Rensa</button>
                        </div>
                    </fieldset>
                </form>`,
            description: `<p>Bygg upp formuläret enligt vilka element som behövs. Följ strukturen som visas ovan.</p>

            <p>Varje svarsrad ska vara inbäddade i en <code>div class="form-row"</code>.</p>
            
            <p>Varje grupp av radioknappar eller checkboxar ska vara inbäddare i en <code>div class="radio-group"</code> respektive <code>div class="checkbox-group"</code>.</p>
            
            <p>Aktionsknappar så som "Skicka" eller "Rensa" ska vara placerade längst ner och vara inbäddade i en <code>div class="form-action-btns"</code>.</p>
            
            <p>När "Submit" knappen aktiveras byts formuläret ut av ett meddelande. Om inget annat nämns är meddelandet Titel:"Tack" Meddelande:"Formuläret har skickats.". 
            Detta kan förändras genom att i <code>form</code> elementet inkludera <code>data-success-title="Valfri titel" data-success-message="Valfritt meddelande"</code>.</p>
            
            <p>Det är viktigt att både <code>label</code> och <code>placeholder</code> är tydliga och förklarar för användaren vad som förväntas.</p>
            
            <p>Kom ihåg att inkludera <code>required</code> om fältet är obligatoriskt.</p>`        
        }
    ]
};

//  ========== Pages ============

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
       </div>`;
}

function getTextPage(){
    return buildPage(textPageConfig);
}

function getButtonPage(){
    return buildPage(buttonPageConfig);
}

function getTablePage(){
    return buildPage(tablePageConfig);
}

function getMenuPage(){
    return buildPage(menuPageConfig);
}

function getColorSchemePage(){
    return buildPage(colorSchemePageConfig);
}

function getFormPage(){
    return buildPage(formPageConfig);
}

// ============ Routing ============

const routes = {
    '#/': getHomePage,
    '#/web-components': getWebComponentsPage,
    '#/design-guidelines/text': getTextPage,
    '#/design-guidelines/color-scheme': getColorSchemePage,
    '#/design-guidelines/logo': getLogoPage,
    '#/web-components/button': getButtonPage,
    '#/web-components/table': getTablePage,
    '#/web-components/navigation': getMenuPage,
    '#/web-components/form': getFormPage
};

function handleRoute() {
    const hash = window.location.hash || '#/'; // Default to home if no hash
    const content = routes[hash] ? routes[hash]() : '<h1>Page Not Found</h1>';
    document.getElementById('content').innerHTML = content;
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
            return;
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
        return;
    }
});

//Byt ut formuläret mot ett meddelande
document.addEventListener('submit', function(event) {
    // Om det inte är ett formulär, gör ingenting
    if (!event.target.matches('form')) return;
    
    //Laddar inte om sidan
    event.preventDefault(); 

    const form = event.target;

    //Om det inte finns data-success-title eller data-success-message används default
    const successTitle = form.dataset.successTitle || 'Tack!';
    const successMessage = form.dataset.successMessage || 'Formuläret har skickats.';

    const successElement= document.createElement('div');
    successElement.className = 'form-success';
    successElement.innerHTML = `<h2>${successTitle}</h2>
        <p>${successMessage}</p>`;

    form.replaceWith(successElement);
});

