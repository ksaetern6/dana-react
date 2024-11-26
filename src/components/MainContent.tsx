import React from "react";
import home1 from "../assets/ff14-home-1.jpg";
import chickenSauce from "../assets/ff-chicken-sauce.jpg";
import ArticleRowBlock from "./ArticleRowBlock";
import ArticleBlock, { Article } from "./ArticleBlock";
import { ArticleImageAttributes } from "./ArticleImage";
import HeaderLink from "./Header/HeaderLink";

export default function MainContent(): React.ReactElement {
    const foodLinks = [
        {id: 1, name: "thanksgiving", primary: true }, 
        {id: 2, name: "Our Best Recipes" },
        {id: 3, name: "Make-Ahead" },
        {id: 4, name: "Vegetarian Dishes" },
        {id: 5, name: "Pies" },
        {id: 6, name: "Potato Sides" },
        {id: 7, name: "Popular Sides" },
        {id: 8, name: "Turkey" },
    ]

    interface ArticleBlock {
        article: Article,
        image: ArticleImageAttributes,
    }

    const articleOne: ArticleBlock = {
        article: {
            headline: "Investigation Into Warriors of Light And Overdue Chocobo Rental Fees",
            summary: "In a shocking turn of events, the famed Warriors of Light—defenders of Eorzea—are under investigation for allegedly skipping out on chocobo rental fees across several regions. While the adventurers are often hailed as heroes, this mounting pile of unpaid debts has left stablemasters squawking. Is this a mere oversight amid their world-saving duties, or is there a darker tale of negligence behind the feathers? Our exclusive dive into stable ledgers and eyewitness accounts might just ruffle some plumage.",
            readTime: 5
        },
        image: {
            imageSrc: home1,
            caption: "Warriors of Light/The Crystal Times"
        }
    }

    const articleTwo: Article = {
        headline: "Feathers and Fees: Did the Warriors of Light Forget to Pay Their Dues?",
        summary: "",
        readTime: 5
    }

    const articleThree: Article = {
        headline: "Heroes or Freeloaders? Chocobo Rentals Claim Warriors of Light Owe Big Gil!",
        summary: "",
        readTime: 5
    }

    const articleFour: Article = {
        headline: "Chocobo Gate: Stablemasters Speak Out Against the Warriors of Light",
        summary: "",
        readTime: 5
    }

    const articleFive: Article = {
        headline: "From Champions to Cheapskates? The Truth Behind the Warriors of Light's Rental Scandal",
        summary: "",
        readTime: 5
    }

    const articleSix: ArticleBlock = {
        article: {
            headline: "The Secret To Ignis' Chicken Sauce Recipe",
            summary: "In a shocking turn of events, the famed Warriors of Light—defenders of Eorzea—are under investigation for allegedly skipping out on chocobo ",
            readTime: 5
        },
        image: {
            imageSrc: chickenSauce,
            caption: "Ignis' Chicken Sauce/The Crystal Times"
        }
    }
    return (
        <>
            <div className='col-span-3 md:pr-2 px-8'>
                <div className="border-b border-black pb-4">
                    <ArticleRowBlock article={articleOne.article} image={articleOne.image} />
                    
                    {/*   */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 text-left text-xl font-bold pt-2">
                        <div>
                            <ArticleBlock article={articleTwo} showSummary={ false} showBorder={ false } />
                        </div>
                        <div className="pl-6 border-l">
                            <ArticleBlock article={articleThree} showSummary={ false} showBorder={ false } />
                        </div>

                        <div>
                            <ArticleBlock article={articleFour} showSummary={ false} showBorder={ false } />
                        </div>
                        <div className="pl-6 border-l">
                            <ArticleBlock article={articleFive} showSummary={ false} showBorder={ false } />
                        </div>


                    </div>
                </div>
                
                <div className="border-b border-black pb-4 pt-4">
                    <div className="pb-8">
                        <ul className="flex flex-row capitalize nav-links text-sm">
                            {
                                foodLinks.map((link) => (
                                    <HeaderLink key={link.id} name={link.name} primary={link?.primary} />
                                ))
                            }
                        </ul>
                        
                    </div>
                    <ArticleRowBlock article={articleSix.article} image={articleSix.image} showBorder={false}/>
                </div>
          </div>
        </>
    )
}