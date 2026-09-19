'use client'

import { useRouter } from 'next/navigation'

export default function CloseModalButton() {
  const router = useRouter()

  function closeModal() {
    router.back()
  }

  return (
    <button
      type="button"
      onClick={closeModal}
      className="mt-6 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950"
    >
      Close
    </button>
  )
}
