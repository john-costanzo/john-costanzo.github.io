const events = [
    {
        venue: "Oklawaha",
        date: "2025-05-23",
        time: "8:00 pm - 11:00 pm",
        name: "Blake Ellege"
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
        venue: "Boldrock",
        date: "2025-05-23",
        time: "6:00 PM - 8:00 PM",
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
        time: "6:00 PM - 8:00 PM",
        name: "Todd Cecil & The Dirt Yard Choir"
    },
    {
        venue: "Boldrock",
        date: "2025-05-31",
        time: "6:00 PM - 8:00 PM",
        name: "Tracy Davis & The TMI Band"
    },
    {
        venue: "Boldrock",
        date: "2025-06-06",
        time: "6:00 PM - 8:00 PM",
        name: "Todd Cecil & The Dirt Yard Choir"
    },
    {
        venue: "Boldrock",
        date: "2025-06-07",
        time: "6:00 PM - 8:00 PM",
        name: "Tracy Davis & The TMI Band"
    },
    {
        venue: "Boldrock",
        date: "2025-06-13",
        time: "6:00 PM - 8:00 PM",
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
        time: "6:00 PM - 8:00 PM",
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
        time: "6:00 PM - 8:00 PM",
        name: "Fine Line Band"
    },
    {
        venue: "Boldrock",
        date: "2025-06-28",
        time: "6:00 PM - 8:00 PM",
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
        date: "Friday May 23rd",
        time: "06:00 PM - 10:00 PM",
        name: "Karaoke"
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
        date: "2025-05-1",
        time: "6pm - 8pm",
        name: "Nitrograss"
    },
    {
        venue: "Southern App",
        date: "2025-05-2",
        time: "7pm - 9pm",
        name: "Pleasure Chest"
    },
    {
        venue: "Southern App",
        date: "2025-05-3",
        time: "7pm - 9pm",
        name: "TrancEnd"
    },
    {
        venue: "Southern App",
        date: "2025-05-3",
        time: "12pm - 1pm",
        name: "Saturday Yoga Class"
    },
    {
        venue: "Southern App",
        date: "2025-05-4",
        time: "4pm - 6pm",
        name: "The Dan Keller Trio"
    },
    {
        venue: "Southern App",
        date: "2025-05-7",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
    },
    {
        venue: "Southern App",
        date: "2025-05-8",
        time: "6pm - 8pm",
        name: "Beer, Music by Possum Royale, Repeat"
    },
    {
        venue: "Southern App",
        date: "2025-05-9",
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
        date: "2025-06-1",
        time: "4pm - 6pm",
        name: "The Dan Keller Trio"
    },
    {
        venue: "Southern App",
        date: "2025-06-4",
        time: "6pm - 8pm",
        name: "Jason DeCristofaro’s Weekly Jazz Night"
    },
    {
        venue: "Southern App",
        date: "2025-06-7",
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
];
