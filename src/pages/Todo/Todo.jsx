import React from 'react';
import Graph from 'react-graph-vis'; // Зверніть увагу, що ми імпортуємо як `default`

const MyGraph = () => {
    // Основні дані графа
    const graph = {
        nodes: [
            { id: 1, label: 'Node 1' },
            { id: 2, label: 'Node 2' },
            { id: 3, label: 'Node 3' },
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 3 },
        ],
    };

    // Налаштування графа
    const options = {
        layout: {
            hierarchical: false,
        },
        edges: {
            color: '#000000',
        },
    };

    return (
        <div>
            <h1>My Graph</h1>
            <Graph graph={graph} options={options} style={{ height: '500px' }} />
        </div>
    );
};

export default MyGraph;
