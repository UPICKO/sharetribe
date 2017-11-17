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
});

$(window).on('load', function () {
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

