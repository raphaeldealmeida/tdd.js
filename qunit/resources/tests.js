test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});


test("Select teste", function() {
  select = $('<select/>');
  select.on("change", function(){
    ok(true, "changed");
  });
  
  select.trigger("change");
});


