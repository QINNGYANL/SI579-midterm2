import { useState } from "react";
export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';
//let IS_EMPTY = true;
export function Problem () {
    const initial = localStorage.getItem("save_click_time");
    let initial_number = 0;
    if (initial !== null) {
        initial_number = JSON.parse(initial);
    }
    const [clicknumber, setClicknumber] = useState(initial_number);
    function updatenumber(){
        //setClicknumber(clicknumber + 1);
        //console.log(clicknumber);
        const stringtifiedclicknumber = JSON.stringify(clicknumber + 1);
        localStorage.setItem("save_click_time", stringtifiedclicknumber);
        setClicknumber(JSON.parse(localStorage.getItem("save_click_time")));
        
    }
    // const savednumber = localStorage.getItem("save_click_time");
    // if(savednumber !== null){
    //     const initialnumber = JSON.parse(savednumber);
    //     //setClicknumber(initialnumber);
    // }
    function reset(){
        const stringtifiedclicknumber = JSON.stringify(0);
        localStorage.setItem("save_click_time", stringtifiedclicknumber);
        setClicknumber(JSON.parse(localStorage.getItem("save_click_time")));
    }




    return <div className="btn-group">
            <button className="btn btn-primary"  onClick={updatenumber}>Clicked {clicknumber} time{clicknumber!==1 && 's'}</button>
            <button className="btn btn-secondary" onClick={reset}>Reset</button>
        </div>;
    ;
}