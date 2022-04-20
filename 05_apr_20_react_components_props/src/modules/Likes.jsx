
function Likes({likes}){

    return (
        <div>
            <h3>Gillar</h3>
            <ul>
                {likes.map(
                    function(like){
                        return<li>{like}</li>
                    }
                )}
            </ul>
        </div>
    )
}

export default Likes;