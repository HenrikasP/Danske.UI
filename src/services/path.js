import superagent from 'superagent';
import config from '../config';

/**
 * Get the list of graph items.
 * @return {Array}
 */
export function getAll() {
    return [];
}

/**
 * A counter to generate a unique id for a graph.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let graphCounter = 1;

function getNextId() {
    return getAll().length + graphCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export async function calculate(list, data) {
    var input = data.input.split(/\s+/);
    let item = {
        id: getNextId(),
        input: input
    };

    try {
            var response = await superagent.post(`${config.apiUrl}/path`).send(input);
        Object.assign(item, response.body);
    } catch (err) {
        item.error = 'Unexpected server error';
    }

    return list.concat([item]);
}
