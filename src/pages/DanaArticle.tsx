import ArticleLayout from "../layouts/ArticleLayout"
import bruno from "../assets/bruno.webp"
import ReactMarkdown from 'react-markdown';
import danaContent from "../markdown/dana.md?raw"
import logo from "../assets/the-coerthan- herald-logo.png"
import { Link } from "react-router-dom";

export default function DanaArticle(): React.ReactElement {
    return (
        <>
            <ArticleLayout>
                <main>
                    <article>
                        <header className="text-center mx-auto">
                            <section>
                                <div className="flex justify-center py-4 border-b">
                                    <Link to="/"><img src={logo} className="w-[250px]"></img></Link>
                                </div>
                            </section>
                            <div className="md:w-[600px] text-left border-b mx-auto pt-8">
                                <h1 className="text-[2.9375rem] leading-[3.4375rem] pb-4">Sheridan students interviewed for reasons.</h1>
                                <div className="text-2xl pb-12 opacity-85">
                                    Eric Kim roasted dozens of birds and taste-tested eight different recipes before landing on this clever approach.
                                </div>
                            </div>
                            
                            <figure className="w-full pt-8 flex justify-center">
                                <picture>
                                    <img src={bruno} width="1000px"></img>
                                    <figcaption className="text-left text-lg font-imperial">
                                        Peppers and onions roasted along with the turkey make for a no-fuss side dish.
                                    </figcaption>
                                </picture>
                            </figure>
                            
                            <div className="flex mx-auto max-w-[600px] font-franklin">
                                <div className="grid grid-cols-12 gap-2 py-4">
                                    <div className="col-span-1 border-2 border-black rounded-full">
                                        
                                    </div>
                                    <div className="col-span-11 text-left">
                                        <p className="font-bold">By Katie Ella</p>
                                        <p className="leading-5">
                                            For more than 20 years, Eric Kim has been in charge of cooking his family’s Thanksgiving dinner. This is his new favorite turkey recipe to date.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-[600px] m-auto text-left font-franklin text-sm">
                                Nov. 21, 2024
                            </div>
                            
                        </header>
                        <section className="md:w-[600px] m-auto">
                            <div className="md:text-2xl text-xl leading-[1.875rem]">
                                <div className="pt-4 pb-8 whitespace-pre-wrap text-wrap">
                                    <ReactMarkdown>{danaContent}</ReactMarkdown>
                                </div>
                            </div>
                        </section>
                    </article>
                </main>
            </ArticleLayout>
        </>
    )
}