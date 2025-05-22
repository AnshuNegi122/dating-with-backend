import { toast } from "react-toastify"

// Custom toast functions with love theme
export const showLoveToast = {
  success: (message) => {
    toast.success(message, {
      icon: "💖",
      style: {
        borderRadius: "10px",
        background: "#fff",
        color: "#333",
      },
    })
  },

  error: (message) => {
    toast.error(message, {
      icon: "💔",
      style: {
        borderRadius: "10px",
        background: "#fff",
        color: "#333",
      },
    })
  },

  info: (message) => {
    toast.info(message, {
      icon: "💌",
      style: {
        borderRadius: "10px",
        background: "#fff",
        color: "#333",
      },
    })
  },

  warning: (message) => {
    toast.warning(message, {
      icon: "💭",
      style: {
        borderRadius: "10px",
        background: "#fff",
        color: "#333",
      },
    })
  },

  // Special love-themed toasts
  match: (message) => {
    toast.success(message, {
      icon: "❤️",
      style: {
        borderRadius: "10px",
        background: "linear-gradient(135deg, #fecdd3 0%, #fbcfe8 100%)",
        color: "#be185d",
        fontWeight: "500",
      },
    })
  },

  heartbreak: (message) => {
    toast.error(message, {
      icon: "💔",
      style: {
        borderRadius: "10px",
        background: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)",
        color: "#b91c1c",
        fontWeight: "500",
      },
    })
  },

  message: (message) => {
    toast.info(message, {
      icon: "💌",
      style: {
        borderRadius: "10px",
        background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
        color: "#0369a1",
        fontWeight: "500",
      },
    })
  },
}

// Example usage:
// showLoveToast.success("Login successful!")
// showLoveToast.match("You have a new match!")
// showLoveToast.message("You have a new message!")
