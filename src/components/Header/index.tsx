import { HeaderContainer } from "./styles";
import { TbBrandNextjs } from 'react-icons/tb'
import { FiUser, FiSearch } from 'react-icons/fi'

import Link from "next/link";

export default function Header() {
    return (
        <HeaderContainer>
            <div>
                <Link href="/">
                    <TbBrandNextjs size={40} />
                </Link>
                <div>
                    <FiSearch size={20} />
                    <input type="text" placeholder="Para onde você quer ir?" />
                </div>
            </div>

            <Link href="/">
                <FiUser size={40} />
            </Link>

        </HeaderContainer>
    )
}