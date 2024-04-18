export const calculateTimeDifference = (pastTime) => {
    const d1 = new Date(pastTime);
    const d2 = new Date();

    const differenceInSeconds = parseInt((d2 - d1) / 1000);

    // seconds ago, min ago, hrs ago, days ago, weeks ago, months ago, years ago
    if (differenceInSeconds < 60) return `${differenceInSeconds} seconds ago`;
    // 3600 / 60 => 60 minutes ago
    if (differenceInSeconds < 3600) return `${parseInt(differenceInSeconds / 60)} minutes ago`;
    if (differenceInSeconds < 86400) return `${parseInt(differenceInSeconds / 3600)} hrs ago`;
    if (differenceInSeconds < 2592000) return `${parseInt(differenceInSeconds / 86400)} days ago`;
    if (differenceInSeconds < 31536000) return `${parseInt(differenceInSeconds / 2592000)} months ago`;
    return `${parseInt(differenceInSeconds / 31536000)} yrs ago`
}