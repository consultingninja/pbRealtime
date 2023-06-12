import { PB } from '$lib/server/server';

export const handle = async ({ event, resolve }) => {
    event.locals.pb = PB;
    const response = await resolve(event);
    return response;
};