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
                                                                         
					$('#txtCode').html(result['data'][0]['countryCode']);
					$('#txtTitle').html(result['data'][0]['title']);
					$('#txtSummary').html(result['data'][0]['summary']);
					$('#txtThumbnailImg').html(result['data'][0]['thumbnailImg']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});
