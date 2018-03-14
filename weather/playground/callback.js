var getUser = (id,callback) => {
    var user = {
        id: id,
        name: 'Sergei'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(100,(user) => {
    console.log(user);
});