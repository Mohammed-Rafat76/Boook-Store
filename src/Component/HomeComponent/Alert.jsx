import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AlertComponent() {
  const Navigate = useNavigate();

  Swal.fire({
    title: "You should log in first!",
    showCancelButton: true,
    confirmButtonText: "Log in",
    cancelButtonText: "Sign up",
  }).then((result) => {
    if (result.isConfirmed) {
      Navigate("/login");
    } else {
      Navigate("/signup");
    }
  });
}
