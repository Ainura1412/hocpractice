
import withCounter from './withCounter'
function Counter({ counter, setCounter }) {
    return (
        <>
            <div>Counter{ }</div>
            <button onClick={() => setCounter(prev => prev + 1)}>Add One </button>
        </>
    )
}

export default withCounter(Counter)