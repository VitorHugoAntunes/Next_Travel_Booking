import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { FooterContainer } from './styles'

export default function Footer() {
    return (
        <FooterContainer>
            <Link href="https://github.com/VitorHugoAntunes" target={'_blank'} title="My GitHub">
                <div>
                    <BsGithub size={24} />
                    <span><strong>Vitor Hugo</strong></span>
                </div>
            </Link>
        </FooterContainer>
    )
}