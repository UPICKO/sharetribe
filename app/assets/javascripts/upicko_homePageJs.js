$(function() {
    //Remove the category row in home page
    if ($(".home-toolbar").length && $(".home-toolbar").next().length && $(".home-toolbar").next().find('.row').length && $(".home-toolbar").next().find('.row').first().length) {
        $(".home-toolbar").next().find('.row').first().remove();
    }

    //Add banner page in home page
    if ($(".home-toolbar").length && $(".Topbar__topbar__7GUWt").length) {
        $(".Topbar__topbar__7GUWt").after(getBannerHtml());
    }

    //Display marketing banner on home page for private web mode
    if ($('.community-customization-wrapper').length && $(".marketplace-lander").length) {
        $(".marketplace-lander").show();
    }

    // Disable google map cluster for home page
    if(typeof markerCluster != 'undefined' && markerCluster) {
        if(window.location.href.indexOf('category=u-pick-access') !== -1) {
            markerCluster.setMaxZoom(12);
        } else {
            markerCluster.setMaxZoom(22);
        }
    }

    $(document).ready(function() {
        //Replace default marker with fruit icon in google map in home page
        if($(".home-toolbar").length && markers && markers.length > 0 && markerContents && markerContents.length > 0) {
            for(i=0; i<markers.length; i++) {
                var marker = markers[i];
                var markerId = markerContents[i];
                switch(markerId) {
                    case 391387: //Farnsworth Apple & Cherry Orchard
                    case 391381: //Ripe Ready Cherry Farm
                    case 435257: //Bluehill Upick Cherries - VIC
                    case 391411: //Chappies Upick - VIC
                    case 391927: //Fair View Hill Berries - VIC
                    case 435260: //Cobradah Upick - VIC
                    case 391337: //Seville Farm - VIC
                    case 435265: //Cherry Bomb - VIC
                    case 435273: //Cherry Heaven - VIC
                    case 435261: //Cherry Hill Upick - VIC
                    case 391395: //Lanidale Cherry Orchard - VIC
                    case 391921: //Big Fella Cherries - VIC
                    case 392722: //hillsideharvest - NSW
                    case 392726: //Lynton Cherry Orchards - NSW
                    case 393794: //Main Range Cherry Orchard - NSW
                    case 393796: //Stockman's Ridge Cherries - NSW
                    case 393802: //Wombat Heights Cherry Farm - NSW
                    case 393806: //Allambie Orchard - NSW
                    case 393904: //George & Sue's Country Farm Produce - NSW
                    case 394381: //Kembla Cherry Orchard - NSW
                    case 394731: //Lavender Hill - NSW
                    case 393804: //Ballinaclash Orchard & Cellar Door - NSW
                    case 397874: //A.T. THOMPSON CHERRIES - SA
                    case 398357: //Forest Range Cherries - SA
                    case 398358: //Harben Vale Cherries - SA
                    case 398360: //Marble Hill Cherries - SA
                    case 398362: //Plummers Border Valley Orchards - SA
                    case 398364: //Stella Creek Cherry Orchard - SA
                    case 398378: //Old Coralinga - SA
                    case 398378: //Verdun PYO Cherry Farm - SA
                    case 408144: //Martin Hill Cherries - SA
                    case 408454: //Lennane Orchards - SA
                    case 408458: //Cherrytime Orchards - SA
                    case 408462: //Fleurieu Cherries - SA
                    case 408467: //Torrens Valley Orchards - SA
                    case 408476: //Kenton Valley Cherries - SA
                    case 408485: //Wotton’s Greenhill Cherries - SA
                    case 408811: //Bandiera Cherries - SA
                    case 408814: //Kerrie's Cherries - SA
                    case 408121: //Ron and Cheryl Burke - SA
                        marker.setIcon(fruitIconsInfo["cheries"]);
                        break;
                    case 391934: //Emily Hill Farm - VIC
                    case 435272: //Avonsleigh Berries - VIC
                    case 391372: //Folly Farm Blueberry - VIC
                    case 391897: //The Big Berry - VIC
                    case 391390: //Hillbilly Farm - VIC
                    case 391923: //Summer Berries - VIC
                    case 435269: //Buninyong Berries - VIC
                    case 391888: //Otway Blueberries - VIC
                    case 391348: //Tuckerberry Hill - VIC
                    case 392715: //clyderiverberryfarm - NSW
                    case 398889: //Blueberry Lakes - WA
                    case 407507: //Hampton Blue Organic Blueberries - QLD
                        marker.setIcon(fruitIconsInfo["blueberries"]);
                        break;
                    case 391930: //Fielderberry Farm - VIC
                    case 435259: //Jay Berries - VIC
                        marker.setIcon(fruitIconsInfo["blackberries"]);
                        break;
                    case 435190: //Lomas Orchards - VIC
                    case 398901: //Spring Valley Organic Orchard - WA
                        marker.setIcon(fruitIconsInfo["plums"]);
                        break;
                    case 391385: //Sunny Ridge Strawberry Farm - VIC
                    case 435256: //Bluehill Upick Berries - VIC
                    case 435826: //GatewayEstate Indoor Strawberry Upick - VIC
                    case 391908: //Naturipe Fruits - VIC
                    case 397838: //McMartins Strawberry Farm - QLD
                    case 397851: //Rolin Farms - QLD
                    case 397858: //Strawberry Fields Palmview - QLD
                    case 398371: //Harvest the Fleurieu - SA
                    case 398942: //Hillwood Berry Farm  - TAS
                    case 398942: //Sorell Fruit Farm  - TAS
                    case 399030: //Turners Beach Berry Patch  - TAS
                    case 401931: //Ricardoes Tomatoes - NSW
                    case 406153: //Chambers Flat strawberry farm - QLD
                    case 406247: //Jarvis Fresh Strawberry Farm - QLD
                    case 406318: //Gowinta Farms - QLD
                    case 397911: //Beerenberg Farm - SA
                    case 413117: //Bruny Island Berry Farm- TAS
                    case 413272: //Pick Your Own Strawberry Farm - WA
                        marker.setIcon(fruitIconsInfo["strawberries"]);
                        break;
                    case 435816: //RaynerOrchard Farms Upick - VIC
                    case 407912: //Montacute Valley Orchards - SA
                        marker.setIcon(fruitIconsInfo["peaches"]);
                        break;
                    case 391324: //Ruefleur Chestnuts
                    case 393934: //Campanella Cottage - NSW
                    case 393950: //Kookootonga Nut Farm - NSW
                    case 394362: //Nutwood Farm - NSW
                    case 398892: //Chestnut Brae - WA
                        marker.setIcon(fruitIconsInfo["chestnuts"]);
                        break;
                    case 391338: //Sunny Creek Organic - VIC
                        marker.setIcon(fruitIconsInfo["gooseberries"]);
                        break;
                    case 391344: //Paynes Orchard - VIC
                        marker.setIcon(fruitIconsInfo["apricots"]);
                        break;
                    case 391404: //Water Wheel Orchard - VIC
                    case 391374: //Bramble Farm - VIC
                    case 391397: //Kinglake Raspberries - VIC
                    case 391885: //Pennyroyal Raspberry Farm - VIC
                    case 393819: //Huntley Berry Farm - VIC
                    case 398900: //Denmark Berry Farm - WA
                    case 411067: //Westerway Raspberry Farm - TAS
                        marker.setIcon(fruitIconsInfo["raspbeerries"]);
                        break;
                    case 391869: //Yileen Berry Farm - VIC
                    case 391881: //Herbert Hill Berry Farm - VIC
                        marker.setIcon(fruitIconsInfo["boysonberries"]);
                        break;
                    case 392704: //Pine Crest Orchard - NSW
                    case 392719: //Bilpin Fruit Bowl - NSW
                    case 393810: //Bilpin Spring Orchard - NSW
                    case 394371: //TNT Produce Pick Your Own Apples - NSW
                    case 401888: //Appleshack at Glenbernie Orchard - NSW
                    case 407549: //Sutton’s Farm - QLD
                    case 408461: //Harrisville Orchards - SA
                    case 408823: //Mahnew Orchard - SA
                    case 413126: //Lucaston Park Orchards - TAS
                    case 413298: //CORE Cider House - WA
                    case 413587: //Valley Fresh Produce - WA
                    case 413593: //The Fruit Corner - WA
                        marker.setIcon(fruitIconsInfo["apple"]);
                        break;
                    case 393800: //Fords Farm - NSW
                    case 394402: //Watkins Family Farm - NSW
                    case 413579: //Golden Grove Orchard - WA
                        marker.setIcon(fruitIconsInfo["mandarine"]);
                        break;
                    case 393801: //Montrose Berry Farm - NSW
                        marker.setIcon(fruitIconsInfo["loganberry"]);
                        break;
                    case 394414: //The Real Christmas Tree Farm - NSW
                    case 394422: //Dural Christmas Tree Farm - NSW
                    case 394450: //Sydney Christmas Tree Farm - NSW
                    case 394461: //Tomalong Christmas Tree Farm - NSW
                    case 394471: //Willy's Christmas Tree Farm - NSW
                    case 394479: //Kemps Creek Christmas Tree Farm - NSW
                    case 394482: //Triple A Christmas Tree Farm - NSW
                        marker.setIcon(fruitIconsInfo["christmas_tree"]);
                        break;
                    case 394433: //Canoelands orchard - NSW
                        marker.setIcon(fruitIconsInfo["nectarines"]);
                        break;
                    case 394728: //Norland Fig Orchard - NSW
                    case 408073: //Smith Gully Orchards - SA
                    case 408819: //Willabrand Orchards - SA
                        marker.setIcon(fruitIconsInfo["figs"]);
                        break;
                    case 397863: //The Longan Farm - QLD
                        marker.setIcon(fruitIconsInfo["longan"]);
                        break;
                    case 401929: //Cedar Creek Orchard - NSW
                        marker.setIcon(fruitIconsInfo["persimmons"]);
                        break;
                    case 394719: //TCP Farmgate Tours - NSW
                        marker.setIcon(fruitIconsInfo["fruits"]);
                        break;
                    case 405182: //Hinterland Feijoas - QLD
                        marker.setIcon(fruitIconsInfo["feijoas"]);
                        break;
                    case 406327: //Superbee Honeyworld - QLD
                    case 406336: //Honey Bee Factory Outlet - NSW
                        marker.setIcon(fruitIconsInfo["honey"]);
                        break;
                    case 406365: //Tropical Fruit World - QLD
                        marker.setIcon(fruitIconsInfo["tropicalFruits"]);
                        break;
                    case 407183: //Currumbin Valley Harvest - QLD
                    case 407617: //Permaculture Gold Coast - QLD
                        marker.setIcon(fruitIconsInfo["vegies"]);
                        break;
                    case 413134: //Coal River Farm - TAS
                        marker.setIcon(fruitIconsInfo["chocolate"]);
                        break;
                    case 413224: //Perth Mango Farm - WA
                        marker.setIcon(fruitIconsInfo["mango"]);
                        break;
                    default:
                        marker.setIcon(fruitIconsInfo["fruits"]);
                }
            }
        }
    });


    //Replace default marker with fruit icon in google map in home page when apply fruit filter
    $(document).ready(function() {
        setFruitIconInMapForFilter('checkbox_filter_option_147322', fruitIconsInfo["cheries"]);
        setFruitIconInMapForFilter('checkbox_filter_option_147458', fruitIconsInfo["sourcherries"]);
        setFruitIconInMapForFilter('checkbox_filter_option_147324', fruitIconsInfo["blueberries"]);
        setFruitIconInMapForFilter('checkbox_filter_option_160213', fruitIconsInfo["raspbeerries"]);
        setFruitIconInMapForFilter('checkbox_filter_option_147323', fruitIconsInfo["strawberries"]);
        setFruitIconInMapForFilter('checkbox_filter_option_160212', fruitIconsInfo["blackberries"]);
        setFruitIconInMapForFilter('checkbox_filter_option_147325', fruitIconsInfo["apple"]);
        setFruitIconInMapForFilter('checkbox_filter_option_147326', fruitIconsInfo["kiwifruit"]);
        setFruitIconInMapForFilter('checkbox_filter_option_160215', fruitIconsInfo["bayberries"]);
        setFruitIconInMapForFilter('checkbox_filter_option_160216', fruitIconsInfo["apricots"]);
        setFruitIconInMapForFilter('checkbox_filter_option_160217', fruitIconsInfo["boysonberries"]);
        setFruitIconInMapForFilter('checkbox_filter_option_160218', fruitIconsInfo["figs"]);
        setFruitIconInMapForFilter('checkbox_filter_option_160219', fruitIconsInfo["plums"]);
        setFruitIconInMapForFilter('checkbox_filter_option_160220', fruitIconsInfo["peaches"]);
        setFruitIconInMapForFilter('checkbox_filter_option_160221', fruitIconsInfo["nectarines"]);
        setFruitIconInMapForFilter('checkbox_filter_option_179759', fruitIconsInfo["chestnuts"]);
        setFruitIconInMapForFilter('checkbox_filter_option_160222', fruitIconsInfo["quinces"]);
        setFruitIconInMapForFilter('checkbox_filter_option_160214', fruitIconsInfo["vegies"]);
        setFruitIconInMapForFilter('checkbox_filter_option_180103', fruitIconsInfo["christmas_tree"]);
        setFruitIconInMapForFilter('checkbox_filter_option_180107', fruitIconsInfo["pear"]);
        setFruitIconInMapForFilter('checkbox_filter_option_180105', fruitIconsInfo["longan"]);
        setFruitIconInMapForFilter('checkbox_filter_option_180108', fruitIconsInfo["youngberry"]);
        setFruitIconInMapForFilter('checkbox_filter_option_180104', fruitIconsInfo["loganberry"]);
        setFruitIconInMapForFilter('checkbox_filter_option_180106', fruitIconsInfo["marionberry"]);
        setFruitIconInMapForFilter('checkbox_filter_option_180777', fruitIconsInfo["mandarine"]);
        setFruitIconInMapForFilter('checkbox_filter_option_180953', fruitIconsInfo["walnuts"]);
        setFruitIconInMapForFilter('checkbox_filter_option_181377', fruitIconsInfo["tomatos"]);
        setFruitIconInMapForFilter('checkbox_filter_option_181376', fruitIconsInfo["honey"]);
        setFruitIconInMapForFilter('checkbox_filter_option_183059', fruitIconsInfo["grapes"]);
        setFruitIconInMapForFilter('checkbox_filter_option_185165', fruitIconsInfo["persimmons"]);
        setFruitIconInMapForFilter('checkbox_filter_option_186572', fruitIconsInfo["feijoas"]);
        setFruitIconInMapForFilter('checkbox_filter_option_187241', fruitIconsInfo["tropicalFruits"]);
        setFruitIconInMapForFilter('checkbox_filter_option_192357', fruitIconsInfo["chocolate"]);
        setFruitIconInMapForFilter('checkbox_filter_option_192476', fruitIconsInfo["mango"]);
        setFruitIconInMapForFilter('checkbox_filter_option_192604', fruitIconsInfo["oranges"]);
    });

    //Add fruit icon in the front of the text in fruit filter
    if($('#checkbox_filter_option_147322').length) {
        $('#checkbox_filter_option_147322').after(getFruitIconHtmlForFilter(fruitIconsInfo['cheries']));
    }
    if($('#checkbox_filter_option_147458').length) {
        $('#checkbox_filter_option_147458').after(getFruitIconHtmlForFilter(fruitIconsInfo['sourcherries']));
    }
    if($('#checkbox_filter_option_147324').length) {
        $('#checkbox_filter_option_147324').after(getFruitIconHtmlForFilter(fruitIconsInfo['blueberries']));
    }
    if($('#checkbox_filter_option_160213').length) {
        $('#checkbox_filter_option_160213').after(getFruitIconHtmlForFilter(fruitIconsInfo['raspbeerries']));
    }
    if($('#checkbox_filter_option_147323').length) {
        $('#checkbox_filter_option_147323').after(getFruitIconHtmlForFilter(fruitIconsInfo['strawberries']));
    }
    if($('#checkbox_filter_option_160212').length) {
        $('#checkbox_filter_option_160212').after(getFruitIconHtmlForFilter(fruitIconsInfo['blackberries']));
    }
    if($('#checkbox_filter_option_147325').length) {
        $('#checkbox_filter_option_147325').after(getFruitIconHtmlForFilter(fruitIconsInfo['apple']));
    }
    if($('#checkbox_filter_option_147326').length) {
        $('#checkbox_filter_option_147326').after(getFruitIconHtmlForFilter(fruitIconsInfo['kiwifruit']));
    }
    if($('#checkbox_filter_option_160215').length) {
        $('#checkbox_filter_option_160215').after(getFruitIconHtmlForFilter(fruitIconsInfo['bayberries']));
    }
    if($('#checkbox_filter_option_160216').length) {
        $('#checkbox_filter_option_160216').after(getFruitIconHtmlForFilter(fruitIconsInfo['apricots']));
    }
    if($('#checkbox_filter_option_160217').length) {
        $('#checkbox_filter_option_160217').after(getFruitIconHtmlForFilter(fruitIconsInfo['boysonberries']));
    }
    if($('#checkbox_filter_option_160218').length) {
        $('#checkbox_filter_option_160218').after(getFruitIconHtmlForFilter(fruitIconsInfo['figs']));
    }
    if($('#checkbox_filter_option_160219').length) {
        $('#checkbox_filter_option_160219').after(getFruitIconHtmlForFilter(fruitIconsInfo['plums']));
    }
    if($('#checkbox_filter_option_160220').length) {
        $('#checkbox_filter_option_160220').after(getFruitIconHtmlForFilter(fruitIconsInfo['peaches']));
    }
    if($('#checkbox_filter_option_160221').length) {
        $('#checkbox_filter_option_160221').after(getFruitIconHtmlForFilter(fruitIconsInfo['nectarines']));
    }
    if($('#checkbox_filter_option_179759').length) {
        $('#checkbox_filter_option_179759').after(getFruitIconHtmlForFilter(fruitIconsInfo['chestnuts']));
    }
    if($('#checkbox_filter_option_160222').length) {
        $('#checkbox_filter_option_160222').after(getFruitIconHtmlForFilter(fruitIconsInfo['quinces']));
    }
    if($('#checkbox_filter_option_160214').length) {
        $('#checkbox_filter_option_160214').after(getFruitIconHtmlForFilter(fruitIconsInfo['vegies']));
    }
    if($('#checkbox_filter_option_180103').length) {
        $('#checkbox_filter_option_180103').after(getFruitIconHtmlForFilter(fruitIconsInfo['christmas_tree']));
    }
    if($('#checkbox_filter_option_180107').length) {
        $('#checkbox_filter_option_180107').after(getFruitIconHtmlForFilter(fruitIconsInfo['pear']));
    }
    if($('#checkbox_filter_option_180105').length) {
        $('#checkbox_filter_option_180105').after(getFruitIconHtmlForFilter(fruitIconsInfo['longan']));
    }
    if($('#checkbox_filter_option_180108').length) {
        $('#checkbox_filter_option_180108').after(getFruitIconHtmlForFilter(fruitIconsInfo['youngberry']));
    }
    if($('#checkbox_filter_option_180104').length) {
        $('#checkbox_filter_option_180104').after(getFruitIconHtmlForFilter(fruitIconsInfo['loganberry']));
    }
    if($('#checkbox_filter_option_180106').length) {
        $('#checkbox_filter_option_180106').after(getFruitIconHtmlForFilter(fruitIconsInfo['marionberry']));
    }
    if($('#checkbox_filter_option_180777').length) {
        $('#checkbox_filter_option_180777').after(getFruitIconHtmlForFilter(fruitIconsInfo['mandarine']));
    }
    if($('#checkbox_filter_option_180953').length) {
        $('#checkbox_filter_option_180953').after(getFruitIconHtmlForFilter(fruitIconsInfo['walnuts']));
    }
    if($('#checkbox_filter_option_181377').length) {
        $('#checkbox_filter_option_181377').after(getFruitIconHtmlForFilter(fruitIconsInfo['tomatos']));
    }
    if($('#checkbox_filter_option_181376').length) {
        $('#checkbox_filter_option_181376').after(getFruitIconHtmlForFilter(fruitIconsInfo['honey']));
    }
    if($('#checkbox_filter_option_183059').length) {
        $('#checkbox_filter_option_183059').after(getFruitIconHtmlForFilter(fruitIconsInfo['grapes']));
    }
    if($('#checkbox_filter_option_185165').length) {
        $('#checkbox_filter_option_185165').after(getFruitIconHtmlForFilter(fruitIconsInfo['persimmons']));
    }
    if($('#checkbox_filter_option_186572').length) {
        $('#checkbox_filter_option_186572').after(getFruitIconHtmlForFilter(fruitIconsInfo['feijoas']));
    }
    if($('#checkbox_filter_option_187241').length) {
        $('#checkbox_filter_option_187241').after(getFruitIconHtmlForFilter(fruitIconsInfo['tropicalFruits']));
    }
    if($('#checkbox_filter_option_192357').length) {
        $('#checkbox_filter_option_192357').after(getFruitIconHtmlForFilter(fruitIconsInfo['chocolate']));
    }
    if($('#checkbox_filter_option_192476').length) {
        $('#checkbox_filter_option_192476').after(getFruitIconHtmlForFilter(fruitIconsInfo['mango']));
    }
    if($('#checkbox_filter_option_192604').length) {
        $('#checkbox_filter_option_192604').after(getFruitIconHtmlForFilter(fruitIconsInfo['oranges']));
    }

    if($(".custom-filter-options").length) {
        //Add in season section
        var inSeasonHtml = "<div><img width='110px' src='https://raw.githubusercontent.com/UPICKO/external_files/master/images/in_season.png'/></div><div id='inSeasonFilters' style='margin-bottom: 10px; margin-left: 20px;'></div>";
        $(".custom-filter-options").before(inSeasonHtml);
        $(".custom-filter-options").find(".custom-filter-checkbox-container").each(function (index) {
            var fruit = $.trim($(this).find(".custom-filter-checkbox-label-text").html());
            if(jQuery.inArray(fruit, inSeasonFruits) != -1) {
                var element = $(this).detach();
                $("#inSeasonFilters").append(element);
            }
        });
        $('input:checkbox').show();

        //Customize the checkbox style
        //Add state checkbox in main page
        var stateCheckboxHtml =
            "<span id='stateCheckboxContainer' class='floatLeft' style='padding-top: 0.5em;'>" +
            "   <span style='padding-right: 5px;'><b>STATE: </b></span>" +
            "   <input type='checkbox' value='NSW'/> NSW " +
            "   <input type='checkbox' value='VIC'/> VIC " +
            "   <input type='checkbox' value='QLD'/> QLD " +
            "   <input type='checkbox' value='SA'/> SA " +
            "   <input type='checkbox' value='TAS'/> TAS " +
            "   <input type='checkbox' value='WA'/> WA " +
            "   <input type='checkbox' value='NT'/> NT " +
            "</span>";
        $(".home-toolbar-button-group").after(stateCheckboxHtml);
        var q = getUrlParameter("q");
        if(q) {
            $('#stateCheckboxContainer input[type=\"checkbox\"]').each(function (index) {
                if($(this).val() == q) {
                    $(this).prop("checked",true);
                }
            });
        }

        //Add category checkbox in main page
        var stateCheckboxHtml =
            "<span id='categoryCheckboxContainer' class='floatLeft' style='margin-left: 1em; padding-top: 0.5em;'>" +
            "   <span style='padding-right: 5px;'><b>Category: </b></span>" +
            "   <input type='checkbox' value='u-pick-access'/> U-Pick Access " +
            "   <input type='checkbox' value='food-selling-online'/> Food Selling Online " +
            "   <input type='checkbox' value='shed-Door-sale'/> Shed Door Sale " +
            "</span>";
        $("#stateCheckboxContainer").after(stateCheckboxHtml);
        var category = getUrlParameter("category");
        if(category) {
            $('#categoryCheckboxContainer input[type=\"checkbox\"]').each(function (index) {
                if($(this).val() == category) {
                    $(this).prop("checked",true);
                }
            });
        }

        $('input:checkbox').iCheck({
            checkboxClass: 'icheckbox_square-orange',
            radioClass: 'icheckbox_square-orange'
        });
        $('input:checkbox').show();

        //Make the state checkbox like radio action
        if($("#stateCheckboxContainer").length && $("#stateCheckboxContainer .iCheck-helper").length) {
            $("#stateCheckboxContainer .iCheck-helper").on("click", function() {
                var checkedCheckboxContainer = $("#stateCheckboxContainer").find('.icheckbox_square-orange.checked').find('.iCheck-helper').not(this).parent();
                checkedCheckboxContainer.removeClass('checked');
                checkedCheckboxContainer.find(':checkbox').prop("checked",false);
                var checkbox = $(this).parent().find('input[type=\"checkbox\"]');
                var state = "";
                if(checkbox.prop("checked"))
                    state = checkbox.val();
                clickStateCheckbox(state);
            });
        }

        //Make the category checkbox like radio action
        if($("#categoryCheckboxContainer").length && $("#categoryCheckboxContainer .iCheck-helper").length) {
            $("#categoryCheckboxContainer .iCheck-helper").on("click", function() {
                var checkedCheckboxContainer = $("#categoryCheckboxContainer").find('.icheckbox_square-orange.checked').find('.iCheck-helper').not(this).parent();
                checkedCheckboxContainer.removeClass('checked');
                checkedCheckboxContainer.find(':checkbox').prop("checked",false);
                var checkbox = $(this).parent().find('input[type=\"checkbox\"]');
                var category = "";
                if(checkbox.prop("checked"))
                    category = checkbox.val();
                clickCategoryCheckbox(category);
            });
        }

        //Make the fruit filter checkbox like radio action in home page
        if($("#filters").length && $("#filters").find('.iCheck-helper').length) {
            $("#filters").find('.iCheck-helper').on("click", function() {
                var checkedCheckboxContainer = $("#filters").find('.icheckbox_square-orange.checked').find('.iCheck-helper').not(this).parent();
                checkedCheckboxContainer.removeClass('checked');
                checkedCheckboxContainer.find(':checkbox').prop("checked",false);
                //Click the "update view" button
                $("#filters button").click();
            });

            $("#filters").find('.custom-filter-checkbox-label-text').on("click", function() {
                $(this).parent().find('.icheckbox_square-orange ins').click();
                return false;
            });
            $("#filters").find('img').on("click", function() {
                $(this).parent().find('.icheckbox_square-orange ins').click();
                return false;
            });
        }

        // Refresh Page and Keep Scroll Position in map page
        $(window).scroll(function() {
            sessionStorage.scrollTop = $(this).scrollTop();
        });
        $(document).ready(function() {
            if (sessionStorage.scrollTop != "undefined") {
                $(window).scrollTop(sessionStorage.scrollTop);
            }
        });

        // Add certified medal to registered farms in home page
        homeMedalHtml1 = "<a class='home-fluid-thumbnail-grid-author-name certifiedFarmMedalInGrid' style='margin-left: 10em; margin-top: 0.2em' href='javascript:void(0);' title=\""+titleText+"\"><img style='margin-left: 10px; float: left; width: 24px' src='https://raw.githubusercontent.com/UPICKO/external_files/master/images/certified.png'/></a>";
        homeMedalHtml2 = "<a class='certifiedFarmMedalInGrid' href='javascript:void(0);' title=\""+titleText+"\"><img style='margin-left: 3em; margin-top: 0.2em; float: left; width: 24px' src='https://raw.githubusercontent.com/UPICKO/external_files/master/images/certified.png'/></a>";
        homeMedalHtml3 = "<a class='certifiedFarmMedalInMap' href='javascript:void(0);' title=\""+titleText+"\"><img style='margin-left: 3em; margin-top: 0.2em; float: left; width: 20px' src='https://raw.githubusercontent.com/UPICKO/external_files/master/images/certified.png'/></a>";
        if($(".home-fluid-thumbnail-grid-item").length || $('#map-canvas').length) {
            if($(".home-fluid-thumbnail-grid-item").length) {
                // Add certified medal to registered farms in grid view
                addCertifiedMedalInHomePage();
                invokeTooltip();

                $(".home-fluid-thumbnail-grid").bind("DOMNodeInserted",function(e){
                    var element = e.target;
                    var autherNameLinklength = $(element).find(".home-fluid-thumbnail-grid-author-name").length;
                    var autherEle = autherNameLinklength ?  $(element).find(".home-fluid-thumbnail-grid-author-name") : $(element).find(".home-fluid-thumbnail-grid-details-author-name");
                    if(autherEle.length) {
                        if(autherEle.attr("title") != 'Upicko') {
                            if(autherEle.find('.certifiedFarmMedalInGrid').length)
                                return;
                            if(autherNameLinklength)
                                autherEle.after(homeMedalHtml1);
                            else
                                autherEle.after(homeMedalHtml2);
                            invokeTooltip();
                            event.stopPropagation();
                        }
                    }
                });
            } else {
                // Add certified medal to registered farms in map view
                $("body").on('DOMSubtreeModified', "#map-canvas", function() {
                    if($('.bubble-details').is(':visible')) {
                        autherEle = $('.bubble-details .bubble-author a');
                        if(autherEle.attr("title") != 'Upicko') {
                            if($('.bubble-details').find('.certifiedFarmMedalInMap').length)
                                return;

                            var bubblePriceEle = $('.bubble-details').find('.bubble-price');
                            if($.trim(bubblePriceEle.html()) == "") {
                                bubblePriceEle.html(homeMedalHtml3);
                                invokeTooltip();
                                event.stopPropagation();
                            }
                        }
                    }
                });
            }
        }

        // Add certified medal to registered farms in home page
        function addCertifiedMedalInHomePage() {
            var autherNameLinklength = $(".home-fluid-thumbnail-grid-item .home-fluid-thumbnail-grid-author-name").length;
            var autherEleList = autherNameLinklength ?  $(".home-fluid-thumbnail-grid-item .home-fluid-thumbnail-grid-author-name") : $(".home-fluid-thumbnail-grid-item .home-fluid-thumbnail-grid-details-author-name");
            if(autherEleList.length) {
                autherEleList.each(function (index) {
                    if($(this).attr("title") != 'Upicko') {
                        if($(this).find('.certifiedFarmMedalInGrid').length)
                            return;
                        if(autherNameLinklength)
                            $(this).after(homeMedalHtml1);
                        else
                            $(this).after(homeMedalHtml2);
                    }
                });
            }
        }
    }
});


