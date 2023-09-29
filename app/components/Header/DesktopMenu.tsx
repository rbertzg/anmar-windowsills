import ButtonLink from './ButtonLink'
import TextLink from './TextLink'

const DesktopMenu = () => {
  return (
    <ul className="hidden items-center gap-2 lg:flex">
      <li>
        <TextLink href="/">Strona główna</TextLink>
      </li>
      <li>
        <TextLink href="/o-nas">O nas</TextLink>
      </li>
      <li>
        <TextLink href="/parapety">Parapety</TextLink>
      </li>
      <li>
        <TextLink href="/#opinie">Opinie</TextLink>
      </li>
      <li className="ml-4">
        <ButtonLink href="/#formularz-kontaktowy">
          Skontaktuj się z nami
        </ButtonLink>
      </li>
    </ul>
  )
}

export default DesktopMenu
