const validateData = (data) => {
    if (data === '' || data === null || data === undefined) return false;
    return true;
}

module.exports = { validateData }
