
import "./styles/header.scss";
import { PostsList } from "./PostsList";
import { Profile } from "./Profile";

const Post = () => {
    return <section className="home-wrapper">
        <Profile />
        <PostsList />
    </section>
}

export default Post;