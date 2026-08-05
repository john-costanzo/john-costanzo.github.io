// ==UserScript==
// @name         Rich Text HTML Expander
// @namespace    http://tampermonkey.net/
// @version      2026-08-05_07-24
// @description  Intercepts typing and inserts an expansion text via native HTML paste handling
// @match        *://*/*
// @grant        none
// ==/UserScript==

( function( ) {
    'use strict';

    const EXPANSIONS = {
        "--": "—",
        "->": "→",
        "25bmc": "25 Bay Magnolia Ct.",
        ";-": "<hr><br>",
        ";1d": "${DATE \"DDDD, MMMM D\" +1D}",
        ";2d": "${DATE \"DDDD, MMMM D\" +2D}",
        ";3d": "${DATE \"DDDD, MMMM D\" +3D}",
        ";4d": "${DATE \"DDDD, MMMM D\" +4D}",
        ";5d": "${DATE \"DDDD, MMMM D\" +5D}",
        ";6d": "${DATE \"DDDD, MMMM D\" +6D}",
        ";7d": "${DATE \"DDDD, MMMM D\" +7D}",
        ";addr": "25 Bay Magnolia Court Hendersonville, NC 28791",
        ";ag": "CPHA Board of Directors Meeting - Wednesday, ${DATE \"MMMM D\" \"the third Wednesday of the month\"} @ 1 pm<p>Please join us at the clubhouse for our monthly meeting. <p> <p>The agenda is attached and is, as always, subject to change.<div><font size=\"4\" color=\"#0000ff\" face=\"georgia, serif\">—</font></div> <div><font size=\"4\" color=\"#0000ff\" face=\"georgia, serif\">John Costanzo</font></div> <div><font size=\"4\" color=\"#0000ff\" face=\"georgia, serif\">CPHA Board of Directors</font></div>",
        ";amm": "Request to post approved CPHA Board meeting minutes for ${DATE \"MMMM YYYY\" -1M}<p><p>Attached are approved CPHA Board meeting minutes for its ${DATE \"MMMM YYYY\" -1M} meeting.<p><p>Please post them to the CPHA website.<p><p>​Thanks.<p>",
        ";angry": "<img src=\"https://em-content.zobj.net/source/skype/289/angry-face_1f620.png\" width=\"42\" height=\"42\" alt=\"Angry Face on Skype Emoticons 1.2\"/>",
        ";ap": "Does the following passage meet the AP style guide?<p><p><p>",
        ";bam": "<span style=\"font-size: x-large;\">💥</span>",
        ";beatingheart": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/beating-heart_1f493.gif\" width=\"42\" height=\"42\" alt=\"Beating Heart on Noto Color Emoji, Animated 14.0\"/>",
        ";bem": "​<style type=\"text/css\">div, li, p {font-size:large;}</style>Draft executive session minutes for ${DATE \"DDDD, MMMM D, YYYY\"}<p><p>Attached, please find draft executive session minutes for ${DATE \"DDDD, MMMM D, YYYY\"}. I welcome your comments.<p>I plan to post them to the Board-only\'s File Cabinet, under “Executive Sessions” by <b>${DATE \"DDDD, MMMM D, YYYY\"  +3D}</b>.<p>",
        ";bh": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/beating-heart_1f493.gif\" width=\"42\" height=\"42\" alt=\"Beating Heart on Noto Color Emoji, Animated 14.0\"/>",
        ";bod": "Board of Directors",
        ";bpa": "<style type=\"text/css\">div, li, p {font-size:large;}</style>CPHA Budget Planning spreadsheet for next year<p>Here is a link to the XXX CPHA Budget Planning spreadsheet for next year.<p><p>As a reminder, you will be expected to work with your Budget and Finance committee liaison following the July 17th board meeting and complete your budget  by August 31.<p><p>Feel to contact me with any questions about using the spreadsheet.<p><p>Thanks for your efforts!<p><p><font color=\\\"#0000ff\\\">-jc</font>",
        ";bwm": "<style type=\"text/css\">div, li, p {font-size:large;}</style>​Draft workshop minutes for ${DATE \"DDDD, MMMM D, YYYY\"}<p><p>Attached, please find draft workshop minutes for ${DATE \"DDDD, MMMM D, YYYY\"}. I welcome your comments.<p>I plan to post  them to the Board-only\'s File Cabinet, under “Workshops” by <b>${DATE \"DDDD, MMMM D, YYYY\"  +3D}</b>.<p>",
        ";caution": "<span style=\"font-size: x-large;\">⚠️</span>",
        ";checkmark": "<span style=\"font-size: x-large;\">✅</span>",
        ";confused": "<img src=\"https://em-content.zobj.net/source/skype/289/confused-face_1f615.png\" width=\"42\" height=\"42\" alt=\"Confused Face on Skype Emoticons 1.2\"/>",
        ";cow": "<img src=\"https://em-content.zobj.net/source/microsoft-teams/337/cow-face_1f42e.png\" width=\"66\" height=\"66\" alt=\"Cow Face on Microsoft Teams 1.0\"/>",
        ";cmt": "committee",
        ";cp": "Carriage Park",
        ";crazy": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/winking-face-with-tongue_1f61c.gif\" width=\"42\" height=\"42\" alt=\"Winking Face with Tongue on Noto Color Emoji, Animated 14.0\"/>",
        ";cry": "<img src=\"https://em-content.zobj.net/source/skype/289/crying-face_1f622.png\" width=\"42\" height=\"42 alt=\"Crying Face on Skype Emoticons 1.2\"/>",
        ";cwpuz": "Crossword Puzzle feedback<p>Sue,<p><p>Attached, please find a draft crossword puzzle for the next edition of the <i>Carriage Post</i>. I look forward (as always) to your comments.<p><p>Thanks.<p>",
        ";cwsol": "<style type=\"text/css\">div, li, p {font-size:large;}</style>“TITLE” crossword puzzle solution<p>Attached, please find a solution to “TITLE”: the crossword puzzle that appeared in the SEASON edition of the Carriage Post.<p><p><p>— jc",
        ";cwsub": "<style type=\"text/css\">div, li, p {font-size:large;}</style>Crossword puzzle submission for the ${DATE \"MMMM YYYY\" +3W} Carriage Post<p>Sue,<p><p>Please find a puzzle for the ${DATE \"MMMM YYYY\" +3W} <i>Carriage Post</i>, attached.<p><p><p>Thanks.<p>",
        ";date": "${DATE \"YYYY-MM-D\"}: ",
        ";dmm": "Request to post draft ${DATE \"MMMM YYYY\"}) CPHA Board meeting minutes<p><p>Attached are draft CPHA Board minutes for its ${DATE \"MMMM YYYY\") meeting.<p><p>Please post them to the CPHA website.<p><p>​Thanks.<p>",
        ";dmm": "Request to post draft ${DATE \"MMMM YYYY\"}) CPHA Board meeting minutes<p><p>Attached are draft CPHA Board minutes for its ${DATE \"MMMM YYYY\") meeting.<p><p>Please post them to the CPHA website.<p><p>​Thanks.<p>",
        ";dtime": "${DATE \"DDDD, MMMM D YYYY, h:mm:ss a\"}",
        ";emb": "<img src=\"https://www.kindpng.com/picc/m/47-476214_embarrassed-emoji-png-download-embarrassment-embarrassed-emoji-gif.png\" width=\"42\" height=\"42\" alt=\"Embarrassed Face\"/>",
        ";es": "executive session",
        ";explode": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/exploding-head_1f92f.gif\" width=\"42\" height=\"42\" alt=\"Exploding Head on Noto Color Emoji, Animated 14.0\"/>",
        ";eyeroll": "<img src=\"https://gifdb.com/images/high/eye-roll-emoji-singing-cartoon-animation-ixx9s6eqp7vh86cz.gif\" width=\"42\" height=\"42\"  alt=\"Eye Roll Emoji GIFs | GIFDB.com\"/>",
        ";eyes": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/eyes_1f440.gif\" width=\"42\" height=\"42\" alt=\"Eyes on Noto Color Emoji, Animated 14.0\"/>",
        ";fe ": "for example,",
        ";fear": "<img src=\"https://em-content.zobj.net/source/skype/289/face-screaming-in-fear_1f631.png\" width=\"42\" height=\"42\" alt=\"Face Screaming in Fear on Skype Emoticons 1.2\"/>",
        ";fi ": "for instance,",
        ";filmplay": "The film itself was terrific.<p><p>The film player itself could be improved by removing the distracting controls at the bottom of the screen… or at the very least by preventing the controls from disappearing and then reappearing. ",
        ";flame": "<span style=\"font-size: x-large;\">🔥</span>",
        ";happy": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/grinning-face-with-big-eyes_1f603.gif\" width=\"42\" height=\"42 alt=\"Grinning Face with Big Eyes on Noto Color Emoji, Animated 14.0\"/>",
        ";hearteyes": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/smiling-face-with-heart-eyes_1f60d.gif\" width=\"42\" height=\"42\" alt=\"Smiling Face with Heart-Eyes on Noto Color Emoji, Animated 14.0\"/>",
        ";hmm": "<img src=\"https://em-content.zobj.net/source/microsoft-teams/337/thinking-face_1f914.png\" width=\"42\" height=\"42\" alt=\"Thinking Face on Microsoft Teams 1.0\"/>",
        ";hoa": "Carriage Park Homeowners\' Association",
        ";hr": "<hr><br>",
        ";hug": "<img src=\"https://1000logos.net/wp-content/uploads/2023/10/Hug-Emoji.png\" width=\"128\" height=\"96\" alt=\"Angry Face on Skype Emoticons 1.2\"/><p>",
        ";huh": "<img src=\"https://em-content.zobj.net/source/skype/289/confused-face_1f615.png\" width=\"42\" height=\"42\" alt=\"Confused Face on Skype Emoticons 1.2\"/>",
        ";ic": "Improved clues",
        ";idea": "<span style=\"font-size: x-large;\">💡</span>",
        ";if": "Improved fill",
        ";il": "I\'ll",
        ";im": "I\'m",
        ";jc": "​<p><font color=\\\"#0000ff\\\">— jc</font>",
        ";jnc": "​<font color=\\\"#0000ff\\\">— John Costanzo</font>",
        ";john": "<font color=\\\"#ff0000\\\">➢</font>&nbsp;<font color=\\\"#0000ff\\\">John Costanzo </font><i><font color=\\\"#999999\\\">${DATE \"DDDD, D MMMM YYYY\"}</font><font color=\\\"#0000ff\\\">:</font></i><font color=\\\"#0000ff\\\">&nbsp;</font> ",
        ";kiss": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/face-blowing-a-kiss_1f618.gif\" width=\"42\" height=\"42\" alt=\"Face Blowing a Kiss on Noto Color Emoji, Animated 14.0\"/>",
        ";laugh": "<img src=\"https://em-content.zobj.net/source/skype/289/rolling-on-the-floor-laughing_1f923.png\" width=\"42\" height=\"42 alt=\"Rolling on the Floor Laughing on Skype Emoticons 1.2\"/>",
        ";lips": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/kiss-mark_1f48b.gif\" width=\"42\" height=\"42\" alt=\"Kiss Mark on Noto Color Emoji, Animated 14.0\"/>",
        ";lorem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ";mad": "<img src=\"https://em-content.zobj.net/source/skype/289/angry-face_1f620.png\" width=\"42\" height=\"42\" alt=\"Angry Face on Skype Emoticons 1.2\"/>",
        ";memo": "📝",
        ";moo": "<img src=\"https://em-content.zobj.net/source/microsoft-teams/337/cow-face_1f42e.png\" width=\"66\" height=\"66\" alt=\"Cow Face on Microsoft Teams 1.0\"/>",
        ";mycell": "8285134093",
        ";nafy": "<i style=\"color: grey; font-size: medium;\">(No action for you.)</i><p>",
        ";notes": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/musical-notes_1f3b6.gif\" width=\"42\" height=\"42 alt=\"Musical Notes on Noto Color Emoji, Animated 14.0\"/>",
        ";ontarget": "<span style=\"font-size: x-large;\">🎯</span>",
        ";pbt": "Pickleball for ${DATE \"DDDD, MMMM D, YYYY\"}",
        ";pc1": "<style type=\"text/css\">div, li, p {font-size:large;}</style>Henderson County Democrats could use your help!<p>Thank you for volunteering to help write and send postcards. This is an important activity to help build momentum for future Democratic victories.<p><p>Over the next couple of weeks, we\'d like you to write about 25 postcards welcoming newly registered voters and encouraging them to be active with the Henderson County Democrats. I would provide the postcards, addresses, and a script. You would write and mail postcards no later than the end of <span style=\"font-weight: bold;\">${DATE \"MMMM\" +2W}</span>. It would be great if you could supply your own stamps. Otherwise, we may have some available at Democratic headquarters… or you can purchase them yourself and request reimbursement.<p><p><center><span style=\"font-size: x-large; font-weight: bold;\">👉&nbsp;Can we count on you to send out some postcards now?&nbsp;👈</span></center><p>Please let me know your decision by end of day ${DATE \"DDDD, MMMM D, YYYY\" +3D}.<p><p>Oh, and if you would like to be removed from this email list, please let me know and I\'d be happy to make that happen.<p><p>Either way, thank you for your support.<p><p><span style=\"color:blue;\">John Costanzo<br>Henderson County Democrats Postcard Drive Coordinator</span>",
        ";pc2": "<style type=\"text/css\">div, li, p {font-size:large;}</style><style type=\"text/css\">div, li, p {font-size:large;}</style><span style=\"color:rgb(0,0,0);font-family:Georgia,serif\">I\'m checking whether this is something you\'d be interested in doing.<p>If not, I\'d be happy to remove your name from the list.<p><p>Thanks.<p><p><font color=\\\"#0000ff\\\">— jc</font><p></span>",
        ";pca": "<style type=\"text/css\">div, li, p {font-size:large;}</style>​Henderson County Democrats: postcard instructions<br class=\"gmail_default\" style=\"font-size:large;color:rgb(0,0,0)\"><div>Thanks again for volunteering to help motivate our fellow citizens to become more politically active. Here\'s what you\'ll need:</div> <ol> <li style=\"margin-left:15px\">A packet containing your postcards is waiting for you at the office of the Henderson County Democrats at their (new) office location at <a href=\"https://www.google.com/maps/place/2024+Asheville+Hwy+suite+f,+Hendersonville,+NC+28791/@35.3380422,-82.4735369,17z/data=!3m1!4b1!4m6!3m5!1s0x8859e9f8c3f773eb:0x1b647bb6746bbb4c!8m2!3d35.3380422!4d-82.4735369!16s%2Fg%2F11rnfb0tmf!5m1!1e1?entry=ttu&amp;g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D\" target=\"_blank\" data-saferedirecturl=\"https://www.google.com/url?q=https://www.google.com/maps/place/2024%2BAsheville%2BHwy%2Bsuite%2Bf,%2BHendersonville,%2BNC%2B28791/@35.3380422,-82.4735369,17z/data%3D!3m1!4b1!4m6!3m5!1s0x8859e9f8c3f773eb:0x1b647bb6746bbb4c!8m2!3d35.3380422!4d-82.4735369!16s%252Fg%252F11rnfb0tmf!5m1!1e1?entry%3Dttu%26g_ep%3DEgoyMDI1MTAyMC4wIKXMDSoASAFQAw%253D%253D&amp;source=gmail&amp;ust=1769258547192000&amp;usg=AOvVaw1AK3NE7fV8_XbjRRIWZR_4\">2024 Asheville Highway, Suite F, Hendersonville, NC 28791</a>. <ol type=\"a\"> <li style=\"margin-left:15px\">The office is open from 11am to 2pm, Monday through Saturday. <i>Although if there is inclement weather, you may want to check their website (<a href=\"http://myhcdp.com/\" target=\"_blank\">myhcdp.com</a>) before you head out.</i></li> <li style=\"margin-left:15px\">A packet with your name on it should be waiting for you on a table behind the partition in back of the desk on your left as you enter the office.</li> <li style=\"margin-left:15px\">If you cannot pick up your packet during office hours or have any issues, please let me know, and we\'ll make other arrangements.</li> </ol> </li> <li style=\"margin-left:15px\">Attached to this note are the addresses you will use to address the cards. Note: names shaded in <span style=\"background-color:rgb(182,215,168)\">green</span> belong to a single address and therefore should receive a single postcard.</li> <li style=\"margin-left:15px\"> Please use the following message on your postcards: <div style=\"margin-bottom:10px;padding:10px;background-color:rgb(255,248,220);border-left:6px solid rgb(255,228,102)\">Thanks for registering as a Democrat. Henderson County Democrats have many fun and effective gatherings in the works for you and your family, as you can see from our website <a href=\"http://myhcdp.com/\" target=\"_blank\">myhcdp.com</a>.<br><br>We\'d love to see you at an event!  </div> </li> <li style=\"margin-left:15px\">You can sign the note with your first name and last initial <i>(optional)</i>.</li> <li style=\"margin-left:15px\">As I mentioned previously, it would be great if you could provide postcard stamps. But if not, the office may have some, or you could be reimbursed after you purchase some. Ask the person at the desk.</li> <li style=\"margin-left:15px\">Please mail all postcards no later than the <b>end of ${DATE \"MMMM\" +2W}</b>.</li> <li style=\"margin-left:15px\">Finally, please email me when you are finished.</li> </ol> <p>Thanks for all your efforts!</p> <div dir=\"ltr\" class=\"gmail_signature\" data-lt-sig=\"1\">  <span style=\"color:blue;\">John Costanzo <br>Henderson County Democrats Postcard Drive Coordinator</span>  </div> <br clear=\"all\">",
        ";pcfu": "<style type=\"text/css\">div, li, p {font-size:large;}</style><span style=\"color:rgb(0,0,0);font-family:Georgia,serif\">I\'m checking whether this is something you\'d be interested in doing.<p>If not, I\'d be happy to remove your name from the list.<p><p>Thanks.<p><p><font color=\\\"#0000ff\\\">— jc</font><p></span>",
        ";pcr": "<style type=\"text/css\">div, li, p {font-size:large;}</style>Henderson County Democrats postcard drive reminder<p>As a reminder, we were looking for your assigned postcards to be sent out by the end of <span style=\"color:red; font-weight: bold;\">${DATE \"MMMM\"}</span> and to email me when you have completed this.<p><p>If you are having difficulties sending them out, please let me know.<p><p>And thanks for all you do!",
        ";pig": "<img src=\"https://em-content.zobj.net/source/skype/289/pig_1f416.png\" width=\"66\" height=\"66\" alt=\"Pig on Skype Emoticons 1.2\"/>",
        ";pointd": "<span style=\"font-size: x-large;\">👇</span>",
        ";pointl": "<span style=\"font-size: x-large;\">👈</span>",
        ";pointr": "<span style=\"font-size: x-large;\">👉</span>",
        ";pointu": "<span style=\"font-size: x-large;\">👆</span>",
        ";pray": "<img src=\"https://www.pikpng.com/pngl/m/246-2463960_praying-hands-prayer-emoji-yellow-joint-png-image.png\" width=\"42\" height=\"42\" alt=\"Angry Face on Skype Emoticons 1.2\"/>",
        ";redflag": "<img src=\"https://www.pngrepo.com/png/289489/512/red-flag.png\" width=\"42\" height=\"42\" alt=\"Red Flag\"/>",
        ";redx": "❌",
        ";roll": "<img src=\"https://gifdb.com/images/high/eye-roll-emoji-singing-cartoon-animation-ixx9s6eqp7vh86cz.gif\" width=\"42\" height=\"42\"  alt=\"Eye Roll Emoji GIFs | GIFDB.com\"/>",
        ";rro": "<a href=\"https://oapff.org/wp-content/uploads/2024/03/Roberts-Rules-of-Order-Newly-Revised-12th-Edt.pdf\">Roberts Rules of Order</a>",
        ";sad": "<img src=\"https://em-content.zobj.net/source/skype/289/pensive-face_1f614.png\" width=\"42\" height=\"42 alt=\"Pensive Face on Skype Emoticons 1.2\"/>",
        ";scared": "<img src=\"https://em-content.zobj.net/source/skype/289/fearful-face_1f628.png\"width=\"42\" height=\"42\"  alt=\"Fearful Face on Skype Emoticons 1.2\"/>",
        ";shrug": "<img src=\"https://em-content.zobj.net/source/skype/289/man-shrugging_1f937-200d-2642-fe0f.png\" width=\"64\" height=\"64\" alt=\"Man Shrugging on Skype Emoticons 1.2\"/>",
        ";sl": "In sqlite3 describe how to ",
        ";smile": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/smiling-face-with-smiling-eyes_1f60a.gif\" width=\"42\" height=\"42\" alt=\"Smiling Face with Smiling Eyes on Noto Color Emoji, Animated 14.0\"/>",
        ";smirk": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/smirking-face_1f60f.gif\" width=\"42\" height=\"42\" alt=\"Smirking Face on Noto Color Emoji, Animated 14.0\"/>",
        ";ta3": "#align(center)[<p>#warm-table(<p>  columns: 3,<p>  [], [], [],<p>  [], [], [],<p>  [], [], [],<p>  [], [], [],<p>  [], [], [],<p>)<p>]",
        ";ta4": "#align(center)[<p>#warm-table(<p>  columns: 4,<p>  [], [], [], [],<p>  [], [], [], [],<p>  [], [], [], [],<p>  [], [], [], [],<p>  [], [], [], [],<p>)<p>]",
        ";ta5": "#align(center)[<p>#styled-table(<p>  columns: 5,<p>[], [], [], [], [],<p>[], [], [], [], [],<p>[], [], [], [], [],<p>[], [], [], [], [],<p>)<p>]",
        ";tcell": "9086420532",
        ";thanks": "<img src=\"https://i.pinimg.com/originals/db/03/b3/db03b3642db8f07c4bbc0b9ff2822ce0.png\" width=\"64\" height=\"64\" alt=\"Angry Face on Skype Emoticons 1.2\"/><p>",
        ";thinking": "<img src=\"https://em-content.zobj.net/source/microsoft-teams/337/thinking-face_1f914.png\" width=\"42\" height=\"42\" alt=\"Thinking Face on Microsoft Teams 1.0\"/>",
        ";thumbsdown": "<img src=\"https://em-content.zobj.net/source/microsoft-teams/337/thumbs-down_1f44e.png\" width=\"42\" height=\"42\" alt=\"Thumbs Down on Microsoft Teams 1.0\"/>",
        ";thumbsup": "<img src=\"https://em-content.zobj.net/source/microsoft-teams/337/thumbs-up_1f44d.png\" width=\"42\" height=\"42\" alt=\"Thumbs Up on Microsoft Teams 1.0\"/>",
        ";time": "${DATE \"h:mm:ss a\"}",
        ";tip": "<img src=\"https://www.nicepng.com/png/detail/242-2425894_tip-tip-png.png\" width=\"96\" height=\"48 alt=\"Tip\"/>",
        ";tm": "&trade;",
        ";todo": "<img src=\"https://4.bp.blogspot.com/-cQ7tZ56cvfU/ThSFJgw32pI/AAAAAAAAABU/sYFMkdGNaC8/s1600/todo-manager-icon.png\" width=\"42\" height=\"42\" alt=\"To Do\"/>",
        ";ts": "${DATE \"h:mm a\"}",
        ";visit": "cphaguardhouse@gmail.com<style type=\"text/css\">div, li, p {font-size:large;}</style><br>VISITOR to visit the Costanzos at 25 Bay Magnolia Court<br>John and Tracey Costanzo expect <b>VISITORS</b> to visit us at 25 Bay Magnolia Court on <b>DATE</b>.",
        ";whateva": "¯\\\\_(ツ)_/¯",
        ";wink": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/winking-face_1f609.gif\" width=\"42\" height=\"42\"  alt=\"Winking Face on Noto Color Emoji, Animated 14.0\"/>",
        ";woohoo": "<span style=\"font-size: x-large;\">🎉🙌🥳</span>",
        ";wow": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/exploding-head_1f92f.gif\" width=\"42\" height=\"42\" alt=\"Exploding Head on Noto Color Emoji, Animated 14.0\"/>",
        ";xx": "Smiling Face with Smiling Eyes on Noto Color Emoji, Animated 14.0",
        ";yum": "<img src=\"https://em-content.zobj.net/source/noto-emoji-animations/344/face-savoring-food_1f60b.gif\" width=\"42\" height=\"42\" alt=\"Face Savoring Food on Noto Color Emoji, Animated 14.0\"/>",
        "<-": "←",
        "<<<": "❮❮❮",
        "<=": "⇦",
        "=>": "⇨",
        ">>>": "❯❯❯",
        "@bm": "Bonny Marsh",
        "@dh": "Doreen Herina",
        "@dm": "Dan Mahoney",
        "@jc": "John Costanzo",
        "@nk": "Nancy Kaczor",
        "@ph": "Paul Harris",
        "@ub": "Ulana Bilynsky",
        "THanks": "Thanks",
        "THe": "The",
        "THis": "This",
        "\'\'": "”",
        "``": "“",
        "accomodate": "accommodate",
        "adn": "and",
        "alot": "a lot",
        "alright": "all right",
        "aobut": "about",
        "arent": "aren\'t",
        "bnf": "the Budget and Finance committee",
        "cant": "can\'t",
        "comitment": "commitment",
        "comittment": "commitment",
        "committment": "commitment",
        "coordindate": "coordinate",
        "coordindator": "coordinator",
        "couldnt": "couldn\'t",
        "degree": "°",
        "deja vu": "déjà vu",
        "didnt": "didn\'t",
        "doesnt": "doesn\'t",
        "dont": "don\'t",
        "emigre": "émigré",
        "gauge": "guage",
        "gaurd": "guard",
        "hadnt": "hadn\'t",
        "hasnt": "hasn\'t",
        "havent": "haven\'t",
        "hel ": "he\'ll",
        "hpny": "happy new year!",
        "hte": "the",
        "isnt": "isn\'t",
        "itno": "into",
        "keepign": "keeping",
        "liek": "like",
        "naive": "naïve",
        "occurence": "occurrence",
        "occuring": "occurring",
        "pehraps": "perhaps",
        "puree": "purée",
        "qqq": "in:all label:quora ",
        "saute": "sauté",
        "shes": "she\'s",
        "shouldnt": "shouldn\'t",
        "shouldve": "should\'ve",
        "signficantly": "significantly",
        "soemthing": "something",
        "srue": "sure",
        "t@": "tlcostanzo@gmail.com",
        "taht": "that",
        "teh": "the",
        "theyd": "they\'d",
        "theyll": "they\'ll",
        "theyr": "they\'re",
        "theyre": "they\'re",
        "theyve": "they\'ve",
        "thisis": "this is",
        "thru": "through",
        "tmc": "the Tree Management committee",
        "waht": "what",
        "wasnt": "wasn\'t",
        "wehn": "when",
        "wehther": "whether",
        "wel ": "we\'ll",
        "werent": "weren\'t",
        "weve": "we\'ve",
        "whats": "what\'s",
        "wheres": "where\'s",
        "wiht": "with",
        "wnat": "want",
        "wont": "won\'t",
        "woudl": "would",
        "wouldnt": "wouldn\'t",
        "youd": "you\'d",
        "youl": "you\'ll",
        "youve": "you\'ve",
    };

    let buffer = '';
    const maxKeyLength = Math.max( ...Object.keys( EXPANSIONS ).map( k => k.length ) );

    function triggerNativePaste( htmlContent, triggerLength ) {
        // 1. Clear the trigger text (;lin) from the screen
        const charsToDelete = triggerLength - 1; // Last char was blocked via preventDefault
        for ( let i = 0; i < charsToDelete; i++ ) {
            document.execCommand( 'delete', false, null );
        }

        // 2. Create a custom PasteEvent payload carrying HTML
        const pasteEvent = new ClipboardEvent( 'paste', {
            bubbles: true,
            cancelable: true,
            dataType: 'text/html',
            data: htmlContent
        } );

        // 3. Override clipboardData getter so rich text editors read the HTML payload
        Object.defineProperty( pasteEvent, 'clipboardData', {
            value: {
                getData: ( type ) => {
                    if ( type === 'text/html' ) return htmlContent;
                    if ( type === 'text/plain' ) return htmlContent.replace( /<[^>]*>/g, '' );
                    return '';
                },
                types: [ 'text/html', 'text/plain' ]
            }
        } );

        // 4. Dispatch directly to the focused input/editable element
        const activeEl = document.activeElement;
        if ( activeEl ) {
            activeEl.dispatchEvent( pasteEvent );
        }
    }

    window.addEventListener( 'keydown', ( e ) => {
        if ( e.key.length > 1 && e.key !== 'Backspace' ) return;

        if ( e.key === 'Backspace' ) {
            buffer = buffer.slice( 0, -1 );
            return;
        }

        buffer += e.key;

        if ( buffer.length > maxKeyLength ) {
            buffer = buffer.slice( -maxKeyLength );
        }

        for ( const [ trigger, html ] of Object.entries( EXPANSIONS ) ) {
            if ( buffer.endsWith( trigger ) ) {
                e.preventDefault( );
                buffer = '';
                triggerNativePaste( html, trigger.length );
                break;
            }
        }
    }, true );
} )( );

// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
