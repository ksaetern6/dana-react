interface ArticleLayoutProps {
    children: React.ReactNode
}

export default function ArticleLayout({ children }: ArticleLayoutProps): React.ReactElement {
    return (
        <>
            { children }
        </>
    )
}