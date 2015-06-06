var formattedName = HTMLheaderName.replace("%data%", "Jason Barr");
var formattedRole = HTMLheaderRole.replace("%data%", "Lead Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
