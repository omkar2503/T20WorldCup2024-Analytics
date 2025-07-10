navigate('https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166/match-results');
collect(parse());

let matchSummary = [];

$('table.ds-table tbody tr').each((index, element) => {
  const tds = $(element).find('td');
  matchSummary.push({
    'Team 1': $(tds[0]).text().trim(),
    'Team 2': $(tds[1]).text().trim(),
    'Winner': $(tds[2]).text().trim(),
    'Margin': $(tds[3]).text().trim(),
    'Ground': $(tds[4]).text().trim(),
    'Match Date': $(tds[5]).text().trim(),
    'Scorecard': $(tds[6]).text().trim()
  });
});

return { matchSummary };