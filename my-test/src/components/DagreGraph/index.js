import DagreGraph from 'dagre-d3-react'
import * as d3 from 'd3v4';
import React, { PureComponent } from 'react';
import './index.css';


const App1 = ()=>{
    let data = {
        nodes: [
          {
            id: "1",
            label: "<h3>Node 1</h3>",
            labelType: "html"
          },
          {
            id: "2",
            label: "<h3>Node 2</h3>",
            labelType: "html",
            config: {
                    style: 'fill: #afa'
                }
          },
          {
            id: "3",
            label: "<h3>Node 1</h3>",
            labelType: "html"
          },
          {
            id: "4",
            label: "<h3>Node 2</h3>",
            labelType: "html",
            config: {
                    style: 'fill: #afa'
                }
          }
        ],
        links: [
          {
            source: '1',
            target: '2',
            label: 'TO',
            config: {
                    arrowheadStyle: 'display: none',
                    curve: d3.curveBasis
            }
          },
        ]
      }
    return(
        <div>
        <DagreGraph
            nodes={data.nodes}
            links={data.links}
            options={{
                rankdir: 'LR',
                align: 'UL',
                ranker: 'tight-tree'
            }}
            width='500'
            height='500'
            animate={1000}
            shape='circle'
            fitBoundaries
            zoomable
            onNodeClick={e => console.log(e)}
            onRelationshipClick={e => console.log(e)}
        />
    </div>
    )
}

export default App1;