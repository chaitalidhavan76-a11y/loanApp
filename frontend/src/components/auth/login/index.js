import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginModal = ({ onClose, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="myOverlay" onClick={onClose}>
      <div className="myModal" onClick={(e) => e.stopPropagation()}>
        <button className="myClose" onClick={onClose}>
          <RxCross2 />
        </button>

        <h2 className="loginTitle">Login to your account</h2>

        <button className="googleBtn">
          <FcGoogle />
          Continue with Google
        </button>

        <div className="divider">or continue with email</div>

        <div className="inputWrap">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputWrap passwordWrap">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setShowPass(!showPass)}>
            {showPass ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <button className="loginBtn">Login</button>

        <p className="switchText">
          Don’t have an account?{" "}
          <span onClick={onSwitch}>Create one</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
