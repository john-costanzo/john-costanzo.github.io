const addEventToCalendarVersion = "Saturday, 2025-06-07 @ 16:00:04";

function addToCalendar( title, description, location, startTime, endTime ) {
    try {
        // Convert datetime strings to Date objects
        const startDate = new Date( startTime );
        const endDate = new Date( endTime );

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

        // Show calendar options to user
        showCalendarOptions( calendarUrls );

    } catch ( error ) {
        console.error( 'Error creating calendar event:', error, " startTime='", startTime, "' endTime='", endTime, "'" );
        showStatus( 'Error creating calendar event. Please check the date format: ' + " startTime='" + startTime + "' endTime='" + endTime + "'", 'error' );
    }
}

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

function showCalendarOptions( urls ) {
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
        buttonsHTML += `
                    <button onclick="window.open('${urls.google}', '_blank')" style="padding: 12px; border: none; background: #4285f4; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%; margin-bottom: 10px;">📅 Google Calendar</button>
                    <button onclick="window.open('${urls.outlook}', '_blank')" style="padding: 12px; border: none; background: #0078d4; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%; margin-bottom: 10px;">📅 Outlook Calendar</button>
                    <button onclick="window.open('${urls.yahoo}', '_blank')" style="padding: 12px; border: none; background: #7b1fa2; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%; margin-bottom: 10px;">📅 Yahoo Calendar</button>
                    <button onclick="downloadICS('${urls.ics}')" style="padding: 12px; border: none; background: #28a745; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%; margin-bottom: 10px;">💾 Download .ics file</button>
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

function downloadICS( url ) {
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
