import ArticleBlock, { Article } from "./ArticleBlock"
import ArticleImage, { ArticleImageAttributes } from "./ArticleImage"

interface ArticleRowBlockProp {
    article: Article,
    image: ArticleImageAttributes
    showBorder?: boolean
}



export default function ArticleRowBlock({ article, image, showBorder }: ArticleRowBlockProp): React.ReactElement {
    return (
        <>
            <div className="grid grid-cols-7 gap-4">
                <ArticleBlock article={article} colSpan="col-span-3" showBorder={showBorder}/>

                <div className="col-span-4">
                    <ArticleImage imageSrc={image.imageSrc} caption={image.caption} />
                </div>
            </div>
        </>
    )
}