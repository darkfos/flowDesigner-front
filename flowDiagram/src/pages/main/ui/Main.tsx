import {Background, BackgroundVariant, Controls, ReactFlow} from "@xyflow/react";

import '@xyflow/react/dist/style.css';

export default function MainPage() {
    return (
        <section className="h-full w-full rounded-lg shadow-md">
            <ReactFlow>
                <Background variant={ BackgroundVariant.Dots } />
                <Controls />
            </ReactFlow>
        </section>
    )
}