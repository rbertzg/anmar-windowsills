import SpinnerIcon from 'components/shared/icons/Spinner'

interface SubmitButtonProps {
  isSubmitting: boolean
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="flex w-full items-center justify-center gap-2 rounded-md bg-primary-500 py-2 text-sm text-white shadow outline-none duration-200 focus-visible:bg-primary-400 enabled:hover:bg-primary-400 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-70 lg:w-36"
    >
      {isSubmitting && (
        <SpinnerIcon
          size={20}
          weight="regular"
          className="animate-spin"
        />
      )}
      {isSubmitting ? 'Wysyłanie' : 'Wyślij wiadomość'}
    </button>
  )
}

export default SubmitButton
