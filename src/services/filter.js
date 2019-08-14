export const FILTER_ALL = 'all';
export const FILTER_SUCCESSFUL = 'successful';
export const FILTER_UNSUCCESSFUL = 'unsuccessful';
export const FILTER_FAILED = 'failed';

export function applyFilter(list, filter) {
    switch (filter) {
        case FILTER_SUCCESSFUL:
            return list.filter(item => !item.error && item.isTraversable === true);

        case FILTER_UNSUCCESSFUL:
            return list.filter(item => !item.error && item.isTraversable !== true);

        case FILTER_FAILED:
            return list.filter(item => item.error);

        default:
            return list;
    }
}

export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_SUCCESSFUL]: 'Successful',
        [FILTER_UNSUCCESSFUL]: 'Unsuccessful',
        [FILTER_FAILED]: 'Failed',
    };
}
