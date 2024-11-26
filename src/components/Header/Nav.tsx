import Category from "./Nav/Category";

export default function Nav() {

    const categories = [
        {id: 1, name: "u.s."}, 
        {id: 2, name: "world"}, 
        {id: 3, name: "business"}, 
        {id: 4, name: "art"}, 
        {id: 5, name: "lifestyle"},
    ];

    return (
        <>
            <nav role="navigation" aria-label="main">
                <div className="border-b border-black">
                    <ul className="flex flex-row justify-center pb-4">
                        {categories.map((category) => (
                            <Category categoryName={category.name} key={category.id} />
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}