const Post = (props) => {  //const Post =({post})
    const { post } = props; // delete
    return (
        <div className="col-5 bg-dark p-3 m-1 shadow-lg rounded-2">
            <h4>{post.title.substr(0, 30)}</h4>
            <p>{post.body.substr(0, 100)}</p>
        </div>
    );
}

export default Post;