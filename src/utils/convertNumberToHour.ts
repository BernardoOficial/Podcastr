export function convertNumberToHour(duration: number) {

    const hour = Math.floor(duration / 3600);
    const min = Math.floor((duration % 3600) / 60);
    const seconds = Math.round((((duration % 3600) / 60) - min) * 60);

    if(hour === 0) {

        return formatTime([min, seconds]);
    }

    const time = formatTime([hour, min, seconds]);

    return time;
}

function formatTime(times: number[]) {

    return times
        .map(time => String(time).padStart(2, '0'))
        .join(':')

}