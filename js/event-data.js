const events = [
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
        date: "2025-05-31",
        time: "6:00 pm - 9:00 pm",
        name: "Tracy Davis & The TMI Band",
        sorttime: "2025-05-31 18:00",
        detail: "Join us in the taproom as we host live music from Tracy Davis & The TMI Band! Stop by for a beer & a good time starting at 6PM!"
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
        name: "Tracy Davis & The TMI Band",
        sorttime: "2025-06-07 18:00",
        detail: "Join us in the taproom as we host live music from Tracy Davis & The TMI Band! Stop by for a beer & a good time starting at 6PM!"
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
        time: "6:00 pm - 9:00 pm",
        name: "Finkelstein 3",
        sorttime: "2025-06-20 18:00",
        detail: "Join us in the taproom as we host live music from Finkelstein 3! Stop by for a beer & a good time starting at 6PM!"
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
        sorttime: "2025-03-15 Can't convert ¿ - ?",
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
        venue: "Boldrock",
        date: "2025-02-21",
        time: "5:00 pm - 8:00 pm",
        name: "Myron Hyman",
        sorttime: "2025-02-21 17:00",
        detail: "Stop by the taproom for live music from amazing local musicians while enjoying your favorite Bold Rock cider and a bite to eat."
    },
    {
        venue: "Boldrock",
        date: "2025-02-15",
        time: "5:00 pm - 7:00 pm",
        name: "Craig St. John",
        sorttime: "2025-02-15 17:00",
        detail: "Stop by the taproom for live music from amazing local musicians while enjoying your favorite Bold Rock cider and a bite to eat."
    },
    {
        venue: "Arboretum",
        date: "2025-06-03",
        time: "8:00 am - 10:00 am",
        name: "Meditative Morning",
        sorttime: "2025-06-03 08:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-03",
        time: "9:00 am - 10:30 am",
        name: "Birding for Beginners",
        sorttime: "2025-06-03 09:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-03",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-03 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-04",
        time: "10:00 am - 12:00 pm",
        name: "Streambank Stabilization Solutions",
        sorttime: "2025-06-04 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-07",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-07 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-07",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-07 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-10",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-10 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-10",
        time: "2:00 pm - 4:00 pm",
        name: "Macroinvertebrates of Bent Creek",
        sorttime: "2025-06-10 14:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-11",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-11 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-12",
        time: "10:00 am - 2:00 pm",
        name: "Teacher Workshop: Connecting NC Standards and Environmental Education",
        sorttime: "2025-06-12 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-12",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-12 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-13",
        time: "9:30 am - 12:30 pm",
        name: "Painting and Meditation from the Heart",
        sorttime: "2025-06-13 09:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-13",
        time: "1:00 pm - 3:30 pm",
        name: "Landscape Design Fundamentals (2 sessions)",
        sorttime: "2025-06-13 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-14",
        time: "9:30 am - 4:30 pm",
        name: "Beginning Bonsai Workshop",
        sorttime: "2025-06-14 09:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-14",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-14 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-14",
        time: "10:00 am - 1:00 pm",
        name: "Forest Bathing Retreat: Flower Power!",
        sorttime: "2025-06-14 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-17",
        time: "10:00 am - 1:00 pm",
        name: "Summer Tree ID",
        sorttime: "2025-06-17 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-17",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-17 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-18",
        time: "1:00 pm - 3:00 pm",
        name: "Invasion Ecology",
        sorttime: "2025-06-18 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-18",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-18 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-19",
        time: "1:00 pm - 4:00 pm",
        name: "Spare-time Gardening",
        sorttime: "2025-06-19 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-19",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-19 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-20",
        time: "9:00 am - 10:00 am",
        name: "Walking Meditation & Qigong",
        sorttime: "2025-06-20 09:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-20",
        time: "1:00 pm - 3:30 pm",
        name: "Landscape Design Fundamentals (2 sessions)",
        sorttime: "2025-06-20 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-21",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-21 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-21",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-21 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-21",
        time: "1:00 pm - 4:00 pm",
        name: "Pressed Flower Art",
        sorttime: "2025-06-21 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-22",
        time: "11:00 am - 3:00 pm",
        name: "Bonsai Book Sculpture Workshop",
        sorttime: "2025-06-22 11:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-24",
        time: "12:00 pm - 4:00 pm",
        name: "Arboretum Excursions: Grandfather Mountain Stewardship Foundation",
        sorttime: "2025-06-24 12:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-24",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-24 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-25",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-25 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-26",
        time: "12:00 pm - 4:00 pm",
        name: "Advanced Botany I",
        sorttime: "2025-06-26 12:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-26",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-06-26 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-27",
        time: "12:00 pm - 4:00 pm",
        name: "Geology of the Blue Ridge Field Class",
        sorttime: "2025-06-27 12:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-28",
        time: "10:00 am - 12:00 pm",
        name: "Wildwoods Walk",
        sorttime: "2025-06-28 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-28",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-28 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-06-28",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-06-28 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "8:00 am - 10:00 am",
        name: "Meditative Morning",
        sorttime: "2025-07-01 08:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "9:00 am - 10:30 am",
        name: "Birding for Beginners",
        sorttime: "2025-07-01 09:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-01 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-02",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-02 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-03",
        time: "1:00 pm - 4:00 pm",
        name: "Summer Tree ID",
        sorttime: "2025-07-03 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-03",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-03 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-05",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-05 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-05",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-05 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "8:00 am - 10:00 am",
        name: "Meditative Morning",
        sorttime: "2025-07-01 08:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "9:00 am - 10:30 am",
        name: "Birding for Beginners",
        sorttime: "2025-07-01 09:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-01",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-01 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-02",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-02 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-03",
        time: "1:00 pm - 4:00 pm",
        name: "Summer Tree ID",
        sorttime: "2025-07-03 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-03",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-03 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-05",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-05 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-05",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-05 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-08",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-08 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-09",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-09 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-10",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-10 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-12",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-12 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-12",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-12 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-15",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-15 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-16",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-16 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-17",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-17 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-19",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-19 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-19",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-19 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-22",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-22 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-23",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-23 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-24",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-24 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-26",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-26 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-26",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-26 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-29",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-07-29 13:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-30",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-30 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-07-31",
        time: "5:30 pm - 8:30 pm",
        name: "Arbor Evenings",
        sorttime: "2025-07-31 17:30",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-08-02",
        time: "10:00 am - 12:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-08-02 10:00",
        detail: "None"
    },
    {
        venue: "Arboretum",
        date: "2025-08-02",
        time: "1:00 pm - 3:00 pm",
        name: "Guided Trail Walk",
        sorttime: "2025-08-02 13:00",
        detail: "None"
    },
];
