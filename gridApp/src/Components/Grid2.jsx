import React from 'react';
import Grid from './Grid.jsx';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';
function Tab()
{
    return(
        <>
            <JqxTabs
                width={'1000px'}
                height={'700px'}
                position={"top"}
                animationType={"none"}
                selectionTracker={false}
            >
                <ul>
                    <li>Tab1</li>
                    <li>Tab2</li>
                </ul>
                <div><Grid></Grid></div>
                <div>qwqwewq</div>
            </JqxTabs>
        </>
    );
}

export default Tab;