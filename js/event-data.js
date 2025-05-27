const events = [
    {
        venue: "Point Lookout",
        date: "2025-05-01",
        time: "5:00 pm - 8:00 pm",
        name: "Sunset Kisses – May 2025",
        sorttime: "2025-05-01 17:00",
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-06-07",
        time: "7:00 pm - 10:00 pm",
        name: "Chairmen of The Board",
        sorttime: "2025-06-07 19:00",
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-06-20",
        time: "7:00 pm - 10:00 pm",
        name: "ChillBilly & Blake Ellege",
        sorttime: "2025-06-20 19:00",
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-07-19",
        time: "7:00 pm - 10:00 pm",
        name: "Boomer Jukebox",
        sorttime: "2025-07-19 19:00",
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-08-09",
        time: "8:00 am - 5:00 pm",
        name: "Chicago Rewired",
        sorttime: "2025-08-09 08:00",
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-08-15",
        time: "7:00 pm - 10:00 pm",
        name: "Too Much Sylvia 2025",
        sorttime: "2025-08-15 19:00",
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-08-23",
        time: "¿ - ?",
        name: "Reunion Weekend",
        sorttime: "2025-08-23 Can't convert ¿ - ?",
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-09-12",
        time: "7:00 pm - 10:00 pm",
        name: "The Tams 2025",
        sorttime: "2025-09-12 19:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-05-26",
        time: "¿ - ?",
        name: "Food Truck: Sabora",
        sorttime: "2025-05-26 Can't convert ¿ - ?",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-05-26",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session",
        sorttime: "2025-05-26 16:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-05-27",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail",
        sorttime: "2025-05-27 18:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-05-28",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell",
        sorttime: "2025-05-28 18:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-05-29",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia",
        sorttime: "2025-05-29 18:30",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-01",
        time: "3:00 pm - 5:00 pm",
        name: "The Art of Journaling on the fly class!",
        sorttime: "2025-06-01 15:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-02",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session",
        sorttime: "2025-06-02 16:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-03",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail",
        sorttime: "2025-06-03 18:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-04",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell",
        sorttime: "2025-06-04 18:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-05",
        time: "6:30 pm - 8:30 pm",
        name: "Adventure Film Series: One Ocean Film Tour",
        sorttime: "2025-06-05 18:30",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-05",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia",
        sorttime: "2025-06-05 18:30",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-06",
        time: "¿ - ?",
        name: "Food Truck: Silly Willies Hot Dogs",
        sorttime: "2025-06-06 Can't convert ¿ - ?",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-09",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session",
        sorttime: "2025-06-09 16:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-10",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail",
        sorttime: "2025-06-10 18:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-11",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell",
        sorttime: "2025-06-11 18:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-12",
        time: "5:30 pm - 7:00 pm",
        name: "Green Drinks with Conserving Carolina & Mtn True",
        sorttime: "2025-06-12 17:30",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-12",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia",
        sorttime: "2025-06-12 18:30",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-14",
        time: "1:00 pm - 5:00 pm",
        name: "Dupont Forest Bike Wash!",
        sorttime: "2025-06-14 13:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-16",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session",
        sorttime: "2025-06-16 16:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-16",
        time: "6:30 pm - 8:30 pm",
        name: "Paint Your Own Pottery Class",
        sorttime: "2025-06-16 18:30",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-17",
        time: "6:00 pm - 8:00 pm",
        name: "BINGO with Hendersonville Rotary Club",
        sorttime: "2025-06-17 18:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-17",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail",
        sorttime: "2025-06-17 18:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-18",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell",
        sorttime: "2025-06-18 18:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-19",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia",
        sorttime: "2025-06-19 18:30",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-19",
        time: "7:30 pm - 9:30 pm",
        name: "Fish, Laugh, Love: Fly Fishing themed comedy fundraiser",
        sorttime: "2025-06-19 19:30",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-21",
        time: "1:00 pm - 6:00 pm",
        name: "Blue Ridge Artisan Market",
        sorttime: "2025-06-21 13:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-22",
        time: "1:00 pm - 4:00 pm",
        name: "Mobile Book Bus at Trailside!",
        sorttime: "2025-06-22 13:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-23",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session",
        sorttime: "2025-06-23 16:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-24",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail",
        sorttime: "2025-06-24 18:00",
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-25",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell",
        sorttime: "2025-06-25 18:00",
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-05-29",
        time: "7:00 pm - 9:00 pm",
        name: "Julianna Jade",
        sorttime: "2025-05-29 19:00",
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-05-30",
        time: "8:00 pm - 11:00 pm",
        name: "Heavy Lifters",
        sorttime: "2025-05-30 20:00",
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-05-31",
        time: "8:00 pm - 11:00 pm",
        name: "Duck",
        sorttime: "2025-05-31 20:00",
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-01",
        time: "3:00 pm - 5:00 pm",
        name: "Duck",
        sorttime: "2025-06-01 15:00",
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-05",
        time: "12:00 pm - 11:00 pm",
        name: "Cummings Cove Cares Fundraiser for Hurricane Helene Recovery and Rebuild",
        sorttime: "2025-06-05 12:00",
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-05",
        time: "6:00 pm - 9:00 pm",
        name: "The Lads",
        sorttime: "2025-06-05 18:00",
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-06",
        time: "8:00 pm - 11:00 pm",
        name: "Alma Russ",
        sorttime: "2025-06-06 20:00",
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-07",
        time: "8:00 pm - 11:00 pm",
        name: "Billingsley",
        sorttime: "2025-06-07 20:00",
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-08",
        time: "3:00 pm - 5:00 pm",
        name: "Petah Iah and the Mind Renewers",
        sorttime: "2025-06-08 15:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-30",
        time: "6:00 PM - 9:00 PM",
        name: "Todd Cecil & The Dirt Yard Choir",
        sorttime: "2025-05-30 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-31",
        time: "6:00 PM - 9:00 PM",
        name: "Tracy Davis & The TMI Band",
        sorttime: "2025-05-31 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-06",
        time: "6:00 PM - 9:00 PM",
        name: "Todd Cecil & The Dirt Yard Choir",
        sorttime: "2025-06-06 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-07",
        time: "6:00 PM - 9:00 PM",
        name: "Tracy Davis & The TMI Band",
        sorttime: "2025-06-07 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-13",
        time: "6:00 PM - 9:00 PM",
        name: "The Right Fit",
        sorttime: "2025-06-13 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-15",
        time: "11:00 AM - 7:00 PM",
        name: "Father's Day BBQ",
        sorttime: "2025-06-15 11:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-20",
        time: "6:00 PM - 9:00 PM",
        name: "Finkelstein 3",
        sorttime: "2025-06-20 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-21",
        time: "11:00 AM - 9:00 PM",
        name: "BOLD Birthday Bash",
        sorttime: "2025-06-21 11:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-26",
        time: "5:00 PM - 7:00 PM",
        name: "Macarons & Flight Pairing",
        sorttime: "2025-06-26 17:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-27",
        time: "6:00 PM - 9:00 PM",
        name: "Fine Line Band",
        sorttime: "2025-06-27 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-28",
        time: "6:00 PM - 9:00 PM",
        name: "Awake In The Dream",
        sorttime: "2025-06-28 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-24",
        time: "11:00 AM - 9:00 PM",
        name: "Kickoff to Summer",
        sorttime: "2025-05-24 11:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-23",
        time: "6:00 PM - 9:00 PM",
        name: "Sound Invasion",
        sorttime: "2025-05-23 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-17",
        time: "6:00 PM - 8:00 PM",
        name: "Finkelstein 3",
        sorttime: "2025-05-17 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-16",
        time: "6:00 PM - 8:00 PM",
        name: "Fine Line Band",
        sorttime: "2025-05-16 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-15",
        time: "5:00 PM - 7:00 PM",
        name: "Crumbl Cookies & Flight Pairing",
        sorttime: "2025-05-15 17:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-11",
        time: "11:00 AM - 7:00 PM",
        name: "Mother's Day Plant & Sip",
        sorttime: "2025-05-11 11:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-10",
        time: "6:00 PM - 8:00 PM",
        name: "Jay Dee",
        sorttime: "2025-05-10 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-09",
        time: "6:00 PM - 8:00 PM",
        name: "The Sliding Rockers",
        sorttime: "2025-05-09 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-03",
        time: "5:30 PM - 8:30 PM",
        name: "Hard Knox Wrestling at Bold Rock",
        sorttime: "2025-05-03 17:30",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-02",
        time: "6:00 PM - 8:00 PM",
        name: "Myron Hyman",
        sorttime: "2025-05-02 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-26",
        time: "6:00 PM - 8:00 PM",
        name: "Awake In The Dream",
        sorttime: "2025-04-26 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-25",
        time: "6:00 PM - 8:00 PM",
        name: "Finkelstein 3",
        sorttime: "2025-04-25 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-19",
        time: "11:00 AM - 9:00 PM",
        name: "Easter Egg Give-a-Way",
        sorttime: "2025-04-19 11:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-18",
        time: "6:00 PM - 8:00 PM",
        name: "Kid Billy",
        sorttime: "2025-04-18 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-17",
        time: "5:00 PM - 7:00 PM",
        name: "Cupcake & Flight Pairing",
        sorttime: "2025-04-17 17:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-12",
        time: "6:00 PM - 8:00 PM",
        name: "John Cox Band",
        sorttime: "2025-04-12 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-11",
        time: "6:00 PM - 8:00 PM",
        name: "The Right Fit",
        sorttime: "2025-04-11 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-05",
        time: "12:00 PM - 4:00 PM",
        name: "Grounded & Grateful Event",
        sorttime: "2025-04-05 12:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-04",
        time: "6:00 PM - 10:00 PM",
        name: "Arborfest Expo: AFTER PARTY (Private Event)",
        sorttime: "2025-04-04 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-28",
        time: "5:00 PM - 8:00 PM",
        name: "Finkelstein 3",
        sorttime: "2025-03-28 17:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-27",
        time: "5:00 PM - 7:00 PM",
        name: "Cheesecake & Flight Pairing",
        sorttime: "2025-03-27 17:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-21",
        time: "5:00 PM - 8:00 PM",
        name: "Myron Hyman",
        sorttime: "2025-03-21 17:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-17",
        time: "12:00 PM - 8:00 PM",
        name: "St. Patrick's Day Party!",
        sorttime: "2025-03-17 12:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-15",
        time: "¿ - ?",
        name: "St. Patrick's Day Weekend Celebration",
        sorttime: "2025-03-15 Can't convert ¿ - ?",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-14",
        time: "11:00 AM - 10:00 PM",
        name: "St. Patrick's: Steal the Pint",
        sorttime: "2025-03-14 11:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-08",
        time: "6:00 PM - 8:00 PM",
        name: "Cast Iron",
        sorttime: "2025-03-08 18:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-01",
        time: "5:00 PM - 8:00 PM",
        name: "Iggy Radio",
        sorttime: "2025-03-01 17:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-02-28",
        time: "5:00 PM - 8:00 PM",
        name: "Todd Cecil & The Dirt Yard Choir",
        sorttime: "2025-02-28 17:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-02-21",
        time: "5:00 PM - 8:00 PM",
        name: "Myron Hyman",
        sorttime: "2025-02-21 17:00",
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-02-15",
        time: "5:00 PM - 7:00 PM",
        name: "Craig St. John",
        sorttime: "2025-02-15 17:00",
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Tuesday May 27th",
        time: "06:00 PM - 08:30 PM",
        name: "Run Club",
        sorttime: "Tuesday May 27th 18:00",
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Wednesday May 28th",
        time: "07:00 PM - 09:00 PM",
        name: "Team Trivia",
        sorttime: "Wednesday May 28th 19:00",
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Friday May 30th",
        time: "06:00 PM - 10:00 PM",
        name: "Karaoke",
        sorttime: "Friday May 30th 18:00",
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Thursday June 12th",
        time: "07:00 PM - 09:00 PM",
        name: "Trout Unlimited Monthly Meeting",
        sorttime: "Thursday June 12th 19:00",
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Saturday June 14th",
        time: "11:00 AM - 10:00 PM",
        name: "National Bourbon Day",
        sorttime: "Saturday June 14th 11:00",
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Tuesday July 29th",
        time: "11:00 AM - 09:00 PM",
        name: "National Chicken Wing Day",
        sorttime: "Tuesday July 29th 11:00",
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Saturday September 6th",
        time: "06:30 PM - 09:30 PM",
        name: "Live music by Cellophane Flowers",
        sorttime: "Saturday September 6th 18:30",
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "Error retrieving data",
        time: "Error retrieving data",
        name: "Failed to fetch events: time data '6pm' does not match format '%I:%M %p'",
        sorttime: "Error retrieving data",
        detail: "Error retrieving data"
    },
    {
        venue: "Southern App",
        date: "Error retrieving data",
        time: "Error retrieving data",
        name: "Failed to fetch events: time data '4pm' does not match format '%I:%M %p'",
        sorttime: "Error retrieving data",
        detail: "Error retrieving data"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-05-31",
        time: "2:00 PM - 5:00 PM",
        name: "Ashley Heath & Her Heathens",
        sorttime: "2025-05-31 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-04",
        time: "6:00 PM - 9:30 PM",
        name: "Fantastic Negrito w/ The Saviors of New York",
        sorttime: "2025-06-04 18:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-07",
        time: "2:00 PM - 5:00 PM",
        name: "Pleasure Chest",
        sorttime: "2025-06-07 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-08",
        time: "2:00 PM - 5:00 PM",
        name: "My Magnificent Nemesis w/ Alien Music Club",
        sorttime: "2025-06-08 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-13",
        time: "7:30 PM - 10:00 PM",
        name: "Hustle Souls",
        sorttime: "2025-06-13 19:30",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-14",
        time: "2:00 PM - 5:00 PM",
        name: "Daniel Shearin",
        sorttime: "2025-06-14 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-15",
        time: "2:00 PM - 5:00 PM",
        name: "Julio & the Saltines",
        sorttime: "2025-06-15 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-21",
        time: "2:00 PM - 5:00 PM",
        name: "The Heavy Lifters",
        sorttime: "2025-06-21 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-22",
        time: "2:00 PM - 5:00 PM",
        name: "The Deep Shallow Band",
        sorttime: "2025-06-22 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-26",
        time: "6:00 PM - 9:00 PM",
        name: "Who’s Bad: The Ultimate Michael Jackson Experience",
        sorttime: "2025-06-26 18:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-28",
        time: "2:00 PM - 5:00 PM",
        name: "The Headtones",
        sorttime: "2025-06-28 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-29",
        time: "2:00 PM - 5:00 PM",
        name: "Moonshine State",
        sorttime: "2025-06-29 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-05",
        time: "2:00 PM - 5:00 PM",
        name: "Lyric",
        sorttime: "2025-07-05 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-10",
        time: "6:00 PM - 10:00 PM",
        name: "Lettuce",
        sorttime: "2025-07-10 18:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-11",
        time: "7:30 PM - 10:00 PM",
        name: "Fireside Collective",
        sorttime: "2025-07-11 19:30",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-12",
        time: "2:00 PM - 5:00 PM",
        name: "Jesse Velvet",
        sorttime: "2025-07-12 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-13",
        time: "2:00 PM - 5:00 PM",
        name: "CarolinAloha",
        sorttime: "2025-07-13 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-18",
        time: "7:00 PM - 9:30 PM",
        name: "Lazrluvr",
        sorttime: "2025-07-18 19:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-19",
        time: "2:00 PM - 5:00 PM",
        name: "Andrew Scotchie",
        sorttime: "2025-07-19 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-20",
        time: "2:00 PM - 5:00 PM",
        name: "Boogitherapi",
        sorttime: "2025-07-20 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-25",
        time: "6:00 PM - 9:30 PM",
        name: "Ozomatli w/ Debajito",
        sorttime: "2025-07-25 18:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-26",
        time: "2:00 PM - 5:00 PM",
        name: "Peggy Ratusz and the Daddy Long Legs",
        sorttime: "2025-07-26 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-27",
        time: "2:00 PM - 5:00 PM",
        name: "The Outriders",
        sorttime: "2025-07-27 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-31",
        time: "5:30 PM - 8:30 PM",
        name: "Amplify Appalachia",
        sorttime: "2025-07-31 17:30",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-01",
        time: "7:30 PM - 10:00 PM",
        name: "Dangermuffin",
        sorttime: "2025-08-01 19:30",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-02",
        time: "2:00 PM - 5:00 PM",
        name: "Watkins",
        sorttime: "2025-08-02 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-03",
        time: "2:00 PM - 5:00 PM",
        name: "Roots and Dore",
        sorttime: "2025-08-03 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-08",
        time: "6:00 PM - 9:30 PM",
        name: "STRFKR w/ Mamalarky",
        sorttime: "2025-08-08 18:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-09",
        time: "2:00 PM - 5:00 PM",
        name: "Ska City",
        sorttime: "2025-08-09 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-10",
        time: "2:00 PM - 5:00 PM",
        name: "Purple",
        sorttime: "2025-08-10 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-14",
        time: "6:00 PM - 9:30 PM",
        name: "Femi Kuti & The Positive Force",
        sorttime: "2025-08-14 18:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-16",
        time: "2:00 PM - 5:00 PM",
        name: "Ben Bjorlie Band",
        sorttime: "2025-08-16 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-17",
        time: "2:00 PM - 5:00 PM",
        name: "TrancEnd Band",
        sorttime: "2025-08-17 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-22",
        time: "6:00 PM - 9:00 PM",
        name: "Fitz and The Tantrums",
        sorttime: "2025-08-22 18:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-24",
        time: "2:00 PM - 5:00 PM",
        name: "Julianna Jade and the Wild",
        sorttime: "2025-08-24 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-27",
        time: "6:00 PM - 9:30 PM",
        name: "Jesse Daniel w/ Jake Kohn",
        sorttime: "2025-08-27 18:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-06",
        time: "2:00 PM - 5:00 PM",
        name: "Andrew Wakefield & Friends",
        sorttime: "2025-09-06 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-07",
        time: "2:00 PM - 5:00 PM",
        name: "Sugar Bomb",
        sorttime: "2025-09-07 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-13",
        time: "2:00 PM - 5:00 PM",
        name: "DISPLACE",
        sorttime: "2025-09-13 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-14",
        time: "2:00 PM - 5:00 PM",
        name: "Tasty Vibrations",
        sorttime: "2025-09-14 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-21",
        time: "6:00 PM - 9:00 PM",
        name: "Trombone Shorty & Orleans Avenue",
        sorttime: "2025-09-21 18:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-28",
        time: "2:00 PM - 5:00 PM",
        name: "Mana Meter",
        sorttime: "2025-09-28 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-04",
        time: "2:00 PM - 5:00 PM",
        name: "The Late Shifters",
        sorttime: "2025-10-04 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-05",
        time: "2:00 PM - 5:00 PM",
        name: "Billingsly",
        sorttime: "2025-10-05 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-11",
        time: "2:00 PM - 5:00 PM",
        name: "Tanasi",
        sorttime: "2025-10-11 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-18",
        time: "2:00 PM - 5:00 PM",
        name: "Fresh Buzz",
        sorttime: "2025-10-18 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-19",
        time: "2:00 PM - 5:00 PM",
        name: "Saddletramp",
        sorttime: "2025-10-19 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-25",
        time: "2:00 PM - 5:00 PM",
        name: "Nikki and the Barn Boys",
        sorttime: "2025-10-25 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-26",
        time: "2:00 PM - 5:00 PM",
        name: "The Big Hungry",
        sorttime: "2025-10-26 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-29",
        time: "6:00 PM - 9:30 PM",
        name: "Here Come the Mummies",
        sorttime: "2025-10-29 18:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-11-01",
        time: "2:00 PM - 5:00 PM",
        name: "",
        sorttime: "2025-11-01 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-11-09",
        time: "2:00 PM - 5:00 PM",
        name: "The Patrick Lopez Experience",
        sorttime: "2025-11-09 14:00",
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-11-16",
        time: "2:00 PM - 5:00 PM",
        name: "Dustin Furlow",
        sorttime: "2025-11-16 14:00",
        detail: "details"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-06-19",
        time: "5:30 pm - 10 pm",
        name: "Big Daddy Love (Appalachian Rock) with Letters to Abigail (Americana)",
        sorttime: "2025-06-19 17:30",
        detail: "details"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-07-17",
        time: "5:30 pm - 10 pm",
        name: "Florencia & the Feeling (Pop/Funk/Fusion) with Lewendahl  (Blues/Rock/Motown)",
        sorttime: "2025-07-17 17:30",
        detail: "details"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-08-21",
        time: "5:30 pm - 10 pm",
        name: "Maggie Baugh (Country) with Blake Ellege & Saddletramp (Country/Southern Rock)",
        sorttime: "2025-08-21 17:30",
        detail: "details"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-09-18",
        time: "5:30 pm - 10 pm",
        name: "Caitlin Krisko & The Broadcast (Soul Rock) with Hustle Souls (Soul/Funk/Americana)",
        sorttime: "2025-09-18 17:30",
        detail: "details"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-10-16",
        time: "5:30 pm - 10 pm",
        name: "BonaFide Soul (Jazz/Funk/Soul) with Congdon Griffin Band (Folk/Americana/Rock)",
        sorttime: "2025-10-16 17:30",
        detail: "details"
    },
    {
        venue: "Music on Main",
        date: "2025-06-20",
        time: "7:00 pm - 9:00 pm",
        name: "5 O’Clock Somewhere",
        sorttime: "2025-06-20 19:00",
        detail: "details"
    },
    {
        venue: "Music on Main",
        date: "2025-07-04",
        time: "7:00 pm - 9:00 pm",
        name: "Night Move Band",
        sorttime: "2025-07-04 19:00",
        detail: "details"
    },
    {
        venue: "Music on Main",
        date: "2025-07-18",
        time: "7:00 pm - 9:00 pm",
        name: "The Big Throwback",
        sorttime: "2025-07-18 19:00",
        detail: "details"
    },
    {
        venue: "Music on Main",
        date: "2025-08-01",
        time: "7:00 pm - 9:00 pm",
        name: "Gotcha Groove",
        sorttime: "2025-08-01 19:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-04-29",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-04-29 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-04-29",
        time: "1:00 pm - 4:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-04-29 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-03",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-05-03 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-03",
        time: "10:00 am - 1:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-05-03 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-03",
        time: "12:00 pm - 6:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-05-03 12:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-04",
        time: "1:00 pm - 3:30 pm",
        name: "Landscape Design Fundamentals (full)",
        sorttime: "2025-05-04 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-06",
        time: "8:00 am - 10:00 am",
        name: "Meditative Morning",
        sorttime: "2025-05-06 08:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-06",
        time: "9:00 am - 10:30 am",
        name: "Meditative Morning",
        sorttime: "2025-05-06 09:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-06",
        time: "1:00 pm - 3:00 pm",
        name: "Meditative Morning",
        sorttime: "2025-05-06 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-09",
        time: "1:00 pm - 3:00 pm",
        name: "Insect Pollinators of the Blue Ridge",
        sorttime: "2025-05-09 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-10",
        time: "10:00 am - 12:00 pm",
        name: "National Public Gardens Day",
        sorttime: "2025-05-10 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-10",
        time: "10:00 am - 1:00 pm",
        name: "National Public Gardens Day",
        sorttime: "2025-05-10 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-10",
        time: "1:00 pm - 3:00 pm",
        name: "National Public Gardens Day",
        sorttime: "2025-05-10 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-11",
        time: "10:00 am - 4:00 pm",
        name: "World Bonsai Day",
        sorttime: "2025-05-11 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-11",
        time: "1:00 pm - 3:30 pm",
        name: "World Bonsai Day",
        sorttime: "2025-05-11 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-11",
        time: "1:00 pm - 4:00 pm",
        name: "World Bonsai Day",
        sorttime: "2025-05-11 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-13",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-05-13 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-13",
        time: "5:30 pm - 7:30 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-05-13 17:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-14",
        time: "1:00 pm - 3:00 pm",
        name: "Slides, Flows, and Floods: Hurricane Helene’s Geologic Impact (full)",
        sorttime: "2025-05-14 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-15",
        time: "9:30 am - 12:30 pm",
        name: "Spring Tree ID",
        sorttime: "2025-05-15 09:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-16",
        time: "9:00 am - 10:00 am",
        name: "Walking Meditation & Qigong",
        sorttime: "2025-05-16 09:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-16",
        time: "1:00 pm - 3:30 pm",
        name: "Walking Meditation & Qigong",
        sorttime: "2025-05-16 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-17",
        time: "9:30 am - 4:30 pm",
        name: "Beginning Bonsai Workshop (full)",
        sorttime: "2025-05-17 09:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-17",
        time: "10:00 am - 12:00 pm",
        name: "Beginning Bonsai Workshop (full)",
        sorttime: "2025-05-17 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-17",
        time: "10:00 am - 3:00 pm",
        name: "Beginning Bonsai Workshop (full)",
        sorttime: "2025-05-17 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-18",
        time: "1:30 pm - 3:00 pm",
        name: "Spring Ecology Walk",
        sorttime: "2025-05-18 13:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-20",
        time: "12:00 pm - 4:00 pm",
        name: "Mammals of the Southern Appalachians",
        sorttime: "2025-05-20 12:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-20",
        time: "1:00 pm - 3:00 pm",
        name: "Mammals of the Southern Appalachians",
        sorttime: "2025-05-20 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-21",
        time: "8:30 am - 11:00 am",
        name: "Spring Birding Hike at the Arboretum",
        sorttime: "2025-05-21 08:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-23",
        time: "12:00 pm - 4:00 pm",
        name: "Southern Appalachian Entomology",
        sorttime: "2025-05-23 12:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-24",
        time: "9:00 am - 5:00 pm",
        name: "Tiny Worlds of the Appalachian Mountains: The Watercolor Paintings of Rosalie Haizlett",
        sorttime: "2025-05-24 09:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-24",
        time: "10:00 am - 12:00 pm",
        name: "Tiny Worlds of the Appalachian Mountains: The Watercolor Paintings of Rosalie Haizlett",
        sorttime: "2025-05-24 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-24",
        time: "10:00 am - 12:00 pm",
        name: "Tiny Worlds of the Appalachian Mountains: The Watercolor Paintings of Rosalie Haizlett",
        sorttime: "2025-05-24 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-25",
        time: "9:00 am - 5:00 pm",
        name: "Asheville Blue Ridge Rose Society Rose Exhibition",
        sorttime: "2025-05-25 09:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-27",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-05-27 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-27",
        time: "1:30 pm - 3:30 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-05-27 13:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-29",
        time: "1:00 pm - 3:00 pm",
        name: "Wildwoods Walk",
        sorttime: "2025-05-29 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-29",
        time: "4:00 pm - 7:00 pm",
        name: "Wildwoods Walk",
        sorttime: "2025-05-29 16:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-30",
        time: "10:00 am - 3:00 pm",
        name: "Spring Plant Sale and Market",
        sorttime: "2025-05-30 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-31",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-05-31 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-31",
        time: "10:00 am - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-05-31 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-31",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-05-31 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-03",
        time: "8:00 am - 10:00 am",
        name: "Meditative Morning",
        sorttime: "2025-06-03 08:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-03",
        time: "9:00 am - 10:30 am",
        name: "Meditative Morning",
        sorttime: "2025-06-03 09:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-03",
        time: "1:00 pm - 3:00 pm",
        name: "Meditative Morning",
        sorttime: "2025-06-03 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-04",
        time: "10:00 am - 12:00 pm",
        name: "Streambank Stabilization Solutions",
        sorttime: "2025-06-04 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-07",
        time: "10:00 am - 12:00 pm",
        name: "Blue Ridge Bonsai Society Show",
        sorttime: "2025-06-07 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-07",
        time: "1:00 pm - 3:00 pm",
        name: "Blue Ridge Bonsai Society Show",
        sorttime: "2025-06-07 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-10",
        time: "9:30 am - 12:30 pm",
        name: "Pine Primer",
        sorttime: "2025-06-10 09:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-10",
        time: "1:00 pm - 3:00 pm",
        name: "Pine Primer",
        sorttime: "2025-06-10 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-10",
        time: "2:00 pm - 4:00 pm",
        name: "Pine Primer",
        sorttime: "2025-06-10 14:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-11",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-11 17:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-12",
        time: "10:00 am - 2:00 pm",
        name: "Teacher Workshop: Connecting NC Standards and Environmental Education",
        sorttime: "2025-06-12 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-12",
        time: "5:30 pm - 8:30 pm",
        name: "Teacher Workshop: Connecting NC Standards and Environmental Education",
        sorttime: "2025-06-12 17:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-13",
        time: "9:30 am - 12:30 pm",
        name: "Painting and Meditation from the Heart",
        sorttime: "2025-06-13 09:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-13",
        time: "1:00 pm - 3:30 pm",
        name: "Painting and Meditation from the Heart",
        sorttime: "2025-06-13 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-14",
        time: "9:30 am - 4:30 pm",
        name: "Beginning Bonsai Workshop",
        sorttime: "2025-06-14 09:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-14",
        time: "10:00 am - 12:00 pm",
        name: "Beginning Bonsai Workshop",
        sorttime: "2025-06-14 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-14",
        time: "10:00 am - 1:00 pm",
        name: "Beginning Bonsai Workshop",
        sorttime: "2025-06-14 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-17",
        time: "10:00 am - 1:00 pm",
        name: "Summer Tree ID",
        sorttime: "2025-06-17 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-17",
        time: "1:00 pm - 3:00 pm",
        name: "Summer Tree ID",
        sorttime: "2025-06-17 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-18",
        time: "1:00 pm - 3:00 pm",
        name: "Invasion Ecology",
        sorttime: "2025-06-18 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-18",
        time: "5:30 pm - 8:30 pm",
        name: "Invasion Ecology",
        sorttime: "2025-06-18 17:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-19",
        time: "1:00 pm - 4:00 pm",
        name: "Spare-time Gardening",
        sorttime: "2025-06-19 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-19",
        time: "5:30 pm - 8:30 pm",
        name: "Spare-time Gardening",
        sorttime: "2025-06-19 17:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-20",
        time: "9:00 am - 10:00 am",
        name: "Walking Meditation & Qigong",
        sorttime: "2025-06-20 09:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-20",
        time: "1:00 pm - 3:30 pm",
        name: "Walking Meditation & Qigong",
        sorttime: "2025-06-20 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-21",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-21 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-21",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-21 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-21",
        time: "1:00 pm - 4:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-21 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-22",
        time: "11:00 am - 3:00 pm",
        name: "Bonsai Book Sculpture Workshop",
        sorttime: "2025-06-22 11:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-24",
        time: "12:00 pm - 4:00 pm",
        name: "Arboretum Excursions: Grandfather Mountain Stewardship Foundation",
        sorttime: "2025-06-24 12:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-24",
        time: "1:00 pm - 3:00 pm",
        name: "Arboretum Excursions: Grandfather Mountain Stewardship Foundation",
        sorttime: "2025-06-24 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-25",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-25 17:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-26",
        time: "12:00 pm - 4:00 pm",
        name: "Advanced Botany I",
        sorttime: "2025-06-26 12:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-26",
        time: "5:30 pm - 8:30 pm",
        name: "Advanced Botany I",
        sorttime: "2025-06-26 17:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-27",
        time: "12:00 pm - 4:00 pm",
        name: "Geology of the Blue Ridge Field Class",
        sorttime: "2025-06-27 12:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-28",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-28 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-28",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-28 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-28",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-28 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "8:00 am - 10:00 am",
        name: "Meditative Morning",
        sorttime: "2025-07-01 08:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "1:00 pm - 3:00 pm",
        name: "Meditative Morning",
        sorttime: "2025-07-01 13:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-07-02",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-02 17:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-07-03",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-03 17:30",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-07-05",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-05 10:00",
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-07-05",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-05 13:00",
        detail: "details"
    },
];
