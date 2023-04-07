{"changed":true,"filter":false,"title":"CreateVitamin.js","tooltip":"/src/CreateVitamin.js","value":"import React from 'react';\nconst { useState, useEffect } = React;\nimport axios from 'axios';\n\nimport VitaminInfo from './VitaminInfo';\nimport FoodInfo from './FoodInfo';\n\nconst AllVitamins = props=>{\n    // const [mostRecentID, setMostRecentID] = useState();\n    \n    // //AJAX request by useEffect()\n    // useEffect(function getMaxItem() {\n        \n    //     const loadMostRecent = ()=>{\n    //         console.log(\"loading the most recent comment\");\n    //         axios.get('https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty')\n    //         .then(result=>{\n    //             setMostRecentID(result.data);\n    //         })\n    //         .catch(error=>{console.log(error)})\n    //     }\n        \n    //     loadMostRecent();\n    //     const loadMostRecentInterval = setInterval(loadMostRecent, 3000);\n        \n    //     return ()=>{\n    //         //called when the component is unmounter. Here, we clear interval\n    //         clearInterval(loadMostRecentInterval);\n    //     }\n        \n    // }, []);\n\n   \n    return (<>\n             \n            </>)\n}\n\n\nexport default CreateVitamin;","undoManager":{"mark":20,"position":36,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":14},"action":"insert","lines":["<VitaminInfo/>"],"id":1}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"remove","lines":[">"],"id":2},{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"remove","lines":["/"]},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"remove","lines":["o"]},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"remove","lines":["f"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"remove","lines":["n"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"remove","lines":["I"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"remove","lines":["n"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"remove","lines":["i"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"remove","lines":["m"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"remove","lines":["a"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"remove","lines":["t"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"remove","lines":["i"]},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["V"]},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["<"]},{"start":{"row":0,"column":0},"end":{"row":41,"column":26},"action":"insert","lines":["import React from 'react';","const { useState, useEffect } = React;","import axios from 'axios';","","import Story from './Story';","","const MostRecent = props=>{","    const [mostRecentID, setMostRecentID] = useState();","    ","    //AJAX request by useEffect()","    useEffect(function getMaxItem() {","        ","        const loadMostRecent = ()=>{","            console.log(\"loading the most recent comment\");","            axios.get('https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty')","            .then(result=>{","                setMostRecentID(result.data);","            })","            .catch(error=>{console.log(error)})","        }","        ","        loadMostRecent();","        const loadMostRecentInterval = setInterval(loadMostRecent, 3000);","        ","        return ()=>{","            //called when the component is unmounter. Here, we clear interval","            clearInterval(loadMostRecentInterval);","        }","        ","    }, []);","","   ","    return (<>","             <h2>Most Recent Comments and Stories</h2>","             {/* Make another AJAX request to the API to get the story associated with the ID*/}","             <Story id={mostRecentID} />","             {/* <p>Id: {mostRecentID}</p> */}","            </>)","}","","","export default MostRecent;"]}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"remove","lines":["y"],"id":3},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"remove","lines":["r"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"remove","lines":["o"]},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"remove","lines":["t"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"remove","lines":["S"]}],[{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["V"],"id":4},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["i"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["t"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["a"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["m"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["i"]},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["n"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["I"]}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["n"],"id":5},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["f"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["o"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["r"]}],[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"remove","lines":["r"],"id":6}],[{"start":{"row":4,"column":27},"end":{"row":4,"column":32},"action":"remove","lines":["Story"],"id":7},{"start":{"row":4,"column":27},"end":{"row":4,"column":38},"action":"insert","lines":["VitaminInfo"]}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":40},"action":"insert","lines":["import VitaminInfo from './VitaminInfo';"],"id":8}],[{"start":{"row":5,"column":40},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":9}],[{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"remove","lines":["i"],"id":10},{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"remove","lines":["m"]},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"remove","lines":["a"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["t"]},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"remove","lines":["i"]},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":["V"]}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":["n"],"id":11}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["F"],"id":12},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["o"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["o"]},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["d"]}],[{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"remove","lines":["n"],"id":13},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"remove","lines":["i"]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"remove","lines":["m"]},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"remove","lines":["a"]},{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"remove","lines":["t"]},{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"remove","lines":["i"]},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"remove","lines":["V"]}],[{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["F"],"id":14},{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["o"]},{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["o"]},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["d"]}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":16},"action":"remove","lines":["MostRecent"],"id":15},{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["A"]},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["k"]},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["k"]}],[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"remove","lines":["k"],"id":16}],[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["l"],"id":17},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["l"]}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"remove","lines":["l"],"id":18},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"remove","lines":["l"]},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"remove","lines":["k"]}],[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["l"],"id":19},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["l"]},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["V"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["o"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"remove","lines":["t"],"id":20},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"remove","lines":["o"]}],[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["i"],"id":21},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["t"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["a"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["m"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["i"]},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["n"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["s"]}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":7},"action":"insert","lines":["// "],"id":22},{"start":{"row":10,"column":4},"end":{"row":10,"column":7},"action":"insert","lines":["// "]},{"start":{"row":11,"column":4},"end":{"row":11,"column":7},"action":"insert","lines":["// "]},{"start":{"row":13,"column":4},"end":{"row":13,"column":7},"action":"insert","lines":["// "]},{"start":{"row":14,"column":4},"end":{"row":14,"column":7},"action":"insert","lines":["// "]},{"start":{"row":15,"column":4},"end":{"row":15,"column":7},"action":"insert","lines":["// "]},{"start":{"row":16,"column":4},"end":{"row":16,"column":7},"action":"insert","lines":["// "]},{"start":{"row":17,"column":4},"end":{"row":17,"column":7},"action":"insert","lines":["// "]},{"start":{"row":18,"column":4},"end":{"row":18,"column":7},"action":"insert","lines":["// "]},{"start":{"row":19,"column":4},"end":{"row":19,"column":7},"action":"insert","lines":["// "]},{"start":{"row":20,"column":4},"end":{"row":20,"column":7},"action":"insert","lines":["// "]},{"start":{"row":22,"column":4},"end":{"row":22,"column":7},"action":"insert","lines":["// "]},{"start":{"row":23,"column":4},"end":{"row":23,"column":7},"action":"insert","lines":["// "]},{"start":{"row":25,"column":4},"end":{"row":25,"column":7},"action":"insert","lines":["// "]},{"start":{"row":26,"column":4},"end":{"row":26,"column":7},"action":"insert","lines":["// "]},{"start":{"row":27,"column":4},"end":{"row":27,"column":7},"action":"insert","lines":["// "]},{"start":{"row":28,"column":4},"end":{"row":28,"column":7},"action":"insert","lines":["// "]},{"start":{"row":30,"column":4},"end":{"row":30,"column":7},"action":"insert","lines":["// "]}],[{"start":{"row":36,"column":24},"end":{"row":36,"column":36},"action":"remove","lines":["mostRecentID"],"id":23}],[{"start":{"row":33,"column":14},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":24},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":34,"column":4},"end":{"row":34,"column":8},"action":"insert","lines":["    "],"id":25}],[{"start":{"row":34,"column":8},"end":{"row":34,"column":12},"action":"insert","lines":["    "],"id":26}],[{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"insert","lines":["<"],"id":27},{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"insert","lines":[">"]}],[{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"insert","lines":[" "],"id":28}],[{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"insert","lines":["h"],"id":29}],[{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"remove","lines":["h"],"id":30},{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"remove","lines":["<"]}],[{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"remove","lines":[">"],"id":31},{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"remove","lines":[" "]},{"start":{"row":34,"column":8},"end":{"row":34,"column":12},"action":"remove","lines":["    "]},{"start":{"row":34,"column":4},"end":{"row":34,"column":8},"action":"remove","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":33,"column":14},"end":{"row":34,"column":0},"action":"remove","lines":["",""],"id":32}],[{"start":{"row":34,"column":13},"end":{"row":37,"column":46},"action":"remove","lines":["<h2>Most Recent Comments and Stories</h2>","             {/* Make another AJAX request to the API to get the story associated with the ID*/}","             <Story id={} />","             {/* <p>Id: {mostRecentID}</p> */}"],"id":40}],[{"start":{"row":39,"column":15},"end":{"row":39,"column":25},"action":"remove","lines":["MostRecent"],"id":41},{"start":{"row":39,"column":15},"end":{"row":39,"column":16},"action":"insert","lines":["X"]},{"start":{"row":39,"column":16},"end":{"row":39,"column":17},"action":"insert","lines":["c"]},{"start":{"row":39,"column":17},"end":{"row":39,"column":18},"action":"insert","lines":["r"]},{"start":{"row":39,"column":18},"end":{"row":39,"column":19},"action":"insert","lines":["e"]},{"start":{"row":39,"column":19},"end":{"row":39,"column":20},"action":"insert","lines":["a"]}],[{"start":{"row":39,"column":19},"end":{"row":39,"column":20},"action":"remove","lines":["a"],"id":42},{"start":{"row":39,"column":18},"end":{"row":39,"column":19},"action":"remove","lines":["e"]},{"start":{"row":39,"column":17},"end":{"row":39,"column":18},"action":"remove","lines":["r"]},{"start":{"row":39,"column":16},"end":{"row":39,"column":17},"action":"remove","lines":["c"]},{"start":{"row":39,"column":15},"end":{"row":39,"column":16},"action":"remove","lines":["X"]}],[{"start":{"row":39,"column":15},"end":{"row":39,"column":16},"action":"insert","lines":["C"],"id":43},{"start":{"row":39,"column":16},"end":{"row":39,"column":17},"action":"insert","lines":["r"]},{"start":{"row":39,"column":17},"end":{"row":39,"column":18},"action":"insert","lines":["e"]},{"start":{"row":39,"column":18},"end":{"row":39,"column":19},"action":"insert","lines":["a"]},{"start":{"row":39,"column":19},"end":{"row":39,"column":20},"action":"insert","lines":["t"]},{"start":{"row":39,"column":20},"end":{"row":39,"column":21},"action":"insert","lines":["e"]},{"start":{"row":39,"column":21},"end":{"row":39,"column":22},"action":"insert","lines":["V"]}],[{"start":{"row":39,"column":22},"end":{"row":39,"column":23},"action":"insert","lines":["i"],"id":44},{"start":{"row":39,"column":23},"end":{"row":39,"column":24},"action":"insert","lines":["t"]},{"start":{"row":39,"column":24},"end":{"row":39,"column":25},"action":"insert","lines":["a"]},{"start":{"row":39,"column":25},"end":{"row":39,"column":26},"action":"insert","lines":["m"]},{"start":{"row":39,"column":26},"end":{"row":39,"column":27},"action":"insert","lines":["i"]},{"start":{"row":39,"column":27},"end":{"row":39,"column":28},"action":"insert","lines":["n"]}]]},"ace":{"folds":[],"scrolltop":560.1163281250001,"scrollleft":0,"selection":{"start":{"row":34,"column":13},"end":{"row":34,"column":13},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1680319644693}