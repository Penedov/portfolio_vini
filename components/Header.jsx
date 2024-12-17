import Link from "next/link"
import {Button} from "./ui/button"

//components
import Nav from "./Nav"

const Header = () => {
    return (
        <header className="pv-8 xl:pv-12 text-white">
            <div className="conteiner mx-auto flex justify-between itens-center">
                <Link href="/">
                    <h1 className="text-4x1 font-semibold">
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