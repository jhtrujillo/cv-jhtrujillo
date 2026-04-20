const https = require('https');
https.get('https://jayrobwilliams.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const headMatch = data.match(/<head>(.*?)<\/head>/is);
    const bodyMatch = data.match(/<body.*?>(.*?)<\/body>/is);
    const headerMatch = data.match(/<div class="masthead.*?>(.*?)<\/div>/is) || data.match(/<header.*?>(.*?)<\/header>/is);
    const sidebarMatch = data.match(/<div class="sidebar.*?>(.*?)<\/div>/is) || data.match(/<div class="author.*?>(.*?)<\/div>/is);
    console.log("--- Header ---");
    console.log(headerMatch ? headerMatch[0].substring(0, 500) : "No header");
    console.log("--- Sidebar ---");
    console.log(sidebarMatch ? sidebarMatch[0].substring(0, 500) : "No sidebar");
    console.log("--- CSS links ---");
    const links = data.match(/<link rel="stylesheet".*?>/gi);
    console.log(links);
  });
});
