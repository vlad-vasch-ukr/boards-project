import React from 'react';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import Card from '../Card/Card.jsx';

const InnerQuoteList = React.memo(function InnerQuoteList({items, onCardClick, columnId}) {
  return items.map((item, index) => (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(dragProvided, dragSnapshot) => (
        <Card
          key={item.id}
          item={item}
          provided={dragProvided}
          onCardClick={onCardClick}
          columnId={columnId}
        />
      )}
    </Draggable>
  ));
});

function InnerList(props) {
  const { items, dropProvided, onCardClick, columnId } = props;

  return (
    <div ref={dropProvided.innerRef} className="min-h-[5px]">
      <InnerQuoteList items={items} onCardClick={onCardClick} columnId={columnId} />
      {dropProvided.placeholder}
    </div>
  );
}

function CardsList(props) {
  const {
    listId = 'LIST',
    listType,
    items,
    onCardClick,
    columnId
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
            onCardClick={onCardClick}
          />
        )
      }
    >
      {(dropProvided) => (
        <InnerList
          items={items}
          dropProvided={dropProvided}
          onCardClick={onCardClick}
          columnId={columnId}
        />
      )}
    </Droppable>
  );
}

export default CardsList;
