/**
 * 
 * @param {...number} values
 * 
 * @returns {number} 
 */
export function average(...values) {
    if (values.length === 0) {
        return 0;
    }

    let result = 0;

    const valuesCount = values.length;

    for (let i = 0; i < valuesCount; i++) {
        result += values[i];
    }

    return result / valuesCount;
}