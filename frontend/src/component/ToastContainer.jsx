import { ToastContainer as ReactToastContainer, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useEffect } from "react"
import "./toast-styles.css"

export default function ToastContainer() {
  // Add custom class to body when component mounts
  useEffect(() => {
    // This allows our custom CSS to override the default toast styles
    document.body.classList.add("amour-toast-theme")
    
    return () => {
      document.body.classList.remove("amour-toast-theme")
    }
  }, [])

  return (
    <ReactToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
      icon={({ type }) => {
        if (type === "success") return "💖"
        if (type === "error") return "💔"
        if (type === "info") return "💌"
        if (type === "warning") return "💭"
        return "💘"
      }}
      toastClassName="amour-toast"
      bodyClassName="amour-toast-body"
      progressClassName="amour-toast-progress"
      closeButton={({ closeToast }) => (
        <button onClick={closeToast} className="amour-toast-close-button">
          ✕
        </button>
      )}
    />
  )
}
