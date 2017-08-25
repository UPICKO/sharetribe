$(function() {
    //$('#homepage-filters').show();
    if (window.location.href == 'https://www.upicko.com/' || window.location.href == 'https://www.upicko.com') {
        if (!checkTemplateLiteralSupported()) {
            alert("Your browser is not supported. Please consider using Chrome, Firefox or Microsoft Edge");
        } else {
            $('#homepage-filters').remove();
            $("body").append("<div id='spinner_landing_page' style='margin-top: 10px; text-align: center'><img width='80em' src='https://raw.githubusercontent.com/UPICKO/external_files/master/images/spinner.gif'/></div>");
            $.getScript("https://drive.google.com/uc?export=download&id=0B5fEP3aSxchLVzZBLTZBZUlWZ0E", function (data, textStatus, jqxhr) {
                $("body").append(landingPageHtml);
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
