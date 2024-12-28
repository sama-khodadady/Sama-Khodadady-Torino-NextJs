"use client";

import { useState } from "react";
import SendOtp from "@/ui/molecule/SendOtp";
import CheckOtp from "@/ui/molecule/CheckOtp";
import { useAuth } from "@/providers/AuthContext";
import styles from "@/template/SignInModal.module.css";

function SignInModal() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  const { isOpen } = useAuth();

  return (
    <>
      {isOpen && (
        <div className={`${styles.modal} ${isOpen ? styles.fadein : null}`}>
          {step === 1 && (
            <SendOtp
              setStep={setStep}
              setMobile={setMobile}
              setCode={setCode}
            />
          )}
          {step === 2 && (
            <CheckOtp
              code={code}
              setCode={setCode}
              mobile={mobile}
              setStep={setStep}
            />
          )}
        </div>
      )}
    </>
  );
}

export default SignInModal;
