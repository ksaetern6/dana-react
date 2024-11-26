import { Link } from "react-router-dom"
import { snakeCase } from "../lib/utils"

interface ArticleBlockProps {
    article: Article
    colSpan?: string
    showSummary?: boolean
    showBorder?: boolean
    asHeader?: header
}

export interface Article {
    headline: string,
    summary: string,
    readTime: number,
    arthur?: string,
}

type header = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl'

type borderValue = '' | 'border-b'

export default function ArticleBlock({ article, colSpan, showSummary, showBorder, asHeader }: ArticleBlockProps): React.ReactElement {
    const colSpanValue: string = colSpan ?? 'col-span-1'
    const showSummaryValue: boolean = showSummary ?? true
    const showBorderValue: borderValue = showBorder == false ? '' : 'border-b'
    const asHeaderValue: header = asHeader ?? 'text-2xl'

    return (
        <>
            <div className={colSpanValue}>
                <div className={`${showBorderValue} pb-6`}>
                    { article.arthur
                        ? (<p className="text-gray-400 font-bold">{article.arthur}</p>)
                        : (<></>)
                    }
                    <h2 className={`${asHeaderValue} font-bold text-left`}>
                        <Link to={snakeCase(article.headline)} className="hover:text-black hover:opacity-60">{ article.headline }</Link>
                    </h2>
                    <div className="article-summary">
                        { showSummaryValue 
                            ? (
                                <p className={`pt-2 text-left text-base`}>
                                    { article.summary }
                                </p>
                            ) 
                            : (
                                <></>
                            )
                        }
                        <div className="article-time uppercase pt-2 text-xs text-left">{ article.readTime } min read</div>
                    </div>
                </div>
            </div>
        </>
    )
}