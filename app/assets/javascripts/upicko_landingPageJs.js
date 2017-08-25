$(function() {
    //$('#homepage-filters').show();
    if (window.location.href == 'http://lvh.me:5000/' || window.location.href == 'http://lvh.me:5000') {
        if (!checkTemplateLiteralSupported()) {
            alert("Your browser is not supported. Please consider using Chrome, Firefox or Microsoft Edge");
        } else {
            $('#homepage-filters').remove();
            $("body").append("<div id='spinner_landing_page' style='margin-top: 10px; text-align: center'><img width='80em' src='https://raw.githubusercontent.com/UPICKO/external_files/master/images/spinner.gif'/></div>");
            $.getScript("https://drive.google.com/uc?export=download&id=0B5fEP3aSxchLVzZBLTZBZUlWZ0E", function (data, textStatus, jqxhr) {
                $("body").append(landingPageHtml);
                $(window).on('load', function () {
                    if($("#upicko_landing_page").length) {
                        // Display the landing page when all of the content is loaded.
                        $("#upicko_landing_page").show();
                        setTimeout(function() {
                            // Delay to display the sumome social client.
                            $(".sumome-share-client").attr("style", "display: inline !important");
                        }, 2000);
                    }
                    if($("#spinner_landing_page").length) {
                        // Remove spinner in the landing page when the content is loaded
                        $("#spinner_landing_page").remove();
                    }
                    setTimeout(function() {
                        // Remove the sumo jump box
                        $("a[title='Sumo']").remove();
                    }, 2000);
                });
            });
        }
    } else if (window.location.href == 'https://www.upicko.com/en/' || window.location.href == 'https://www.upicko.com/en') {
        window.location = "https://www.upicko.com/en/?category=u-pick-access";
    } else if (window.location.href == 'https://www.upicko.com/zh/' || window.location.href == 'https://www.upicko.com/zh') {
        window.location = "https://www.upicko.com/zh/?category=u-pick-access";
    } else {
        $('#homepage-filters').show();
    }
});
