import Article from "../Article/Article";
import Video from "../Video/Video";
import Highlighted from "../Highlighted/Highlighted";


export default function List(props) {
    const HighlightedVideos = Highlighted(Video);
    const HighlightedArticle = Highlighted(Article);

    return props.list.map(item => {
        if (item.type === "video") {
            return (
                <HighlightedVideos {...item} />
            )
        }
        if (item.type === "article") {
            return (
                <HighlightedArticle {...item} />
            )
        }
    })
}