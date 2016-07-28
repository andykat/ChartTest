function main()
{
  return Events(
    {from_date: "2016-06-01", to_date: "2016-07-15",})
  .filter(function(event){
    return event.name == "unique_install";
  })
}
