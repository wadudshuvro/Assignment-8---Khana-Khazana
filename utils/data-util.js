export const replaceMongoIdInArray = (array) => {
    const mappedArray = array
        .map((item) => {
            return {
                id: item._id.toString(),
                ...item,
            };
        })
        .map(({ _id, ...rest }) => rest);

    return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
    const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
    return updatedObj;
};

export function timeFormating(inputTime) {
    let outputTime;
    const parts = inputTime.split(" ");

    if (parts.length === 2 && parts[1] === "mins") {
        const number = parseInt(parts[0]);

        if (number === 1) {
            outputTime = `${number} minute`;
        } else {
            outputTime = `${number} minutes`;
        }
    } else {
        outputTime = inputTime;
    }

    return outputTime;
}
