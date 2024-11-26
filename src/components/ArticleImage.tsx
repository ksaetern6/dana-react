export interface ArticleImageAttributes {
    imageSrc: string,
    caption: string
}

export default function ArticleImage({ imageSrc, caption }: ArticleImageAttributes ): React.ReactElement {
    return (
        <>
            <figure>
                <img src={imageSrc}></img>
                <figcaption aria-hidden="true">
                    { caption }
                </figcaption>
            </figure>
        </>
    )
}