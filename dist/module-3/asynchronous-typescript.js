"use strict";
// Asynchronous
// ekta block of code jodi r ekta block of code k badha na diye parralali colte dei eitai holo asynchronous
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Mocking
// creating promise
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = 'Data is fetched';
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to fetch data!');
        }
    });
};
const result12 = makePromise();
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
// console.log("promise data: ", result12)
// Promise<string> Promise<boolean> Promise<object>
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to fetch');
        }
    });
};
const getPromiseDataBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
    return data;
});
const boolResult = getPromiseDataBoolean();
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = { data: 'Data is fetched!' };
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to fetch Data!');
        }
    });
};
const getPromiseDataObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    return data;
});
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    return yield response.json();
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result35 = yield getTodo();
    console.log(result35);
});
getTodoData();
