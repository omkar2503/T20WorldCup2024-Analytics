// Only the Stage 3 shown here for brevity — same stages as original but with image field

//------- 3.a Interaction Code ------ //
navigate(input.url);
final_data = parse()
collect({
  "TeamName": input.team,
  "PlayerName": input.name,
  "Image": final_data.image,
  "BatingStyle": final_data.battingStyle,
  "BowlingStyle": final_data.bowlingStyle,
  "PlayingRole": final_data.playingRole,
  "Description": final_data.description
});

//---------- 3.b Parser Code ---------//
const imgURL = $('div.ds-flex > img').attr('src');
const battingStyle = $('div.ds-grid > div').filter((i, el) => $(el).find('p').first().text() === 'Batting Style');
const bowlingStyle = $('div.ds-grid > div').filter((i, el) => $(el).find('p').first().text() === 'Bowling Style');
const playingRole = $('div.ds-grid > div').filter((i, el) => $(el).find('p').first().text() === 'Playing Role');

return {
  "image": imgURL,
  "battingStyle": battingStyle.find('span').text().trim(),
  "bowlingStyle": bowlingStyle.find('span').text().trim(),
  "playingRole": playingRole.find('span').text().trim(),
  "description": $('div.ci-player-bio-content').find('p').first().text().trim()
};