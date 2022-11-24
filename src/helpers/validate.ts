export const validateData = (data: any): boolean => {
    if (data === '' || data === null || data === undefined) return false;
    return true;
}