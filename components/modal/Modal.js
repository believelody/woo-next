import { useEffect } from "react"
import { useAppHooks } from "../../context/AppContext"

const Modal = () => {
  const {useModal: [modal, setModal]} = useAppHooks()

  const handleAction = () => {
    modal.action.method()
    setModal(null)
  }

  useEffect(() => {
    if (modal) {
      $("#modalTest").modal("toggle")
    }
  }, [modal])

  return (
    modal &&
    <div className="modal fade"
      tabIndex={-1}
      id="modalTest"
      aria-labelledby="modalLabel"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalTestLabel">{modal.title}</h5>
          </div>
          <div className="modal-body">
            <p>{modal.body}</p>
          </div>
          <div className="modal-footer">
            <button onClick={() => setModal(null)} className="btn btn-secondary" data-dismiss="modal">{modal.dismiss || "Close"}</button>
            <button onClick={handleAction} className={`btn btn-${modal.action.role}`} data-dismiss="modal">{modal.action.text}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
