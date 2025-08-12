const addEventToCalendarVersion = "Sunday, 2025-08-10 @ 14:33:41";
console.log( `addEventToCalendarVersion = ${addEventToCalendarVersion}` );

/**
 * Converts a UTC datetime string to a Microsoft-compatible format.
 * @param {string} datetime - The UTC datetime string (e.g., "20250623T220000Z").
 * @returns {string} The formatted datetime string for Microsoft calendars.
 */
function utcToMicrosoft( datetime ) {
    // 20250623T220000Z -> 2025-06-23T22%3A00%3A00Z
    return ( datetime.slice( 0, 4 ) +
        "-" +
        datetime.slice( 4, 6 ) +
        "-" +
        datetime.slice( 6, 11 ) +
        "%3A" +
        datetime.slice( 11, 13 ) +
        "%3A" +
        datetime.slice( 13, 16 )
    );
}

/**
 * Creates a container with links to add an event to various calendars.
 * @param {string} url - The URL of the event.
 * @param {string} title - The title of the event.
 * @param {string} description - The description of the event.
 * @param {string} location - The location of the event.
 * @param {string} startTime - The start time of the event in UTC format.
 * @param {string} endTime - The end time of the event in UTC format.
 * @returns {HTMLElement} A div element containing the calendar links.
 */
function createCalendarDispatcher( url, title, description, location, startTime, endTime ) {
    // console.log( `startTime=${startTime}` );
    // console.log( `endTime=${endTime}` );
    if ( description === "None" ) {
        description = "";
    }
    const titleEncoded = encodeURIComponent( title );
    const locationEncoded = encodeURIComponent( location );
    const descriptionEncoded = encodeURIComponent( url + "\n\n" + description );
    const calendarLinksElement = document.createElement( "div" );

    calendarLinksElement.className = "calendar-links";

    const googleCalendarLinkElement = document.createElement( "a" );
    googleCalendarLinkElement.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titleEncoded}&details=${descriptionEncoded}&location=${locationEncoded}&dates=${startTime}%2F${endTime}`;
    googleCalendarLinkElement.target = "_blank";
    googleCalendarLinkElement.className = "calendar-link google";
    googleCalendarLinkElement.textContent = "Google calendar";
    calendarLinksElement.appendChild( googleCalendarLinkElement );

    const outlookCalendarLinkElement = document.createElement( "a" );
    outlookCalendarLinkElement.href = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${titleEncoded}&body=${descriptionEncoded}&location=${locationEncoded}&startdt=${utcToMicrosoft(startTime)}&enddt=${utcToMicrosoft(endTime)}`;
    outlookCalendarLinkElement.target = "_blank";
    outlookCalendarLinkElement.className = "calendar-link outlook";
    outlookCalendarLinkElement.textContent = "Outlook calendar";
    calendarLinksElement.appendChild( outlookCalendarLinkElement );

    const downloadCalendarInfoElement = document.createElement( "a" );
    downloadCalendarInfoElement.href = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0APRODID:-//Calendar//EN%0ABEGIN:VEVENT%0ADTSTART:${startTime}%0ADTEND:${endTime}%0ASUMMARY:${titleEncoded}%0ADESCRIPTION:${descriptionEncoded}%0ALOCATION:${locationEncoded}%0AUID:1@calendar.local%0AEND:VEVENT%0AEND:VCALENDAR`;
    downloadCalendarInfoElement.download = "hendo-happening.ics";
    downloadCalendarInfoElement.className = "calendar-link download";
    downloadCalendarInfoElement.textContent = "Download ICS file";
    calendarLinksElement.appendChild( downloadCalendarInfoElement );

    return ( calendarLinksElement );
}

/**
 * Tracks a click on a calendar link and navigates to the URL.
 * @param {string} type - The type of calendar (e.g., "google", "outlook").
 * @param {string} url - The URL to navigate to.
 * @param {string} eventDetailsJson - A JSON string containing the event details.
 */
