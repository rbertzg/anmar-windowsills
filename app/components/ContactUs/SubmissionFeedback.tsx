import CheckCircleIcon from 'components/shared/icons/CheckCircle'
import XCircleIcon from 'components/shared/icons/XCircle'

interface SubmissionFeedbackProps {
  isSentSuccessfully: boolean
  onClose: () => void
}

const SubmissionFeedback = ({
  isSentSuccessfully,
  onClose,
}: SubmissionFeedbackProps) => {
  return (
    <div className="fixed inset-0 z-10 bg-gray-950/20 backdrop-blur">
      <div className="fixed inset-5 z-20">
        <div className="mx-auto max-h-full max-w-screen-md overflow-auto rounded-md shadow">
          <div
            className={`p-6 ${
              isSentSuccessfully ? 'bg-success-400' : 'bg-error-400'
            }`}
          >
            {isSentSuccessfully ? (
              <CheckCircleIcon
                size={112}
                weight="thin"
                className="mx-auto text-white"
              />
            ) : (
              <XCircleIcon
                size={112}
                weight="thin"
                className="mx-auto text-white"
              />
            )}
          </div>
          <div className="bg-white px-6 py-12">
            <strong className="mb-4 block text-center font-medium">
              {isSentSuccessfully
                ? 'Wiadomość została pomyślnie wysłana!'
                : 'Wystąpił błąd podczas wysyłania wiadomości!'}
            </strong>
            <p className="mb-6 text-center">
              {isSentSuccessfully
                ? 'Dziękujemy za wiadomość. Cieszymy się z Twojego zainteresowania i skontaktujemy się z Tobą wkrótce.'
                : 'Niestety, wystąpił problem. Prosimy spróbować ponownie później lub skorzystać z innej formy kontaktu.'}
            </p>
            <button
              type="button"
              onClick={onClose}
              className={`mx-auto block rounded-md px-4 py-1 text-white shadow outline-none duration-200 ${
                isSentSuccessfully
                  ? 'bg-success-400 hover:bg-success-300 focus-visible:bg-success-300'
                  : 'bg-error-400 hover:bg-error-300 focus-visible:bg-error-300'
              }`}
            >
              Zamknij
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmissionFeedback
