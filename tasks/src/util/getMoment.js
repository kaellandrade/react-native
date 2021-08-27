const moment = require("moment");


/**
 * Recebe um date e retorna uma string cumprimento
 */
const greeting = (date) => {
    const now = Number(moment(date, 'HH').format("HH"));
    if (now >= 12 && now < 18) {
        return `Boa tarde`
    } else if (now >= 18 && now <= 23) {
        return `Boa noite`
    } else {
        return `Bom dia`
    }
}

export { greeting };