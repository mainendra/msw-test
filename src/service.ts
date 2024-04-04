import axios from 'axios';

export function addInterceptors() {
    axios.interceptors.request.use(config => {
        if (config.url?.includes('/todos/1')) {
            return config;
        }

        config.headers['custom-header'] = 'test-value';
        return config;
    });
}

export function getTodo(id: number) {
    const newId = id || localSum(0, 1);
    return axios.request({
        url: `https://jsonplaceholder.typicode.com/todos/${newId}`,
        method: 'GET'
    });
}

function localSum(a: number, b: number) {
    return a + b;
}

if (import.meta.vitest) {
    const { describe, expect, it } = import.meta.vitest;

    describe('tests for sum', () => {
        it('valid number sum', () => {
            expect(localSum(1,1)).toEqual(2);
        });
    });
}
