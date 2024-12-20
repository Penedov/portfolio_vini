import Link from "next/link"
import {Button} from "./ui/button"

//components
import Nav from "./Nav"

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                        Vini
                        <span className="text-accent">.</span>
                    </h1>
                </Link>

                {/*Desktop nav e botão hire me */}
                <div className="hidden xl:flex itens-center gap-8" ></div>
                <Nav/>
                <Link href="/contact">
                    <Button>
                        Hire me
                    </Button>
                </Link>
            </div>
            <div>
                <div className="xl:hidden">Mobile Nav</div>
            </div>
        </header>
    )
}

export default Header