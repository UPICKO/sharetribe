$(function() {
    if (window.location.href.indexOf("/listings/") > 0) {
        // In view list item detail page
        //Load the farmer's list in listing detail page
        if (window.location.href.indexOf("edit") <= 0 && window.location.href.indexOf("new") <= 0 && $("#listing-author-link").length > 0 && $("#listing-author-link").attr('href') && $("#listing-author-link").text() != 'Upicko') {
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

            //Add address info below the small map
            if ($(".map-link a").length) {
                var openInGoogleMapHref = $(".map-link a").attr("href");
                var decodedUri = decodeURIComponent(openInGoogleMapHref);
                var addressString = decodedUri.substring(27);
                var addressStringFinal = addressString.replaceAll("+", " ");
                $(".map-link").before("<div style='margin-top: 5px;'><i>" + addressStringFinal + "</i></div>");
            }

        }
    }
});
