import React, {useRef} from "react"

const RefHook = () => {
    const inputRef = useRef(null);

    const handleCkick = () => {
        console.log(inputRef)
        inputRef.current.focus();
        inputRef.current.value = 'test';

    }
return(
    <>
    <div>UseRef hook</div>
    <input type="text" ref={inputRef} />
    <button onClick={handleCkick}>start typing...</button>
    </>
)
}

export {RefHook}