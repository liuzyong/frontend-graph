import React, { useEffect, useRef } from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";
import Neovis from "neovis.js/dist/neovis.js";

const NeoGraph = (props) => {
  const {
    width,
    height,
    containerId,
    backgroundColor,
    neo4jUri,
    neo4jUser,
    neo4jPassword,
  } = props;

  const visRef = useRef();
//   visRef.current.addEventListener('click', e => { e.stopPropagation() })


  useEffect(() => {
    const config = {
      container_id: visRef.current.id,
      server_url: neo4jUri,
      server_user: neo4jUser,
      server_password: neo4jPassword,

    labels: {
        //"Character": "name",
        "Person": {
          "caption": "name",
          "size": "points",
          "font":{
            "size" : 26,
            "color" : "#000000"
          }
          //"community": "community"
          //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
        },
        "Organ": {
          "caption": "orgaName",
          "size": "points",
          "font":{
            "size" : 27,
            "color" : "#666666"
          }
          //"community": "community"
          //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
        }
      },
      relationships: {
        "PersonToPersonShip": {
          "thickness": "8",
          "caption": false
        },
        "PersonToOrganShip": {
          "thickness": "8",
          "caption": false
        },
        "OrganToOrganShip": {
          "thickness": "8",
          "caption": false
        },
      },
      initial_cypher: "MATCH p=()-[r:PersonToPersonShip]->(),q=()-[t:PersonToOrganShip]->(),s=()-[o:OrganToOrganShip]->() return p,q,s",

    };
    const vis = new Neovis(config);
    vis.render();
  }, [neo4jUri, neo4jUser, neo4jPassword]);

  function again(prity,id){
    // container是react的ref对象
    
    var cypher = "fadfdasd";
    alert("");
    if(prity == true || prity == "true"){
        cypher = "MATCH m=()-[r:PersonToPersonShip]->(),w=()-[t:PersonToOrganShip]->() WHERE ( r.firstId = '"+ id +"' OR r.lastId = '"+ id +"') AND t.firstId = '"+ id +"' RETURN m,w";
    }else if(prity == false || prity == "false"){
        cypher = "MATCH w=()-[p:PersonToOrganShip]->(),m=()-[o:OrganToOrganShip]->() WHERE p.lastId = '"+id+"' AND (o.firstId = '"+id+"' OR o.lastId = '"+id+"') RETURN w,m";
    }else if(prity == "error" || prity == "name"){
        console.log("xinxicuowu");
        return "error";
    }

    if (cypher.length > 3) {
        //viz.renderWithCypher(cypher);
    } else {
        console.log("reload");
        //viz.reload();
    }
   }

  return (
    <div
      id={containerId}
      ref={visRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${backgroundColor}`,
      }}
    />
  );
};

// NeoGraph.defaultProps = {
//   width: 600,
//   height: 600,
//   backgroundColor: "#d3d3d3",
// };

NeoGraph.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  containerId: PropTypes.string.isRequired,
  neo4jUri: PropTypes.string.isRequired,
  neo4jUser: PropTypes.string.isRequired,
  neo4jPassword: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

const ResponsiveNeoGraph = (props) => {
  const [resizeListener, sizes] = useResizeAware();

  const side = Math.max(sizes.width, sizes.height) / 2;
  const neoGraphProps = { ...props, width: side, height: side };
  return (
    <div style={{ position: "center" }}>
      {resizeListener}
      <NeoGraph {...neoGraphProps} />
    </div>
  );
};

// ResponsiveNeoGraph.defaultProps = {
//   backgroundColor: "#d3d3d3",
// };

ResponsiveNeoGraph.propTypes = {
  containerId: PropTypes.string.isRequired,
  neo4jUri: PropTypes.string.isRequired,
  neo4jUser: PropTypes.string.isRequired,
  neo4jPassword: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export { NeoGraph, ResponsiveNeoGraph };
