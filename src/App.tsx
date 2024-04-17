
import './App.css'

function App() {


    return (
        <>
            <main>
                <Blog/>

            </main>
        </>

    )
}

export default App

function Blog() {
    return <div className="content">
        <div className="introduction flex">
            <h1>Hello World</h1>
            <p>
               Parggg
                gggg
                ggggg
                ggggg

                ggg
            </p>

    </div>
    <div className="comment">
        <h3>Leave a Comment</h3>
        <form>
            <label htmlFor="comment">Comment:</label><br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    </div>
}