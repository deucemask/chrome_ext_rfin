console.log('Running Redfin extension on ' +  window.location.href);

// var i, nodes = [], frames, count = 0;
// frames = document.getElementsByTagName('iframe');
// count = frames.length;
// for (i = 0; i < frames.length; i++) { nodes[i] = frames.item(i); };
// for (i = 0; i < nodes.length; i++) { nodes[i].parentNode.removeChild(nodes[i]); };

// console.log(count + ' elements were removed.');

var row = [];

//Days on Redfin
row[0] = jQuery(jQuery(".bottom-stats .float-right span.value")[1]).text().replace(" days", "");

//Open Houses dates
row[1] = '"' + jQuery(jQuery(".open-house-item")[0]).find("time").text().replace("Sunday", "Dimanche") + ": " + jQuery(jQuery(jQuery(".open-house-item")[0]).find("span[data-rf-test-id*='openHouse-times'] span")[1]).text();
row[1] += "\n" + jQuery(jQuery(".open-house-item")[1]).find("time").text().replace("Sunday", "Dimanche") + ": " + jQuery(jQuery(jQuery(".open-house-item")[1]).find("span[data-rf-test-id*='openHouse-times'] span")[1]).text();
row[1] += '"';

//Image
row[2] = '=image("' + jQuery(".ImageCard.visible img").attr("src") + '")';

//EMPTY
row[3] = "";
 
//Address
//City
row[4] = '"' + jQuery(".citystatezip").first().find(".locality").text();
//Street
row[4] += "\n" + jQuery(".street-address").first().text();
row[4] += '"';


//Price
row[5] = jQuery(".HomeMainStats .info-block:nth-child(2) .statsValue").text();

//Redfin price estimate
row[6] = jQuery(".bottom-stats span[data-rf-test-id*='avmLdpPrice'] .value").text();


//Beds
row[7] = jQuery(".HomeMainStats .info-block:nth-child(3) .statsValue").text();
//Baths
row[8] = jQuery(".HomeMainStats .info-block:nth-child(4) .statsValue").text();
//Sqaure feet
row[9] = jQuery(".HomeMainStats .info-block:nth-child(5) .statsValue").text();

//Lot Size
// row[10] = jQuery(jQuery(".more-info-div .inline-block:nth-child(2) .more-info-data")[2]).text().replace(" square feet", "");
row[10] = jQuery(".more-info-div tr:contains('Lot Size') .more-info-data").text().replace(" square feet", "");


//Schools
var schools = []; 
jQuery(".gs-rating").each(function() {schools.push(jQuery(this).attr("class").split("-")[4]);})
row[11] = schools.join(",");

//EMPTY
row[12] = "";
//EMPTY
row[13] = "";
//EMPTY
row[14] = "";

//Year built
row[15] = jQuery(".more-info-div tr:contains('Built') .more-info-data").text();

//Garage
row[16] = jQuery("span:contains('Garage Spaces:')").next().text();

//URL
row[17] = document.location.href;

alert(row.join('\t'));


