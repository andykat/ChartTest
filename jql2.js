function main() {
  return Events({ from_date: '2016-06-01' , to_date: '2016-07-15' })
  .filter(function(event){
    return event.name == "unique_install";
  })
  .groupBy(
    [getDay],
    mixpanel.reducer.count()
  );
}


function getDay(event) {
  var month = (new Date(event.time).toISOString()).split('T')[0].split('-')[1];
  var year = (new Date(event.time).toISOString()).split('T')[0].split('-')[0];
  return month + '-' + year;
}
