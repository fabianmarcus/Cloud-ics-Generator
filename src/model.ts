import type { EventAttributes } from "ics";

export function generateName(data: EventAttributes[]) {
    const unspecific = 'termine.ics';

    if(!data) {
        throw new Error('No data to given to generate Name');
    } else if(data.length > 1 || !data[0]?.title) {
        return unspecific;
    } else {
        const name = data[0].title.replace(/[^a-zA-Z0-9]+/g, '-');
        return `${name}.ics`;
    }
};