import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { resetPassword, error, clearErrors } = useContext(AuthContext);

  useEffect(() => {
    console.log(error);
    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();
    resetPassword({ email, new_password: newPassword });
  };

  return (
    <div className="modalMask">
      <div className="modalWrapper">
        <div className="left">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image src="/images/resume-upload.svg" alt="resume" layout="fill" />
          </div>
        </div>
        <div className="right">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h3> RESET PASSWORD </h3>
            </div>
            <form className="form" onSubmit={submitHandler}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern="^\S+@(gmail|yahoo|outlook)\.com$"
                    title="Your email is invalid"
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-key"></i>
                  <input
                    type="password"
                    placeholder="Enter the new Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    minLength={6}
                    pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$"
                    title="Password must be at least 6 characters long and contain at least one number and one special character"
                    required
                  />
                </div>
              </div>

              <div className="uploadButtonWrapper">
                <button type="submit" className="uploadButton">
                  {loading ? "Loading..." : "Reset"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
//   console.log("Reset");
//   const [email, setEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const router = useRouter();

//   const { loading, error, resetPassword, clearErrors } =
//     useContext(AuthContext);

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       clearErrors();
//     }
//   }, [error]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     resetPassword({ email, newPassword });
//   };

//   return (
//     <div className="modalMask">
//       <div className="modalWrapper">
//         <div className="left">
//           <div style={{ width: "100%", height: "100%", position: "relative" }}>
//             <Image src="/images/signup.svg" alt="register" layout="fill" />
//           </div>
//         </div>
//         {/*<div className="right">
//           <div className="rightContentWrapper">
//             <div className="headerWrapper">
//               <h2> RESET PASSWORD</h2>
//             </div>
//             <form className="form" onSubmit={submitHandler}>
//               <div className="inputWrapper">
//                 {/* <div className="inputBox">
//                   <i aria-hidden className="fas fa-user"></i>
//                   <input
//                     type="text"
//                     placeholder="Enter First Name"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="inputBox">
//                   <i aria-hidden className="fas fa-user-tie"></i>
//                   <input
//                     type="text"
//                     placeholder="Enter Last name"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="inputBox">
//                   <i aria-hidden className="fas fa-envelope"></i>
//                   <input
//                     type="email"
//                     placeholder="Enter Your Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     pattern="^\S+@(gmail|yahoo|outlook)\.com$"
//                     title="Your email is invalid"
//                     required
//                   />
//                 </div> */}
//         <div className="inputBox">
//           <i aria-hidden className="fas fa-key"></i>
//           <input
//             type="password"
//             placeholder="Enter Your Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             minLength={6}
//             pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$"
//             title="Password must be at least 6 characters long and contain at least one number and one special character"
//             required
//           />
//         </div>
//         {/* <div class="radioWrapper">
//                   <div class="radioDiv">
//                     <input
//                       class="radio"
//                       type="radio"
//                       value="JobSeeker"
//                       checked={role === "JobSeeker"}
//                       onChange={(e) => setRole(e.target.value)}
//                       required
//                     />
//                     <label class="form-check-label" for="flexRadioDefault1">
//                       JobSeeker
//                     </label>
//                   </div>
//                   <div class="radioDiv">
//                     <input
//                       class="radio"
//                       type="radio"
//                       value="Recruiter"
//                       checked={role === "Recruiter"}
//                       onChange={(e) => setRole(e.target.value)}
//                       required
//                     />
//                     <label class="form-check-label" for="flexRadioDefault2">
//                       Recruiter
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="registerButtonWrapper">
//                 <button type="submit" className="registerButton">
//                   {loading ? "Loading..." : "Register"}
//                 </button>
//               </div>
//             </form>
//           </div>
//             </div> */}
//       </div>
//     </div>
//   );
// };

export default ResetPassword;
