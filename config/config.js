/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "de",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "calendar",
			header: "Google Kalender",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "https://calendar.google.com/calendar/ical/developing.mmaier96%40gmail.com/private-dbf97047c1c9e1c434850d60180dcad0/basic.ics"
					},
					{
						symbol: "bell-o ",
						url: "https://calendar.google.com/calendar/ical/de.german%23holiday%40group.v.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "clock",
			position: "top_right"
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			 module: "MMM-NowPlayingOnSpotify",
			 position: "top_right",

	 		 config: {
   				 clientID: "8af1a1d9ae1f4518ab979d879ca549b3",
   				 clientSecret: "855e9805e9424ac5a4e2310a95ed548a",
   				 accessToken: "BQBfxiJneeYfxhV3cK_O4pJ0zjDev0wQhx5SsfZBoNemLYvJJwGGS9Y4utTwOUVPhu5D4415X7yXR4pgwxn4LaQ1lzPeSYx94dzIautBYjgn62t3TO2sn5swmC6b6OzTu4vywseYWZ1rL7T8nTaBG2dJj-Ln",
   				 refreshToken: "AQC9wuY6VJ2W-oXNmXpzotodOgWn9EbecSPNlIhhLDblyKFMeT8rLmeYOvmtPxyUIfiVFMnZmn3nfplvkqOEGsjGEzYdNrWGyJZYJmkWFL7Qlm_AEOt3txOBJOo9pBM9OswhGg"
  			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Würzburg",
				locationID: "3220898",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "b1017b8a868e42a7928639ee0b98df6f"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Heise Deutschland",
						url: "https://www.heise.de/newsticker/heise-atom.xml"
					},
					{
						title: "Chip Online Deutschland",
						url: "http://www.chip.de/rss/rss_topnews.xml"
					},
					{
						title: "Computerbild Deutschland",
						url: "https://www.computerbild.de/rssfeed_2261.html?node=10"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
