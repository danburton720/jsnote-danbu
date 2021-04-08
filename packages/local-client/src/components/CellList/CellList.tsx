import React, { useEffect } from 'react';
import { useActions, useTypedSelector } from '../../hooks';
import CellListItem from '../CellListItem';
import AddCell from '../AddCell';
import './CellList.css';


type CellListProps = {};

const CellList: React.FC<CellListProps> = () => {
    const cells = useTypedSelector(({ cells: { order, data }}) =>
        order.map(id => data[id])
    );

    const { fetchCells } = useActions();

    useEffect(() => {
        console.log('fetching cells')
        fetchCells();
    }, []);
    
    const renderedCells = cells.map(cell => (
        <React.Fragment key={cell.id}>
            <CellListItem cell={cell} />
            <AddCell previousCellId={cell.id} />
        </React.Fragment>
    ));

    return (
        <div className="cell-list">
            <AddCell noCells={cells.length === 0} previousCellId={null} />
            {renderedCells}
        </div>
    );
};

export default CellList;
