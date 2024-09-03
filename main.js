function createIterator(array) {
    let index = 0;

    return {
        next: function () {
            // return index < array.length
            //     ? { value: array[index++], done: false }
            //     : { value: undefined, done: true };
            if (index < array.length) {
                const newValue = array[index] * array[index];
                index++;
                return { value: newValue, done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
    };
}

const iterator = createIterator([1, 2, 3]);

// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: 3, done: true }

function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = myGenerator();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

const USER_URL = 'https://jsonplaceholder.typicode.com/users';

function* fetchGenerator(url) {
    try {
        // response
        const response = yield fetch(url);
        console.log('response', response);

        // data
        const data = yield response.json();

        console.log('data', data);

        return data;
    } catch (error) {
        return error.message;
    }
}

const userFetchGenerator = fetchGenerator(USER_URL);

// console.log(userFetchGenerator.next());
const fetchPromise = userFetchGenerator.next().value;

console.log(fetchPromise);

fetchPromise
    .then((response) => {
        return userFetchGenerator.next(response).value;
    })
    .then((data) => {
        console.log(userFetchGenerator.next(data).value);
    })
    .catch((error) => console.log(userFetchGenerator.next(error).value));
