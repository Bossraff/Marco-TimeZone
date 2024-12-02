function updateTime() {
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        hour12: true // Ensure 12-hour format with AM/PM
    };

    const dateOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    // Philippines (Manila)
    const phDate = new Intl.DateTimeFormat('en-PH', { ...dateOptions, timeZone: 'Asia/Manila' }).format(new Date());
    const phTime = new Intl.DateTimeFormat('en-PH', { ...timeOptions, timeZone: 'Asia/Manila' }).format(new Date());
    document.getElementById('ph-date').innerText = phDate;
    document.getElementById('ph-time').innerText = phTime;

    // US (New York)
    const usDate = new Intl.DateTimeFormat('en-US', { ...dateOptions, timeZone: 'America/New_York' }).format(new Date());
    const usTime = new Intl.DateTimeFormat('en-US', { ...timeOptions, timeZone: 'America/New_York' }).format(new Date());
    document.getElementById('us-date').innerText = usDate;
    document.getElementById('us-time').innerText = usTime;

    // Ontario (Canada)
    const ontarioDate = new Intl.DateTimeFormat('en-CA', { ...dateOptions, timeZone: 'America/Toronto' }).format(new Date());
    const ontarioTime = new Intl.DateTimeFormat('en-CA', { ...timeOptions, timeZone: 'America/Toronto' }).format(new Date());
    document.getElementById('ontario-date').innerText = ontarioDate;
    document.getElementById('ontario-time').innerText = ontarioTime;

    // Tokyo (Japan)
    const tokyoDate = new Intl.DateTimeFormat('en-JP', { ...dateOptions, timeZone: 'Asia/Tokyo' }).format(new Date());
    const tokyoTime = new Intl.DateTimeFormat('en-JP', { ...timeOptions, timeZone: 'Asia/Tokyo' }).format(new Date());
    document.getElementById('tokyo-date').innerText = tokyoDate;
    document.getElementById('tokyo-time').innerText = tokyoTime;

    // Los Angeles (USA)
    const laDate = new Intl.DateTimeFormat('en-US', { ...dateOptions, timeZone: 'America/Los_Angeles' }).format(new Date());
    const laTime = new Intl.DateTimeFormat('en-US', { ...timeOptions, timeZone: 'America/Los_Angeles' }).format(new Date());
    document.getElementById('la-date').innerText = laDate;
    document.getElementById('la-time').innerText = laTime;
}

setInterval(updateTime, 1000); // Update every second
updateTime(); // Initial call
