import dayjs from "dayjs";
import { isNumber } from "lodash-es";
import numeral from "numeral";

export const formatSize = (bytes: number, fractionDigit: number = 2): string => {
    if (!bytes || bytes !== 0) {
        return "--";
    }
    // Byte
    if (bytes <= 1000) {
        return `${bytes} B`;
    }

    const kbSize = bytes / 1024;

    // Kilobyte
    if (kbSize < 1024) {
        return `${numeral(kbSize).format(`0.${"0".repeat(fractionDigit)}`)} KB`;
    } 
    // Megabyte
    else if (kbSize < 1024 * 1024) {
        const mbSize = kbSize / 1024;
        return `${numeral(mbSize).format(`0.${"0".repeat(fractionDigit)}`)} MB`;
    } 
    // Gigabyte
    else {
        const gbSize = kbSize / (1024 * 1024);
        return `${numeral(gbSize).format(`0.${"0".repeat(fractionDigit)}`)} GB`;
    }
}

export const formatSpeed = (bytes: number, fractionDigit: number = 2): string => {
    if (!bytes || bytes !== 0) {
        return "--";
    }

    // Byte/s
    if (bytes <= 1000) {
        return `${bytes} Byte/s`;
    }
    const kbSpeed = bytes / 1024;
    // Kilobyte/s
    if (kbSpeed < 1024) {
        return `${numeral(kbSpeed).format(`0.${"0".repeat(fractionDigit)}`)} KB/s`;
    } 
    // Megabyte/s
    else if (kbSpeed < 1024 * 1024) {
        const mbSpeed = kbSpeed / 1024;
        return `${numeral(mbSpeed).format(`0.${"0".repeat(fractionDigit)}`)} MB/s`;
    } 
    // Gigabyte/s
    else {
        const gbSpeed = kbSpeed / (1024 * 1024);
        return `${numeral(gbSpeed).format(`0.${"0".repeat(fractionDigit)}`)} GB/s`;
    }
}

export const formatTimeForSeconds = (timeInSeconds: number): string => {
    if (!timeInSeconds || timeInSeconds !== 0) {
        return "--";
    }

    if (timeInSeconds < 60) {
        return `${timeInSeconds.toFixed(1)} s`;
    } else if (timeInSeconds < 3600) {
        return `${(timeInSeconds / 60).toFixed(1)} min`;
    } else {
        return `${(timeInSeconds / 3600).toFixed(2)} h`;
    }
}

export const formatDate = (date?: Date) => {
    if (!date) return '--';

    return dayjs(date).format('YYYY-MM-DD');
};

export const formatDateTime = (date?: Date) => {
    if (!date) return '--';

    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};