function trackCalendarClick(type, url, eventDetailsJson) {
    const eventDetails = JSON.parse(eventDetailsJson);
    gtag('event', 'add_to_calendar', {
        'calendar_type': type,
        'event_name': eventDetails.title,
        'event_location': eventDetails.location,
        'event_start_time': eventDetails.startTime,
        'event_end_time': eventDetails.endTime,
    } );
    if ( type === 'download_ics' ) {
        downloadICS( url, eventDetails );
    } else {
        window.open( url, '_blank' );
    }
}


/**
 * Creates calendar event URLs and shows options to the user.
 * @param {string} title - The title of the event.
 * @param {string} description - The description of the event.
 * @param {string} location - The location of the event.
 * @param {string} startTime - The start time of the event.
 * @param {string} endTime - The end time of the event.
 */
function addToCalendar( title, description, location, startTime, endTime ) {
    try {
        // Convert datetime strings to Date objects
        console.log( `addToCalendar: startTime='${startTime}'; endTime='${endTime}'` );

        const fixedStartTimeString = startTime.replace( /-/g, '/' );
        const startDate = new Date( fixedStartTimeString );

        const fixedEndTimeString = endTime.replace( /-/g, '/' );
        const endDate = new Date( fixedEndTimeString );

        // Format dates for different calendar systems
        const formatDateForCalendar = ( date ) => {
            return date.toISOString( ).replace( /[-:]/g, '' ).split( '.' )[ 0 ] + 'Z';
        };

        // Create calendar event URLs for different providers
        if ( description === "None" ) {
            description = "";
        }
        const calendarUrls = {
            google: createGoogleCalendarUrl( title, description, location, startDate, endDate ),
            outlook: createOutlookCalendarUrl( title, description, location, startDate, endDate ),
            yahoo: createYahooCalendarUrl( title, description, location, startDate, endDate ),
            ics: createICSFile( title, description, location, startDate, endDate )
        };

        const eventDetails = {
            title,
            description,
            location,
            startTime,
            endTime
        };

        // Show calendar options to user
        showCalendarOptions( calendarUrls, eventDetails );

    } catch ( error ) {
        console.error( 'Error creating calendar event:', error, " startTime='", startTime, "' endTime='", endTime, "'" );
        showStatus( `Error creating calendar event. Check date format: startTime='{startTime}'; endTime='{endTime}'`, 'error' );
    }
}

/**
 * Creates a Google Calendar URL for adding an event.
 * @param {string} title - The title of the event.
 * @param {string} description - The description of the event.
 * @param {string} location - The location of the event.
 * @param {Date} startDate - The start date of the event.
 * @param {Date} endDate - The end date of the event.
 * @returns {string} The Google Calendar URL.
 */
function createGoogleCalendarUrl( title, description, location, startDate, endDate ) {
    const formatGoogleDate = ( date ) => {
        return date.toISOString( ).replace( /[-:]/g, '' ).split( '.' )[ 0 ] + 'Z';
    };

    const params = new URLSearchParams( {
        action: 'TEMPLATE',
        text: title,
        details: description,
        location: location,
        dates: `${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}`
    } );
    // Use mobile-friendly URL for mobile devices
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent );
    if ( isMobile ) {
        return `https://calendar.google.com/calendar/u/0/r/eventedit?${params.toString()}`;
    }

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Creates an Outlook Calendar URL for adding an event.
 * @param {string} title - The title of the event.
 * @param {string} description - The description of the event.
 * @param {string} location - The location of the event.
 * @param {Date} startDate - The start date of the event.
 * @param {Date} endDate - The end date of the event.
 * @returns {string} The Outlook Calendar URL.
 */
