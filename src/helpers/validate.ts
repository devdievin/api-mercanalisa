export const validateData = (data: any) => {
    if (data === '' || data === null || data === undefined) return false;
    return true;
}