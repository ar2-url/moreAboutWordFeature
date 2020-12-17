	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getInfo2.php",                 //I ve changed path
			type: 'POST',
			dataType: 'json',
			data: {
                                                    //here I ve changed for lang and title
				
				lang: $('#selLanguage').val()
        title: $('#selTitle').val(),
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {
                                                                        //#id I am going to change on the and when everything will works 
					$('#txtContinent').html(result['data'][0]['countryName']);
					$('#txtCapital').html(result['data'][0]['currencyCode']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['isoAlpha3']);
					$('#txtArea').html(result['data'][0]['isoNumeric']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});
