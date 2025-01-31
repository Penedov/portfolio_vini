import Link from "next/link"
import {Button} from "./ui/button"

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav"


const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/*Logo*/}
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                        Vini <span className="text-accent">.</span>
                    </h1>
                </Link>
                
                {/*Desktop nav e botão hire me */}
                <div className="hidden lg:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                <Button>Hire me</Button>
                </Link>
                </div>

                {/*Mobile Nav*/}
                <div className="lg:hidden">
                    <MobileNav />
                </div>

                </div>
        </header>
    )
}

export default Header