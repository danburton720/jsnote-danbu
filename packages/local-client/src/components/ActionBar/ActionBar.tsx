import React from 'react';
import { useActions } from '../../hooks';
import ActionButton from '../ActionButton';
import './ActionBar.css';

interface ActionBarProps {
    id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
    const { moveCell, deleteCell } = useActions();
    return (
        <div className="action-bar">
            <ActionButton onClick={() => moveCell(id, 'up')} icon="fas fa-arrow-up" className="button is-primary is-small" />
            <ActionButton onClick={() => moveCell(id, 'down')} icon="fas fa-arrow-down" className="button is-primary is-small" />
            <ActionButton onClick={() => deleteCell(id)} icon="fas fa-times" className="button is-primary is-small" />
        </div>
    );
};

export default ActionBar;
