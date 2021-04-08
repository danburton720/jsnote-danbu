import React from 'react';
import './AddCell.css';
import ActionButton from '../ActionButton';
import { useActions } from '../../hooks';

interface AddCellProps {
    previousCellId: string | null;
    noCells?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId, noCells }) => {
    const { insertCellAfter } = useActions();
    const classes = "button is-rounded is-primary is-small";
    return (
        <div className={`add-cell ${noCells && 'no-cells'}`}>
            <div className="add-buttons">
                <ActionButton
                    onClick={() => insertCellAfter(previousCellId, 'code')}
                    icon="fas fa-plus"
                    label="Code"
                    className={classes}
                />
                <ActionButton
                    onClick={() => insertCellAfter(previousCellId, 'text')}
                    icon="fas fa-plus"
                    label="Text"
                    className={classes}
                />
                <div className="divider" />
            </div>
        </div>
    );
};

export default AddCell;
