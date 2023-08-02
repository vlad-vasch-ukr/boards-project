import uniqid from 'uniqid';

export function generateNewBoard(name, cover) {
    return {
        id: uniqid(),
        name,
        cover,
        columns: []
    }
}
