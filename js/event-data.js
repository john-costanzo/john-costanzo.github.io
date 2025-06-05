const events = [
    {
        venue: "Point Lookout",
        date: "2025-06-07",
        time: "7:00 pm - 10:00 pm",
        name: "Chairmen of The Board",
        sorttime: "2025-06-07 19:00",
        detail: "None"
    },
    {
        venue: "Point Lookout",
        date: "2025-06-20",
        time: "7:00 pm - 10:00 pm",
        name: "ChillBilly & Blake Ellege",
        sorttime: "2025-06-20 19:00",
        detail: "None"
    },
    {
        venue: "Point Lookout",
        date: "2025-07-19",
        time: "7:00 pm - 10:00 pm",
        name: "Boomer Jukebox",
        sorttime: "2025-07-19 19:00",
        detail: "None"
    },
    {
        venue: "Point Lookout",
        date: "2025-08-09",
        time: "8:00 am - 5:00 pm",
        name: "Chicago Rewired",
        sorttime: "2025-08-09 08:00",
        detail: "None"
    },
    {
        venue: "Point Lookout",
        date: "2025-08-15",
        time: "7:00 pm - 10:00 pm",
        name: "Too Much Sylvia 2025",
        sorttime: "2025-08-15 19:00",
        detail: "None"
    },
    {
        venue: "Point Lookout",
        date: "2025-08-23",
        time: "¿ - ?",
        name: "Reunion Weekend",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Point Lookout",
        date: "2025-09-12",
        time: "7:00 pm - 10:00 pm",
        name: "The Tams 2025",
        sorttime: "2025-09-12 19:00",
        detail: "None"
    },
    {
        venue: "Souther Williams",
        date: "2025-06-07",
        time: "2:00 pm - 5:00 pm",
        name: "Tim Nave – Live Music",
        sorttime: "2025-06-07 14:00",
        detail: "Tim Nave is a musician from North East Tennessee. While he"
    },
    {
        venue: "Souther Williams",
        date: "2025-06-08",
        time: "12:00 pm - 3:30 pm",
        name: "El Bodegon Food Truck",
        sorttime: "2025-06-08 12:00",
        detail: "Argentinian Flare"
    },
    {
        venue: "Souther Williams",
        date: "2025-06-08",
        time: "1:00 pm - 4:00 pm",
        name: "Hope Griffin – Live Music",
        sorttime: "2025-06-08 13:00",
        detail: "Folk/Americana/Singer-Songwriter - Hope continues to wow audiences and stretch the"
    },
    {
        venue: "Souther Williams",
        date: "2025-06-08",
        time: "7:30 pm - 9:00 pm",
        name: "Blue Ridge Orchestra",
        sorttime: "2025-06-08 19:30",
        detail: "Something magical is happening in the vineyard! Our Summer Soirée"
    },
    {
        venue: "Souther Williams",
        date: "2025-06-14",
        time: "12:00 pm - 5:00 pm",
        name: "El Bodegon – Food Truck",
        sorttime: "2025-06-14 12:00",
        detail: "Serving comfort food from Argentina with Italian and Spanish influences"
    },
    {
        venue: "Souther Williams",
        date: "2025-06-14",
        time: "2:00 pm - 5:00 pm",
        name: "Will Hartz – Live Music",
        sorttime: "2025-06-14 14:00",
        detail: "A born entertainer and a multi instrumentalist, Will Hartz has been"
    },
    {
        venue: "Souther Williams",
        date: "2025-06-15",
        time: "12:00 pm - 6:00 pm",
        name: "Mëhfil Indian Cuisine – Food Truck",
        sorttime: "2025-06-15 12:00",
        detail: "Authentic Indian Food with a range of flavorful Indian dishes."
    },
    {
        venue: "Souther Williams",
        date: "2025-06-15",
        time: "2:00 pm - 5:00 pm",
        name: "Maddy Winer & Masterpiece – Live Music",
        sorttime: "2025-06-15 14:00",
        detail: "Maddy Winer & Masterpiece have entertained guests for many years"
    },
    {
        venue: "Souther Williams",
        date: "2025-06-21",
        time: "2:00 pm - 5:00 pm",
        name: "Eric Congdon and Raphael Graves – Live Music",
        sorttime: "2025-06-21 14:00",
        detail: "The dynamic duo of Eric Congdon and Raphael Graves come"
    },
    {
        venue: "Souther Williams",
        date: "2025-06-22",
        time: "12:00 pm - 5:00 pm",
        name: "El Bodegon – Food Truck",
        sorttime: "2025-06-22 12:00",
        detail: "Serving comfort food from Argentina with Italian and Spanish influences"
    },
    {
        venue: "Souther Williams",
        date: "2025-06-22",
        time: "2:00 pm - 5:00 pm",
        name: "Aaron LaFalce – Live Music",
        sorttime: "2025-06-22 14:00",
        detail: "With roots in the Blue Ridge Mountains and rhythms that"
    },
    {
        venue: "Souther Williams",
        date: "2025-06-28",
        time: "12:00 pm - 5:00 pm",
        name: "El Bodegon – Food Truck",
        sorttime: "2025-06-28 12:00",
        detail: "Serving comfort food from Argentina with Italian and Spanish influences"
    },
    {
        venue: "Trailside",
        date: "2025-06-05",
        time: "¿ - ?",
        name: "Food Truck: Panorama Mediterrean Grill and Milk & Honey",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-05",
        time: "6:30 pm - 8:30 pm",
        name: "Adventure Film Series: One Ocean Film Tour",
        sorttime: "2025-06-05 18:30",
        detail: "Join us at Trailside Brewing Co. for our FREE Adventure Film Series with seven films (listed below) this April-July, sponsored by Mast General Store! \nThe One Ocean Film Tour screens Thursday, June 5 at 6:30 PM. Doors open at 5:45 PM! Seating is first come first serve.\nThe Ocean Film Tour is a series of ocean-loving films focused on adventure, the aquatic environment and inspirational stories. \nThe film will take you from surfing in Bali to joining a marine biology team on the Gulf Listen Project in Mexico, fighting for the protection of salmon to understanding the impact of noise pollution on whale habits. One Ocean Film Tour is a spectacular visual journey. Join us and immerse yourself in the mighty power of our One Ocean!\nWe’re excited to have Mountains to Sea as our co-host and emcee! They’re your locally owned liquid outfitter based in Pisgah Forest, NC—offering PADI dive instruction, guided snorkeling, private boat charters, international travel, and more!\n✨ What to Expect:🎥 A curated collection of adventure-filled, ocean-loving films featuring the sea, exploration, and inspiring stories.🍻 Drinks from Trailside Brewing & food available for purchase🎟️ FREE & open to all ages!\nMark your calendar, invite your friends, and come celebrate adventure with us! Let us know you’re coming—we can’t wait to see you on June 5!\nAdventure Film Series at Trailside Brewing Thursday Evenings at 6:30pmFree Community EventApril 17: Women’s Adventure FilmMay 1: Climbing Film TourMay 22: Fly Fishing Tour June 5: One Ocean Film TourJune 26: Run Nation Film FestivalJuly 3: A Life of Endless Summer FilmJuly 24:5 Summer Stories FilmJuly 3: A Life of Endless Summer FilmJuly 24:5 Summer Stories Film"
    },
    {
        venue: "Trailside",
        date: "2025-06-06",
        time: "¿ - ?",
        name: "Food Truck: Milk & Honey",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-06",
        time: "¿ - ?",
        name: "Food Truck: Silly Willies Hot Dogs",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-06",
        time: "6:00 pm - 9:00 pm",
        name: "Live Music: Jazz",
        sorttime: "2025-06-06 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-07",
        time: "¿ - ?",
        name: "Food Truck: Milk & Honey",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-07",
        time: "6:00 pm - 9:00 pm",
        name: "Live Music: The Workin’ Men",
        sorttime: "2025-06-07 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-08",
        time: "¿ - ?",
        name: "Food Truck: Indian Aroma",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-08",
        time: "2:00 pm - 5:00 pm",
        name: "Live Music: Kristen Toole",
        sorttime: "2025-06-08 14:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-09",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session",
        sorttime: "2025-06-09 16:00",
        detail: "Liven up your evening with a taste of Ireland year round (paired with the finest brews!)  Jigs, reels and the occasional song will lift spirits.  Good \"craic\" as they say in Ireland!"
    },
    {
        venue: "Trailside",
        date: "2025-06-10",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail",
        sorttime: "2025-06-10 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-11",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell",
        sorttime: "2025-06-11 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-12",
        time: "5:30 pm - 7:00 pm",
        name: "Green Drinks with Conserving Carolina & Mtn True",
        sorttime: "2025-06-12 17:30",
        detail: "Come to Green Drinks to learn more about current environmental issues, have revenant discussions, and meet like-minded people! \nMeetings are held the second Thursday of each month from 5:30-7PM"
    },
    {
        venue: "Trailside",
        date: "2025-06-12",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Summer Blockbuster Trivia",
        sorttime: "2025-06-12 18:30",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-13",
        time: "¿ - ?",
        name: "Food Truck: Indian Aroma",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-13",
        time: "6:00 pm - 9:00 pm",
        name: "Live Music: Max Eve",
        sorttime: "2025-06-13 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-14",
        time: "¿ - ?",
        name: "Food Truck: Panorama Mediterranean Grill and Milk and Honey",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-14",
        time: "1:00 pm - 5:00 pm",
        name: "Dupont Forest Bike Wash!",
        sorttime: "2025-06-14 13:00",
        detail: "Come and show your support for DuPont State Forest while showing your bike some love! If you’re not a cyclist but still love DuPont, come support the Forest while enjoying live music and so much more during the Bike Wash on Saturday, June 14, at Trailside Brewing.\nThis family-friendly event is a membership drive for Friends of DuPont Forest. Every membership directly supports the Forest and is crucial to its maintenance.With the purchase of an individual membership at the event, you will receive 1 complimentary bicycle wash and lube. \nThese services will be provided courtesy of some of the area\'s most talented bike mechanics.In addition to the membership drive and bike services, we will also have live music performed by Blue Ridge Betty and The Late Shifters"
    },
    {
        venue: "Trailside",
        date: "2025-06-14",
        time: "6:00 pm - 9:00 pm",
        name: "Live Music: Parker's Back",
        sorttime: "2025-06-14 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-15",
        time: "¿ - ?",
        name: "Food Truck: Indian Aroma",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-15",
        time: "2:00 pm - 5:00 pm",
        name: "Live Music: Will Hartz",
        sorttime: "2025-06-15 14:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-16",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session",
        sorttime: "2025-06-16 16:00",
        detail: "Liven up your evening with a taste of Ireland year round (paired with the finest brews!)  Jigs, reels and the occasional song will lift spirits.  Good \"craic\" as they say in Ireland!"
    },
    {
        venue: "Trailside",
        date: "2025-06-16",
        time: "6:30 pm - 8:30 pm",
        name: "Paint Your Own Pottery Class",
        sorttime: "2025-06-16 18:30",
        detail: "Join us for a Paint your own Pottery class with Half Light Honey! Click here for more information!"
    },
    {
        venue: "Trailside",
        date: "2025-06-17",
        time: "6:00 pm - 8:00 pm",
        name: "BINGO with Hendersonville Rotary Club",
        sorttime: "2025-06-17 18:00",
        detail: "Come join us for BINGO from 6-8PM for 15 games of bingo. $15 for 15 games! Cash prizes from $10-$100. Come on out to have some fun!!"
    },
    {
        venue: "Trailside",
        date: "2025-06-17",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail",
        sorttime: "2025-06-17 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-18",
        time: "¿ - ?",
        name: "Food Truck: Heidi Ho on the Go",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-18",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell",
        sorttime: "2025-06-18 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-19",
        time: "¿ - ?",
        name: "Food Truck: Panorama Mediterranean Grill and Milk and Honey",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-19",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia",
        sorttime: "2025-06-19 18:30",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-19",
        time: "7:30 pm - 9:30 pm",
        name: "Fish, Laugh, Love: Fly Fishing themed comedy fundraiser",
        sorttime: "2025-06-19 19:30",
        detail: "Modelface Comedy brings you the best comedians from all over the country. For this special fundraiser show we have Eeland Stribling from Denver. \nFISH, LAUGH, LOVEA fly fishing themed comedy fundraiser to help rehab our rivers after Hurricane Helene featuring Eeland Stribling.\nEeland will be sharing a mix of videos and stories from his fly fishing/ conservation career along with his stand up comedy.\nStribling started his comedy career during his time at Colorado State University where he studied conservation and wildlife biology. Since then, he has made a living between his two passions working as an environmentalist by day and a comic by night.\nages 16+Doors at 7pmShow at 7:30pm\nTickets$15 general admission$25 premium seating\nhttps://www.eventbrite.com/e/fish-laugh-love-fly-fishing-themed-comedy-fundraiser-tickets-1380907695089?aff=oddtdtcreator"
    },
    {
        venue: "Trailside",
        date: "2025-06-20",
        time: "¿ - ?",
        name: "Food Truck: Panorama Mediterranean Grill and Milk and Honey",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-20",
        time: "6:00 pm - 9:00 pm",
        name: "Live Music: Riyen Roots",
        sorttime: "2025-06-20 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-21",
        time: "1:00 pm - 6:00 pm",
        name: "Blue Ridge Artisan Summer Solstice Market",
        sorttime: "2025-06-21 13:00",
        detail: "Come on out to our Blue Ridge Artisan Market from 1-6pm! Are you ready for longer days and summer nights? Join us for our Summer Solstice Market at Trailside with 20 local makers, live music, and good vibes! ."
    },
    {
        venue: "Trailside",
        date: "2025-06-21",
        time: "2:00 pm - 5:00 pm",
        name: "Live Music: Adi the Monk",
        sorttime: "2025-06-21 14:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-21",
        time: "6:00 pm - 9:00 pm",
        name: "Live Music: The Lunatic Fringe",
        sorttime: "2025-06-21 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-22",
        time: "1:00 pm - 4:00 pm",
        name: "Mobile Book Bus at Trailside!",
        sorttime: "2025-06-22 13:00",
        detail: "The Chapters Bookstop bus (mobile bookstore) will be at Trailside Brewing from 1-4p! Find new and used books for your summer reading"
    },
    {
        venue: "Trailside",
        date: "2025-06-22",
        time: "2:00 pm - 5:00 pm",
        name: "Live Music: Ken Morgan",
        sorttime: "2025-06-22 14:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-23",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session",
        sorttime: "2025-06-23 16:00",
        detail: "Liven up your evening with a taste of Ireland year round (paired with the finest brews!)  Jigs, reels and the occasional song will lift spirits.  Good \"craic\" as they say in Ireland!"
    },
    {
        venue: "Trailside",
        date: "2025-06-24",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail",
        sorttime: "2025-06-24 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-25",
        time: "¿ - ?",
        name: "Food Truck: Heidi Ho on the Go",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-25",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell",
        sorttime: "2025-06-25 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-26",
        time: "¿ - ?",
        name: "Food Truck: Panorama Mediterranean Grill and Milk and Honey",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-26",
        time: "6:30 pm - 8:30 pm",
        name: "Run Nation Adventure Film",
        sorttime: "2025-06-26 18:30",
        detail: "Join us at Trailside Brewing Co. for our FREE Adventure Film Series with seven films (listed below) this April-July, sponsored by Mast General Store! \nThe Run Nation Film Festival screens Thursday, June 26 at 6:30 PM, and is a touring short film festival that features films including all forms of running including trail running, road running, park running, track, marathons, ultra distance and more. \nRunNation Film Festival was created to bring human interest stories to the wider community, using running as the medium of storytelling. RunNation aims to celebrate the power of running and inspire people through the creative expression of film. We’re excited to have Fleet Feet, a locally owned and operated retail shop for runners as our co-host and emcee, and Hendersonville Run Club.\n✨ What to Expect:🎥 A curated selection of films about all forms of running🍻 Drinks from Trailside Brewing & food available for purchase🎟️ FREE & open to all ages!Mark your calendar, invite your friends, and come celebrate running and adventure with us! Let us know you’re coming—we can’t wait to see you on June 26!\nAdventure Film Series at Trailside Brewing Thursday Evenings at 6:30pmFree Community EventApril 17: Women’s Adventure FilmMay 1: Climbing Film TourMay 22: Fly Fishing Tour June 5: One Ocean Film TourJune 26: Run Nation Film FestivalJuly 3: A Life of Endless Summer FilmJuly 24:5 Summer Stories Film"
    },
    {
        venue: "Trailside",
        date: "2025-06-27",
        time: "¿ - ?",
        name: "Food Truck: Indian Aroma",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-27",
        time: "5:00 pm - 7:00 pm",
        name: "Packet Pickup",
        sorttime: "2025-06-27 17:00",
        detail: "Early Packet Pick Up 6/27/25\n 5-7PM Trailside Brewing at 873 Lenox Park Drive, Hendersonville"
    },
    {
        venue: "Trailside",
        date: "2025-06-27",
        time: "6:00 pm - 9:00 pm",
        name: "Live Music: J Dunks",
        sorttime: "2025-06-27 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-28",
        time: "¿ - ?",
        name: "Adair’s Cajun Cooking and Milk and Honey",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-28",
        time: "¿ - ?",
        name: "Food Truck: Milk & Honey",
        sorttime: "¿ - ?",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-28",
        time: "7:00 am - 12:00 pm",
        name: "Summer Session TEAM MARATHON RELAY & 5K",
        sorttime: "2025-06-28 07:00",
        detail: "6:00AM-7:20AM Packet Pick Up\n7AM Marathon Relay\n7:30AM 5k Race Start\n8AM Trailside Bar Open\n8:30AM 5k Tentative Awards\n12PM Marathon Relay Tentative Awards\n\nIncluded in Race Registration (one per Relay Teammate)\nCommemorative Race Shirt\nFinisher Medal\nTrailside Beer (21+)\nDonation to Mills River Partnership"
    },
    {
        venue: "Trailside",
        date: "2025-06-29",
        time: "2:00 pm - 5:00 pm",
        name: "Live Music: Kate Leigh Bryant",
        sorttime: "2025-06-29 14:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-06-30",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session",
        sorttime: "2025-06-30 16:00",
        detail: "Liven up your evening with a taste of Ireland year round (paired with the finest brews!)  Jigs, reels and the occasional song will lift spirits.  Good \"craic\" as they say in Ireland!"
    },
    {
        venue: "Trailside",
        date: "2025-06-30",
        time: "6:00 pm - 8:00 pm",
        name: "Paint & Sip with Monet and Chardonnay",
        sorttime: "2025-06-30 18:00",
        detail: "Unleash your creativity with us at Trailside Brewing Company on Monday, June 30 at 6:00 pm! No experience is needed. Our skilled instructors will help guide you through each step so that you can create a beautiful painting! Registration link coming soon!\nEveryone will receive a 16x20\" canvas with a pre-sketched drawing and all necessary painting supplies. We kindly ask that each guest buys at least one drink or menu item to support this awesome venue. For the best experience, we recommend arriving early to get cozy and order some tasty bites/beverages before we begin!"
    },
    {
        venue: "Trailside",
        date: "2025-07-01",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail",
        sorttime: "2025-07-01 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-07-02",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell",
        sorttime: "2025-07-02 18:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-07-03",
        time: "6:30 pm - 8:30 pm",
        name: "Adventure Film Series: A Life of Endless Summer",
        sorttime: "2025-07-03 18:30",
        detail: "Join us at Trailside Brewing Co. for our FREE Adventure Film Series with seven films (listed below) this April-July, sponsored by Mast General Store!\nA Life of Endless Summer Film screens Thursday, July 3 at 6:30 PM and is an intimate and inspiring look at the life of legendary filmmaker Bruce Brown.Best known for The Endless Summer, the groundbreaking surf documentary that shaped an entire genre of action sports films. In this heartfelt tribute, his son, Dana Brown, takes us on a personal journey through his father’s life—capturing the spirit of a man who lived for adventure, storytelling, and the pursuit of the perfect wave.\nWhether you’re a fan of surfing, adventure films, or simply love a great story about a life well lived, this film is a must-see. Grab a drink, settle in, and celebrate the legacy of a true pioneer!\n✨ What to Expect:🎥 A heartfelt and inspiring documentary celebrating the life and legacy of legendary filmmaker Bruce Brown.🍻 Drinks from Trailside Brewing & food available for purchase🎟️ FREE & open to all ages!\nMark your calendar, invite your friends, and come celebrate adventure with us! Let us know you’re coming—we can’t wait to see you on July 3!\nAdventure Film Series at Trailside BrewingThursday Evenings at 6:30pmFree Community EventApril 17: Women’s Adventure FilmMay 1: Climbing Film TourMay 22: Fly Fishing TourJune 5: One Ocean Film TourJune 26: Run Nation Film FestivalJuly 3: A Life of Endless Summer FilmJuly 24:5 Summer Stories Film"
    },
    {
        venue: "Trailside",
        date: "2025-07-04",
        time: "2:00 pm - 4:00 pm",
        name: "Live Music: Collin Cheek",
        sorttime: "2025-07-04 14:00",
        detail: "None"
    },
    {
        venue: "Trailside",
        date: "2025-07-04",
        time: "5:00 pm - 8:00 pm",
        name: "Live Music: Bill Altman",
        sorttime: "2025-07-04 17:00",
        detail: "None"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-05",
        time: "12:00 pm - 11:00 pm",
        name: "Cummings Cove Cares Fundraiser for Hurricane Helene Recovery and Rebuild",
        sorttime: "2025-06-05 12:00",
        detail: "A portion of sales will go to the rebuild of WNC after Hurricane Helene all day."
    },
    {
        venue: "Oklawaha",
        date: "2025-06-05",
        time: "6:00 pm - 9:00 pm",
        name: "The BRUE @ Oklawaha!",
        sorttime: "2025-06-05 18:00",
        detail: "Music starts @ 6pm!"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-06",
        time: "8:00 pm - 11:00 pm",
        name: "Alma Russ",
        sorttime: "2025-06-06 20:00",
        detail: "Music starts @8pm1"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-07",
        time: "8:00 pm - 11:00 pm",
        name: "Billingsley",
        sorttime: "2025-06-07 20:00",
        detail: "Music starts @8pm! $7 cover!"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-08",
        time: "3:00 pm - 5:00 pm",
        name: "Petah Iah and the Mind Renewers",
        sorttime: "2025-06-08 15:00",
        detail: "Music starts @3pm!"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-12",
        time: "7:00 pm - 9:00 pm",
        name: "Izzy Hughes",
        sorttime: "2025-06-12 19:00",
        detail: "Music starts @7pm!"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-13",
        time: "8:00 pm - 11:00 pm",
        name: "Kayla McKinney",
        sorttime: "2025-06-13 20:00",
        detail: "Music starts @8pm! $5 cover"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-14",
        time: "8:00 pm - 11:00 pm",
        name: "Fancy and Friends in Low Places",
        sorttime: "2025-06-14 20:00",
        detail: "Music starts @8pm! $6 cover!"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-15",
        time: "3:00 pm - 5:00 pm",
        name: "Pleasure Chest",
        sorttime: "2025-06-15 15:00",
        detail: "Music starts @3pm!"
    },
    {
        venue: "Boldrock",
        date: "2025-06-06",
        time: "6:00 pm - 9:00 pm",
        name: "Todd Cecil & The Dirt Yard Choir",
        sorttime: "2025-06-06 18:00",
        detail: "Join us in the taproom as we host live music from Todd Cecil & The Dirt Yard Choir! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-06-07",
        time: "6:00 pm - 9:00 pm",
        name: "Iggy Radio",
        sorttime: "2025-06-07 18:00",
        detail: "Join us in the taproom as we host live music from Iggy Radio! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-06-13",
        time: "6:00 pm - 9:00 pm",
        name: "The Right Fit",
        sorttime: "2025-06-13 18:00",
        detail: "Join us in the taproom as we host live music from The Right Fit! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-06-15",
        time: "11:00 am - 7:00 pm",
        name: "Father's Day BBQ",
        sorttime: "2025-06-15 11:00",
        detail: "Grill, Chill & Celebrate Dad!"
    },
    {
        venue: "Boldrock",
        date: "2025-06-20",
        time: "11:00 am - 9:00 pm",
        name: "13th Birthday Bash: Steal The Pint",
        sorttime: "2025-06-20 11:00",
        detail: "🎉 We’re celebrating in style with a 13th Birthday Bash Steal the Pint giveaway! 🎉"
    },
    {
        venue: "Boldrock",
        date: "2025-06-20",
        time: "6:00 pm - 9:00 pm",
        name: "Finkelstein 3",
        sorttime: "2025-06-20 18:00",
        detail: "Join us in the taproom as we host live music from the Finkelstein 3! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-06-21",
        time: "11:00 am - 9:00 pm",
        name: "BOLD Birthday Bash",
        sorttime: "2025-06-21 11:00",
        detail: "We’re turning 13 and it’s time to get bold with the birthday fun! Join us at Bold Rock Mills River as we celebrate 13 years of cider and cheer with a day full of festivities for the whole family!"
    },
    {
        venue: "Boldrock",
        date: "2025-06-26",
        time: "5:00 pm - 7:00 pm",
        name: "Macarons & Flight Pairing",
        sorttime: "2025-06-26 17:00",
        detail: "Sweet dreams are made of cider and macarons! Join us for a deliciously indulgent evening featuring a flight of four refreshing Bold Rock ciders perfectly paired with delicate, flavorful macarons—all for just $18!"
    },
    {
        venue: "Boldrock",
        date: "2025-06-27",
        time: "6:00 pm - 9:00 pm",
        name: "Fine Line Band",
        sorttime: "2025-06-27 18:00",
        detail: "Join us in the taproom as we host live music from the Fine Line Band! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-06-28",
        time: "6:00 pm - 9:00 pm",
        name: "Awake In The Dream",
        sorttime: "2025-06-28 18:00",
        detail: "Join us in the taproom as we host live music from Awake In The Dream! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-07-05",
        time: "6:00 pm - 9:00 pm",
        name: "Iggy Radio",
        sorttime: "2025-07-05 18:00",
        detail: "Join us in the taproom as we host live music from Iggy Radio! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-07-11",
        time: "6:00 pm - 9:00 pm",
        name: "Myron Hyman",
        sorttime: "2025-07-11 18:00",
        detail: "Join us in the taproom as we host live music from Myron Hyman! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-07-12",
        time: "6:00 pm - 9:00 pm",
        name: "Jon Cox Band",
        sorttime: "2025-07-12 18:00",
        detail: "Join us in the taproom as we host live music from the Jon Cox Band! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-07-18",
        time: "6:00 pm - 9:00 pm",
        name: "Fine Line Band",
        sorttime: "2025-07-18 18:00",
        detail: "Join us in the taproom as we host live music from the Fine Line Band! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-07-19",
        time: "6:00 pm - 9:00 pm",
        name: "Finkelstein 3",
        sorttime: "2025-07-19 18:00",
        detail: "Join us in the taproom as we host live music from the Finkelstein 3! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-07-24",
        time: "5:00 pm - 7:00 pm",
        name: "Sorbet & Flight Pairing",
        sorttime: "2025-07-24 17:00",
        detail: "Sweet dreams are made of cider and SORBET! Join us for a deliciously indulgent evening featuring a flight of four refreshing Bold Rock ciders perfectly paired with delicate, flavorful sorbet —all for just $18!"
    },
    {
        venue: "Boldrock",
        date: "2025-07-25",
        time: "6:00 pm - 9:00 pm",
        name: "Todd Cecil & The Dirt Yard Choir",
        sorttime: "2025-07-25 18:00",
        detail: "Join us in the taproom as we host live music from Todd Cecil & The Dirt Yard Choir! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-07-26",
        time: "11:00 am - 9:00 pm",
        name: "4th Annual Bold Rock Fishing Fest",
        sorttime: "2025-07-26 11:00",
        detail: "🎣 Reel in the Fun at our 4th Annual Fishing Fest! 🎶🐟Join us at Bold Rock Mills River on Saturday, July 26 for a day full of fishing, fun, and fundraising! We're casting out good vibes to support Casting for Recovery Carolinas with raffles, vendors, fishing education, and local fishing groups onsite."
    },
    {
        venue: "Boldrock",
        date: "2025-05-31",
        time: "6:00 pm - 9:00 pm",
        name: "Tracy Davis & The TMI Band",
        sorttime: "2025-05-31 18:00",
        detail: "Join us in the taproom as we host live music from Tracy Davis & The TMI Band! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-05-30",
        time: "6:00 pm - 9:00 pm",
        name: "Todd Cecil & The Dirt Yard Choir",
        sorttime: "2025-05-30 18:00",
        detail: "Join us in the taproom as we host live music from Todd Cecil and The Dirt Yard Choir! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-05-24",
        time: "11:00 am - 9:00 pm",
        name: "Kickoff to Summer",
        sorttime: "2025-05-24 11:00",
        detail: "Let’s sip into summer the right way! Join us at Bold Rock Mills River for an all-day celebration of sunshine, cider, and good vibes. We’re bringing the heat on Saturday with yard games, kid-friendly activities, and a rockin’ performance from The Showboat Band from 6–9PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-05-23",
        time: "6:00 pm - 9:00 pm",
        name: "Sound Invasion",
        sorttime: "2025-05-23 18:00",
        detail: "Join us in the taproom as we host live music from Sound Invasion! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-05-17",
        time: "6:00 pm - 8:00 pm",
        name: "Finkelstein 3",
        sorttime: "2025-05-17 18:00",
        detail: "Join us in the taproom as we host live music from Finkelstein 3! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-05-16",
        time: "6:00 pm - 8:00 pm",
        name: "Fine Line Band",
        sorttime: "2025-05-16 18:00",
        detail: "Join us in the taproom as we host live music from the Fine Line Band! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-05-15",
        time: "5:00 pm - 7:00 pm",
        name: "Crumbl Cookies & Flight Pairing",
        sorttime: "2025-05-15 17:00",
        detail: "Sweet dreams are made of cider and cookies! Join us for a deliciously indulgent evening featuring a flight of four refreshing Bold Rock ciders perfectly paired with famous Crumbl Cookies—all for just $18!"
    },
    {
        venue: "Boldrock",
        date: "2025-05-11",
        time: "11:00 am - 7:00 pm",
        name: "Mother's Day Plant & Sip",
        sorttime: "2025-05-11 11:00",
        detail: "Celebrate Mom the Bold Rock way—with crisp cider and a little something green! Join us on Mother’s Day for our Plant & Sip, where all moms will receive a complimentary plant (while supplies last) from our friends at the Mills River Fire Department ."
    },
    {
        venue: "Boldrock",
        date: "2025-05-10",
        time: "6:00 pm - 8:00 pm",
        name: "Jay Dee",
        sorttime: "2025-05-10 18:00",
        detail: "Join us in the taproom as we host live music from Jay Dee! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-05-09",
        time: "6:00 pm - 8:00 pm",
        name: "The Sliding Rockers",
        sorttime: "2025-05-09 18:00",
        detail: "Join us in the taproom as we host live music from The Sliding Rockers! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-05-03",
        time: "5:30 pm - 8:30 pm",
        name: "Hard Knox Wrestling at Bold Rock",
        sorttime: "2025-05-03 17:30",
        detail: "Get ready for an awesome day of fun and fierce action at Bold Rock Mills River! We’re kicking things off with GOLDEN PALOOZA from 11AM–3PM—a tail-waggin’ meetup for golden doodles and their humans!"
    },
    {
        venue: "Boldrock",
        date: "2025-05-02",
        time: "6:00 pm - 8:00 pm",
        name: "Myron Hyman",
        sorttime: "2025-05-02 18:00",
        detail: "Join us in the taproom as we host live music from Myron Hyman! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-04-26",
        time: "6:00 pm - 8:00 pm",
        name: "Awake In The Dream",
        sorttime: "2025-04-26 18:00",
        detail: "Join us in the taproom as we host live music from Awake In The Dream! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-04-25",
        time: "6:00 pm - 8:00 pm",
        name: "Finkelstein 3",
        sorttime: "2025-04-25 18:00",
        detail: "Join us in the taproom as we host live music from Finkelstein 3! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-04-19",
        time: "11:00 am - 9:00 pm",
        name: "Easter Egg Give-a-Way",
        sorttime: "2025-04-19 11:00",
        detail: "Hop on over for an egg-stra fun day for kids of all ages—yes, adults too! We’re giving away Easter eggs filled with candy and prizes all day long. But wait, there’s a twist…"
    },
    {
        venue: "Boldrock",
        date: "2025-04-18",
        time: "6:00 pm - 8:00 pm",
        name: "Kid Billy",
        sorttime: "2025-04-18 18:00",
        detail: "Join us in the taproom as we host live music from Kid Billy! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-04-17",
        time: "5:00 pm - 7:00 pm",
        name: "Cupcake & Flight Pairing",
        sorttime: "2025-04-17 17:00",
        detail: "Sweet dreams are made of cider and cupcakes! Join us for a perfectly paired evening featuring house-made mini cupcakes alongside four refreshing ciders for just $18!"
    },
    {
        venue: "Boldrock",
        date: "2025-04-12",
        time: "6:00 pm - 8:00 pm",
        name: "John Cox Band",
        sorttime: "2025-04-12 18:00",
        detail: "Join us in the taproom as we host live music from the John Cox Band! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-04-11",
        time: "6:00 pm - 8:00 pm",
        name: "The Right Fit",
        sorttime: "2025-04-11 18:00",
        detail: "Join us in the taproom as we host live music from The Right Fit! Stop by for a beer & a good time starting at 6PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-04-05",
        time: "12:00 pm - 4:00 pm",
        name: "Grounded & Grateful Event",
        sorttime: "2025-04-05 12:00",
        detail: "Join us for Grounded & Grateful, a special event benefiting Grounded Boots Relief! Enjoy a chainsaw safety demo, participate in our silent auction & raffle featuring incredible prizes like golf packages, cigars, a $500 Continuum tattoo gift card, and a 50/50 raffle—all in support of this amazing 501(c) charity."
    },
    {
        venue: "Boldrock",
        date: "2025-04-04",
        time: "6:00 pm - 10:00 pm",
        name: "Arborfest Expo: AFTER PARTY (Private Event)",
        sorttime: "2025-04-04 18:00",
        detail: "*PRIVATE EVENT* THE TAPROOM WILL CLOSE TO THE PUBLIC AT 4:30PM!"
    },
    {
        venue: "Boldrock",
        date: "2025-03-28",
        time: "5:00 pm - 8:00 pm",
        name: "Finkelstein 3",
        sorttime: "2025-03-28 17:00",
        detail: "Stop by the taproom for live music from amazing local musicians while enjoying your favorite Bold Rock cider and a bite to eat."
    },
    {
        venue: "Boldrock",
        date: "2025-03-27",
        time: "5:00 pm - 7:00 pm",
        name: "Cheesecake & Flight Pairing",
        sorttime: "2025-03-27 17:00",
        detail: "Sweeten your day with the perfect pairing! Join us at the taproom for our Cheesecake & Flight Pairing—an exciting combo of creamy cheesecakes and crisp ciders. For just $18, it’s the ultimate treat to share with family and friends. Don’t miss out on this delicious experience!"
    },
    {
        venue: "Boldrock",
        date: "2025-03-21",
        time: "5:00 pm - 8:00 pm",
        name: "Myron Hyman",
        sorttime: "2025-03-21 17:00",
        detail: "Stop by the taproom for live music from amazing local musicians while enjoying your favorite Bold Rock cider and a bite to eat."
    },
    {
        venue: "Boldrock",
        date: "2025-03-17",
        time: "12:00 pm - 8:00 pm",
        name: "St. Patrick's Day Party!",
        sorttime: "2025-03-17 12:00",
        detail: "St. Patrick’s Day is here and the luck of the Irish is waiting for you! Enjoy $5 select drafts and sip on our festive green cider! Bring your friends, family, and your Irish spirit for a fun-filled day at the taproom! See you there!"
    },
    {
        venue: "Boldrock",
        date: "2025-03-15",
        time: "¿ - ?",
        name: "St. Patrick's Day Weekend Celebration",
        sorttime: "¿ - ?",
        detail: "Get ready to sham-rock your weekend! Join us at the taproom for a St. Patrick’s Day Weekend Celebration with green cider, beads, live music on Saturday from Saint & Sinners (5PM - 8PM), and more! Bring your friends, family, and everyone you know to embrace the luck of the Irish ALL WEEKEND LONG! See you in the taproom for our Saint Patrick's Day Weekend Celebration!"
    },
    {
        venue: "Boldrock",
        date: "2025-03-14",
        time: "11:00 am - 10:00 pm",
        name: "St. Patrick's: Steal the Pint",
        sorttime: "2025-03-14 11:00",
        detail: "St. Patrick’s Day is almost here, and we’re kicking it off with a Steal the Pint giveaway! Join us Friday, March 14, for your chance to grab a limited-edition St. Patrick’s Day beer mug! While supplies last, so get yours before they’re gone! Don’t miss out on the luck of the Irish! "
    },
    {
        venue: "Boldrock",
        date: "2025-03-08",
        time: "6:00 pm - 8:00 pm",
        name: "Cast Iron",
        sorttime: "2025-03-08 18:00",
        detail: "Stop by the taproom for live music from amazing local musicians while enjoying your favorite Bold Rock cider and a bite to eat."
    },
    {
        venue: "Boldrock",
        date: "2025-03-01",
        time: "5:00 pm - 8:00 pm",
        name: "Iggy Radio",
        sorttime: "2025-03-01 17:00",
        detail: "Stop by the taproom for live music from amazing local musicians while enjoying your favorite Bold Rock cider and a bite to eat."
    },
    {
        venue: "Boldrock",
        date: "2025-02-28",
        time: "5:00 pm - 8:00 pm",
        name: "Todd Cecil & The Dirt Yard Choir",
        sorttime: "2025-02-28 17:00",
        detail: "Stop by the taproom for live music from amazing local musicians while enjoying your favorite Bold Rock cider and a bite to eat."
    },
    {
        venue: "Guidon",
        date: "2025-06-06",
        time: "06:00 pm - 10:00 pm",
        name: "Karaoke",
        sorttime: "2025-06-06 18:00",
        detail: "Karaoke with Thunderstruck Entertainment. Every 1st, 2nd, and 3rd Friday of the month from 6-10pm"
    },
    {
        venue: "Guidon",
        date: "2025-06-10",
        time: "06:00 pm - 08:30 pm",
        name: "Run Club",
        sorttime: "2025-06-10 18:00",
        detail: "Guidon Brewing Co. Run Club. Every Tuesday starting at 6pm. Members can purchase a running club T-shirt, and earn points to receive Guidon swag. Hang out after the run for some beer and food. Or non-alcoholic drinks if you preferer.  We have all ability groups, and walkers are also welcome. Check out the run clubs FB page."
    },
    {
        venue: "Guidon",
        date: "2025-06-11",
        time: "07:00 pm - 09:00 pm",
        name: "Team Trivia",
        sorttime: "2025-06-11 19:00",
        detail: "Grab your smartest friends and join us for two fun rounds of trivia."
    },
    {
        venue: "Guidon",
        date: "2025-06-12",
        time: "07:00 pm - 09:00 pm",
        name: "Trout Unlimited Monthly Meeting",
        sorttime: "2025-06-12 19:00",
        detail: "Pisgah Trout Unlimited meets at 7:00 PM on the second Thursday of every month at Guidon Brewing Co. Our July, August, and December meetings are social gatherings without regular chapter business. Trout Unlimited membership is not required to join Pisgah TU meetings and everyone is welcome."
    },
    {
        venue: "Guidon",
        date: "2025-06-14",
        time: "11:00 am - 10:00 pm",
        name: "National Bourbon Day",
        sorttime: "2025-06-14 11:00",
        detail: "11:00 AM - 10:00 PM"
    },
    {
        venue: "Guidon",
        date: "2025-07-29",
        time: "11:00 am - 09:00 pm",
        name: "National Chicken Wing Day",
        sorttime: "2025-07-29 11:00",
        detail: "11:00 AM - 09:00 PM"
    },
    {
        venue: "Guidon",
        date: "2025-09-06",
        time: "06:30 pm - 09:30 pm",
        name: "Live music by Cellophane Flowers",
        sorttime: "2025-09-06 18:30",
        detail: "None"
    },
    {
        venue: "St. Paul",
        date: "2025-05-30",
        time: " 4:00 pm - 11:00 pm",
        name: "1st Annual Rootstock 3 day music Festival",
        sorttime: "2025-05-30 16:00",
        detail: "3 Days of amazing local Music, Wine, Cider, Beer & Great Friends.  Food trucks on site all weekend, Tickets are $35.00  for all 3 days come and go as you please.  Details and ticket information https://www.saintpaulfarms.com/rootstock-festival"
    },
    {
        venue: "St. Paul",
        date: "2025-05-25",
        time: " 6:30 pm -  9:30 pm",
        name: "Wiregrass at the Vineyard",
        sorttime: "2025-05-25 18:30",
        detail: "Memorial Weekend at the Vineyard! Wiregrass at Saint Paul Mountain Vineyards! It's going to be a great day at the Vineyard! Travelin Dough food truck to pair with your wine. See you at Saint Paul! Red White and Blue Mimosas are the special for the weekend."
    },
    {
        venue: "St. Paul",
        date: "2025-05-24",
        time: " 7:00 pm - 10:00 pm",
        name: "3 Shades of Gray perform to kick off Memorial Day Weekend",
        sorttime: "2025-05-24 19:00",
        detail: "Enjoy great music  and great wine  Saturday afternoon with 3 Shades of Gray at the Vineyard.  Sipping wine, Enjoying friends and listening to great music on the patio overlooking the vines.  Travelin Dough Food truck on site. Red White and Blue Mimosa's are the featured drink for the weekend."
    },
    {
        venue: "St. Paul",
        date: "2025-05-24",
        time: " 4:00 pm - 10:00 pm",
        name: "Memorial Day Weekend Raise a Glass Mimosas!",
        sorttime: "2025-05-24 16:00",
        detail: "All Weekend 5/24 and 5/25 we will honor and remember all our heroes who have served.  Raise your glass with a Red, White & Blue Mimosa treat! Music Saturday is 3 Shades of Gray, Music Sunday is Wiregrass....... Celebrate with us!"
    },
    {
        venue: "St. Paul",
        date: "2025-05-18",
        time: " 6:30 pm -  9:30 pm",
        name: "Live Muisic wth Brian Ashley Jones and Melanie Jean",
        sorttime: "2025-05-18 18:30",
        detail: "Brian Ashley and Melanie Jean back from Nashville!  Sunday  at the Vineyard enjoy Great Music and Great Wine, Cider and Beer along with all your friends.   Travelin Dough Food truck on site,Bring your own picnic or Charcuterie available....Join us at the Saint Paul Vineyard"
    },
    {
        venue: "St. Paul",
        date: "2025-05-17",
        time: " 7:00 pm - 10:00 pm",
        name: "Live music with Izzi at the Vineyard",
        sorttime: "2025-05-17 19:00",
        detail: "Izzi , live at the vineyard!  A great afternoon of music, wine, and great friends.  Travelin Dough Food truck on site or Charcuterie available or bring your own picnic.  Spend your afternoon at Saint Paul Mountain Vineyards"
    },
    {
        venue: "Appalachian Ridge",
        date: "2025-05-30",
        time: " 4:00 pm - 11:00 pm",
        name: "1st Annual Rootstock 3 day music Festival",
        sorttime: "2025-05-30 16:00",
        detail: "3 Days of amazing local Music, Wine, Cider, Beer & Great Friends.  Food trucks on site all weekend, Tickets are $35.00  for all 3 days come and go as you please.  Details and ticket information https://www.saintpaulfarms.com/rootstock-festival"
    },
    {
        venue: "Appalachian Ridge",
        date: "2025-05-25",
        time: " 6:30 pm -  9:30 pm",
        name: "Sunday afternoon live music with Denis Coleman at the Ridge",
        sorttime: "2025-05-25 18:30",
        detail: "Denis Colman playing a little Eagles, Beatles, The Band, Tom Petty, Stones, and more! A great Sunday at the Ridge!"
    },
    {
        venue: "Appalachian Ridge",
        date: "2025-05-24",
        time: " 7:00 pm - 10:00 pm",
        name: "Saturday with Saints and Sinners at Appalachian Ridge....Memorial Weekend",
        sorttime: "2025-05-24 19:00",
        detail: "Perfect way to start the Memorial Day weekend with Saints and Sinners on the deck at Appalachian Ridge...... Great Cider, Wine, Beer, Music all to enjoy with GREAT FRIENDS!"
    },
    {
        venue: "Appalachian Ridge",
        date: "2025-05-18",
        time: " 6:30 pm -  9:30 pm",
        name: "Daniel Sage at Appalachian Ridge",
        sorttime: "2025-05-18 18:30",
        detail: "Enjoy live tunes with Daniel Sage while enjoying a delicious glass of wine, cider or beer! Please feel free to bring your own food or snacks!"
    },
    {
        venue: "Appalachian Ridge",
        date: "2025-05-17",
        time: " 7:00 pm - 10:00 pm",
        name: "Live Music with Marleys Chain at Appalachian Ridge",
        sorttime: "2025-05-17 19:00",
        detail: "A great Saturday at the Ridge with Marley' Chain  a male/female duo made up of Angela Christie & David Hintz. They play a mix of original music and covers in  country, Rock, blues & Rockabilly. Chill  while enjoying great music, great Cider, Wine and Beer with all your friends.  See you at the Ridge"
    },
    {
        venue: "Southern App",
        date: "2025-06-01",
        time: "4pm - 6pm",
        name: "The Dan Keller Trio",
        sorttime: "2025-06-01 16:00",
        detail: "Dan Keller’s band puts their own spin on timeless standards and melodies, without losing the grit and authenticity of jazz.\nMany eras from early swing, latin jazz, bebop, and soul-jazz are…"
    },
    {
        venue: "Southern App",
        date: "2025-06-04",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night",
        sorttime: "2025-06-04 18:00",
        detail: "Jazz Night at SAB will be a jazz jam every week from 6 PM to 8 PM.\nNo cover.\nFor more information, please contact Jason DeCristofaro at (828)273-8254"
    },
    {
        venue: "Southern App",
        date: "2025-06-05",
        time: "6pm - 8pm",
        name: "Mr Jimmy Power Trio",
        sorttime: "2025-06-05 18:00",
        detail: "The Mr Jimmy Trio plays straight-up, real-deal Chicago Style Blues!\nFeaturing Charlie Wilkinson on bass and Peter Chackles on drums.\nwww.mrjimmymusic.com"
    },
    {
        venue: "Southern App",
        date: "2025-06-06",
        time: "7pm - 9pm",
        name: "The Big Throwback",
        sorttime: "2025-06-06 19:00",
        detail: "Don’t miss Blake Ellege and The Big Throwback!\nPlaying all your favorite dance & party hits from the 50’s, 60’s, 70’s, 80’s and today!\n🔥 www.blakeellegemusic.com 🔥"
    },
    {
        venue: "Southern App",
        date: "2025-06-07",
        time: "12pm - 1pm",
        name: "Saturday Yoga Class",
        sorttime: "2025-06-07 12:00",
        detail: "Get your weekend off to a great start with our Saturday yoga class at the brewery!\nBring your own yoga mat and props and enjoy a great workout and stress relief.\nClass…"
    },
    {
        venue: "Southern App",
        date: "2025-06-07",
        time: "7pm - 9pm",
        name: "The Grass Owls",
        sorttime: "2025-06-07 19:00",
        detail: "The Grass Owls are:\nAndrew Brophy\nPaul Kunath\nScott Anders\nJoel Batty\nOriginal Americana\ntheGrassOwls"
    },
    {
        venue: "Southern App",
        date: "2025-06-08",
        time: "3pm - 5pm",
        name: "Music Bingo!",
        sorttime: "2025-06-08 15:00",
        detail: "The day after Pride- Recovery Sunday!\nCome join us for a fun and relaxing afternoon of Music Bingo. If you haven’t played before you are in for a treat!\n\nTaqueria Lupita Food…"
    },
    {
        venue: "Southern App",
        date: "2025-06-11",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night",
        sorttime: "2025-06-11 18:00",
        detail: "Jazz Night at SAB will be a jazz jam every week from 6 PM to 8 PM.\nNo cover.\nFor more information, please contact Jason DeCristofaro at (828)273-8254"
    },
    {
        venue: "Southern App",
        date: "2025-06-12",
        time: "6pm - 8pm",
        name: "Tools on Stools",
        sorttime: "2025-06-12 18:00",
        detail: "Tools on Stools. Mark McDaniel on guitar, Howie Johnson on guitar, playing blues, jazz, favorite rock tunes, and jams.\nHope to see you there!"
    },
    {
        venue: "Southern App",
        date: "2025-06-13",
        time: "7pm - 9pm",
        name: "Lefty Carmean & The Workin’ Men",
        sorttime: "2025-06-13 19:00",
        detail: "Lefty Carmean\nNorth Carolina’s own Lefty Carmean has been establishing roots the local music scene for the past three years with his powerhouse vocals, charisma, and high-energy performances. Blending Country and…"
    },
    {
        venue: "Southern App",
        date: "2025-06-17",
        time: "5pm - 7pm",
        name: "Hatch Pitch Party",
        sorttime: "2025-06-17 17:00",
        detail: "The Henderson County Chamber of Commerce, Hatch Innovation Hub, BRCC Small Business Center, Southern Appalachian Brewery, Big Frog Custom T-Shirts and Carrie Ann Chandler Realtor® with EXP Realty LLC have…"
    },
    {
        venue: "Southern App",
        date: "2025-06-18",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night",
        sorttime: "2025-06-18 18:00",
        detail: "Jazz Night at SAB will be a jazz jam every week from 6 PM to 8 PM.\nNo cover.\nFor more information, please contact Jason DeCristofaro at (828)273-8254"
    },
    {
        venue: "Southern App",
        date: "2025-06-25",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night",
        sorttime: "2025-06-25 18:00",
        detail: "Jazz Night at SAB will be a jazz jam every week from 6 PM to 8 PM.\nNo cover.\nFor more information, please contact Jason DeCristofaro at (828)273-8254"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-07",
        time: "1:00 pm - 6:00 pm",
        name: "Lower Park Grand Reopening",
        sorttime: "2025-06-07 13:00",
        detail: "Tucked into the woods behind our Amphitheater and accessible by trail, Lower Park is a peaceful forest clearing made for slowing down and enjoying the..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-07",
        time: "2:00 pm - 5:00 pm",
        name: "Pleasure Chest",
        sorttime: "2025-06-07 14:00",
        detail: "Blues, Soul and Rock ‘n’ Roll from Asheville, NC"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-08",
        time: "2:00 pm - 5:00 pm",
        name: "My Magnificent Nemesis w/ Alien Music Club",
        sorttime: "2025-06-08 14:00",
        detail: "My Magnificent Nemesis: If you like rock, we sound like a jazz band. If you like jazz, we sound like a rock band. Soaring intensity mixed with moments..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-13",
        time: "7:00 pm - 9:30 pm",
        name: "Hustle Souls",
        sorttime: "2025-06-13 19:00",
        detail: "Hustle Souls, based in Asheville, NC, masterfully blend Retro-Soul, Brass Band Funk, and Singer-Songwriter Americana into a unique and captivating sou..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-14",
        time: "2:00 pm - 5:00 pm",
        name: "Daniel Shearin",
        sorttime: "2025-06-14 14:00",
        detail: "Daniel Shearin is a singer, songwriter and producer living in Asheville, NC and a member of River Whyless. Growing up on a small town near the coast o..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-15",
        time: "2:00 pm - 5:00 pm",
        name: "Julio & the Saltines",
        sorttime: "2025-06-15 14:00",
        detail: "South Carolina’s ultimate party band, Julio & the Saltines provides ultra-high quality live entertainment to every crowd they encounter. Th..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-20",
        time: "7:00 pm - 9:30 pm",
        name: "Empire Strikes Brass",
        sorttime: "2025-06-20 19:00",
        detail: "Empire Strikes Brass is a dynamic BrassFunkRock band hailing from Asheville, North Carolina. Their music resonates with a powerful message delivered t..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-21",
        time: "2:00 pm - 5:00 pm",
        name: "The Heavy Lifters",
        sorttime: "2025-06-21 14:00",
        detail: "Heavy Lifters are an 8-piece ska / reggae / soul band based in Brevard, NC. Lifting spirits on the dance floor since 2023! With a repertoire of both o..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-22",
        time: "2:00 pm - 5:00 pm",
        name: "The Deep Shallow Band",
        sorttime: "2025-06-22 14:00",
        detail: "The Deep Shallow Band’s music is often described as “Southern soul rock and roll” reminiscent of the Allman Brothers Band and The Black Crowes. Their ..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-26",
        time: "6:00 pm - 9:00 pm",
        name: "Who’s Bad: The Ultimate Michael Jackson Experience",
        sorttime: "2025-06-26 18:00",
        detail: "$34.76 – ADV | $40.38 – Day of show | $51.62 – Early Access"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-28",
        time: "2:00 pm - 5:00 pm",
        name: "The Headtones",
        sorttime: "2025-06-28 14:00",
        detail: "Funk-Hip Hop-Experimental from St. Pete, Fl."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-29",
        time: "2:00 pm - 5:00 pm",
        name: "Moonshine State",
        sorttime: "2025-06-29 14:00",
        detail: "Moonshine State is a country band with a rock twist, or a rock band with a country twist, depending on the day. WNC based singer-songwriters Elizabeth..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-05",
        time: "2:00 pm - 5:00 pm",
        name: "Lyric",
        sorttime: "2025-07-05 14:00",
        detail: "Leeda “Lyric” Jones, best known as Lyric is a singer-songwriter, musician, and music teacher. Her latest EP titled “Perspective” was released in Decem..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-10",
        time: "6:00 pm - 10:00 pm",
        name: "Lettuce",
        sorttime: "2025-07-10 18:00",
        detail: "ADV – $45.89 | Early/Balcony Access – $68.31 | DOS – $51.50"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-11",
        time: "6:00 pm - 9:30 pm",
        name: "Swamp Zen & The Funnels",
        sorttime: "2025-07-11 18:00",
        detail: "GA Advance $22.09 | GA Day of Show $27.37 | GA + Early Access $37.93"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-11",
        time: "7:30 pm - 10:00 pm",
        name: "Fireside Collective",
        sorttime: "2025-07-11 19:30",
        detail: "Inspired by the burgeoning art scene, close knit community, and natural beauty of Asheville, North Carolina, newgrass turned eclectic jam band Firesid..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-12",
        time: "2:00 pm - 5:00 pm",
        name: "Jesse Velvet",
        sorttime: "2025-07-12 14:00",
        detail: "Jesse Velvet crafts a dynamic fusion of funk, rock, and psychedelic exploration, powered by blazing guitar solos, slick keyboard work, deep-pocket bas..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-13",
        time: "2:00 pm - 5:00 pm",
        name: "CarolinAloha",
        sorttime: "2025-07-13 14:00",
        detail: "CarolinAloha is the melding of three loves: the Mountains, the Ocean, and Music. Founded by Billy Cardine, a master of all things slide, Billy finds i..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-18",
        time: "7:00 pm - 9:30 pm",
        name: "Lazrluvr",
        sorttime: "2025-07-18 19:00",
        detail: ""
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-19",
        time: "2:00 pm - 5:00 pm",
        name: "Andrew Scotchie",
        sorttime: "2025-07-19 14:00",
        detail: "Through consistent heartfelt releases, year-round touring and active charity work, Asheville N.C. native Andrew Scotchie is a celebrated creative forc..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-20",
        time: "2:00 pm - 5:00 pm",
        name: "Boogitherapi",
        sorttime: "2025-07-20 14:00",
        detail: "BoogiTherapi is an all-star Funky dance band based in Asheville, headed by frontman Ryan Barber."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-25",
        time: "6:00 pm - 9:30 pm",
        name: "Ozomatli w/ Debajito",
        sorttime: "2025-07-25 18:00",
        detail: "GA Advance $37.93 | GA Day of Show $43.20 | GA + Early Access $53.75"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-26",
        time: "2:00 pm - 5:00 pm",
        name: "Peggy Ratusz and the Daddy Long Legs",
        sorttime: "2025-07-26 14:00",
        detail: "Peggy “Blues Chanteuse” Ratusz, has won best in Blues awards for the past 17 years as well as best vocalist and most notable local musician who gives ..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-27",
        time: "2:00 pm - 5:00 pm",
        name: "The Outriders",
        sorttime: "2025-07-27 14:00",
        detail: "The Outriders deliver some of the most magical and memorable moments of the New Riders of the Purple Sage and the Grateful Dead. United by their love ..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-31",
        time: "5:30 pm - 8:30 pm",
        name: "Amplify Appalachia",
        sorttime: "2025-07-31 17:30",
        detail: "$85.32 – GA Advance | $90.94 – Day of Show | *THIS IS A STANDING ROOM SHOW * | $30 Discount Code for Locals: AMPlify"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-01",
        time: "7:00 pm - 9:30 pm",
        name: "Dangermuffin",
        sorttime: "2025-08-01 19:00",
        detail: "Dangermuffin are storytellers. Casting images that are timeless yet novel, the band blends mindful lyrics with contemplative sounds, creating songs ai..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-02",
        time: "2:00 pm - 5:00 pm",
        name: "Watkins",
        sorttime: "2025-08-02 14:00",
        detail: "Watkins is an indie-folk and alt-rock band known for soulful vocals and intricate guitar work. With a grassroots following built through years of tour..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-03",
        time: "2:00 pm - 5:00 pm",
        name: "Roots and Dore",
        sorttime: "2025-08-03 14:00",
        detail: "Roots and Dore have been playing together in and around the Asheville for 15 years. They have toured in Europe, played festivals throughout the Caroli..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-08",
        time: "6:00 pm - 9:30 pm",
        name: "STRFKR w/ Mamalarky",
        sorttime: "2025-08-08 18:00",
        detail: "GA Advance $32.64 | GA Day of Show $37.93 | GA + Early Access $48.48"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-09",
        time: "2:00 pm - 5:00 pm",
        name: "Ska City",
        sorttime: "2025-08-09 14:00",
        detail: "Ska City is a British-American nine-piece ska collective, with 4 horns and sweet harmony vocals, based in Asheville, North Carolina. Featuring origina..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-10",
        time: "2:00 pm - 5:00 pm",
        name: "Purple",
        sorttime: "2025-08-10 14:00",
        detail: "Purple is an instrumental trio (quintet for this show) playing tunes from the pop, jazz, soul, and funk idioms."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-14",
        time: "6:00 pm - 9:30 pm",
        name: "Femi Kuti & The Positive Force",
        sorttime: "2025-08-14 18:00",
        detail: "GA Advance $37.93 | GA Day of Show $43.20 | GA + Early Access $53.75"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-16",
        time: "2:00 pm - 5:00 pm",
        name: "Ben Bjorlie Band",
        sorttime: "2025-08-16 14:00",
        detail: "The Ben Bjorlie Band is an Asheville based bass player and drummer. He and his band blend elements of funk, jazz and soul with a focus on instrumental..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-17",
        time: "2:00 pm - 5:00 pm",
        name: "TrancEnd Band",
        sorttime: "2025-08-17 14:00",
        detail: "High-Energy Vibes, Unforgettable Performances. TrancEnd expertly blends original songs with fresh, high-energy renditions of 90s and 2000s hits."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-22",
        time: "6:00 pm - 9:00 pm",
        name: "Fitz and The Tantrums",
        sorttime: "2025-08-22 18:00",
        detail: "GA ADV – $45.89 | GA Early Admission – $68.31 | GA DOS – $51.50"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-24",
        time: "2:00 pm - 5:00 pm",
        name: "Julianna Jade and the Wild",
        sorttime: "2025-08-24 14:00",
        detail: "Julianna Jade and the Wild is an alternative-pop powerhouse fronted by singer-songwriter Julianna Jade, whose sultry, emotionally charged vocals capti..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-27",
        time: "6:00 pm - 9:30 pm",
        name: "Jesse Daniel w/ Jake Kohn",
        sorttime: "2025-08-27 18:00",
        detail: "GA Advance $27.37 | GA Day of Show $32.64 | GA + Early Access $43.20"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-05",
        time: "6:00 pm - 9:30 pm",
        name: "The Record Company",
        sorttime: "2025-09-05 18:00",
        detail: "GA Advance $30.53 | GA Day of Show $35.82 | GA + Early Access $46.37"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-06",
        time: "2:00 pm - 5:00 pm",
        name: "Andrew Wakefield & Friends",
        sorttime: "2025-09-06 14:00",
        detail: "Andrew Wakefield is a progressive bluegrass guitarist, songwriter, and singer based in Chimney Rock, North Carolina. Career highlights include opening..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-07",
        time: "2:00 pm - 5:00 pm",
        name: "Sugar Bomb",
        sorttime: "2025-09-07 14:00",
        detail: "Sugar Bomb is a trio from Asheville, North Carolina that’s as sweet as it is explosive – with extreme dynamic range & a knack for improvisa..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-13",
        time: "2:00 pm - 5:00 pm",
        name: "DISPLACE",
        sorttime: "2025-09-13 14:00",
        detail: "Displace is a saxophone and electric violin-driven funk fusion ensemble based in Tampa, Florida known for their energetic performances, improvisationa..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-14",
        time: "2:00 pm - 5:00 pm",
        name: "Tasty Vibrations",
        sorttime: "2025-09-14 14:00",
        detail: "Birthed from the shores of Pompano Beach Florida, Tasty Vibrations have been shredding the gnar since 2018. Their eclectic “Jam Band” sound has made t..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-21",
        time: "6:00 pm - 9:00 pm",
        name: "Trombone Shorty & Orleans Avenue",
        sorttime: "2025-09-21 18:00",
        detail: "GA ADV – $51.50 | GA Early Entry – $ 73.91 | GA DOS – $57.10"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-28",
        time: "2:00 pm - 5:00 pm",
        name: "Mana Meter",
        sorttime: "2025-09-28 14:00",
        detail: "Mana Meter is a dynamic three-piece band fueled by a shared passion for the iconic soundtracks of classic video games. With a focus on beloved JRPGs l..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-04",
        time: "2:00 pm - 5:00 pm",
        name: "The Late Shifters",
        sorttime: "2025-10-04 14:00",
        detail: "“There’re no cars on the interstate tonight. And your face is glowing in the dashboard lights. Baby let’s keep driving, driving past..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-05",
        time: "2:00 pm - 5:00 pm",
        name: "Billingsly",
        sorttime: "2025-10-05 14:00",
        detail: "Billingsley is a Rock and Roll power trio from Asheville, North Carolina. The band is made up of brothers Wilson, Grant, and Bennett and features elem..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-11",
        time: "2:00 pm - 5:00 pm",
        name: "Tanasi",
        sorttime: "2025-10-11 14:00",
        detail: "Tanasi crafts a rich, world-inspired mountain sound, blending the soulful echoes of roots artists from across the globe into music that feels both tim..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-16",
        time: "6:00 pm - 9:30 pm",
        name: "The California Honeydrops: Redwood Highway Tour",
        sorttime: "2025-10-16 18:00",
        detail: "Brewery presale starts May 29th! Use the promo code HAZYLITTLETHING"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-18",
        time: "2:00 pm - 5:00 pm",
        name: "Fresh Buzz",
        sorttime: "2025-10-18 14:00",
        detail: "Straight from the hive, Fresh Buzz, a dynamic four-piece band hailing from Asheville, brings a unique blend of rock, funk, and indie vibes to the musi..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-19",
        time: "2:00 pm - 5:00 pm",
        name: "Saddletramp",
        sorttime: "2025-10-19 14:00",
        detail: "Saddletramp is a premier Asheville-based classic and outlaw country show band, covering the best ’70s, ’80s, and ’90s country hits."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-25",
        time: "2:00 pm - 5:00 pm",
        name: "Nikki and the Barn Boys",
        sorttime: "2025-10-25 14:00",
        detail: "This story begins in Barnstable, Massachusetts when two sets of brothers and longtime friends combined to form the Barn Boys; A Blues, Rock, Funk, and..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-26",
        time: "2:00 pm - 5:00 pm",
        name: "The Big Hungry",
        sorttime: "2025-10-26 14:00",
        detail: "The Big Hungry consists of a group of local working professionals living in Hendersonville and Brevard, North Carolina, who began playing music for fu..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-29",
        time: "6:00 pm - 9:30 pm",
        name: "Here Come the Mummies",
        sorttime: "2025-10-29 18:00",
        detail: "6 PM DOORS | $40. 29 – GA ADV | $45.89 – Day of Show | $62.70 – Early/Balcony Access"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-11-01",
        time: "2:00 pm - 5:00 pm",
        name: "",
        sorttime: "2025-11-01 14:00",
        detail: "Strange Rangers is a musical duo composed of Alex Taub (keys/vox) and JC Mears (drums) w rotating guests. Pop/Funk/Soul/Improvisation."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-11-09",
        time: "2:00 pm - 5:00 pm",
        name: "The Patrick Lopez Experience",
        sorttime: "2025-11-09 14:00",
        detail: "Tremendous musicality, versatility and the ability to entertain everyone from the casual listener to the most discriminating music aficionados. These ..."
    },
    {
        venue: "Sierra Nevada",
        date: "2025-11-16",
        time: "2:00 pm - 5:00 pm",
        name: "Dustin Furlow",
        sorttime: "2025-11-16 14:00",
        detail: "Dustin Furlow is an internationally-recognized singer/songwriter/instrumental-guitarist whose body of work occupies its own niche in the contemporary ..."
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-06-19",
        time: "5:30 pm - 10 pm",
        name: "Big Daddy Love (Appalachian Rock) with Letters to Abigail (Americana)",
        sorttime: "2025-06-19 17:30",
        detail: "None"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-07-17",
        time: "5:30 pm - 10 pm",
        name: "Florencia & the Feeling (Pop/Funk/Fusion) with Lewendahl  (Blues/Rock/Motown)",
        sorttime: "2025-07-17 17:30",
        detail: "None"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-08-21",
        time: "5:30 pm - 10 pm",
        name: "Maggie Baugh (Country) with Blake Ellege & Saddletramp (Country/Southern Rock)",
        sorttime: "2025-08-21 17:30",
        detail: "None"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-09-18",
        time: "5:30 pm - 10 pm",
        name: "Caitlin Krisko & The Broadcast (Soul Rock) with Hustle Souls (Soul/Funk/Americana)",
        sorttime: "2025-09-18 17:30",
        detail: "None"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-10-16",
        time: "5:30 pm - 10 pm",
        name: "BonaFide Soul (Jazz/Funk/Soul) with Congdon Griffin Band (Folk/Americana/Rock)",
        sorttime: "2025-10-16 17:30",
        detail: "None"
    },
    {
        venue: "Music on Main",
        date: "2025-06-20",
        time: "7:00 pm - 9:00 pm",
        name: "5 O’Clock Somewhere",
        sorttime: "2025-06-20 19:00",
        detail: "None"
    },
    {
        venue: "Music on Main",
        date: "2025-07-04",
        time: "7:00 pm - 9:00 pm",
        name: "Night Move Band",
        sorttime: "2025-07-04 19:00",
        detail: "None"
    },
    {
        venue: "Music on Main",
        date: "2025-07-18",
        time: "7:00 pm - 9:00 pm",
        name: "The Big Throwback",
        sorttime: "2025-07-18 19:00",
        detail: "None"
    },
    {
        venue: "Music on Main",
        date: "2025-08-01",
        time: "7:00 pm - 9:00 pm",
        name: "Gotcha Groove",
        sorttime: "2025-08-01 19:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-03",
        time: "8:00 am - 10:00 am",
        name: "Meditative Morning",
        sorttime: "2025-06-03 08:00",
        detail: "We’ve heard your valuable feedback, and now you don’t have to hear us! Beginning May 4, 2021, the period between 8 and 10 a.m. on the first Tuesday morning of …"
    },
    {
        venue: "Arboretum",
        date: "2025-06-03",
        time: "9:00 am - 10:30 am",
        name: "Birding for Beginners",
        sorttime: "2025-06-03 09:00",
        detail: "Join us on this birding walk around the NC Arboretum gardens and trails in search of our most colorful residents."
    },
    {
        venue: "Arboretum",
        date: "2025-06-03",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-03 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-06-04",
        time: "10:00 am - 12:00 pm",
        name: "Streambank Stabilization Solutions",
        sorttime: "2025-06-04 10:00",
        detail: "Join Mountain Valleys RC&D to learn where to purchase erosion control materials and how to use native plants to stabilize streambanks.\n"
    },
    {
        venue: "Arboretum",
        date: "2025-06-07",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-07 10:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-06-07",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-07 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-06-10",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-10 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-06-10",
        time: "2:00 pm - 4:00 pm",
        name: "Macroinvertebrates of Bent Creek",
        sorttime: "2025-06-10 14:00",
        detail: "Learn all about these essential tiny insects that live in the creek and are indicators of stream health."
    },
    {
        venue: "Arboretum",
        date: "2025-06-11",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-11 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-06-12",
        time: "10:00 am - 2:00 pm",
        name: "Teacher Workshop: Connecting NC Standards and Environmental Education",
        sorttime: "2025-06-12 10:00",
        detail: "A collaborative learning opportunity for any K-12 educator who is interested in connecting standards and outdoor/environmental education in their teaching."
    },
    {
        venue: "Arboretum",
        date: "2025-06-12",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-12 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-06-13",
        time: "9:30 am - 12:30 pm",
        name: "Painting and Meditation from the Heart",
        sorttime: "2025-06-13 09:30",
        detail: "We’ll explore watercolor techniques, with trees as our theme, and invite divine guidance into the process."
    },
    {
        venue: "Arboretum",
        date: "2025-06-13",
        time: "1:00 pm - 3:30 pm",
        name: "Landscape Design Fundamentals (2 sessions)",
        sorttime: "2025-06-13 13:00",
        detail: "June 13 + 20, 1 - 3:30 pm  Gain a better understanding of what comes into play in creating and managing sustainable and aesthetically appealing landscapes."
    },
    {
        venue: "Arboretum",
        date: "2025-06-14",
        time: "9:30 am - 4:30 pm",
        name: "Beginning Bonsai Workshop",
        sorttime: "2025-06-14 09:30",
        detail: "This class will provide the basic concepts and skills for novices to begin growing and shaping their own miniature trees."
    },
    {
        venue: "Arboretum",
        date: "2025-06-14",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-14 10:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-06-14",
        time: "10:00 am - 1:00 pm",
        name: "Forest Bathing Retreat: Flower Power!",
        sorttime: "2025-06-14 10:00",
        detail: "Celebrate the ephemeral beauty of flowers during this immersive morning nature retreat."
    },
    {
        venue: "Arboretum",
        date: "2025-06-17",
        time: "10:00 am - 1:00 pm",
        name: "Summer Tree ID",
        sorttime: "2025-06-17 10:00",
        detail: "During this walk, we will learn to identify trees found around the Arboretum\'s property using multiple characteristics including leaves."
    },
    {
        venue: "Arboretum",
        date: "2025-06-17",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-17 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-06-18",
        time: "1:00 pm - 3:00 pm",
        name: "Invasion Ecology",
        sorttime: "2025-06-18 13:00",
        detail: "Learn about invasive species and how they move in to take over disturbed areas all around the Blue Ridge Mountains."
    },
    {
        venue: "Arboretum",
        date: "2025-06-18",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-18 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-06-19",
        time: "1:00 pm - 4:00 pm",
        name: "Spare-time Gardening",
        sorttime: "2025-06-19 13:00",
        detail: "Gain some practical advice on how to prioritize gardening efforts and learn some new tricks for making your garden work less strenuous and more impactful.\n"
    },
    {
        venue: "Arboretum",
        date: "2025-06-19",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-19 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-06-20",
        time: "9:00 am - 10:00 am",
        name: "Walking Meditation & Qigong",
        sorttime: "2025-06-20 09:00",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-06-20",
        time: "1:00 pm - 3:30 pm",
        name: "Landscape Design Fundamentals (2 sessions)",
        sorttime: "2025-06-20 13:00",
        detail: "June 13 + 20, 1 - 3:30 pm  Gain a better understanding of what comes into play in creating and managing sustainable and aesthetically appealing landscapes."
    },
    {
        venue: "Arboretum",
        date: "2025-06-21",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-21 10:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-06-21",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-21 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-06-21",
        time: "1:00 pm - 4:00 pm",
        name: "Pressed Flower Art",
        sorttime: "2025-06-21 13:00",
        detail: "During this hands-on workshop, learn a technique of pressing and sealing flower petals to create a work of art."
    },
    {
        venue: "Arboretum",
        date: "2025-06-22",
        time: "11:00 am - 3:00 pm",
        name: "Bonsai Book Sculpture Workshop",
        sorttime: "2025-06-22 11:00",
        detail: "We will take a ceramic bowl, wires, and other supplies to transform them into a 3D bonsai tree sculpture made from the pages of the book!"
    },
    {
        venue: "Arboretum",
        date: "2025-06-24",
        time: "12:00 pm - 4:00 pm",
        name: "Arboretum Excursions: Grandfather Mountain Stewardship Foundation",
        sorttime: "2025-06-24 12:00",
        detail: "Join other like-minded learners on an excursion to check out the amazing wildlife and ecosystems on top of Grandfather Mountain."
    },
    {
        venue: "Arboretum",
        date: "2025-06-24",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-24 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-06-25",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-25 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-06-26",
        time: "12:00 pm - 4:00 pm",
        name: "Advanced Botany I",
        sorttime: "2025-06-26 12:00",
        detail: "After taking Beginning Botany, dive deeper into plant studies with this advanced botany class including hands-on time to dissect flowers."
    },
    {
        venue: "Arboretum",
        date: "2025-06-26",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-26 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-06-27",
        time: "12:00 pm - 4:00 pm",
        name: "Geology of the Blue Ridge Field Class",
        sorttime: "2025-06-27 12:00",
        detail: " Join Anton in this off-site field experience to see topics from the Geology classes in person."
    },
    {
        venue: "Arboretum",
        date: "2025-06-28",
        time: "10:00 am - 12:00 pm",
        name: "Wildwoods Walk",
        sorttime: "2025-06-28 10:00",
        detail: "Learn about what’s blooming now and how these plants are adapted to summer conditions as well as wildflower and tree ecology."
    },
    {
        venue: "Arboretum",
        date: "2025-06-28",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-28 10:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-06-28",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-28 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "8:00 am - 10:00 am",
        name: "Meditative Morning",
        sorttime: "2025-07-01 08:00",
        detail: "We’ve heard your valuable feedback, and now you don’t have to hear us! Beginning May 4, 2021, the period between 8 and 10 a.m. on the first Tuesday morning of …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "9:00 am - 10:30 am",
        name: "Birding for Beginners",
        sorttime: "2025-07-01 09:00",
        detail: "Join us on this birding walk around the NC Arboretum gardens and trails in search of our most colorful residents."
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "11:00 am - 1:00 pm",
        name: "Botanical Drawing for Beginners",
        sorttime: "2025-07-01 11:00",
        detail: "Join retired art teacher Camille in this monthly class for beginners to learn about Botanical Art in different media."
    },
    {
        venue: "Arboretum",
        date: "2025-07-02",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-02 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-07-03",
        time: "1:00 pm - 4:00 pm",
        name: "Summer Tree ID",
        sorttime: "2025-07-03 13:00",
        detail: "During this walk, we will learn to identify trees found around the Arboretum\'s property using multiple characteristics including leaves."
    },
    {
        venue: "Arboretum",
        date: "2025-07-03",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-03 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-07-05",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-05 10:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-05",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-05 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "8:00 am - 10:00 am",
        name: "Meditative Morning",
        sorttime: "2025-07-01 08:00",
        detail: "We’ve heard your valuable feedback, and now you don’t have to hear us! Beginning May 4, 2021, the period between 8 and 10 a.m. on the first Tuesday morning of …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "9:00 am - 10:30 am",
        name: "Birding for Beginners",
        sorttime: "2025-07-01 09:00",
        detail: "Join us on this birding walk around the NC Arboretum gardens and trails in search of our most colorful residents."
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "11:00 am - 1:00 pm",
        name: "Botanical Drawing for Beginners",
        sorttime: "2025-07-01 11:00",
        detail: "Join retired art teacher Camille in this monthly class for beginners to learn about Botanical Art in different media."
    },
    {
        venue: "Arboretum",
        date: "2025-07-02",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-02 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-07-03",
        time: "1:00 pm - 4:00 pm",
        name: "Summer Tree ID",
        sorttime: "2025-07-03 13:00",
        detail: "Learn how to use many different characteristics of our common trees to identify them and learn some other helpful information along the way."
    },
    {
        venue: "Arboretum",
        date: "2025-07-03",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-03 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-07-05",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-05 10:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-05",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-05 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-08",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-08 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-08",
        time: "5:00 pm - 6:30 pm",
        name: "Cascades, Cataracts and Waterfalls",
        sorttime: "2025-07-08 17:00",
        detail: "Join naturalist, educator storyteller, Eric on a wondrous journey to discover the amazing waterfalls here in Western North Carolina."
    },
    {
        venue: "Arboretum",
        date: "2025-07-09",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-09 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-07-10",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-10 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-07-11",
        time: "12:00 pm - 4:00 pm",
        name: "Reptiles of Western North Carolina",
        sorttime: "2025-07-11 12:00",
        detail: "Learn all about reptiles of Western North Carolina from skinks to snakes including their natural history and life cycles."
    },
    {
        venue: "Arboretum",
        date: "2025-07-12",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-12 10:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-12",
        time: "10:00 am - 1:00 pm",
        name: "Forest Bathing Retreat: Summer in the Blue Ridge",
        sorttime: "2025-07-12 10:00",
        detail: "Celebrate the lush beauty of summer during this immersive morning nature retreat where we cultivate sensory awareness in the verdant forest."
    },
    {
        venue: "Arboretum",
        date: "2025-07-12",
        time: "10:00 am - 1:00 pm",
        name: "Learning about Eastern Box Turtles with Turtle Dogs",
        sorttime: "2025-07-12 10:00",
        detail: "Join Allison Woods Outdoor Learning Center’s renowned Turtle Dogs and their handlers to learn about Eastern Box Turtles."
    },
    {
        venue: "Arboretum",
        date: "2025-07-15",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-15 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-16",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-16 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-07-17",
        time: "1:00 pm - 3:00 pm",
        name: "Firewise Landscaping",
        sorttime: "2025-07-17 13:00",
        detail: "Learn about methods to reduce fire risk for your house by utilizing landscaping and maintenance."
    },
    {
        venue: "Arboretum",
        date: "2025-07-17",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-17 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-07-18",
        time: "10:00 am - 1:00 pm",
        name: "Walking Meditation & Qigong",
        sorttime: "2025-07-18 10:00",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-07-18",
        time: "12:00 pm - 4:00 pm",
        name: "River Systems Field Experience",
        sorttime: "2025-07-18 12:00",
        detail: "This completely field based class will explore different River processes and indicators along the Davidson River."
    },
    {
        venue: "Arboretum",
        date: "2025-07-19",
        time: "10:00 am - 12:00 pm",
        name: "Bird Feeding Myths, Methods, and Magic!",
        sorttime: "2025-07-19 10:00",
        detail: "Learn tips and tricks for successful Bird Feeding methods in the Asheville region as well as some of the myths surrounding the practice."
    },
    {
        venue: "Arboretum",
        date: "2025-07-19",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-19 10:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-19",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-19 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-22",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-22 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-23",
        time: "1:00 pm - 4:00 pm",
        name: "Pressed Flower Art",
        sorttime: "2025-07-23 13:00",
        detail: "During this hands-on workshop, learn a technique of pressing and sealing flower petals to create a work of art."
    },
    {
        venue: "Arboretum",
        date: "2025-07-23",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-23 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-07-24",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-24 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-07-26",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-26 10:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-26",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-26 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-27",
        time: "1:00 pm - 2:30 pm",
        name: "Birds of Prey Presentation",
        sorttime: "2025-07-27 13:00",
        detail: "Join Allison Woods Outdoor Learning Center\'s educators for a presentation featuring live hawks and other raptors."
    },
    {
        venue: "Arboretum",
        date: "2025-07-29",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-29 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-07-30",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-30 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-07-31",
        time: "12:00 pm - 4:00 pm",
        name: "Advanced Botany II",
        sorttime: "2025-07-31 12:00",
        detail: "This last in the series of Botany classes we offer delves deeper into topics discussed in Advanced Botany I and Beginning Botany."
    },
    {
        venue: "Arboretum",
        date: "2025-07-31",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-31 17:30",
        detail: "Sip and stroll through the Arboretum’s gardens in the glow of the golden hour, all while listening to live music from a variety of local and regional artists! ArborEvenings runs Wednesdays and Thursdays through September 18, 2025 from 5:30 to 8:30 p.m."
    },
    {
        venue: "Arboretum",
        date: "2025-08-02",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-08-02 10:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Arboretum",
        date: "2025-08-02",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-08-02 13:00",
        detail: "Hit the trails and learn more about The North Carolina Arboretum’s botanically diverse forest with a guided trail walk! April through October, this free hiking program is led by trained …"
    },
    {
        venue: "Feed and Seed",
        date: "2025-04-25",
        time: "7 - 9pm",
        name: "Lazybirds!",
        sorttime: "2025-04-25 21:00",
        detail: "None"
    },
    {
        venue: "Feed and Seed",
        date: "2025-05-02",
        time: "7 - 9PM",
        name: "Slim Pickins Bluegrass",
        sorttime: "2025-05-02 21:00",
        detail: "None"
    },
    {
        venue: "Feed and Seed",
        date: "2025-05-09",
        time: "7 - 9pm",
        name: "Apple Country Jam/Dance Band",
        sorttime: "2025-05-09 21:00",
        detail: "None"
    },
    {
        venue: "Feed and Seed",
        date: "2025-05-16",
        time: "7 - 9PM",
        name: "Harlin Country Grass",
        sorttime: "2025-05-16 21:00",
        detail: "None"
    },
    {
        venue: "Feed and Seed",
        date: "2025-05-23",
        time: "7 - 9PM",
        name: "Mulley Holler Bluegrass",
        sorttime: "2025-05-23 21:00",
        detail: "None"
    },
    {
        venue: "Feed and Seed",
        date: "2025-05-30",
        time: "7 - 9PM",
        name: "New Carolina Connection",
        sorttime: "2025-05-30 21:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-01",
        time: "12:00 pm - 8:00 pm",
        name: "Papa’s Express",
        sorttime: "2025-06-01 12:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-02",
        time: "6:00 pm - 8:00 pm",
        name: "Family Face Off",
        sorttime: "2025-06-02 18:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-03",
        time: "3:00 pm - 8:00 pm",
        name: "Taco Bus",
        sorttime: "2025-06-03 15:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-04",
        time: "3:00 pm - 8:00 pm",
        name: "Carolina Ace BBQ",
        sorttime: "2025-06-04 15:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-05",
        time: "4:00 pm - 8:00 pm",
        name: "Taco Bus",
        sorttime: "2025-06-05 16:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-06",
        time: "7:00 pm - 10:00 pm",
        name: "Brown Mountain Lightning Bugs",
        sorttime: "2025-06-06 19:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-07",
        time: "7:00 pm - 10:00 pm",
        name: "J. Stephens",
        sorttime: "2025-06-07 19:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-08",
        time: "12:00 pm - 8:00 pm",
        name: "Papa’s Express",
        sorttime: "2025-06-08 12:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-09",
        time: "6:00 pm - 8:00 pm",
        name: "Family Face Off",
        sorttime: "2025-06-09 18:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-10",
        time: "3:00 pm - 8:00 pm",
        name: "Taco Bus",
        sorttime: "2025-06-10 15:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-11",
        time: "3:00 pm - 8:00 pm",
        name: "Carolina Ace BBQ",
        sorttime: "2025-06-11 15:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-12",
        time: "4:00 pm - 8:00 pm",
        name: "Toasted Cuban",
        sorttime: "2025-06-12 16:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-13",
        time: "12:00 pm - 8:00 pm",
        name: "La Jarochita Romero",
        sorttime: "2025-06-13 12:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-14",
        time: "7:00 pm - 10:00 pm",
        name: "Drowning Leo",
        sorttime: "2025-06-14 19:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-15",
        time: "12:00 pm - 8:00 pm",
        name: "Papa’s Express",
        sorttime: "2025-06-15 12:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-16",
        time: "6:00 pm - 8:00 pm",
        name: "Family Face Off",
        sorttime: "2025-06-16 18:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-17",
        time: "3:00 pm - 8:00 pm",
        name: "Taco Bus",
        sorttime: "2025-06-17 15:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-18",
        time: "3:00 pm - 8:00 pm",
        name: "Carolina Ace BBQ",
        sorttime: "2025-06-18 15:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-19",
        time: "5:00 pm - 9:30 pm",
        name: "Cousins Maine Lobster",
        sorttime: "2025-06-19 17:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-20",
        time: "7:00 pm - 10:00 pm",
        name: "Haphazard",
        sorttime: "2025-06-20 19:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-21",
        time: "7:00 pm - 10:00 pm",
        name: "The Loudes",
        sorttime: "2025-06-21 19:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-22",
        time: "12:00 pm - 8:00 pm",
        name: "Papa’s Express",
        sorttime: "2025-06-22 12:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-23",
        time: "6:00 pm - 8:00 pm",
        name: "Family Face Off",
        sorttime: "2025-06-23 18:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-24",
        time: "3:00 pm - 8:00 pm",
        name: "Taco Bus",
        sorttime: "2025-06-24 15:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-25",
        time: "3:00 pm - 8:00 pm",
        name: "Carolina Ace BBQ",
        sorttime: "2025-06-25 15:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-26",
        time: "4:00 pm - 8:00 pm",
        name: "Toasted Cuban",
        sorttime: "2025-06-26 16:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-27",
        time: "12:00 pm - 8:00 pm",
        name: "La Jarochita Romero",
        sorttime: "2025-06-27 12:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-28",
        time: "12:00 pm - 8:00 pm",
        name: "Toasted Cuban",
        sorttime: "2025-06-28 12:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-29",
        time: "12:00 pm - 8:00 pm",
        name: "Papa’s Express",
        sorttime: "2025-06-29 12:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-06-30",
        time: "6:00 pm - 8:00 pm",
        name: "Family Face Off",
        sorttime: "2025-06-30 18:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-07-01",
        time: "3:00 pm - 8:00 pm",
        name: "Taco Bus",
        sorttime: "2025-07-01 15:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-07-03",
        time: "4:00 pm - 8:00 pm",
        name: "Appalachian Chick",
        sorttime: "2025-07-03 16:00",
        detail: "None"
    },
    {
        venue: "Dry Falls",
        date: "2025-07-04",
        time: "12:00 pm - 8:00 pm",
        name: "El Bodegon",
        sorttime: "2025-07-04 12:00",
        detail: "None"
    },
];
