$(function() {
    if (window.location.href.indexOf("/listings/") > 0) {
        // In view list item detail page
        if(window.location.href.indexOf("edit") <= 0 && window.location.href.indexOf("new") <= 0) {
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
            }
        }
    }
});
