import { useState } from "react";

/**
    1. useState and it's async nature
    2. useState with non primitive data types ( {}, [] )
    3. Assignments on useState
 */
let names = ["Aravind", "Rajesh"];
// const App = () => {
//     const [index, setIndex] = useState(0);

//     const changeName = () => {
//         console.log("before update ", index); // 0
//         setIndex(index === 0 ? 1 : 0);
//         console.log("after update: ", index); // 0
//     }

//     return (
//         <div>
//             <button onClick={changeName}>Change Name</button>
//             <span>{names[index]}</span>
//         </div>
//     )
// };

// The state updates in React component are asynchronous in nature. as the component will not be re rendered immediately after we call setState method. instead react schedules the re render after all updates are collected into a queue.

// in n'th render if you updates in the state , all those updates will be executed in the (n+1)th render.

// [ 12, 11, 1 ]
// const App = () => {
//     // const [count, setCount] = useState(10);
//     const [obj, setObj] = useState({ name: "aravind" });
//     // first render: obj = #500 = { name: "aravind" }
//     console.log("rendered");


//     // const [count, setCount] = useState(10);
//     // console.log("rendered");

//     const updateCount = () => {
//         // console.log(count);
//         // setCount(count + 2);
//         // setCount(count + 1);
//         // setCount(count - 9);
//         // console.log(count);
//         // obj.name = "Rajesh";
//         // // obj = #500 => { name: "Rajesh" }
//         // setObj(obj);  // setObj(#500)
//         obj.name = "Rajesh";
//         setObj({ ...obj })
//         // setObj({ name: "Rajesh" }); // 
//     }

//     return (
//         <div style={{ margin: 100 }}>
//             <span>{JSON.stringify(obj)}</span>
//             <button onClick={updateCount}>Update Count</button>
//         </div>
//     )
// }


// when we are controlling the value of an input in React, make sure update the value of input on onChange event.

// if we are not controlling the input's value then , input will behave normally
// const Input = () => {
//     const [name, setName] = useState("Aravind");
//     const [name2, setName2] = useState("Rajesh");

//     const changeName1 = (e) => {
//         setName(e.target.value);
//         setName2("Vivek");
//     };

//     const changeName2 = (e) => setName2(e.target.value);

//     return <>
//         <input value={name} onChange={changeName1} />
//         <input value={name2} onChange={changeName2} />
//     </>
// }
const relations = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"]
function findRelation(name1, name2) {
    // calculate frequency for name1 
    let map = {};
    let n = name1.length, m = name2.length;
    for (let i = 0; i < n; i++) {
        let char = name1[i];
        if (map[char]) {
            map[char]++;
        }
        else map[char] = 1;
    }

    let common = 0;
    for (let i = 0; i < m; i++) {
        let char = name2[i];
        if (map[char]) {
            map[char]--;
            common++;
        }
    }
    return relations[(n + m - 2 * common) % 6]
}

const FlamesApp = () => {
    // 2 inputs 
    // 2 buttons 
    // 1 result text

    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [relation, setRelation] = useState('');

    const calculate = () => {
        setRelation(findRelation(name1, name2))
    }
    const clear = () => {
        setName1('');
        setName2('');
        setRelation('')
    }

    return (
        <div style={{ margin: 100 }}>
            <input
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                placeholder="Enter first name"
                data-testid="input1"
            />
            <input
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                placeholder="Enter second name"
                data-testid="input2"
            />
            <button
                data-testid="calculate_relationship"
                onClick={calculate}
            >Calculate Relationshuip Future</button>
            <button
                onClick={clear}
                data-testid="clear"
            >Clear</button>
            {relation && <h3 data-testid="answer">{relation}</h3>}
        </div>
    );
}


export default FlamesApp;