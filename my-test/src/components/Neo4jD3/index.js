import React from 'react'
import Neo4jd3 from 'neo4jd3'
import * as d3 from "d3";

class Graph extends React.Component {

  componentDidMount() {
    // this.props.getGraph() // this sets a state property in my app with the neo4j data
    const data = {
        "nodes":[
        {
          "id":"7ecfa61e54bd256cdc054d22d2f5e16f",
          "labels":"Organization",
          "properties":{
            "name":"nuTonomy",
            "logo_url":"http://public.crunchbase.com/t_api_images/o9kauimuu8ybeu7d6lek"
          }
        },
        {
          "id":"2c32e169cf4c1b083952b5ad04e74fbb",
          "labels":"Organization",
          "properties":{
            "name":"Fontinalis Partners",
            "logo_url":"http://public.crunchbase.com/t_api_images/v1496420794/hbqwufhek7z1l1rqjst3.png"
          }
        },
      ],
        "relationships":[
        {
          "id":"rel-ind:0",
          "type":"Board Director",
          "source":"7ecfa61e54bd256cdc054d22d2f5e16f",
          "target":"2c32e169cf4c1b083952b5ad04e74fbb",
          "properties":{
      
          }
        }
      
        ]
      };

    var neo4jd3 = new Neo4jd3('#neo4jd3', {
        highlight: [
            {
                class: 'Project',
                property: 'name',
                value: 'neo4jd3'
            }, {
                class: 'User',
                property: 'userId',
                value: 'eisman'
            }
        ],
        icons: {
            'Api': 'gear',
            'BirthDate': 'birthday-cake',
            'Cookie': 'paw',
            'Email': 'at',
            'Git': 'git',
            'Github': 'github',
            'Ip': 'map-marker',
            'Issues': 'exclamation-circle',
            'Language': 'language',
            'Options': 'sliders',
            'Password': 'asterisk',
            'Phone': 'phone',
            'Project': 'folder-open',
            'SecurityChallengeAnswer': 'commenting',
            'User': 'user',
            'zoomFit': 'arrows-alt',
            'zoomIn': 'search-plus',
            'zoomOut': 'search-minus'
        },
        images: {
            'Address': 'img/twemoji/1f3e0.svg',
            'BirthDate': 'img/twemoji/1f5d3.svg',
            'Cookie': 'img/twemoji/1f36a.svg',
            'CreditCard': 'img/twemoji/1f4b3.svg',
            'Device': 'img/twemoji/1f4bb.svg',
            'Email': 'img/twemoji/2709.svg',
            'Git': 'img/twemoji/1f5c3.svg',
            'Github': 'img/twemoji/1f5c4.svg',
            'icons': 'img/twemoji/1f38f.svg',
            'Ip': 'img/twemoji/1f4cd.svg',
            'Issues': 'img/twemoji/1f4a9.svg',
            'Language': 'img/twemoji/1f1f1-1f1f7.svg',
            'Options': 'img/twemoji/2699.svg',
            'Password': 'img/twemoji/1f511.svg',
            'Project|name|d3': 'img/twemoji/32-20e3.svg',
            'Project|name|neo4j': 'img/twemoji/33-20e3.svg',
            'Project|name|neo4jd3': 'img/twemoji/31-20e3.svg',
            'User': 'img/twemoji/1f600.svg'
        },
        minCollision: 60,
        // neo4jDataUrl: 'json/neo4jData.json',
        neo4jData: data,
        nodeRadius: 25,
        onNodeDoubleClick: function(node) {
            switch(node.id) {
                case '25':
                    // Google
                    window.open(node.properties.url, '_blank');
                    break;
                default:
                    var maxNodes = 5,
                        data = neo4jd3.randomD3Data(node, maxNodes);
                    neo4jd3.updateWithD3Data(data);
                    break;
            }
        },
        zoomFit: true
    });
    console.log(data);
  }

  componentDidUpdate(prevProps, prevState) {

    // const { data } = this.props; // the data retreived from getGraph() is passed to the component through props
    // const data ={
    //     "nodes": [
    //         {
    //             "id": "1",
    //             "labels": ["User"],
    //             "properties": {
    //                 "userId": "eisman"
    //             }
    //         },
    //         {
    //             "id": "8",
    //             "labels": ["Project"],
    //             "properties": {
    //                 "name": "neo4jd3",
    //                 "title": "neo4jd3.js",
    //                 "description": "Neo4j graph visualization using D3.js.",
    //                 "url": "https://eisman.github.io/neo4jd3"
    //             }
    //         }
    //     ],
    //     "relationships": [
    //         {
    //             "id": "7",
    //             "type": "DEVELOPES",
    //             "startNode": "1",
    //             "endNode": "8",
    //             "properties": {
    //                 "from": 1470002400000
    //             },
    //             "source": "1",
    //             "target": "8",
    //             "linknum": 1
    //         }
    //     ]
    // };

    // if(data) {
    //   new Neo4JD3('#graph', {
    //     neo4jData: data,
    //     minCollision: 75,
    //     nodeRadius: 20
    //   })
    // }
    // console.log(data);
  }

  render() {
    return <div  id="neo4jd3">sss</div>
    // return <GraphGrid>
    //   <TableTitle>Graph visualisation</TableTitle>
    //   <Panel>
    //     <GraphContainer id="graph"></GraphContainer>
    //   </Panel>
    // </GraphGrid>
  }

}

export default Graph