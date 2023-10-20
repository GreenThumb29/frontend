
const NewsLetterInput = () => {
    return(
    <div className="mt-6">
        <h3 className="text-app.yellow text-lg font-medium">Subscribe to our newsletter !</h3>
        <div className=" bg-app.yellow mt-2">
        <input className=" bg-app.green border text-app.yellow border-app.yellow placeholder:text-app.yellow px-3 py-2" name = "" placeholder="tapan@savenegry.com" type="email" />
        <button className="px-3 border border-app.yellow">Subscribe</button>
        </div>
    </div>)
}

export default NewsLetterInput