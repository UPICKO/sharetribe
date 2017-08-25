$(function() {
    if (typeof localStorage != 'undefined') {
        var firstTime = localStorage.getItem("first_time");
        if (firstTime != "1") {
            localStorage.setItem("first_time", "1");
        }
    }

    // Clear the query text when the query is state
    if($(".SearchBar__keywordInput__2HTav").length) {
        var q = getUrlParameter("q");
        if(q) {
            if(jQuery.inArray(q, stateInfo) != -1)
                $(".SearchBar__keywordInput__2HTav").val("")
        }
    }

    if(typeof map != 'undefined' && map) {
        // Disable clickable landmarks in google map
        map.setClickableIcons(false);
        // Disable mouse scroll zoom
        map.setOptions({ scrollwheel: false });
        // Enable Scale control
        map.setOptions({ zoomControl: true});
    }

});

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

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

String.prototype.replaceAll = function(search, replace)
{
    //if replace is not sent, return original string otherwise it will
    //replace search string with 'undefined'.
    if (replace === undefined) {
        return this.toString();
    }

    return this.replace(new RegExp('[' + search + ']', 'g'), replace);
};

function checkTemplateLiteralSupported() {
    try {
        eval("tt=``;");
        return true;
    } catch (e) {
        return false;
    }
}

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

function decodeEntities(encodedString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}

