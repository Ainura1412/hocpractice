import withCounter from './withCounter'

function InputForm({ counter, setCounter }) {
    return (
        <div> <input onChange={(e) => setCounter(e.target.value.length)} />this is has {counter} character</div>
    )
}
export default withCounter(InputForm)

