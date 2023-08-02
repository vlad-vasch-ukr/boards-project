import uniqid from 'uniqid';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default reorder;

export const reorderItemsMap = ({ quoteMap, source, destination }) => {
  const current = [...quoteMap.find(({id}) => id === source.droppableId).cards];
  const next = [...quoteMap.find(({id}) => id === destination.droppableId).cards];
  const target = current[source.index];

  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);

    return [{
      cardsMap: reordered,
      listId: destination.droppableId
    }];
  }


  current.splice(source.index, 1);
  next.splice(destination.index, 0, target);

  return [
    {
      cardsMap: current,
      listId: source.droppableId
    },
    {
      cardsMap: next,
      listId: destination.droppableId
    }
  ];
};

export function createNewColumnObject(title) {
  return {
    id: uniqid(),
    title,
    cards: []
  }
}

export function createNewCardObject(name) {
  return {
    id: uniqid(),
    name
  }
}
