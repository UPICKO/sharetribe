$(function() {
    if (window.location.href.indexOf("/listings/") > 0) {
        // In view list item detail page
        if(window.location.href.indexOf("edit") <= 0 && window.location.href.indexOf("new") <= 0) {
            if (window.location.href.indexOf("edit") <= 0 && window.location.href.indexOf("new") <= 0 && $("#listing-author-link").length > 0 && $("#listing-author-link").attr('href')) {
                if($("#listing-author-link").text() != 'Upicko') {
                    //Load the farmer's list in listing detail page
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

                /* Check if the order type is upicko access, if not display the booking/pay button as well as the profile of the farmer */
                if($.trim($('#listing-message-links #booking-dates .enabled-book-button .content').html()) !== 'Upick Booking') {
                    $('#listing-message-links').show();
                    $('.SearchBar__topLevelBody__2_hhm .page-content .row .col-4 .row-with-divider').show();
                }
            }
        }
    }
});
