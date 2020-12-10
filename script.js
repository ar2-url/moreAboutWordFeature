	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				countryCode: $('#selCode').val()
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