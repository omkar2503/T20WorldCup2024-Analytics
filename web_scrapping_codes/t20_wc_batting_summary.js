/* -------------- STAGE 1 ------------ */
navigate('https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166/match-results');

let links = parse().matchSummaryLinks;
for (let i of links) {
  next_stage({ url: i });
}

//------- 1.b Parser Code ------------//
let links = [];
$('table.ds-table tbody tr').each((i, el) => {
  const href = $(el).find('td a.ds-text-ui-typo').attr('href');
  if (href) {
    links.push("https://www.espncricinfo.com" + href);
  }
});
return { matchSummaryLinks: links };


/* -------------- STAGE 2 ------------ */
navigate(input.url);
collect(parse());

var matchID = input.url.split('/').filter(x => x.includes('match'))[0];

var team1 = $('span:contains("Innings")').eq(0).text().replace(" Innings", "").trim();
var team2 = $('span:contains("Innings")').eq(1).text().replace(" Innings", "").trim();
var matchInfo = `${team1} Vs ${team2}`;

let tables = $('div > table.ci-scorecard-table');
let battingSummary = [];

function parseInnings(rows, team) {
  rows.each((index, el) => {
    const tds = $(el).find('td');
    if (tds.length >= 8) {
      battingSummary.push({
        "Match": matchInfo,
        "Team_Ining": team,
        "Batting_Pos": index + 1,
        "BatsmanName": $(tds.eq(0)).find('a > span').text().trim(),
        "Out / NotOut": $(tds.eq(1)).text().trim(),
        "Runs": $(tds.eq(2)).find('strong').text().trim(),
        "Balls": $(tds.eq(3)).text().trim(),
        "Miss": $(tds.eq(4)).text().trim(),
        "4s": $(tds.eq(5)).text().trim(),
        "6s": $(tds.eq(6)).text().trim(),
        "SR": $(tds.eq(7)).text().trim(),
        "Match_ID": matchID
      });
    }
  });
}

parseInnings($(tables.eq(0)).find('tbody > tr'), team1);
parseInnings($(tables.eq(1)).find('tbody > tr'), team2);

return { battingSummary };