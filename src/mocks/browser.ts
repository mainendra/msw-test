import { HttpResponse, bypass, http, passthrough } from "msw";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(
    http.get('https://jsonplaceholder.typicode.com/todos/1', async ({ request }) => {
        const resp = await fetch(bypass(request));
        const data = await resp.json();
        return HttpResponse.json({
            ...data
        }, { headers: {'custom-header': 'test-header'} });
    }),
    http.get('https://jsonplaceholder.typicode.com/todos/2', async () => {
       return new HttpResponse("No data", { status: 404 });
    }),
    http.get('https://jsonplaceholder.typicode.com/todos/4', async () => {
       return new HttpResponse("Unauthorized", { status: 401 });
    }),
    http.get('*', () => passthrough())
);
