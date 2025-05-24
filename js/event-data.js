const events = [
    {
        venue: "Trailside",
        date: "2025-05-24",
        time: "start time not specified - end time not specified",
        name: "Food Truck: Milk & Honey"
    },
    {
        venue: "Trailside",
        date: "2025-05-24",
        time: "start time not specified - end time not specified",
        name: "Panorama Mediterranean Grill"
    },
    {
        venue: "Trailside",
        date: "2025-05-23",
        time: "2:00 pm - 10:00 pm",
        name: "Trailside Brewing's 2nd Anniversary Bash"
    },
    {
        venue: "Trailside",
        date: "2025-05-25",
        time: "start time not specified - end time not specified",
        name: "Food Truck: Milk & Honey"
    },
    {
        venue: "Trailside",
        date: "2025-05-26",
        time: "start time not specified - end time not specified",
        name: "Food Truck: Sabora"
    },
    {
        venue: "Trailside",
        date: "2025-05-26",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session"
    },
    {
        venue: "Trailside",
        date: "2025-05-27",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail"
    },
    {
        venue: "Trailside",
        date: "2025-05-28",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell"
    },
    {
        venue: "Trailside",
        date: "2025-05-29",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia"
    },
    {
        venue: "Trailside",
        date: "2025-06-01",
        time: "3:00 pm - 5:00 pm",
        name: "The Art of Journaling on the fly class!"
    },
    {
        venue: "Trailside",
        date: "2025-06-02",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session"
    },
    {
        venue: "Trailside",
        date: "2025-06-03",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail"
    },
    {
        venue: "Trailside",
        date: "2025-06-04",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell"
    },
    {
        venue: "Trailside",
        date: "2025-06-05",
        time: "6:30 pm - 8:30 pm",
        name: "Adventure Film Series: One Ocean Film Tour"
    },
    {
        venue: "Trailside",
        date: "2025-06-05",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia"
    },
    {
        venue: "Trailside",
        date: "2025-06-09",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session"
    },
    {
        venue: "Trailside",
        date: "2025-06-10",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail"
    },
    {
        venue: "Trailside",
        date: "2025-06-11",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell"
    },
    {
        venue: "Trailside",
        date: "2025-06-12",
        time: "5:30 pm - 7:00 pm",
        name: "Green Drinks with Conserving Carolina & Mtn True"
    },
    {
        venue: "Trailside",
        date: "2025-06-12",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia"
    },
    {
        venue: "Trailside",
        date: "2025-06-14",
        time: "11:00 am - 5:00 pm",
        name: "Friends of Dupont, Sara 828-713-2368"
    },
    {
        venue: "Trailside",
        date: "2025-06-16",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session"
    },
    {
        venue: "Trailside",
        date: "2025-06-16",
        time: "6:30 pm - 8:30 pm",
        name: "Paint Your Own Pottery Class"
    },
    {
        venue: "Trailside",
        date: "2025-06-17",
        time: "6:00 pm - 8:00 pm",
        name: "BINGO with Hendersonville Rotary Club"
    },
    {
        venue: "Trailside",
        date: "2025-06-17",
        time: "6:00 pm - 9:00 pm",
        name: "Round Robin Open Mic Hosted by Letters To Abigail"
    },
    {
        venue: "Trailside",
        date: "2025-06-18",
        time: "6:00 pm - 8:00 pm",
        name: "FBVMA Mountain Music jam Session with hosts Carol Rifkin & John Mitchell"
    },
    {
        venue: "Trailside",
        date: "2025-06-19",
        time: "6:30 pm - 8:30 pm",
        name: "Trailside Trivia"
    },
    {
        venue: "Trailside",
        date: "2025-06-21",
        time: "1:00 pm - 6:00 pm",
        name: "Blue Ridge Artisan Market"
    },
    {
        venue: "Trailside",
        date: "2025-06-22",
        time: "1:00 pm - 4:00 pm",
        name: "Mobile Book Bus at Trailside!"
    },
    {
        venue: "Trailside",
        date: "2025-06-23",
        time: "4:00 pm - 6:00 pm",
        name: "Traditional Irish Music Session"
    },
    {
        venue: "Oklawaha",
        date: "2025-05-24",
        time: "8:00 pm - 11:00 pm",
        name: "Abbey Elmore Band"
    },
    {
        venue: "Oklawaha",
        date: "2025-05-25",
        time: "6:00 pm - 9:00 pm",
        name: "Trancend"
    },
    {
        venue: "Oklawaha",
        date: "2025-05-29",
        time: "7:00 pm - 9:00 pm",
        name: "Julianna Jade"
    },
    {
        venue: "Oklawaha",
        date: "2025-05-30",
        time: "8:00 pm - 11:00 pm",
        name: "Heavy Lifters"
    },
    {
        venue: "Oklawaha",
        date: "2025-05-31",
        time: "8:00 pm - 11:00 pm",
        name: "Duck"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-01",
        time: "3:00 pm - 5:00 pm",
        name: "Duck"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-05",
        time: "12:00 pm - 11:00 pm",
        name: "Cummings Cove Cares Fundraiser for Hurricane Helene Recovery and Rebuild"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-05",
        time: "6:00 pm - 9:00 pm",
        name: "The Lads"
    },
    {
        venue: "Oklawaha",
        date: "2025-06-06",
        time: "8:00 pm - 11:00 pm",
        name: "Alma Russ"
    },
    {
        venue: "Boldrock",
        date: "2025-05-23",
        time: "6:00 PM - 9:00 PM",
        name: "Sound Invasion"
    },
    {
        venue: "Boldrock",
        date: "2025-05-24",
        time: "11:00 AM - 9:00 PM",
        name: "Kickoff to Summer"
    },
    {
        venue: "Boldrock",
        date: "2025-05-30",
        time: "6:00 PM - 9:00 PM",
        name: "Todd Cecil & The Dirt Yard Choir"
    },
    {
        venue: "Boldrock",
        date: "2025-05-31",
        time: "6:00 PM - 9:00 PM",
        name: "Tracy Davis & The TMI Band"
    },
    {
        venue: "Boldrock",
        date: "2025-06-06",
        time: "6:00 PM - 9:00 PM",
        name: "Todd Cecil & The Dirt Yard Choir"
    },
    {
        venue: "Boldrock",
        date: "2025-06-07",
        time: "6:00 PM - 9:00 PM",
        name: "Tracy Davis & The TMI Band"
    },
    {
        venue: "Boldrock",
        date: "2025-06-13",
        time: "6:00 PM - 9:00 PM",
        name: "The Right Fit"
    },
    {
        venue: "Boldrock",
        date: "2025-06-15",
        time: "11:00 AM - 7:00 PM",
        name: "Father's Day BBQ"
    },
    {
        venue: "Boldrock",
        date: "2025-06-20",
        time: "6:00 PM - 9:00 PM",
        name: "Finkelstein 3"
    },
    {
        venue: "Boldrock",
        date: "2025-06-21",
        time: "11:00 AM - 9:00 PM",
        name: "BOLD Birthday Bash"
    },
    {
        venue: "Boldrock",
        date: "2025-06-26",
        time: "5:00 PM - 7:00 PM",
        name: "Macarons & Flight Pairing"
    },
    {
        venue: "Boldrock",
        date: "2025-06-27",
        time: "6:00 PM - 9:00 PM",
        name: "Fine Line Band"
    },
    {
        venue: "Boldrock",
        date: "2025-06-28",
        time: "6:00 PM - 9:00 PM",
        name: "Awake In The Dream"
    },
    {
        venue: "Boldrock",
        date: "2025-05-17",
        time: "6:00 PM - 8:00 PM",
        name: "Finkelstein 3"
    },
    {
        venue: "Boldrock",
        date: "2025-05-16",
        time: "6:00 PM - 8:00 PM",
        name: "Fine Line Band"
    },
    {
        venue: "Boldrock",
        date: "2025-05-15",
        time: "5:00 PM - 7:00 PM",
        name: "Crumbl Cookies & Flight Pairing"
    },
    {
        venue: "Boldrock",
        date: "2025-05-11",
        time: "11:00 AM - 7:00 PM",
        name: "Mother's Day Plant & Sip"
    },
    {
        venue: "Boldrock",
        date: "2025-05-10",
        time: "6:00 PM - 8:00 PM",
        name: "Jay Dee"
    },
    {
        venue: "Boldrock",
        date: "2025-05-09",
        time: "6:00 PM - 8:00 PM",
        name: "The Sliding Rockers"
    },
    {
        venue: "Boldrock",
        date: "2025-05-03",
        time: "5:30 PM - 8:30 PM",
        name: "Hard Knox Wrestling at Bold Rock"
    },
    {
        venue: "Boldrock",
        date: "2025-05-02",
        time: "6:00 PM - 8:00 PM",
        name: "Myron Hyman"
    },
    {
        venue: "Boldrock",
        date: "2025-04-26",
        time: "6:00 PM - 8:00 PM",
        name: "Awake In The Dream"
    },
    {
        venue: "Boldrock",
        date: "2025-04-25",
        time: "6:00 PM - 8:00 PM",
        name: "Finkelstein 3"
    },
    {
        venue: "Boldrock",
        date: "2025-04-19",
        time: "11:00 AM - 9:00 PM",
        name: "Easter Egg Give-a-Way"
    },
    {
        venue: "Boldrock",
        date: "2025-04-18",
        time: "6:00 PM - 8:00 PM",
        name: "Kid Billy"
    },
    {
        venue: "Boldrock",
        date: "2025-04-17",
        time: "5:00 PM - 7:00 PM",
        name: "Cupcake & Flight Pairing"
    },
    {
        venue: "Boldrock",
        date: "2025-04-12",
        time: "6:00 PM - 8:00 PM",
        name: "John Cox Band"
    },
    {
        venue: "Boldrock",
        date: "2025-04-11",
        time: "6:00 PM - 8:00 PM",
        name: "The Right Fit"
    },
    {
        venue: "Boldrock",
        date: "2025-04-05",
        time: "12:00 PM - 4:00 PM",
        name: "Grounded & Grateful Event"
    },
    {
        venue: "Boldrock",
        date: "2025-04-04",
        time: "6:00 PM - 10:00 PM",
        name: "Arborfest Expo: AFTER PARTY (Private Event)"
    },
    {
        venue: "Boldrock",
        date: "2025-03-28",
        time: "5:00 PM - 8:00 PM",
        name: "Finkelstein 3"
    },
    {
        venue: "Boldrock",
        date: "2025-03-27",
        time: "5:00 PM - 7:00 PM",
        name: "Cheesecake & Flight Pairing"
    },
    {
        venue: "Boldrock",
        date: "2025-03-21",
        time: "5:00 PM - 8:00 PM",
        name: "Myron Hyman"
    },
    {
        venue: "Boldrock",
        date: "2025-03-17",
        time: "12:00 PM - 8:00 PM",
        name: "St. Patrick's Day Party!"
    },
    {
        venue: "Boldrock",
        date: "2025-03-15",
        time: "start time not specified - end time not specified",
        name: "St. Patrick's Day Weekend Celebration"
    },
    {
        venue: "Boldrock",
        date: "2025-03-14",
        time: "11:00 AM - 10:00 PM",
        name: "St. Patrick's: Steal the Pint"
    },
    {
        venue: "Boldrock",
        date: "2025-03-08",
        time: "6:00 PM - 8:00 PM",
        name: "Cast Iron"
    },
    {
        venue: "Boldrock",
        date: "2025-03-01",
        time: "5:00 PM - 8:00 PM",
        name: "Iggy Radio"
    },
    {
        venue: "Boldrock",
        date: "2025-02-28",
        time: "5:00 PM - 8:00 PM",
        name: "Todd Cecil & The Dirt Yard Choir"
    },
    {
        venue: "Boldrock",
        date: "2025-02-21",
        time: "5:00 PM - 8:00 PM",
        name: "Myron Hyman"
    },
    {
        venue: "Boldrock",
        date: "2025-02-15",
        time: "5:00 PM - 7:00 PM",
        name: "Craig St. John"
    },
    {
        venue: "Boldrock",
        date: "2025-02-14",
        time: "5:00 PM - 7:00 PM",
        name: "Patty M"
    },
    {
        venue: "Boldrock",
        date: "2025-02-13",
        time: "5:00 PM - 9:00 PM",
        name: "Chocolate & Flight Pairing"
    },
    {
        venue: "Guidon",
        date: "Tuesday May 27th",
        time: "06:00 PM - 08:30 PM",
        name: "Run Club"
    },
    {
        venue: "Guidon",
        date: "Wednesday May 28th",
        time: "07:00 PM - 09:00 PM",
        name: "Team Trivia"
    },
    {
        venue: "Guidon",
        date: "Friday May 30th",
        time: "06:00 PM - 10:00 PM",
        name: "Karaoke"
    },
    {
        venue: "Guidon",
        date: "Thursday June 12th",
        time: "07:00 PM - 09:00 PM",
        name: "Trout Unlimited Monthly Meeting"
    },
    {
        venue: "Guidon",
        date: "Saturday June 14th",
        time: "11:00 AM - 10:00 PM",
        name: "National Bourbon Day"
    },
    {
        venue: "Guidon",
        date: "Tuesday July 29th",
        time: "11:00 AM - 09:00 PM",
        name: "National Chicken Wing Day"
    },
    {
        venue: "Guidon",
        date: "Saturday September 6th",
        time: "06:30 PM - 09:30 PM",
        name: "Live music by Cellophane Flowers"
    },
    {
        venue: "Southern App",
        date: "2025-05-01",
        time: "6pm - 8pm",
        name: "Nitrograss"
    },
    {
        venue: "Southern App",
        date: "2025-05-02",
        time: "7pm - 9pm",
        name: "Pleasure Chest"
    },
    {
        venue: "Southern App",
        date: "2025-05-03",
        time: "7pm - 9pm",
        name: "TrancEnd"
    },
    {
        venue: "Southern App",
        date: "2025-05-03",
        time: "12pm - 1pm",
        name: "Saturday Yoga Class"
    },
    {
        venue: "Southern App",
        date: "2025-05-04",
        time: "4pm - 6pm",
        name: "The Dan Keller Trio"
    },
    {
        venue: "Southern App",
        date: "2025-05-07",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
    },
    {
        venue: "Southern App",
        date: "2025-05-08",
        time: "6pm - 8pm",
        name: "Beer, Music by Possum Royale, Repeat"
    },
    {
        venue: "Southern App",
        date: "2025-05-09",
        time: "7pm - 9pm",
        name: "Brian Ashley Jones"
    },
    {
        venue: "Southern App",
        date: "2025-05-10",
        time: "7pm - 9pm",
        name: "Sketoe’s Ghost"
    },
    {
        venue: "Southern App",
        date: "2025-05-10",
        time: "12pm - 1pm",
        name: "Saturday Yoga Class"
    },
    {
        venue: "Southern App",
        date: "2025-05-11",
        time: "1pm - 4pm",
        name: "Hendo Acoustic Jam Brunch – Mother’s Day Edition"
    },
    {
        venue: "Southern App",
        date: "2025-05-14",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
    },
    {
        venue: "Southern App",
        date: "2025-05-15",
        time: "6pm - 8pm",
        name: "#Throwback Thursday Trivia Night"
    },
    {
        venue: "Southern App",
        date: "2025-05-16",
        time: "7pm - 9pm",
        name: "Carver, Carmody & McIntire REUNION"
    },
    {
        venue: "Southern App",
        date: "2025-05-17",
        time: "7pm - 9pm",
        name: "The Paper Crowns"
    },
    {
        venue: "Southern App",
        date: "2025-05-17",
        time: "12pm - 1pm",
        name: "Saturday Yoga Class"
    },
    {
        venue: "Southern App",
        date: "2025-05-18",
        time: "12pm - 5pm",
        name: "Happy May Pop-Up Market"
    },
    {
        venue: "Southern App",
        date: "2025-05-18",
        time: "1pm - 4pm",
        name: "Jack Miller & George Reeves"
    },
    {
        venue: "Southern App",
        date: "2025-05-21",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
    },
    {
        venue: "Southern App",
        date: "2025-05-22",
        time: "6pm - 8pm",
        name: "Music Bingo"
    },
    {
        venue: "Southern App",
        date: "2025-05-23",
        time: "7pm - 9pm",
        name: "Hammock Theory"
    },
    {
        venue: "Southern App",
        date: "2025-05-24",
        time: "7pm - 9pm",
        name: "The Mattocks-Johnson Band"
    },
    {
        venue: "Southern App",
        date: "2025-05-25",
        time: "4pm - 6pm",
        name: "Sunday Funday w/Peggy Ratusz, Adam Rose & Bob Songster"
    },
    {
        venue: "Southern App",
        date: "2025-05-28",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
    },
    {
        venue: "Southern App",
        date: "2025-05-29",
        time: "6pm - 8pm",
        name: "Denis Coleman"
    },
    {
        venue: "Southern App",
        date: "2025-05-30",
        time: "7pm - 9pm",
        name: "BBC"
    },
    {
        venue: "Southern App",
        date: "2025-05-31",
        time: "7pm - 9pm",
        name: "Lewendahl"
    },
    {
        venue: "Southern App",
        date: "2025-05-31",
        time: "12pm - 1pm",
        name: "Saturday Yoga Class"
    },
    {
        venue: "Southern App",
        date: "2025-06-01",
        time: "4pm - 6pm",
        name: "The Dan Keller Trio"
    },
    {
        venue: "Southern App",
        date: "2025-06-04",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
    },
    {
        venue: "Southern App",
        date: "2025-06-07",
        time: "12pm - 1pm",
        name: "Saturday Yoga Class"
    },
    {
        venue: "Southern App",
        date: "2025-06-11",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
    },
    {
        venue: "Southern App",
        date: "2025-06-17",
        time: "5pm - 7pm",
        name: "Hatch Pitch Party"
    },
    {
        venue: "Southern App",
        date: "2025-06-18",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
    },
    {
        venue: "Southern App",
        date: "2025-06-25",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-05-24",
        time: "2:00 PM - 5:00 PM",
        name: "Unspoken Tradition"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-05-25",
        time: "2:00 PM - 5:00 PM",
        name: "Chillbilly"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-05-26",
        time: "2:00 PM - 5:00 PM",
        name: "Congdon Griffin Band"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-05-31",
        time: "2:00 PM - 5:00 PM",
        name: "Ashley Heath & Her Heathens"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-04",
        time: "6:00 PM - 9:30 PM",
        name: "Fantastic Negrito w/ The Saviors of New York"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-07",
        time: "2:00 PM - 5:00 PM",
        name: "Pleasure Chest"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-08",
        time: "2:00 PM - 5:00 PM",
        name: "My Magnificent Nemesis w/ Alien Music Club"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-13",
        time: "7:30 PM - 10:00 PM",
        name: "Hustle Souls"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-14",
        time: "2:00 PM - 5:00 PM",
        name: "Daniel Shearin"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-15",
        time: "2:00 PM - 5:00 PM",
        name: "Julio & the Saltines"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-21",
        time: "2:00 PM - 5:00 PM",
        name: "The Heavy Lifters"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-22",
        time: "2:00 PM - 5:00 PM",
        name: "The Deep Shallow Band"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-26",
        time: "6:00 PM - 9:00 PM",
        name: "Who’s Bad: The Ultimate Michael Jackson Experience"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-28",
        time: "2:00 PM - 5:00 PM",
        name: "The Headtones"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-06-29",
        time: "2:00 PM - 5:00 PM",
        name: "Moonshine State"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-05",
        time: "2:00 PM - 5:00 PM",
        name: "Lyric"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-10",
        time: "6:00 PM - 10:00 PM",
        name: "Lettuce"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-11",
        time: "7:30 PM - 10:00 PM",
        name: "Fireside Collective"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-12",
        time: "2:00 PM - 5:00 PM",
        name: "Jesse Velvet"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-13",
        time: "2:00 PM - 5:00 PM",
        name: "CarolinAloha"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-18",
        time: "7:00 PM - 9:30 PM",
        name: "Lazrluvr"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-19",
        time: "2:00 PM - 5:00 PM",
        name: "Andrew Scotchie"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-20",
        time: "2:00 PM - 5:00 PM",
        name: "Boogitherapi"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-25",
        time: "6:00 PM - 9:30 PM",
        name: "Ozomatli w/ Debajito"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-26",
        time: "2:00 PM - 5:00 PM",
        name: "Peggy Ratusz and the Daddy Long Legs"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-27",
        time: "2:00 PM - 5:00 PM",
        name: "The Outriders"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-07-31",
        time: "5:30 PM - 8:30 PM",
        name: "Amplify Appalachia"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-01",
        time: "7:30 PM - 10:00 PM",
        name: "Dangermuffin"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-02",
        time: "2:00 PM - 5:00 PM",
        name: "Watkins"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-03",
        time: "2:00 PM - 5:00 PM",
        name: "Roots and Dore"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-08",
        time: "6:00 PM - 9:30 PM",
        name: "STRFKR w/ Mamalarky"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-09",
        time: "2:00 PM - 5:00 PM",
        name: "Ska City"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-10",
        time: "2:00 PM - 5:00 PM",
        name: "Purple"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-14",
        time: "6:00 PM - 9:30 PM",
        name: "Femi Kuti & The Positive Force"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-16",
        time: "2:00 PM - 5:00 PM",
        name: "Ben Bjorlie Band"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-17",
        time: "2:00 PM - 5:00 PM",
        name: "TrancEnd Band"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-22",
        time: "6:00 PM - 9:00 PM",
        name: "Fitz and The Tantrums"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-24",
        time: "2:00 PM - 5:00 PM",
        name: "Julianna Jade and the Wild"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-08-27",
        time: "6:00 PM - 9:30 PM",
        name: "Jesse Daniel w/ Jake Kohn"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-06",
        time: "2:00 PM - 5:00 PM",
        name: "Andrew Wakefield & Friends"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-07",
        time: "2:00 PM - 5:00 PM",
        name: "Sugar Bomb"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-13",
        time: "2:00 PM - 5:00 PM",
        name: "DISPLACE"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-14",
        time: "2:00 PM - 5:00 PM",
        name: "Tasty Vibrations"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-21",
        time: "6:00 PM - 9:00 PM",
        name: "Trombone Shorty & Orleans Avenue"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-09-28",
        time: "2:00 PM - 5:00 PM",
        name: "Mana Meter"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-04",
        time: "2:00 PM - 5:00 PM",
        name: "The Late Shifters"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-05",
        time: "2:00 PM - 5:00 PM",
        name: "Billingsly"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-11",
        time: "2:00 PM - 5:00 PM",
        name: "Tanasi"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-18",
        time: "2:00 PM - 5:00 PM",
        name: "Fresh Buzz"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-19",
        time: "2:00 PM - 5:00 PM",
        name: "Saddletramp"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-25",
        time: "2:00 PM - 5:00 PM",
        name: "Nikki and the Barn Boys"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-26",
        time: "2:00 PM - 5:00 PM",
        name: "The Big Hungry"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-10-29",
        time: "6:00 PM - 9:30 PM",
        name: "Here Come the Mummies"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-11-01",
        time: "2:00 PM - 5:00 PM",
        name: ""
    },
    {
        venue: "Sierra Nevada",
        date: "2025-11-09",
        time: "2:00 PM - 5:00 PM",
        name: "The Patrick Lopez Experience"
    },
    {
        venue: "Sierra Nevada",
        date: "2025-11-16",
        time: "2:00 PM - 5:00 PM",
        name: "Dustin Furlow"
    },
];
