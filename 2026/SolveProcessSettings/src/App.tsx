import { useState } from "react";
import "./App.css";
import LeftPane from "./Components/LeftPane";
import RightPane from "./Components/RightPane";

import type { QueueList } from "./Components/Types/types";

let tempQueuesList: QueueList = ["My Computer", "My Computer, Background", "Remote"];
function App() {

    const [queuesList, setQueuesList] = useState<QueueList>(tempQueuesList);

    return (
        <div className="sps-shell">
            <LeftPane queues={queuesList} />
            <RightPane />
        </div>
    );
}

export default App;
