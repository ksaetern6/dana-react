import Header from "../components/Header.tsx";

interface HomeLayoutProps {
    children: React.ReactNode;
  }

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <>
            <title>The Coerthan Herald</title>
            <div>
                <Header />
                <main>
                    <div className='pt-6 grid md:grid-cols-4 md:gap-2 grid-cols-1 max-w-[1200px] m-auto'>
                        { children }
                    </div>
                </main>
            </div>
        </>
    )
}