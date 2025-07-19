import dayjs, { Dayjs } from "dayjs";

export const now = () => dayjs();
export const today = () => dayjs().startOf('day');
export const thisWeek = () => dayjs().startOf('week');
export const thisMonth = () => dayjs().startOf('month');
export const thisQuarter = () => getQuarterStart(today());
export const thisYear = () => dayjs().startOf('year');

export const getQuarterStart = (date: Dayjs): Dayjs => {
    const month = date.month();
    const quarterStartMonth = Math.floor(month / 3) * 3;
    return date.month(quarterStartMonth).startOf('month');
};

// Ago 
export const hoursAgo = (hours: number) => dayjs().subtract(hours, 'hours').startOf('hours');
export const daysAgo = (days: number) => dayjs().subtract(days, 'days').startOf('day');
export const weeksAgo = (weeks: number) => dayjs().subtract(weeks, 'week').startOf('week');
export const monthsAgo = (months: number) => dayjs().subtract(months, 'month').startOf('month');
export const yearsAgo = (years: number) => dayjs().subtract(years, 'year').startOf('year');
export const lastMonth = () => monthsAgo(1).endOf('month');