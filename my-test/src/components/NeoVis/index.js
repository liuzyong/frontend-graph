import React from "react";
import { ResponsiveNeoGraph } from "./NeoGraph";


const NEO4J_URI = "bolt://192.168.128.43:30557";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "Kscvicse123";

// class App extends React.Component  {
//     constructor(props) {
//         super(props);
//       }
//     newslistclick = (item, event) => {
//         //    ...
//     }
    
//     render() {
//         const listEle = this.state.newsList.map(item => (
//             <div 
//                 key={item.newsId} 
//                 className="Component-news-list"
                
//                 onClick={this.newslistclick.bind(this, item)}
//             >
//                 <ResponsiveNeoGraph
//         containerId={"id0"}
//         neo4jUri={NEO4J_URI}
//         neo4jUser={NEO4J_USER}
//         neo4jPassword={NEO4J_PASSWORD}
//       />
//             </div>
//         ));
//     }
// }

const App = () => {


  const newslistclick = (item, event) => {
       console.log();
    }
    
  return (
    <div className="App" style={{ fontFamily: "Quicksand" }} onClick={(event)=>{console.log(event);}}>
      <h1>关系图谱</h1>
      <ResponsiveNeoGraph
        containerId={"id0"}
        neo4jUri={NEO4J_URI}
        neo4jUser={NEO4J_USER}
        neo4jPassword={NEO4J_PASSWORD}
       
      />
      {/* <NeoGraph
        width={400}
        height={300}
        containerId={"id1"}
        neo4jUri={NEO4J_URI}
        neo4jUser={NEO4J_USER}
        neo4jPassword={NEO4J_PASSWORD}
        backgroundColor={"#b2beb5"}
      /> */}
    </div>
  );
};

export default App;
