$(function() {
    if (window.location.href.indexOf("/listings/") > 0) {
    	if(window.location.href.indexOf("new") > 0) {
			// In add new list item detail page
			$(window).on('load', function () {
				setTimeout(function() {
					// Add desc template 
					$("textarea.listing_description_textarea").val(farm_detail_template);
					changeTextInDescripTextArea();
				}, 500);
			});
    	} else if (window.location.href.indexOf("edit") > 0) {
			// In edit list item detail page
			changeTextInDescripTextArea();
    	} else {
			// In view list item detail page
			//Load the farmer's list in listing detail page
			if ($("#listing-author-link").length > 0 && $("#listing-author-link").attr('href') && $("#listing-author-link").text() != 'Upicko') {
				$.ajax({
					type: "GET",
					url: $("#listing-author-link").attr('href'),
					success: function (resultData) {
						var profileListingsList = $('#profile-listings-list', $(resultData));
						var profileListLabel = profileListingsList.prev();
						var listingDetailContainer = $('.page-content .wrapper');
						listingDetailContainer.append($(profileListLabel.html() + profileListingsList.html()));
					},
					error: function (xhr, ajaxOptions, thrownError) {
						console.log(xhr);
					}
				});
			}

			//Add address info below the small map
			if ($(".map-link a").length) {
				var openInGoogleMapHref = $(".map-link a").attr("href");
				var decodedUri = decodeURIComponent(openInGoogleMapHref);
				var addressString = decodedUri.substring(27);
				var addressStringFinal = addressString.replaceAll("+", " ");
				$(".map-link").before("<div style='margin-top: 5px;'><i>" + addressStringFinal + "</i></div>");
			}

			//Add farm's name at the beginning of the page
			if ($(".wrapper").length) {
				var url = window.location.href;
				var farmNameWidthId = url.substring(35, url.length);
				var farmNameWithHyphen = farmNameWidthId.substring(farmNameWidthId.indexOf("-") + 1);
				var farmName = farmNameWithHyphen.replaceAll("-", " ");
				var farmNameWithCamelCase = toTitleCase(farmName);

				var state = farmNameWithCamelCase.substring(farmNameWithCamelCase.lastIndexOf(" ") + 1, farmNameWithCamelCase.length);
				var upperCaseState = state.toUpperCase();
				if (jQuery.inArray(upperCaseState, stateInfo) != -1) {
					var farmnameWithoutState = farmNameWithCamelCase.substring(0, farmNameWithCamelCase.lastIndexOf(" "));
					farmNameWithCamelCase = farmnameWithoutState + " - " + upperCaseState;
				}

				$(".wrapper").prepend("<div style='margin-bottom: 20px; font-size: 27px'>" + farmNameWithCamelCase + "</div>");
			}
		
			//Decode the description of the item to html
			if($(".listing-details-container").length) {
				var decodedHtml = "";
				$(".listing-details-container .row:nth-child(2) .col-12 p").each(function (index) {
					decodedHtml += decodeEntities($(this).html());
				});
				$(".listing-details-container .row:nth-child(2) .col-12").html(decodedHtml);
				$(".listing-details-container .row:nth-child(2) .col-12").show();
			}
    	}
    }
});

//Change the instruction text before detail description text area
function changeTextInDescripTextArea() {
	$(".info-text-content p").html("Please use the template below to fill your farm information");    	
	$(".info-text-content p").show();
}
