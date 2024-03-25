import React from 'react';

type Item = {
    content: React.ReactNode;
};

const List = ({ items }: { items: Item[] }) => {
    return (
        <ul className="list-decimal pl-6">
            {items.map((item, index) => (
                <li key={index} className="mt-1">
                    {item.content}
                </li>
            ))}
        </ul>
    );
};

export default List;