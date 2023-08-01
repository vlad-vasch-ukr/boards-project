import React from 'react';
import {Draggable, Droppable} from '@hello-pangea/dnd';
import Card from '../Card/Card.jsx';

const InnerQuoteList = React.memo(function InnerQuoteList({items}) {
  return items.map((item, index) => (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(dragProvided, dragSnapshot) => (
        <Card
          key={item.id}
          item={item}
          provided={dragProvided}
        />
      )}
    </Draggable>
  ));
});

function InnerList(props) {
  const { items, dropProvided } = props;

  return (
    <div ref={dropProvided.innerRef} className="min-h-[5px]">
      <InnerQuoteList items={items} />
      {dropProvided.placeholder}
    </div>
  );
}

function CardsList(props) {
  const {
    listId = 'LIST',
    listType,
    items
  } = props;

  return (
    <Droppable
      droppableId={listId}
      type={listType}
      renderClone={
        (provided, snapshot, descriptor) => (
          <Card
            item={items[descriptor.source.index]}
            provided={provided}
          />
        )
      }
    >
      {(dropProvided) => (
        <InnerList
          items={items}
          dropProvided={dropProvided}
        />
      )}
    </Droppable>
  );
}

export default CardsList;
