$(document).ready(function(){
	$("#findPostCode").click(function(event){
	var result=0;
	$(".alert").hide();
	event.preventDefault();
	$.ajax({
		type:"GET",
		url:"https://maps.googleapis.com/maps/api/geocode/xml?address="+encodeURIComponent($('#address').val())+"&key=AIzaSyDrfhdgMT18DtaBy5izf8yJFUiV4p9NOKc",
		dataType: "xml",
		success:processXML,
		error:error
  });
  function error(){
		$("#fail2").fadeIn();
  }

  function processXML(xml){
	$(xml).find("address_component").each(function(){
		if($(this).find("type").text()=="postal_code"){
			$("#success").html("The postcode you need is "+$(this).find("long_name").text()).fadeIn();
			result=1;
		}
  });
  if(result==0)
  {
	$("#fail").fadeIn();
  }
  
  }
	});
	});