function invokeTooltip() {
    $('.certifiedFarmMedalInGrid, .certifiedFarmMedalInMap').tooltip({
        track: false,
        content: function () {
            return $(this).prop('title');
        },
        close: function(event, ui){
            ui.tooltip.hover(
                function () {
                    $(this).stop(true).fadeTo(400, 1);
                },
                function () {
                    $(this).fadeOut("400", function(){
                        $(this).remove();
                    })
                }
            );
        }
    });
}

function getBannerHtml() {
    var randomInt = Math.floor((Math.random() * featureFarmsInfo.length));
    return "" +
        "<table class='bannerTable' style='background-image: url("+featureFarmsInfo[randomInt].imageUrl+");'>" +
        "	<tr style='height: 150px'>" +
        "		<td width='44%' style='text-valign: middle; padding-left: 20px'>" +
        "			<h1 id='bannerDesc'>" +
        "				Find the U-Pick farms around you" +
        "				<br/>" +
        "				Buy the fresh food from farms by whole sale price" +
        "			</h1>" +
        "		</td>" +
        "		<td width='56%'>" +
        "			<a href='"+featureFarmsInfo[randomInt].hrefUrl+"'>" +
        "				<div style='width: 100%; height: 100px' ></div>" +
        "			</a>" +
        "		</td>" +
        "	</tr>" +
        "</table>";
}