function createOutlookCalendarUrl( title, description, location, startDate, endDate ) {
    const params = new URLSearchParams( {
        subject: title,
        body: description,
        location: location,
        startdt: startDate.toISOString( ),
        enddt: endDate.toISOString( )
    } );

    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

/**
 * Creates a Yahoo Calendar URL for adding an event.
 * @param {string} title - The title of the event.
 * @param {string} description - The description of the event.
 * @param {string} location - The location of the event.
 * @param {Date} startDate - The start date of the event.
 * @param {Date} endDate - The end date of the event.
 * @returns {string} The Yahoo Calendar URL.
 */
function createYahooCalendarUrl( title, description, location, startDate, endDate ) {
    const formatYahooDate = ( date ) => {
        return date.toISOString( ).replace( /[-:]/g, '' ).split( '.' )[ 0 ] + 'Z';
    };

    const duration = Math.floor( ( endDate - startDate ) / ( 1000 * 60 * 60 ) ); // duration in hours

    const params = new URLSearchParams( {
        v: '60',
        title: title,
        st: formatYahooDate( startDate ),
        dur: duration.toString( ).padStart( 2, '0' ) + '00', // format as HHMM
        desc: description,
        in_loc: location
    } );

    return `https://calendar.yahoo.com/?${params.toString()}`;
}

/**
 * Creates an ICS file for adding an event to a calendar.
 * @param {string} title - The title of the event.
 * @param {string} description - The description of the event.
 * @param {string} location - The location of the event.
 * @param {Date} startDate - The start date of the event.
 * @param {Date} endDate - The end date of the event.
 * @returns {string} A data URL for the ICS file.
 */
function createICSFile( title, description, location, startDate, endDate ) {
    const formatICSDate = ( date ) => {
        return date.toISOString( ).replace( /[-:]/g, '' ).split( '.' )[ 0 ] + 'Z';
    };

    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Your Company//Calendar//EN',
        'BEGIN:VEVENT',
        `DTSTART:${formatICSDate(startDate)}`,
        `DTEND:${formatICSDate(endDate)}`,
        `SUMMARY:${title}`,
        `DESCRIPTION:${description}`,
        `LOCATION:${location}`,
        `UID:${Date.now()}@yourdomain.com`,
        'END:VEVENT',
        'END:VCALENDAR'
    ].join( '\r\n' );

    const blob = new Blob( [ icsContent ], {
        type: 'text/calendar'
    } );
    return URL.createObjectURL( blob );
}

/**
 * Shows a modal with options to add an event to various calendars.
 * @param {Object} urls - An object containing the URLs for different calendar services.
 * @param {Object} eventDetails - An object containing the details of the event.
 */
function showCalendarOptions( urls, eventDetails ) {

    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent );
    const isIOS = /iPad|iPhone|iPod/.test( navigator.userAgent );
    const isAndroid = /Android/.test( navigator.userAgent );
    // Create a modal-like overlay
    const overlay = document.createElement( 'div' );
    overlay.style.cssText = `
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
    `;

    const modal = document.createElement( 'div' );
    modal.style.cssText = `
	background: white;
	padding: 30px;
	border-radius: 15px;
	box-shadow: 0 20px 40px rgba(0,0,0,0.3);
	max-width: 400px;
	width: 90%;
                max-height: 80vh;
                overflow-y: auto;
    `;
    let buttonsHTML = '';

    if ( isMobile ) {
        // Mobile-specific options
        if ( isIOS ) {
            buttonsHTML += `<button onclick="openCalendarApp('${urls.ics}', 'ios')" style="padding: 12px; border: none; background: #007AFF; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%; margin-bottom: 10px;">📅 Add to iOS Calendar</button>`;
        }
        if ( isAndroid ) {
            buttonsHTML += `<button onclick="openCalendarApp('${urls.google}', 'android')" style="padding: 12px; border: none; background: #34A853; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%; margin-bottom: 10px;">📅 Add to Android Calendar</button>`;
        }

        // Mobile web calendar options
        buttonsHTML += `
                    <button onclick="openMobileCalendar('${urls.google}', 'google')" style="padding: 12px; border: none; background: #4285f4; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%; margin-bottom: 10px;">📅 Google Calendar (Mobile)</button>
                    <button onclick="downloadICS('${urls.ics}')" style="padding: 12px; border: none; background: #28a745; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%; margin-bottom: 10px;">💾 Download Calendar File</button>
                `;
    } else {
        // Desktop options
        const eventDetailsJson = JSON.stringify( eventDetails );
        buttonsHTML += `
                    <button onclick="trackCalendarClick('add-to-google-calendar', '${urls.google}', '${eventDetailsJson}')" style="padding: 12px; border: none; background: #4285f4; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%; margin-bottom: 10px;">📅 Google Calendar</button>
                    <button onclick="trackCalendarClick('add-to-outlook-calendar', '${urls.outlook}', '${eventDetailsJson}')" style="padding: 12px; border: none; background: #0078d4; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%; margin-bottom: 10px;">📅 Outlook Calendar</button>
                    <button onclick="trackCalendarClick('add-to-yahoo-calendar', '${urls.yahoo}', '${eventDetailsJson}')" style="padding: 12px; border: none; background: #7b1fa2; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%; margin-bottom: 10px;">📅 Yahoo Calendar</button>
                    <button onclick="trackCalendarClick('download_ics', '${urls.ics}', '${eventDetailsJson}')" style="padding: 12px; border: none; background: #28a745; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%; margin-bottom: 10px;">💾 Download .ics file</button>
                `;
    }

    modal.innerHTML = `
                <h3 style="margin-top: 0; color: #333; text-align: center;">Choose Calendar</h3>
                <div style="display: flex; flex-direction: column;">
                    ${buttonsHTML}
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" style="padding: 12px; border: 1px solid #ccc; background: white; color: #666; border-radius: 8px; cursor: pointer; font-size: 16px; margin-top: 10px; width: 100%;">Cancel</button>
                </div>
    `;

    overlay.appendChild( modal );
    document.body.appendChild( overlay );

    // Close modal when clicking outside
    overlay.addEventListener( 'click', ( e ) => {
        if ( e.target === overlay ) {
            overlay.remove( );
        }
    } );
}

