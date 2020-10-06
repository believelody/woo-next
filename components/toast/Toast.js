import { useEffect } from "react"

const { useAppHooks } = require("../../context/AppContext")

const Toast = () => {
    const {useToast: [toast, setToast]} = useAppHooks()

    useEffect(() => {
        if (toast) {
            $("#toastTest").toast({ delay: 4000 })
            $("#toastTest").toast("show")
            // setTimeout(() => {setToast(null)}, 4000)
        }
    }, [toast])

    return (
        toast &&
        <div
            className="position-fixed fixed-bottom d-flex justify-content-center align-items-end pb-2"
            aria-live="polite"
            aria-atomic="true"
        >
            <div
                className={`toast fade bg-${toast.role} rounded`}
                id="toastTest"
            >
                <div className="toast-header">
                    <strong className="mr-auto">{toast.title}</strong>
                    <button
                        type="button"
                        className="ml-2 mb-1 close"
                        aria-label="Close"
                        onClick={() => setToast(null)}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    {toast.body}
                </div>
            </div>
        </div>
    )
}

export default Toast