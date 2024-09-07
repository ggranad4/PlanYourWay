export const buttonChecker = (appContent) => {
    console.log('App Content', appContent)
    var buttonsValidDict = { "1": false, "2": false, "3": false };
    if (appContent?.color) {
        buttonsValidDict["1"] = true;
    }
    if (appContent?.sizeSelected && appContent?.templateSelected) {
        buttonsValidDict["2"] = true;
    }
    if (appContent?.letters && appContent?.borderSelected) {
        buttonsValidDict["3"] = true;
    }
    return buttonsValidDict;

};
export const allValid = (buttonsValidDict) => {
    var allValid = true;
    buttonsValidDict.forEach((key, value) => {
        if (value !== true) {
            allValid = false
        }
    });
    return allValid
}