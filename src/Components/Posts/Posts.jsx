import Post from "./Post";

const Posts = ({ posts }) => {
    return (
        posts && posts.map((elem) => {
            return (
                <Post post={elem} key={elem.id} />
            )
        })
    )
}

export default Posts;