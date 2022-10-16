function run(birth_day) {
    const [day, month] = birth_day.split('-');
    let date = "";
    let features_dates = [];
    let whichDay = -1;
    let from = 2016;
    let to = 2065;
    while (from <= to) {
        if (isLeapYear(from) && (Number(month) === 2 && Number(day) === 29)) {
            date = `${from}-${month}-${day}`
            whichDay = new Date(date).getDay();
            getBirthday(whichDay, from) && features_dates.push(getBirthday(whichDay, from))
            from += 4;
        } else if (!(Number(month) === 2 && Number(day) === 29)) {
            date = `${from}-${month}-${day}`
            whichDay = new Date(date).getDay();
            getBirthday(whichDay, from) && features_dates.push(getBirthday(whichDay, from))
            from += 1;
        }
    }
    return features_dates.join(' ')
}

function getBirthday(day, year) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    if (day === 0) {
        return days[day] + '-' + year.toString();
    } else if (day === 5) {
        return days[day] + '-' + year.toString();
    } else if (day === 6) {
        return days[day] + '-' + year.toString();
    }
}


function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
}


console.log(run('29-02'))