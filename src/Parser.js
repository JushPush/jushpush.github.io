export function parseTimestampString(date) {
    const tmpdate = new Date(date.seconds*1000);

    return `${tmpdate.getUTCMonth() + 1}/${tmpdate.getUTCDate()}/${tmpdate.getUTCFullYear()} at ${tmpdate.getHours()}:${tmpdate.getMinutes().toString().padStart(2, "0")}`;
}