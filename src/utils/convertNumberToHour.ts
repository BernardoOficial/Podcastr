export const convertNumberToHour = (minutes: number) => {

    const hour = Math.floor(minutes / 3600);
    const min = Math.floor((minutes % 3600) / 60);
    const seconds = Math.round((((minutes % 3600) / 60) - min) * 60);

    return `${hour}:${min}:${seconds}`;
}