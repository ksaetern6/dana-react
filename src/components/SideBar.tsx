import React from "react";
import quay from "../assets/quay.jpg"
import ArticleImage from "./ArticleImage";
import ArticleBlock, { Article } from "./ArticleBlock";

export default function SideBar(): React.ReactElement {

    const ArticleOneSideBar: Article = {
        headline: "Qua'dlin Quay: Oasis of Indulgence or Overpriced Tourist Trap?",
        summary: "Nestled along the shimmering coastline, Galdin Quay boasts breathtaking views, fresh seafood, and a luxurious escape for travelers in Eos. But is this seaside paradise worth the gil? ",
        readTime: 5,
    }

    const ArticleTwoSideBar: Article = {
        headline: "Lavish or Looted? The True Cost of Dining at Costa del Sol",
        summary: "",
        readTime: 5,
    }
    
    const ArticleThreeSideBar: Article = {
        headline: "Forgotten Isle or Hidden Gem? The Untold Stories of Hullbreaker Isle",
        summary: "",
        readTime: 5,
    }

    const ArticleFourSideBar: Article = {
        headline: "A Feast for Few: The Exclusivity of The Bismarck's Private Dining Club",
        summary: "",
        readTime: 5,
        arthur: "L'ren Tia"
    }
    
    const ArticleFiveSideBar: Article = {
        headline: "The Sands of Time: Uncovering Lost Relics Beneath the Sagolii Desert",
        summary: "",
        readTime: 5,
        arthur: "J'nara Vohl"
    }

    return (
        <>
            <div className='text-left col-span-1 border-l md:pl-4 px-8'>
                <ArticleImage imageSrc={quay} caption="Prompto for The Crystal Times"/>

                <ArticleBlock article={ArticleOneSideBar} />

                <div className="grid grid-cols-2 pt-2 pb-4 border-b border-black">
                    <div>
                        <ArticleBlock 
                            article={ArticleTwoSideBar} 
                            asHeader="text-lg"
                            showSummary={ false} 
                            showBorder={ false } />
                    </div>
                    <div className="pl-6 border-l">
                        <ArticleBlock 
                            article={ArticleThreeSideBar} 
                            asHeader="text-lg"
                            showSummary={ false} 
                            showBorder={ false } />                    
                    </div>
                </div>

                <div className="grid grid-cols-1 grid-rows-2 pt-2 border-b border-black">
                    <div className="pt-2">
                        <ArticleBlock 
                            article={ArticleFourSideBar} 
                            asHeader="text-lg"
                            showSummary={ false} 
                            showBorder={ false } />
                    </div>
                    <div className="border-t pt-6">
                        <ArticleBlock 
                            article={ArticleFiveSideBar} 
                            asHeader="text-lg"
                            showSummary={ false} 
                            showBorder={ false } />                    
                    </div>

                </div>

            </div>
        </>
    )
}