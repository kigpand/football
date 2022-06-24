export function mapping(array) {
    const map = new Map();

    array.forEach((item) => {
        if (item.id) {
            const unit = findList(item);
        }
    });
}

function findList(item) {
    if (item.name === 'league') return 1;
    if (item.name === 'player') return 2;
    if (item.name === 'cup') return 3;
    if (item.name === 'world') return 4;
}