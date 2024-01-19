console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const preMovie = async () => {
    const promWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    let ticket = await promWifeBringingTicks;

    console.log('wife: i have the tickets');
    console.log('husband: we should go in');
    console.log('wife: No! i am hungry');

    const [Popcorn, butter, coldDrinks] = await Promise.all([
        new Promise((resolve) => resolve('Popcorn')),
        new Promise((resolve) => resolve('butter')),
        new Promise((resolve) => resolve('coldDrinks')),
    ]);

    console.log(`husband: have i got some ${Popcorn} for You we should go in now`);
    console.log('wife: No! i need butter in this');
    console.log(`husband: have i got some ${butter} for You we should go in now`);
    console.log('wife: No! i need coldDrinks also');
    console.log(`husband: have i got some ${coldDrinks} for You we should go in now`);
    console.log('wife: ok let us go');

    return ticket;
};

preMovie().then((m) => console.log(`Person3: shows ${m}`));

console.log('Person4: shows ticket');
console.log('Person5: shows ticket');
const createPost = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Post Created');
            resolve('Post Created');
        }, 2000);
    });
};

const deletePost = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Post Deleted');
            resolve('Post Deleted');
        }, 1500);
    });
};

const handlePosts = async () => {
    try {
        const [createdPost, deletedPost] = await Promise.all([createPost(), deletePost()]);
        console.log(`Results: ${createdPost}, ${deletedPost}`);
    } catch (error) {
        console.error('Error:', error);
    }
};

handlePosts();