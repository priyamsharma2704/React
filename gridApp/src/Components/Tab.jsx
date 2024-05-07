import React from 'react';
import Grid from './Grid.jsx';
import Chart from './Chart.jsx';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';
function Tab()
{
    return(
        <>
            <div id="container">
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
                    <div>
                        <Grid></Grid>
                    </div>
                    <div>
                        <Chart></Chart>
                    </div>
                    
                    <div>qwqwewq</div>
                </JqxTabs>
            </div>
        </>
    );
}

export default Tab;