/**
 * Downloads an ICS file.
 * @param {string} url - The data URL of the ICS file.
 * @param {Object} eventDetails - An object containing the details of the event.
 */
function downloadICS( url, eventDetails ) {
    const a = document.createElement( 'a' );
    a.href = url;
    a.download = 'event.ics';
    // For mobile devices, try different approaches
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent );

    if ( isMobile ) {
        // Try to trigger download with user interaction
        a.style.display = 'none';
        document.body.appendChild( a );

        // Force click with timeout to ensure it works on mobile
        setTimeout( ( ) => {
            a.click( );
            setTimeout( ( ) => {
                document.body.removeChild( a );
                URL.revokeObjectURL( url );
            }, 100 );
        }, 100 );
    } else {
        document.body.appendChild( a );
        a.click( );
        document.body.removeChild( a );
        URL.revokeObjectURL( url );
    }

    // Close the modal
    const modal = document.querySelector( '[style*="position: fixed"]' );
    if ( modal ) modal.remove( );

    showStatus( 'Calendar file ready for download!', 'success' );
}

/**
 * Opens the native calendar app on a mobile device.
 * @param {string} url - The URL for the calendar event.
 * @param {string} platform - The mobile platform (e.g., "ios", "android").
 */
function openCalendarApp( url, platform ) {
    if ( platform === 'ios' ) {
        // For iOS, try to open native calendar app with .ics file
        downloadICS( url );
    } else if ( platform === 'android' ) {
        // For Android, try intent-based approach first, fallback to URL
        const intentUrl = `intent://calendar.google.com/calendar/render${url.split('render')[1]}#Intent;scheme=https;package=com.google.android.calendar;end`;

        try {
            window.location.href = intentUrl;
        } catch ( e ) {
            // Fallback to regular URL
            window.open( url, '_blank' );
        }
    }

    // Close modal
    const modal = document.querySelector( '[style*="position: fixed"]' );
    if ( modal ) modal.remove( );
}

/**
 * Shows a status message to the user.
 * @param {string} message - The message to show.
 * @param {string} type - The type of message (e.g., "success", "error").
 */
function showStatus( message, type ) {
    // Find the next available status div
    const statusDivs = document.querySelectorAll( '.status' );
    const statusDiv = Array.from( statusDivs ).find( div => div.style.display === 'none' || !div.style.display );

    if ( statusDiv ) {
        statusDiv.textContent = message;
        statusDiv.className = `status ${type}`;
        statusDiv.style.display = 'block';

        setTimeout( ( ) => {
            statusDiv.style.display = 'none';
        }, 5000 );
    }
}

// Local Variables:
// time-stamp-line-limit: 10
// time-stamp-format: "%A, %Y-%02m-%02d @ %02H:%02M:%02S"
// time-stamp-active: t
// time-stamp-start: "const addEventToCalendarVersion = \""
// time-stamp-end: "\";"
// End:
