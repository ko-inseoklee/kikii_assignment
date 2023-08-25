export const handleDay = (dateStr: string, offset: number) => {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + offset);

    return date;
}

export const handlePrevDay = (dateStr: string) => {
    return handleDay(dateStr, -1);
}

export const handleNextDay = (dateStr: string) => {
    return handleDay(dateStr, 1);
}

export const getDayOfWeek = (date: Date): string => {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

export const convertDateToDispatchForm = (dateStr: string): string => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate();

    const result = year + "년 " + month + "월 " + day + "일 (" + getDayOfWeek(date) + ")";
    
    return result;
}

export const convertYYYYmmDD = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate();

    const result = year + "-" + month + "-" + day;
    return result;
}