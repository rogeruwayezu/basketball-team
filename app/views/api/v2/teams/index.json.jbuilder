json.array! @teams.each do |team|
  json.creature team.creature
  json.name team.name
  json.state team.state
  json.sport team.sport
 end 