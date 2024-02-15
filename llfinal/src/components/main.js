

function Main() {
    return <main id="maingrid">
        <div id="hero">
            <h1>Little Lemon</h1>
            <h3>Detroit</h3>
            <p>The Little Lemon's greatest location located in the heart of dowtown Detroit. Right by Comerica Park and Ford Field.</p>
            <button>Reserve Table</button>
        </div>
        <div id='heropicdiv'><img id='heropic' src={process.env.PUBLIC_URL + '/images/restfood.jpg'}></img></div>
        <div id="specials"><h2>Specials for this week! </h2></div>
        <button id="menubutton">Online Menu</button>
        <div id="special1">
            <img id='specialpic' src={process.env.PUBLIC_URL + '/images/greek salad.jpg'}></img>
            <h4>Greek Salad</h4> <p>The famous greek salad with lettuce and other stuff</p>
        </div>
        <div id="special2">
            <img id='specialpic' src={process.env.PUBLIC_URL + '/images/bruchetta.jpg'}></img>
            <h4>Bruchetta</h4><p>Grilled bread that has been smeared with garlic</p>
        </div>
        <div id="special3">
            <img id='specialpic' src={process.env.PUBLIC_URL + '/images/lemon dessert.jpg'}></img>
            <h4>Lemon Dessert</h4>A lemon cake with a bunch of sugar and stuff
        </div>
        <div id="testimonial"><h3>Testimonials</h3></div>
        <div id="testimonial1"><h5>Rating</h5><p>Name</p><p>Review Text</p></div>
        <div id="testimonial2"><h5>Rating</h5><p>Name</p><p>Review Text</p></div>
        <div id="testimonial3"><h5>Rating</h5><p>Name</p><p>Review Text</p></div>
        <div id="testimonial4"><h5>Rating</h5><p>Name</p><p>Review Text</p></div>
        <div id="about"><h1>Little Lemon</h1>
            <h3>Detroit</h3>
            <p>The Little Lemon's greatest location located in the heart of dowtown Detroit. Right by Comerica Park and Ford Field.</p>
            </div>
        </main>
}

export default Main;