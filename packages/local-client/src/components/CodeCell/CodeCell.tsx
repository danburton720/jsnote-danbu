import React, { useEffect } from 'react';
import CodeEditor from '../CodeEditor';
import Preview from '../Preview';
import Resizable from '../Resizable';
import { Cell } from '../../typesAndStuff';
import { useActions } from '../../hooks';
import { useTypedSelector } from '../../hooks';
import './CodeCell.css';
import { useCumulativeCode } from '../../hooks/useCumulativeCode';

interface CodeCellProps {
    cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({cell}) => {
    const {updateCell, createBundle} = useActions();
    const bundle = useTypedSelector(state => state.bundles[cell.id]);
    const cumulativeCode = useCumulativeCode(cell.id);

    useEffect(() => {
        if (!bundle) {
            createBundle(cell.id, cumulativeCode);
            return;
        }

        const timer = setTimeout(async () => {
            createBundle(cell.id, cumulativeCode);
        }, 750);

        return () => {
            clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cumulativeCode, cell.id, createBundle]);

    return (
        <Resizable direction="vertical">
            <div style={{height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row'}}>
                <Resizable direction="horizontal">
                    <CodeEditor
                        initialValue={cell.content}
                        onChange={value => updateCell(cell.id, value)}
                    />
                </Resizable>
                <div className="progress-wrapper">
                    {!bundle || bundle.loading ? (
                        <div className="progress-cover">
                            <progress className="progress is-small is-primary" max="100">
                                Loading
                            </progress>
                        </div>
                        ) : (
                            <Preview code={bundle.code} err={bundle.err}/>
                    )}
                </div>
            </div>
        </Resizable>
    );
};

export default CodeCell;