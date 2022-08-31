export function sortByMonth(arr) {
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];


    const sorted = arr.sort(function (a, b) {
        return months.indexOf(a)
            - months.indexOf(b);
    });

    return sorted;
}