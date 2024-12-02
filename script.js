function updateTime() {
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true // 12-hour format with AM/PM
    };

    // Manila (Philippines)
    const manilaTime = new Intl.DateTimeFormat('en-PH', { ...timeOptions, timeZone: 'Asia/Manila' }).format(new Date());
    document.getElementById('manila-time').innerText = manilaTime;

    // New York (USA)
    const newYorkTime = new Intl.DateTimeFormat('en-US', { ...timeOptions, timeZone: 'America/New_York' }).format(new Date());
    document.getElementById('new-york-time').innerText = newYorkTime;

    // Los Angeles (USA)
    const losAngelesTime = new Intl.DateTimeFormat('en-US', { ...timeOptions, timeZone: 'America/Los_Angeles' }).format(new Date());
    document.getElementById('los-angeles-time').innerText = losAngelesTime;

    // Ontario (Canada)
    const ontarioTime = new Intl.DateTimeFormat('en-CA', { ...timeOptions, timeZone: 'America/Toronto' }).format(new Date());
    console.log('Ontario Time:', ontarioTime);  // Add this line to debug
    document.getElementById('ontario-time').innerText = ontarioTime;


    // Tokyo (Japan)
    const tokyoTime = new Intl.DateTimeFormat('en-JP', { ...timeOptions, timeZone: 'Asia/Tokyo' }).format(new Date());
    document.getElementById('tokyo-time').innerText = tokyoTime;
}

// Update every second
setInterval(updateTime, 1000);
updateTime(); // Initial call
