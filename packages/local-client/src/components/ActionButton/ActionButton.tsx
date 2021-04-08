import React from 'react';

type ActionButtonProps = {
    onClick: () => void;
    icon: string;
    className?: string;
    label?: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, icon, className, label }) => {
    return (
        <button className={className} onClick={onClick}>
            <span className="icon">
                <i className={icon}></i>
            </span>
            <span>{label}</span>
        </button>
    );
};

export default ActionButton;
