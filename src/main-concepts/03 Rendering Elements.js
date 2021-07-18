// Elements are the smallest building blocks of React apps.
//  Elements are what components are “made of”
const Render = () => {
    return (<h1>Hi this is root 2</h1>)
}

const Tick = () => {
    return (
        <div>
        <h1>Hello, Navdeep !</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}

export {Render, Tick};