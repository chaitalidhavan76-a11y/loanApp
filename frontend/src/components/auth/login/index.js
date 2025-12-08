import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

const LoginModal = ({ onClose, onSwitch }) => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  const sendOtp = () => {
    if (mobile.length !== 10) return;
    setStep(2);
  };

  const verifyOtp = () => {
    if (otp.length !== 6) return;
  };

  return (
    <div className="myOverlay" onClick={onClose}>
      <div className="myModal" onClick={(e) => e.stopPropagation()}>

        <button className="myClose" onClick={onClose}><RxCross2 /></button>

        {step === 1 && (
          <>
            <h2 className="login-title">Login to your account</h2>

            <button className="login-google-btn">
              <FcGoogle />
              <span>Continue with Google</span>
            </button>

            <div className="login-divider">
              <span>or continue with mobile number</span>
            </div>

            <div className="login-field mobile-field">
              <span className="flag">🇮🇳</span>
              <input
                type="tel"
                maxLength={10}
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <button className="action-btn" onClick={sendOtp}>
              Get OTP
            </button>

            <p className="tnc-text">
              By continuing, you agree to our{" "}
              <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>.
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="login-title">Verify OTP</h2>
            <p className="otp-sub">OTP sent to +91 {mobile}</p>

            <input
              className="otp-input"
              type="tel"
              maxLength={6}
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button className="action-btn" onClick={verifyOtp}>
              Verify & Continue
            </button>

            <button className="resend-btn" onClick={sendOtp}>
              Resend OTP
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default LoginModal;
