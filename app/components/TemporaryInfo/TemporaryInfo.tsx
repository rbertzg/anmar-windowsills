'use client'

import XIcon from 'components/shared/icons/X'
import Container from 'components/shared/layout/Container'
import { useState } from 'react'

const TemporaryInfo = () => {
  const [isShown, setIsShown] = useState(true)

  return (
    isShown && (
      <div className="relative bg-primary-700 bg-gradient-to-b from-primary-900 to-primary-600 py-1 text-center text-sm font-medium text-white">
        <Container>
          <p className="px-4">
            Szanowni klienci, informujemy, że w dniach od 31 lipca do 6 sierpnia
            nastąpi przerwa w produkcji oraz dystrybucji parapetów. Produkcja
            zostanie wznowiona z dniem 7 sierpnia. Prosimy o uwzględnienie tego
            terminu podczas składania zamówień. Przepraszamy za utrudnienia.
          </p>
        </Container>
        <button
          onClick={() => setIsShown(false)}
          className="absolute right-1 top-1"
        >
          <XIcon
            size={20}
            weight="fill"
          />
        </button>
      </div>
    )
  )
}

export default TemporaryInfo
