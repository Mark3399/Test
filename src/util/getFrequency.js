export function getFrequency(data) {

    return data.reduce(
        (previousValue, currentValue) => {

            if (currentValue in previousValue) {
                return { ...previousValue, [currentValue]: previousValue[currentValue] + 1 }
            }
            else {
                return { ...previousValue, [currentValue]: 1 }
            }
        }, {}

    )
}