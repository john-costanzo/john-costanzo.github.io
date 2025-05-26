const events = [
    {
        venue: "Point Lookout",
        date: "2025-05-01",
        time: "5:00 pm - 8:00 pm",
        name: "Sunset Kisses – May 2025"
        sorttime: "2025-05-01 5:00 pm - 8:00 pm"
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-06-07",
        time: "7:00 pm - 10:00 pm",
        name: "Chairmen of The Board"
        sorttime: "2025-06-07 7:00 pm - 10:00 pm"
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-06-20",
        time: "7:00 pm - 10:00 pm",
        name: "ChillBilly & Blake Ellege"
        sorttime: "2025-06-20 7:00 pm - 10:00 pm"
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-07-19",
        time: "7:00 pm - 10:00 pm",
        name: "Boomer Jukebox"
        sorttime: "2025-07-19 7:00 pm - 10:00 pm"
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-08-09",
        time: "8:00 am - 5:00 pm",
        name: "Chicago Rewired"
        sorttime: "2025-08-09 8:00 am - 5:00 pm"
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-08-15",
        time: "7:00 pm - 10:00 pm",
        name: "Too Much Sylvia 2025"
        sorttime: "2025-08-15 7:00 pm - 10:00 pm"
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-08-23",
        time: "¿ - ?",
        name: "Reunion Weekend"
        sorttime: "2025-08-23 ¿ - ?"
        detail: "details"
    },
    {
        venue: "Point Lookout",
        date: "2025-09-12",
        time: "7:00 pm - 10:00 pm",
        name: "The Tams 2025"
        sorttime: "2025-09-12 7:00 pm - 10:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-05-26",
        time: "¿ - ?",
        name: "Food Truck: Sabora"
        sorttime: "2025-05-26 ¿ - ?"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-05-26",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session"
        sorttime: "2025-05-26 4:00 pm - 6:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-05-27",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail"
        sorttime: "2025-05-27 6:00 pm - 9:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-05-28",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell"
        sorttime: "2025-05-28 6:00 pm - 8:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-05-29",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia"
        sorttime: "2025-05-29 6:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-01",
        time: "3:00 pm - 5:00 pm",
        name: "The Art of Journaling on the fly class!"
        sorttime: "2025-06-01 3:00 pm - 5:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-02",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session"
        sorttime: "2025-06-02 4:00 pm - 6:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-03",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail"
        sorttime: "2025-06-03 6:00 pm - 9:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-04",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell"
        sorttime: "2025-06-04 6:00 pm - 8:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-05",
        time: "6:30 pm - 8:30 pm",
        name: "Adventure Film Series: One Ocean Film Tour"
        sorttime: "2025-06-05 6:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-05",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia"
        sorttime: "2025-06-05 6:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-06",
        time: "¿ - ?",
        name: "Food Truck: Silly Willies Hot Dogs"
        sorttime: "2025-06-06 ¿ - ?"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-09",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session"
        sorttime: "2025-06-09 4:00 pm - 6:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-10",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail"
        sorttime: "2025-06-10 6:00 pm - 9:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-11",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell"
        sorttime: "2025-06-11 6:00 pm - 8:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-12",
        time: "5:30 pm - 7:00 pm",
        name: "Green Drinks with Conserving Carolina & Mtn True"
        sorttime: "2025-06-12 5:30 pm - 7:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-12",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia"
        sorttime: "2025-06-12 6:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-14",
        time: "1:00 pm - 5:00 pm",
        name: "Dupont Forest Bike Wash!"
        sorttime: "2025-06-14 1:00 pm - 5:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-16",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session"
        sorttime: "2025-06-16 4:00 pm - 6:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-16",
        time: "6:30 pm - 8:30 pm",
        name: "Paint Your Own Pottery Class"
        sorttime: "2025-06-16 6:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-17",
        time: "6:00 pm - 8:00 pm",
        name: "BINGO with Hendersonville Rotary Club"
        sorttime: "2025-06-17 6:00 pm - 8:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-17",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail"
        sorttime: "2025-06-17 6:00 pm - 9:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-18",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell"
        sorttime: "2025-06-18 6:00 pm - 8:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-19",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia"
        sorttime: "2025-06-19 6:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-21",
        time: "1:00 pm - 6:00 pm",
        name: "Blue Ridge Artisan Market"
        sorttime: "2025-06-21 1:00 pm - 6:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-22",
        time: "1:00 pm - 4:00 pm",
        name: "Mobile Book Bus at Trailside!"
        sorttime: "2025-06-22 1:00 pm - 4:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-23",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session"
        sorttime: "2025-06-23 4:00 pm - 6:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-24",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail"
        sorttime: "2025-06-24 6:00 pm - 9:00 pm"
        detail: "details"
    },
    {
        venue: "Trailside",
        date: "2025-06-25",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell"
        sorttime: "2025-06-25 6:00 pm - 8:00 pm"
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-05-29",
        time: "7:00 pm - 9:00 pm",
        name: "Julianna Jade"
        sorttime: "2025-05-29 7:00 pm - 9:00 pm"
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-05-30",
        time: "8:00 pm - 11:00 pm",
        name: "Heavy Lifters"
        sorttime: "2025-05-30 8:00 pm - 11:00 pm"
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-05-31",
        time: "8:00 pm - 11:00 pm",
        name: "Duck"
        sorttime: "2025-05-31 8:00 pm - 11:00 pm"
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-01",
        time: "3:00 pm - 5:00 pm",
        name: "Duck"
        sorttime: "2025-06-01 3:00 pm - 5:00 pm"
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-05",
        time: "12:00 pm - 11:00 pm",
        name: "Cummings Cove Cares Fundraiser for Hurricane Helene Recovery and Rebuild"
        sorttime: "2025-06-05 12:00 pm - 11:00 pm"
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-05",
        time: "6:00 pm - 9:00 pm",
        name: "The Lads"
        sorttime: "2025-06-05 6:00 pm - 9:00 pm"
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-06",
        time: "8:00 pm - 11:00 pm",
        name: "Alma Russ"
        sorttime: "2025-06-06 8:00 pm - 11:00 pm"
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-07",
        time: "8:00 pm - 11:00 pm",
        name: "Billingsley"
        sorttime: "2025-06-07 8:00 pm - 11:00 pm"
        detail: "details"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-08",
        time: "3:00 pm - 5:00 pm",
        name: "Petah Iah and the Mind Renewers"
        sorttime: "2025-06-08 3:00 pm - 5:00 pm"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-30",
        time: "6:00 PM - 9:00 PM",
        name: "Todd Cecil & The Dirt Yard Choir"
        sorttime: "2025-05-30 6:00 PM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-31",
        time: "6:00 PM - 9:00 PM",
        name: "Tracy Davis & The TMI Band"
        sorttime: "2025-05-31 6:00 PM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-06",
        time: "6:00 PM - 9:00 PM",
        name: "Todd Cecil & The Dirt Yard Choir"
        sorttime: "2025-06-06 6:00 PM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-07",
        time: "6:00 PM - 9:00 PM",
        name: "Tracy Davis & The TMI Band"
        sorttime: "2025-06-07 6:00 PM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-13",
        time: "6:00 PM - 9:00 PM",
        name: "The Right Fit"
        sorttime: "2025-06-13 6:00 PM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-15",
        time: "11:00 AM - 7:00 PM",
        name: "Father's Day BBQ"
        sorttime: "2025-06-15 11:00 AM - 7:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-20",
        time: "6:00 PM - 9:00 PM",
        name: "Finkelstein 3"
        sorttime: "2025-06-20 6:00 PM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-21",
        time: "11:00 AM - 9:00 PM",
        name: "BOLD Birthday Bash"
        sorttime: "2025-06-21 11:00 AM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-26",
        time: "5:00 PM - 7:00 PM",
        name: "Macarons & Flight Pairing"
        sorttime: "2025-06-26 5:00 PM - 7:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-27",
        time: "6:00 PM - 9:00 PM",
        name: "Fine Line Band"
        sorttime: "2025-06-27 6:00 PM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-06-28",
        time: "6:00 PM - 9:00 PM",
        name: "Awake In The Dream"
        sorttime: "2025-06-28 6:00 PM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-24",
        time: "11:00 AM - 9:00 PM",
        name: "Kickoff to Summer"
        sorttime: "2025-05-24 11:00 AM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-23",
        time: "6:00 PM - 9:00 PM",
        name: "Sound Invasion"
        sorttime: "2025-05-23 6:00 PM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-17",
        time: "6:00 PM - 8:00 PM",
        name: "Finkelstein 3"
        sorttime: "2025-05-17 6:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-16",
        time: "6:00 PM - 8:00 PM",
        name: "Fine Line Band"
        sorttime: "2025-05-16 6:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-15",
        time: "5:00 PM - 7:00 PM",
        name: "Crumbl Cookies & Flight Pairing"
        sorttime: "2025-05-15 5:00 PM - 7:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-11",
        time: "11:00 AM - 7:00 PM",
        name: "Mother's Day Plant & Sip"
        sorttime: "2025-05-11 11:00 AM - 7:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-10",
        time: "6:00 PM - 8:00 PM",
        name: "Jay Dee"
        sorttime: "2025-05-10 6:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-09",
        time: "6:00 PM - 8:00 PM",
        name: "The Sliding Rockers"
        sorttime: "2025-05-09 6:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-03",
        time: "5:30 PM - 8:30 PM",
        name: "Hard Knox Wrestling at Bold Rock"
        sorttime: "2025-05-03 5:30 PM - 8:30 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-05-02",
        time: "6:00 PM - 8:00 PM",
        name: "Myron Hyman"
        sorttime: "2025-05-02 6:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-26",
        time: "6:00 PM - 8:00 PM",
        name: "Awake In The Dream"
        sorttime: "2025-04-26 6:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-25",
        time: "6:00 PM - 8:00 PM",
        name: "Finkelstein 3"
        sorttime: "2025-04-25 6:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-19",
        time: "11:00 AM - 9:00 PM",
        name: "Easter Egg Give-a-Way"
        sorttime: "2025-04-19 11:00 AM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-18",
        time: "6:00 PM - 8:00 PM",
        name: "Kid Billy"
        sorttime: "2025-04-18 6:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-17",
        time: "5:00 PM - 7:00 PM",
        name: "Cupcake & Flight Pairing"
        sorttime: "2025-04-17 5:00 PM - 7:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-12",
        time: "6:00 PM - 8:00 PM",
        name: "John Cox Band"
        sorttime: "2025-04-12 6:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-11",
        time: "6:00 PM - 8:00 PM",
        name: "The Right Fit"
        sorttime: "2025-04-11 6:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-05",
        time: "12:00 PM - 4:00 PM",
        name: "Grounded & Grateful Event"
        sorttime: "2025-04-05 12:00 PM - 4:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-04-04",
        time: "6:00 PM - 10:00 PM",
        name: "Arborfest Expo: AFTER PARTY (Private Event)"
        sorttime: "2025-04-04 6:00 PM - 10:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-28",
        time: "5:00 PM - 8:00 PM",
        name: "Finkelstein 3"
        sorttime: "2025-03-28 5:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-27",
        time: "5:00 PM - 7:00 PM",
        name: "Cheesecake & Flight Pairing"
        sorttime: "2025-03-27 5:00 PM - 7:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-21",
        time: "5:00 PM - 8:00 PM",
        name: "Myron Hyman"
        sorttime: "2025-03-21 5:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-17",
        time: "12:00 PM - 8:00 PM",
        name: "St. Patrick's Day Party!"
        sorttime: "2025-03-17 12:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-15",
        time: "¿ - ?",
        name: "St. Patrick's Day Weekend Celebration"
        sorttime: "2025-03-15 ¿ - ?"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-14",
        time: "11:00 AM - 10:00 PM",
        name: "St. Patrick's: Steal the Pint"
        sorttime: "2025-03-14 11:00 AM - 10:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-08",
        time: "6:00 PM - 8:00 PM",
        name: "Cast Iron"
        sorttime: "2025-03-08 6:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-03-01",
        time: "5:00 PM - 8:00 PM",
        name: "Iggy Radio"
        sorttime: "2025-03-01 5:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-02-28",
        time: "5:00 PM - 8:00 PM",
        name: "Todd Cecil & The Dirt Yard Choir"
        sorttime: "2025-02-28 5:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-02-21",
        time: "5:00 PM - 8:00 PM",
        name: "Myron Hyman"
        sorttime: "2025-02-21 5:00 PM - 8:00 PM"
        detail: "details"
    },
    {
        venue: "Boldrock",
        date: "2025-02-15",
        time: "5:00 PM - 7:00 PM",
        name: "Craig St. John"
        sorttime: "2025-02-15 5:00 PM - 7:00 PM"
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Tuesday May 27th",
        time: "06:00 PM - 08:30 PM",
        name: "Run Club"
        sorttime: "Tuesday May 27th 06:00 PM - 08:30 PM"
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Wednesday May 28th",
        time: "07:00 PM - 09:00 PM",
        name: "Team Trivia"
        sorttime: "Wednesday May 28th 07:00 PM - 09:00 PM"
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Friday May 30th",
        time: "06:00 PM - 10:00 PM",
        name: "Karaoke"
        sorttime: "Friday May 30th 06:00 PM - 10:00 PM"
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Thursday June 12th",
        time: "07:00 PM - 09:00 PM",
        name: "Trout Unlimited Monthly Meeting"
        sorttime: "Thursday June 12th 07:00 PM - 09:00 PM"
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Saturday June 14th",
        time: "11:00 AM - 10:00 PM",
        name: "National Bourbon Day"
        sorttime: "Saturday June 14th 11:00 AM - 10:00 PM"
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Tuesday July 29th",
        time: "11:00 AM - 09:00 PM",
        name: "National Chicken Wing Day"
        sorttime: "Tuesday July 29th 11:00 AM - 09:00 PM"
        detail: "details"
    },
    {
        venue: "Guidon",
        date: "Saturday September 6th",
        time: "06:30 PM - 09:30 PM",
        name: "Live music by Cellophane Flowers"
        sorttime: "Saturday September 6th 06:30 PM - 09:30 PM"
        detail: "details"
    },
    {
        venue: "St. Paul",
        date: "Error retrieving data",
        time: "Error retrieving data",
        name: "Failed to fetch events: 502 Server Error: Bad Gateway for url: https://www.saintpaulfarms.com/vineyard-events"
        sorttime: "Error retrieving data"
        detail: "Error retrieving data"
    },
    {
        venue: "Southern App",
        date: "2025-05-01",
        time: "6pm - 8pm",
        name: "Nitrograss"
        sorttime: "2025-05-01 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-02",
        time: "7pm - 9pm",
        name: "Pleasure Chest"
        sorttime: "2025-05-02 7pm - 9pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-03",
        time: "7pm - 9pm",
        name: "TrancEnd"
        sorttime: "2025-05-03 7pm - 9pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-03",
        time: "12pm - 1pm",
        name: "Saturday Yoga Class"
        sorttime: "2025-05-03 12pm - 1pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-04",
        time: "4pm - 6pm",
        name: "The Dan Keller Trio"
        sorttime: "2025-05-04 4pm - 6pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-07",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
        sorttime: "2025-05-07 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-08",
        time: "6pm - 8pm",
        name: "Beer, Music by Possum Royale, Repeat"
        sorttime: "2025-05-08 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-09",
        time: "7pm - 9pm",
        name: "Brian Ashley Jones"
        sorttime: "2025-05-09 7pm - 9pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-10",
        time: "7pm - 9pm",
        name: "Sketoe’s Ghost"
        sorttime: "2025-05-10 7pm - 9pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-10",
        time: "12pm - 1pm",
        name: "Saturday Yoga Class"
        sorttime: "2025-05-10 12pm - 1pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-11",
        time: "1pm - 4pm",
        name: "Hendo Acoustic Jam Brunch – Mother’s Day Edition"
        sorttime: "2025-05-11 1pm - 4pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-14",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
        sorttime: "2025-05-14 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-15",
        time: "6pm - 8pm",
        name: "#Throwback Thursday Trivia Night"
        sorttime: "2025-05-15 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-16",
        time: "7pm - 9pm",
        name: "Carver, Carmody & McIntire REUNION"
        sorttime: "2025-05-16 7pm - 9pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-17",
        time: "7pm - 9pm",
        name: "The Paper Crowns"
        sorttime: "2025-05-17 7pm - 9pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-17",
        time: "12pm - 1pm",
        name: "Saturday Yoga Class"
        sorttime: "2025-05-17 12pm - 1pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-18",
        time: "12pm - 5pm",
        name: "Happy May Pop-Up Market"
        sorttime: "2025-05-18 12pm - 5pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-18",
        time: "1pm - 4pm",
        name: "Jack Miller & George Reeves"
        sorttime: "2025-05-18 1pm - 4pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-21",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
        sorttime: "2025-05-21 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-22",
        time: "6pm - 8pm",
        name: "Music Bingo"
        sorttime: "2025-05-22 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-23",
        time: "7pm - 9pm",
        name: "Hammock Theory"
        sorttime: "2025-05-23 7pm - 9pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-24",
        time: "7pm - 9pm",
        name: "The Mattocks-Johnson Band"
        sorttime: "2025-05-24 7pm - 9pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-25",
        time: "4pm - 6pm",
        name: "Sunday Funday w/Peggy Ratusz, Adam Rose & Bob Songster"
        sorttime: "2025-05-25 4pm - 6pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-28",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
        sorttime: "2025-05-28 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-29",
        time: "6pm - 8pm",
        name: "Denis Coleman"
        sorttime: "2025-05-29 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-30",
        time: "7pm - 9pm",
        name: "BBC"
        sorttime: "2025-05-30 7pm - 9pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-31",
        time: "7pm - 9pm",
        name: "Lewendahl"
        sorttime: "2025-05-31 7pm - 9pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-05-31",
        time: "12pm - 1pm",
        name: "Saturday Yoga Class"
        sorttime: "2025-05-31 12pm - 1pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-06-01",
        time: "4pm - 6pm",
        name: "The Dan Keller Trio"
        sorttime: "2025-06-01 4pm - 6pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-06-04",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
        sorttime: "2025-06-04 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-06-07",
        time: "12pm - 1pm",
        name: "Saturday Yoga Class"
        sorttime: "2025-06-07 12pm - 1pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-06-11",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
        sorttime: "2025-06-11 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-06-17",
        time: "5pm - 7pm",
        name: "Hatch Pitch Party"
        sorttime: "2025-06-17 5pm - 7pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-06-18",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
        sorttime: "2025-06-18 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Southern App",
        date: "2025-06-25",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
        sorttime: "2025-06-25 6pm - 8pm"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-05-26",
        time: "2:00 PM - 5:00 PM",
        name: "Congdon Griffin Band"
        sorttime: "2025-05-26 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-05-31",
        time: "2:00 PM - 5:00 PM",
        name: "Ashley Heath & Her Heathens"
        sorttime: "2025-05-31 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-04",
        time: "6:00 PM - 9:30 PM",
        name: "Fantastic Negrito w/ The Saviors of New York"
        sorttime: "2025-06-04 6:00 PM - 9:30 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-07",
        time: "2:00 PM - 5:00 PM",
        name: "Pleasure Chest"
        sorttime: "2025-06-07 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-08",
        time: "2:00 PM - 5:00 PM",
        name: "My Magnificent Nemesis w/ Alien Music Club"
        sorttime: "2025-06-08 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-13",
        time: "7:30 PM - 10:00 PM",
        name: "Hustle Souls"
        sorttime: "2025-06-13 7:30 PM - 10:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-14",
        time: "2:00 PM - 5:00 PM",
        name: "Daniel Shearin"
        sorttime: "2025-06-14 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-15",
        time: "2:00 PM - 5:00 PM",
        name: "Julio & the Saltines"
        sorttime: "2025-06-15 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-21",
        time: "2:00 PM - 5:00 PM",
        name: "The Heavy Lifters"
        sorttime: "2025-06-21 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-22",
        time: "2:00 PM - 5:00 PM",
        name: "The Deep Shallow Band"
        sorttime: "2025-06-22 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-26",
        time: "6:00 PM - 9:00 PM",
        name: "Who’s Bad: The Ultimate Michael Jackson Experience"
        sorttime: "2025-06-26 6:00 PM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-28",
        time: "2:00 PM - 5:00 PM",
        name: "The Headtones"
        sorttime: "2025-06-28 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-29",
        time: "2:00 PM - 5:00 PM",
        name: "Moonshine State"
        sorttime: "2025-06-29 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-05",
        time: "2:00 PM - 5:00 PM",
        name: "Lyric"
        sorttime: "2025-07-05 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-10",
        time: "6:00 PM - 10:00 PM",
        name: "Lettuce"
        sorttime: "2025-07-10 6:00 PM - 10:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-11",
        time: "7:30 PM - 10:00 PM",
        name: "Fireside Collective"
        sorttime: "2025-07-11 7:30 PM - 10:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-12",
        time: "2:00 PM - 5:00 PM",
        name: "Jesse Velvet"
        sorttime: "2025-07-12 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-13",
        time: "2:00 PM - 5:00 PM",
        name: "CarolinAloha"
        sorttime: "2025-07-13 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-18",
        time: "7:00 PM - 9:30 PM",
        name: "Lazrluvr"
        sorttime: "2025-07-18 7:00 PM - 9:30 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-19",
        time: "2:00 PM - 5:00 PM",
        name: "Andrew Scotchie"
        sorttime: "2025-07-19 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-20",
        time: "2:00 PM - 5:00 PM",
        name: "Boogitherapi"
        sorttime: "2025-07-20 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-25",
        time: "6:00 PM - 9:30 PM",
        name: "Ozomatli w/ Debajito"
        sorttime: "2025-07-25 6:00 PM - 9:30 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-26",
        time: "2:00 PM - 5:00 PM",
        name: "Peggy Ratusz and the Daddy Long Legs"
        sorttime: "2025-07-26 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-27",
        time: "2:00 PM - 5:00 PM",
        name: "The Outriders"
        sorttime: "2025-07-27 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-31",
        time: "5:30 PM - 8:30 PM",
        name: "Amplify Appalachia"
        sorttime: "2025-07-31 5:30 PM - 8:30 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-01",
        time: "7:30 PM - 10:00 PM",
        name: "Dangermuffin"
        sorttime: "2025-08-01 7:30 PM - 10:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-02",
        time: "2:00 PM - 5:00 PM",
        name: "Watkins"
        sorttime: "2025-08-02 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-03",
        time: "2:00 PM - 5:00 PM",
        name: "Roots and Dore"
        sorttime: "2025-08-03 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-08",
        time: "6:00 PM - 9:30 PM",
        name: "STRFKR w/ Mamalarky"
        sorttime: "2025-08-08 6:00 PM - 9:30 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-09",
        time: "2:00 PM - 5:00 PM",
        name: "Ska City"
        sorttime: "2025-08-09 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-10",
        time: "2:00 PM - 5:00 PM",
        name: "Purple"
        sorttime: "2025-08-10 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-14",
        time: "6:00 PM - 9:30 PM",
        name: "Femi Kuti & The Positive Force"
        sorttime: "2025-08-14 6:00 PM - 9:30 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-16",
        time: "2:00 PM - 5:00 PM",
        name: "Ben Bjorlie Band"
        sorttime: "2025-08-16 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-17",
        time: "2:00 PM - 5:00 PM",
        name: "TrancEnd Band"
        sorttime: "2025-08-17 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-22",
        time: "6:00 PM - 9:00 PM",
        name: "Fitz and The Tantrums"
        sorttime: "2025-08-22 6:00 PM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-24",
        time: "2:00 PM - 5:00 PM",
        name: "Julianna Jade and the Wild"
        sorttime: "2025-08-24 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-27",
        time: "6:00 PM - 9:30 PM",
        name: "Jesse Daniel w/ Jake Kohn"
        sorttime: "2025-08-27 6:00 PM - 9:30 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-06",
        time: "2:00 PM - 5:00 PM",
        name: "Andrew Wakefield & Friends"
        sorttime: "2025-09-06 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-07",
        time: "2:00 PM - 5:00 PM",
        name: "Sugar Bomb"
        sorttime: "2025-09-07 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-13",
        time: "2:00 PM - 5:00 PM",
        name: "DISPLACE"
        sorttime: "2025-09-13 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-14",
        time: "2:00 PM - 5:00 PM",
        name: "Tasty Vibrations"
        sorttime: "2025-09-14 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-21",
        time: "6:00 PM - 9:00 PM",
        name: "Trombone Shorty & Orleans Avenue"
        sorttime: "2025-09-21 6:00 PM - 9:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-28",
        time: "2:00 PM - 5:00 PM",
        name: "Mana Meter"
        sorttime: "2025-09-28 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-04",
        time: "2:00 PM - 5:00 PM",
        name: "The Late Shifters"
        sorttime: "2025-10-04 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-05",
        time: "2:00 PM - 5:00 PM",
        name: "Billingsly"
        sorttime: "2025-10-05 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-11",
        time: "2:00 PM - 5:00 PM",
        name: "Tanasi"
        sorttime: "2025-10-11 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-18",
        time: "2:00 PM - 5:00 PM",
        name: "Fresh Buzz"
        sorttime: "2025-10-18 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-19",
        time: "2:00 PM - 5:00 PM",
        name: "Saddletramp"
        sorttime: "2025-10-19 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-25",
        time: "2:00 PM - 5:00 PM",
        name: "Nikki and the Barn Boys"
        sorttime: "2025-10-25 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-26",
        time: "2:00 PM - 5:00 PM",
        name: "The Big Hungry"
        sorttime: "2025-10-26 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-29",
        time: "6:00 PM - 9:30 PM",
        name: "Here Come the Mummies"
        sorttime: "2025-10-29 6:00 PM - 9:30 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-11-01",
        time: "2:00 PM - 5:00 PM",
        name: ""
        sorttime: "2025-11-01 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-11-09",
        time: "2:00 PM - 5:00 PM",
        name: "The Patrick Lopez Experience"
        sorttime: "2025-11-09 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-11-16",
        time: "2:00 PM - 5:00 PM",
        name: "Dustin Furlow"
        sorttime: "2025-11-16 2:00 PM - 5:00 PM"
        detail: "details"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-06-19",
        time: "5:30 pm - 10 pm",
        name: "Big Daddy Love (Appalachian Rock) with Letters to Abigail (Americana)"
        sorttime: "2025-06-19 5:30 pm - 10 pm"
        detail: "details"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-07-17",
        time: "5:30 pm - 10 pm",
        name: "Florencia & the Feeling (Pop/Funk/Fusion) with Lewendahl  (Blues/Rock/Motown)"
        sorttime: "2025-07-17 5:30 pm - 10 pm"
        detail: "details"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-08-21",
        time: "5:30 pm - 10 pm",
        name: "Maggie Baugh (Country) with Blake Ellege & Saddletramp (Country/Southern Rock)"
        sorttime: "2025-08-21 5:30 pm - 10 pm"
        detail: "details"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-09-18",
        time: "5:30 pm - 10 pm",
        name: "Caitlin Krisko & The Broadcast (Soul Rock) with Hustle Souls (Soul/Funk/Americana)"
        sorttime: "2025-09-18 5:30 pm - 10 pm"
        detail: "details"
    },
    {
        venue: "Rhythm & Brews",
        date: "2025-10-16",
        time: "5:30 pm - 10 pm",
        name: "BonaFide Soul (Jazz/Funk/Soul) with Congdon Griffin Band (Folk/Americana/Rock)"
        sorttime: "2025-10-16 5:30 pm - 10 pm"
        detail: "details"
    },
    {
        venue: "Music on Main",
        date: "2025-06-20",
        time: "7:00 pm - 9:00 pm",
        name: "5 O’Clock Somewhere"
        sorttime: "2025-06-20 7:00 pm - 9:00 pm"
        detail: "details"
    },
    {
        venue: "Music on Main",
        date: "2025-07-04",
        time: "7:00 pm - 9:00 pm",
        name: "Night Move Band"
        sorttime: "2025-07-04 7:00 pm - 9:00 pm"
        detail: "details"
    },
    {
        venue: "Music on Main",
        date: "2025-07-18",
        time: "7:00 pm - 9:00 pm",
        name: "The Big Throwback"
        sorttime: "2025-07-18 7:00 pm - 9:00 pm"
        detail: "details"
    },
    {
        venue: "Music on Main",
        date: "2025-08-01",
        time: "7:00 pm - 9:00 pm",
        name: "Gotcha Groove"
        sorttime: "2025-08-01 7:00 pm - 9:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-04-29",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-04-29 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-04-29",
        time: "1:00 pm - 4:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-04-29 1:00 pm - 4:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-03",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-05-03 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-03",
        time: "10:00 am - 1:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-05-03 10:00 am - 1:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-03",
        time: "12:00 pm - 6:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-05-03 12:00 pm - 6:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-04",
        time: "1:00 pm - 3:30 pm",
        name: "Landscape Design Fundamentals (full)"
        sorttime: "2025-05-04 1:00 pm - 3:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-06",
        time: "8:00 am - 10:00 am",
        name: "Meditative Morning"
        sorttime: "2025-05-06 8:00 am - 10:00 am"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-06",
        time: "9:00 am - 10:30 am",
        name: "Meditative Morning"
        sorttime: "2025-05-06 9:00 am - 10:30 am"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-06",
        time: "1:00 pm - 3:00 pm",
        name: "Meditative Morning"
        sorttime: "2025-05-06 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-09",
        time: "1:00 pm - 3:00 pm",
        name: "Insect Pollinators of the Blue Ridge"
        sorttime: "2025-05-09 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-10",
        time: "10:00 am - 12:00 pm",
        name: "National Public Gardens Day"
        sorttime: "2025-05-10 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-10",
        time: "10:00 am - 1:00 pm",
        name: "National Public Gardens Day"
        sorttime: "2025-05-10 10:00 am - 1:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-10",
        time: "1:00 pm - 3:00 pm",
        name: "National Public Gardens Day"
        sorttime: "2025-05-10 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-11",
        time: "10:00 am - 4:00 pm",
        name: "World Bonsai Day"
        sorttime: "2025-05-11 10:00 am - 4:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-11",
        time: "1:00 pm - 3:30 pm",
        name: "World Bonsai Day"
        sorttime: "2025-05-11 1:00 pm - 3:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-11",
        time: "1:00 pm - 4:00 pm",
        name: "World Bonsai Day"
        sorttime: "2025-05-11 1:00 pm - 4:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-13",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-05-13 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-13",
        time: "5:30 pm - 7:30 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-05-13 5:30 pm - 7:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-14",
        time: "1:00 pm - 3:00 pm",
        name: "Slides, Flows, and Floods: Hurricane Helene’s Geologic Impact (full)"
        sorttime: "2025-05-14 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-15",
        time: "9:30 am - 12:30 pm",
        name: "Spring Tree ID"
        sorttime: "2025-05-15 9:30 am - 12:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-16",
        time: "9:00 am - 10:00 am",
        name: "Walking Meditation & Qigong"
        sorttime: "2025-05-16 9:00 am - 10:00 am"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-16",
        time: "1:00 pm - 3:30 pm",
        name: "Walking Meditation & Qigong"
        sorttime: "2025-05-16 1:00 pm - 3:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-17",
        time: "9:30 am - 4:30 pm",
        name: "Beginning Bonsai Workshop (full)"
        sorttime: "2025-05-17 9:30 am - 4:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-17",
        time: "10:00 am - 12:00 pm",
        name: "Beginning Bonsai Workshop (full)"
        sorttime: "2025-05-17 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-17",
        time: "10:00 am - 3:00 pm",
        name: "Beginning Bonsai Workshop (full)"
        sorttime: "2025-05-17 10:00 am - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-18",
        time: "1:30 pm - 3:00 pm",
        name: "Spring Ecology Walk"
        sorttime: "2025-05-18 1:30 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-20",
        time: "12:00 pm - 4:00 pm",
        name: "Mammals of the Southern Appalachians"
        sorttime: "2025-05-20 12:00 pm - 4:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-20",
        time: "1:00 pm - 3:00 pm",
        name: "Mammals of the Southern Appalachians"
        sorttime: "2025-05-20 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-21",
        time: "8:30 am - 11:00 am",
        name: "Spring Birding Hike at the Arboretum"
        sorttime: "2025-05-21 8:30 am - 11:00 am"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-23",
        time: "12:00 pm - 4:00 pm",
        name: "Southern Appalachian Entomology"
        sorttime: "2025-05-23 12:00 pm - 4:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-24",
        time: "9:00 am - 5:00 pm",
        name: "Tiny Worlds of the Appalachian Mountains: The Watercolor Paintings of Rosalie Haizlett"
        sorttime: "2025-05-24 9:00 am - 5:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-24",
        time: "10:00 am - 12:00 pm",
        name: "Tiny Worlds of the Appalachian Mountains: The Watercolor Paintings of Rosalie Haizlett"
        sorttime: "2025-05-24 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-24",
        time: "10:00 am - 12:00 pm",
        name: "Tiny Worlds of the Appalachian Mountains: The Watercolor Paintings of Rosalie Haizlett"
        sorttime: "2025-05-24 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-25",
        time: "9:00 am - 5:00 pm",
        name: "Asheville Blue Ridge Rose Society Rose Exhibition"
        sorttime: "2025-05-25 9:00 am - 5:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-27",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-05-27 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-27",
        time: "1:30 pm - 3:30 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-05-27 1:30 pm - 3:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-29",
        time: "1:00 pm - 3:00 pm",
        name: "Wildwoods Walk"
        sorttime: "2025-05-29 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-29",
        time: "4:00 pm - 7:00 pm",
        name: "Wildwoods Walk"
        sorttime: "2025-05-29 4:00 pm - 7:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-30",
        time: "10:00 am - 3:00 pm",
        name: "Spring Plant Sale and Market"
        sorttime: "2025-05-30 10:00 am - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-31",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-05-31 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-31",
        time: "10:00 am - 3:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-05-31 10:00 am - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-05-31",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-05-31 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-03",
        time: "8:00 am - 10:00 am",
        name: "Meditative Morning"
        sorttime: "2025-06-03 8:00 am - 10:00 am"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-03",
        time: "9:00 am - 10:30 am",
        name: "Meditative Morning"
        sorttime: "2025-06-03 9:00 am - 10:30 am"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-03",
        time: "1:00 pm - 3:00 pm",
        name: "Meditative Morning"
        sorttime: "2025-06-03 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-04",
        time: "10:00 am - 12:00 pm",
        name: "Streambank Stabilization Solutions"
        sorttime: "2025-06-04 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-07",
        time: "10:00 am - 12:00 pm",
        name: "Blue Ridge Bonsai Society Show"
        sorttime: "2025-06-07 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-07",
        time: "1:00 pm - 3:00 pm",
        name: "Blue Ridge Bonsai Society Show"
        sorttime: "2025-06-07 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-10",
        time: "9:30 am - 12:30 pm",
        name: "Pine Primer"
        sorttime: "2025-06-10 9:30 am - 12:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-10",
        time: "1:00 pm - 3:00 pm",
        name: "Pine Primer"
        sorttime: "2025-06-10 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-10",
        time: "2:00 pm - 4:00 pm",
        name: "Pine Primer"
        sorttime: "2025-06-10 2:00 pm - 4:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-11",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings"
        sorttime: "2025-06-11 5:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-12",
        time: "10:00 am - 2:00 pm",
        name: "Teacher Workshop: Connecting NC Standards and Environmental Education"
        sorttime: "2025-06-12 10:00 am - 2:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-12",
        time: "5:30 pm - 8:30 pm",
        name: "Teacher Workshop: Connecting NC Standards and Environmental Education"
        sorttime: "2025-06-12 5:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-13",
        time: "9:30 am - 12:30 pm",
        name: "Painting and Meditation from the Heart"
        sorttime: "2025-06-13 9:30 am - 12:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-13",
        time: "1:00 pm - 3:30 pm",
        name: "Painting and Meditation from the Heart"
        sorttime: "2025-06-13 1:00 pm - 3:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-14",
        time: "9:30 am - 4:30 pm",
        name: "Beginning Bonsai Workshop"
        sorttime: "2025-06-14 9:30 am - 4:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-14",
        time: "10:00 am - 12:00 pm",
        name: "Beginning Bonsai Workshop"
        sorttime: "2025-06-14 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-14",
        time: "10:00 am - 1:00 pm",
        name: "Beginning Bonsai Workshop"
        sorttime: "2025-06-14 10:00 am - 1:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-17",
        time: "10:00 am - 1:00 pm",
        name: "Summer Tree ID"
        sorttime: "2025-06-17 10:00 am - 1:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-17",
        time: "1:00 pm - 3:00 pm",
        name: "Summer Tree ID"
        sorttime: "2025-06-17 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-18",
        time: "1:00 pm - 3:00 pm",
        name: "Invasion Ecology"
        sorttime: "2025-06-18 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-18",
        time: "5:30 pm - 8:30 pm",
        name: "Invasion Ecology"
        sorttime: "2025-06-18 5:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-19",
        time: "1:00 pm - 4:00 pm",
        name: "Spare-time Gardening"
        sorttime: "2025-06-19 1:00 pm - 4:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-19",
        time: "5:30 pm - 8:30 pm",
        name: "Spare-time Gardening"
        sorttime: "2025-06-19 5:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-20",
        time: "9:00 am - 10:00 am",
        name: "Walking Meditation & Qigong"
        sorttime: "2025-06-20 9:00 am - 10:00 am"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-20",
        time: "1:00 pm - 3:30 pm",
        name: "Walking Meditation & Qigong"
        sorttime: "2025-06-20 1:00 pm - 3:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-21",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-06-21 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-21",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-06-21 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-21",
        time: "1:00 pm - 4:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-06-21 1:00 pm - 4:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-22",
        time: "11:00 am - 3:00 pm",
        name: "Bonsai Book Sculpture Workshop"
        sorttime: "2025-06-22 11:00 am - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-24",
        time: "12:00 pm - 4:00 pm",
        name: "Arboretum Excursions: Grandfather Mountain Stewardship Foundation"
        sorttime: "2025-06-24 12:00 pm - 4:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-24",
        time: "1:00 pm - 3:00 pm",
        name: "Arboretum Excursions: Grandfather Mountain Stewardship Foundation"
        sorttime: "2025-06-24 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-25",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings"
        sorttime: "2025-06-25 5:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-26",
        time: "12:00 pm - 4:00 pm",
        name: "Advanced Botany I"
        sorttime: "2025-06-26 12:00 pm - 4:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-26",
        time: "5:30 pm - 8:30 pm",
        name: "Advanced Botany I"
        sorttime: "2025-06-26 5:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-27",
        time: "12:00 pm - 4:00 pm",
        name: "Geology of the Blue Ridge Field Class"
        sorttime: "2025-06-27 12:00 pm - 4:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-28",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-06-28 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-28",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-06-28 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-06-28",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-06-28 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "8:00 am - 10:00 am",
        name: "Meditative Morning"
        sorttime: "2025-07-01 8:00 am - 10:00 am"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "1:00 pm - 3:00 pm",
        name: "Meditative Morning"
        sorttime: "2025-07-01 1:00 pm - 3:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-07-02",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings"
        sorttime: "2025-07-02 5:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-07-03",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings"
        sorttime: "2025-07-03 5:30 pm - 8:30 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-07-05",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-07-05 10:00 am - 12:00 pm"
        detail: "details"
    },
    {
        venue: "Arboretum",
        date: "2025-07-05",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk"
        sorttime: "2025-07-05 1:00 pm - 3:00 pm"
        detail: "details"
    },
];
