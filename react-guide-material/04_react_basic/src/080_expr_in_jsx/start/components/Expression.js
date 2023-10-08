import "./Expression.css"

const Expression = () => {
    const title = "Expression"
    const arry = ["one", "two", "three"]
    const hello = (arg) => `${arg} Function`
    const jsx = <p>JSX</p>

    return (
        <div className={title.toLowerCase()}>
            <h3>Hello {title}</h3>
            <h3>{arry}</h3>
            <h3>{hello('Hello')}</h3>
            <h3>{jsx}</h3>
        </div>
    )
}
export default Expression