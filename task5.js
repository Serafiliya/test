const getData = (id, callback = () => {}) => {
    if (!id) {
        return callback(new Error('getData: ID not specified'));
    }

    setTimeout(() => {
        const data = {
            utime: Date.now(),
        };
        callback(null, data);
    }, Math.random() * 1000);
};

const mainFn = (data) => {
    const multiplePromises = [];
    for (const id of data.multiple) {
        multiplePromises.push(
            new Promise((resolve, reject) => {
                getData(id, (err, res) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve({ id, data: res });
                });
            })
        );
    }

    const singlePromise = new Promise((resolve, reject) => {
        getData(data.single, (err, res) => {
            if (err) {
                return reject(err);
            }
            resolve({ id: data.single, data: res });
        });
    });

    return Promise.all([singlePromise, ...multiplePromises]).then(
        (results) => ({
            id: data.id,
            title: data.title,
            single: results.shift(),
            //можно будет добавить single2: results.shift()
            multiple: results,
        })
    );
};

mainFn({
    id: 78,
    title: 'Some title',
    single: 12345,
    multiple: [56783, 46573, 13251],
}).then((result) => {
    console.log(result);
});