function getFruitIconHtmlForFilter(url) {
    return '<img src="'+url+'" width="20px" style="vertical-align: middle; margin-left: 4px;"/>';
}

function setFruitIconInMapForFilter(filterTextInUrl, fruitIconUrl) {
    if(window.location.href.indexOf(filterTextInUrl) !== -1) {
        if($(".home-toolbar").length && markers && markers.length >= 1) {
            for(i=markers.length - 1; i>=0; i--) {
                markers[i].setIcon(fruitIconUrl);
            }
        }
    }
}

function clickStateCheckbox(state) {
    var url = window.location.href;
    var stateInUrl = getUrlParameter("q");
    if(state) {
        if(stateInUrl)
            url = url.replace(stateInUrl, state);
        else {
            if(url.indexOf("?") > 0)
                url = url + "&q=" + state;
            else
                url = url + "?q=" + state;
        }
    } else {
        if(stateInUrl)
            url = url.replace("q=" + stateInUrl, "");
    }
    window.location = url;
}

function clickCategoryCheckbox(category) {
    var url = window.location.href;
    var categoryInUrl = getUrlParameter("category");
    if(category) {
        if(categoryInUrl != undefined)
            url = url.replace(categoryInUrl, category);
        else {
            if(url.indexOf("?") > 0)
                url = url + "&category=" + category;
            else
                url = url + "?category=" + category;
        }
    } else {
        if(categoryInUrl)
            url = url.replace("category=" + categoryInUrl, "");
    }
    window.location = url;
}
