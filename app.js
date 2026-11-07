const ranks=[["Top Dog",1],["Right Hand",1],["Big Homie",3],["Shot Caller",6],["OG",15],["Block Organiser",25],["Day One",35],["Street Runner",50],["Hustler",50],["New Face",50]];
const pages={
home:`<section class="editorial-hero" aria-labelledby="home-title">
<div class="hero-photo" aria-hidden="true"></div>
<div class="editorial-copy">
<div class="hero-kicker">Los Santos · 63rd Street</div>
<h1 id="home-title">A name built on <em>loyalty.</em></h1>
<p>More than a crew name. The 63rd is a roleplay family built on respect, unity and the stories we create across Los Santos.</p>
<a class="editorial-button" href="#applications">Explore recruitment <span>→</span></a>
</div>
<div class="editorial-stories" aria-live="polite">
<a class="story-card" id="feature-story-one" href="#information"><small>01 / OUR IDENTITY</small><h2>Know the name. Understand the standard.</h2><span>Discover the 63rd <b>→</b></span></a>
<a class="story-card" id="feature-story-two" href="#chain"><small>02 / LEADERSHIP</small><h2>A clear structure. A place for every role.</h2><span>View the structure <b>→</b></span></a>
<div class="story-controls"><span id="story-count">01 / 03</span><button type="button" data-story="prev" aria-label="Previous featured story">←</button><button type="button" data-story="next" aria-label="Next featured story">→</button></div>
</div>
<div class="hero-caption"><span>♛ &nbsp; 63RD STREET CREW</span><span>LOS SANTOS · ROLEPLAY COMMUNITY</span></div>
</section>
<section class="home-explore">
<div class="home-section-heading"><div><span class="eyebrow">Inside the 63rd</span><h2>Explore the crew</h2></div><p>Find out what the crew stands for, how it is organised and where its story takes place.</p></div>
<div class="explore-grid">
<a class="explore-card" href="#information"><span class="explore-number">01</span><div><small>THE FOUNDATION</small><h3>Our identity</h3><p>The values, story and standards behind the name.</p></div><b>↗</b></a>
<a class="explore-card" href="#chain"><span class="explore-number">02</span><div><small>THE PEOPLE</small><h3>Leadership &amp; structure</h3><p>Explore the chain of command and planned rank structure.</p></div><b>↗</b></a>
<a class="explore-card" href="#turf"><span class="explore-number">03</span><div><small>THE CITY</small><h3>Streets &amp; territory</h3><p>Explore the Los Santos locations featured in our roleplay.</p></div><b>↗</b></a>
</div>
</section>
<section class="home-bottom">
<article class="home-note"><span class="eyebrow">The 63rd standard</span><h2>Loyalty. Respect. <em>Family.</em></h2><p>Every member contributes to the reputation of the crew. We value consistent roleplay, clear communication and respect for the wider community.</p><a href="#information">Read our identity <span>→</span></a><div class="note-watermark">63</div></article>
<article class="home-note home-note-light"><span class="eyebrow">Crew resources</span><h2>Everything in <em>one place.</em></h2><p>Access the crew's standard operating procedures and roster through the documents area.</p><a href="#documents">Open documents <span>→</span></a><div class="note-watermark">♛</div></article>
</section>`,
applications:`<div class="page-wrap page-enter"><header class="page-heading"><div class="eyebrow">Earn your place</div><h1>Applications</h1><p>Interested in joining the 63rd Street Crew? Choose the path that fits the position you are applying for.</p></header><div class="info-grid"><section class="info-panel"><h3>Member Application</h3><p>For those looking to join the crew and become part of the 63rd.</p></section><section class="info-panel"><h3>Command Application</h3><p>For experienced, active people interested in helping lead the crew.</p></section></div><div class="notice">This is currently a front-end preview. Applications are not submitted or stored. Do not enter personal or sensitive information.</div><form id="application-form"><div class="form-grid"><div class="field"><label for="type">Application type</label><select id="type" required><option value="">Choose one</option><option>Member</option><option>Command</option></select></div><div class="field"><label for="rpname">In-game name</label><input id="rpname" required placeholder="Character name"></div><div class="field"><label for="age">Character age</label><input id="age" placeholder="Roleplay age"></div><div class="field"><label for="experience">Previous experience</label><input id="experience" placeholder="Gang / leadership experience"></div><div class="field full"><label for="why">Why do you want to join?</label><textarea id="why" required placeholder="Tell us about your character and what you bring to the crew..."></textarea></div><div class="field full"><button class="button" type="submit">Preview application ↗</button></div></div></form><p id="form-message" class="copy" aria-live="polite"></p></div>`,
chain:`<div class="page-wrap page-enter"><header class="page-heading"><div class="eyebrow">Know the structure</div><h1>Chain of Command</h1><p>Ten ranks, one structure. The numbers show planned places for each rank, not confirmed member names.</p></header><div class="rank-list">${ranks.map(([name,count],i)=>`<div class="rank"><div><small>Rank ${String(i+1).padStart(2,"0")}</small><br><strong>${name}</strong></div><div class="rank-count">${count}</div></div>`).join("")}</div></div>`,
information:`<div class="page-wrap page-enter"><header class="page-heading"><div class="eyebrow">The name. The meaning.</div><h1>Gang Information</h1><p>A crew built around loyalty, respect and looking after one another.</p></header><section><h2 class="section-title">Our Story</h2><p class="copy">The 63rd Street Crew represents its name with pride. Our identity is built on unity, commitment and respect. Every member has a part to play in building the crew's reputation across Los Santos. We move as one and expect every member to represent the name with pride.</p></section><section><h2 class="section-title">The Code</h2><div class="info-grid"><article class="info-panel"><h3>Loyalty</h3><p>Stand by your crew, communicate clearly and keep your word.</p></article><article class="info-panel"><h3>Respect</h3><p>Respect is earned and shown in how you treat people, inside and outside the crew.</p></article><article class="info-panel"><h3>Roleplay</h3><p>Keep it believable, fair and enjoyable. Good roleplay comes first.</p></article><article class="info-panel"><h3>Representation</h3><p>Carry the 63rd name properly. Your actions reflect on everyone.</p></article></div></section></div>`,
turf:`<div class="page-wrap page-enter"><header class="page-heading"><div class="eyebrow">Southside · Los Santos</div><h1>Streets &amp; Turf</h1><p>Five locations that form part of the 63rd's Los Santos roleplay identity. Select a location to reveal its district.</p></header><div class="place-grid"><article class="place"><h3>Grove Street</h3><p>South Los Santos · Davis</p></article><article class="place"><h3>Chamberlain Hills</h3><p>South Los Santos · Forum Drive</p></article><article class="place"><h3>Strawberry</h3><p>Central South Los Santos</p></article><article class="place"><h3>Rancho</h3><p>East Los Santos</p></article><article class="place"><h3>Davis</h3><p>South Los Santos</p></article></div></div>`,
media:`<div class="page-wrap page-enter"><header class="page-heading"><div class="eyebrow">The crew in pictures</div><h1>Media Gallery</h1><p>Browse crew screenshots, artwork, clothing, vehicles, MLOs and event photography.</p></header><div class="filter-bar" role="group" aria-label="Filter gallery"><button class="filter-chip active" data-filter="all">All media</button><button class="filter-chip" data-filter="screenshots">Screenshots</button><button class="filter-chip" data-filter="artwork">Artwork</button><button class="filter-chip" data-filter="vehicles">Vehicles</button><button class="filter-chip" data-filter="events">Events</button></div><div class="media-grid"><article class="media-item" data-category="screenshots"><h3>Screenshots</h3><p>In-city moments and crew photos.</p></article><article class="media-item" data-category="artwork"><h3>Artwork</h3><p>Logos, graphics and crew designs.</p></article><article class="media-item" data-category="vehicles"><h3>Vehicles</h3><p>Custom builds and vehicle showcases.</p></article><article class="media-item" data-category="events"><h3>Events</h3><p>Highlights from crew events and roleplay.</p></article><article class="media-item" data-category="artwork"><h3>Clothing</h3><p>Custom fits and crew clothing.</p></article><article class="media-item" data-category="screenshots"><h3>Headquarters</h3><p>MLOs, hangouts and crew spaces.</p></article></div><div class="empty-state" style="margin-top:16px">Your actual crew photos can be added to these gallery sections.</div></div>`,
documents:`<div class="page-wrap page-enter"><header class="page-heading"><div class="eyebrow">Crew resources</div><h1>Documents</h1><p>Quick access to the 63rd Street Crew's official documents.</p></header><div class="documents-grid"><a class="document-card" href="https://docs.google.com/document/d/1DrVKNUfd9v2w4m6wYl-5hyg79_toASKrKsMf7P8LndE/edit?tab=t.0" target="_blank" rel="noopener noreferrer"><span class="document-icon">▤</span><span><strong>SOP</strong><small>Standard Operating Procedures · Opens Google Docs</small></span><b>↗</b></a><a class="document-card" href="https://docs.google.com/spreadsheets/d/1RR_bW_kMSStiYSd-mrx5DabTTx4DUlgd/edit?gid=316786461#gid=316786461" target="_blank" rel="noopener noreferrer"><span class="document-icon">▦</span><span><strong>Roster</strong><small>Crew Roster · Opens Google Sheets</small></span><b>↗</b></a></div></div>`,
portal:`<div class="page-wrap page-enter"><header class="page-heading"><div class="eyebrow">Private access</div><h1>Member Portal</h1><p>A private area for crew members is planned for a later release.</p></header><div class="notice">Member sign-in is not active yet. No login details are requested or stored on this preview site.</div></div>`
};
const featuredStories=[
{one:["01 / OUR IDENTITY","Know the name. Understand the standard.","Discover the 63rd","information"],two:["02 / LEADERSHIP","A clear structure. A place for every role.","View the structure","chain"]},
{one:["03 / THE CITY","A city full of stories. A crew with its own place.","Explore the locations","turf"],two:["04 / CREW RESOURCES","The documents and information members need.","Open crew documents","documents"]},
{one:["05 / JOIN THE CREW","Interested in becoming part of the 63rd?","Explore recruitment","applications"],two:["06 / THE ARCHIVE","A place for crew screenshots, artwork and memories.","View the media gallery","media"]}
];
let featuredIndex=0;
function updateFeatured(){
 const cards=[["feature-story-one",featuredStories[featuredIndex].one],["feature-story-two",featuredStories[featuredIndex].two]];
 cards.forEach(([id,data])=>{const card=document.getElementById(id);if(!card)return;card.href="#"+data[3];card.innerHTML="<small>"+data[0]+"</small><h2>"+data[1]+"</h2><span>"+data[2]+" <b>→</b></span>";});
 const count=document.getElementById("story-count");if(count)count.textContent=String(featuredIndex+1).padStart(2,"0")+" / 03";
}
function render(){const page=(location.hash||"#home").slice(1);const key=Object.hasOwn(pages,page)?page:"home";document.getElementById("app").innerHTML=pages[key];document.querySelectorAll(".main-nav a").forEach(a=>a.classList.toggle("active",a.dataset.page===key));const nav=document.querySelector(".main-nav");nav.classList.remove("open");document.querySelector(".menu-toggle").setAttribute("aria-expanded","false");if(key==="home")updateFeatured();window.scrollTo({top:0,behavior:"smooth"});}
window.addEventListener("hashchange",render);
document.querySelector(".menu-toggle").addEventListener("click",()=>{const nav=document.querySelector(".main-nav");const open=nav.classList.toggle("open");document.querySelector(".menu-toggle").setAttribute("aria-expanded",String(open));});
document.addEventListener("submit",event=>{if(event.target.id!=="application-form")return;event.preventDefault();document.getElementById("form-message").textContent="Preview only — your application has not been submitted or saved.";});
document.addEventListener("click",event=>{const chip=event.target.closest("[data-filter]");if(!chip)return;const filter=chip.dataset.filter;document.querySelectorAll(".filter-chip").forEach(b=>b.classList.toggle("active",b===chip));document.querySelectorAll(".media-item").forEach(card=>{card.hidden=filter!=="all"&&card.dataset.category!==filter;});});
document.addEventListener("click",event=>{
 const control=event.target.closest("[data-story]");
 if(!control)return;
 featuredIndex=(featuredIndex+(control.dataset.story==="next"?1:2))%featuredStories.length;
 updateFeatured();
});
const searchInput=document.getElementById("site-search");
if(searchInput){
 const searchRoutes=[
  {terms:["home","homepage","main"],page:"home"},
  {terms:["apply","application","recruitment","join"],page:"applications"},
  {terms:["team","leadership","rank","command","structure"],page:"chain"},
  {terms:["about","identity","story","values","code"],page:"information"},
  {terms:["location","territory","turf","street","grove","davis"],page:"turf"},
  {terms:["media","gallery","photo","video"],page:"media"},
  {terms:["document","sop","roster","spreadsheet"],page:"documents"},
  {terms:["portal","login","member"],page:"portal"}
 ];
 searchInput.addEventListener("keydown",event=>{
  if(event.key!=="Enter")return;
  const query=searchInput.value.trim().toLowerCase();
  if(!query)return;
  const match=searchRoutes.find(route=>route.terms.some(term=>query.includes(term)||term.includes(query)));
  if(match){location.hash=match.page;searchInput.value="";}
  else{searchInput.setCustomValidity("No matching section found. Try recruitment, leadership, territory or media.");searchInput.reportValidity();searchInput.addEventListener("input",()=>searchInput.setCustomValidity(""),{once:true});}
 });
}
render();