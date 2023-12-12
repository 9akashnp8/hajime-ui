import DarkGithubLogo from "../../../../assets/github-dark.svg";

export default function NavBar() {
    return (
        <nav className="pb-4">
            <ul className="flex justify-between align-center">
                <li className="font-bold" >v1.dev</li>
                <li>
                    <a href="https://github.com/9akashnp8" target="_blank">
                        <img
                            src={DarkGithubLogo}
                            alt="Github Logo"
                            className="h-8"
                        />
                    </a>
                </li>
            </ul>
        </nav>
    )
}
