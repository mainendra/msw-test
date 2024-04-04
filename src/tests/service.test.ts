import { describe, expect, it } from 'vitest';
import { addInterceptors, getTodo } from '../service';
import './setup';
import { server } from './setup';
import { HttpResponse, http } from 'msw';

describe('service tests', () => {
    it('should fetch id 1 without any custom headers', async () => {
        let headers;
        server.use(http.get('https://jsonplaceholder.typicode.com/todos/1', ({ request }) => {
            headers = Object.fromEntries(request.headers.entries());
            return HttpResponse.json({
                name: 'hello'
            });
        }))
        addInterceptors();
        await getTodo(1).then(resp => resp.data);
        expect(headers).toEqual({
            'accept': 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, compress, deflate, br',
            'host': 'jsonplaceholder.typicode.com',
            'user-agent': 'axios/1.6.8',
        });
    });

    it('should fetch id 2 without any custom headers', async () => {
        let headers;
        server.use(http.get('https://jsonplaceholder.typicode.com/todos/2', ({ request }) => {
            headers = Object.fromEntries(request.headers.entries());
            return HttpResponse.json({
                name: 'hello'
            });
        }))
        addInterceptors();
        await getTodo(2).then(resp => resp.data);
        expect(headers).toEqual({
            'accept': 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, compress, deflate, br',
            'host': 'jsonplaceholder.typicode.com',
            'user-agent': 'axios/1.6.8',
        });
    });
});
