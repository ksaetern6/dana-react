import HeaderLink from "./Header/HeaderLink"
import Nav from "./Header/Nav"
import logo from "../assets/the-coerthan- herald-logo.png"

export default function Header() {
    
    const countries = [
        {id: 1, name: "u.s.", primary: true}, 
        {id: 2, name: "international"}, 
        {id: 3, name: "canada"}, 
        {id: 4, name: "espanol"}, 
        {id: 5, name: "japan"},
    ];

    return (
        <>
            <header className="max-w-[1200px] m-auto">
                <section className="pt-2">
                    <div>
                        <ul className="flex flex-row uppercase text-xs justify-center">
                            {countries.map((country) => 
                                (<HeaderLink key={country.id} name={country.name} primary={country?.primary} />))}
                        </ul>
                    </div>
                </section>
                <section className="pt-2">
                    <div className="flex justify-center">
                        <img src={logo} className="md:w-[500px] w-[250px]"></img>
                    </div>
                </section>
                <div className="pt-4 pb-1 border-b border-black">
                    <Nav></Nav>
                </div>
            </header>
        </>
    )
}