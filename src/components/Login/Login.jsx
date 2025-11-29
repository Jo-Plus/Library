import React, { useState , useContext  } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { UserContext } from '../../../context/UserContext.jsx';

export default function Login() {
  const navigate = useNavigate();
  let {setUserLogin} = useContext(UserContext); 
  const [apiError, setApiError] = useState("");
  const [ isLoading , setIsLoading] = useState(false);

function handleLogin(values) {
  setIsLoading(true);
  axios
    .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
    .then((res) => {
      if (res?.data?.message === "success") {
        localStorage.setItem("userToken", res.data.token);
        setUserLogin(res.data.token);
        setIsLoading(false);
        navigate("/");
      }
    })
    .catch((error) => {
      setIsLoading(false);
      setApiError(error?.response?.data?.message);
    });
}

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "Password must start with uppercase then lowercase or numbers"
      )
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
      <Navbar />

      <div className="!flex !justify-center !items-center !min-h-[calc(100vh-80px)] !bg-[var(--primary-bg)] !overflow-hidden !mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="!w-[90%] sm:!w-[60%] md:!w-[50%] lg:!w-[40%] !bg-white !border !border-neutral-300 !rounded-2xl !shadow-xl !p-8 !container"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="!text-center !text-2xl !font-semibold !text-neutral-800 !mb-6"
          >
            Login to Your Account
          </motion.h2>

          <form className="!space-y-5" onSubmit={formik.handleSubmit}>
            {apiError && (
              <div className="!p-4 !mb-4 !text-sm !text-red-800 !rounded-lg !bg-red-50">
                {apiError}
              </div>
            )}

            <div>
              <label className="!block !mb-1 !text-sm !font-medium !text-neutral-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                className="!w-full !px-3 !py-2 !rounded-lg !border !border-neutral-300 !focus:border-amber-600 !focus:ring-2 !focus:ring-amber-300"
                placeholder="example@gmail.com"
              />
              {formik.errors.email && formik.touched.email && (
                <div className="!p-3 !mt-2 !text-sm !text-red-800 !bg-red-50 !rounded-lg">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div>
              <label className="!block !mb-1 !text-sm !font-medium !text-neutral-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                className="!w-full !px-3 !py-2 !rounded-lg !border !border-neutral-300 !focus:border-amber-600 !focus:ring-2 !focus:ring-amber-300"
                placeholder="••••••••"
              />
              {formik.errors.password && formik.touched.password && (
                <div className="!p-3 !mt-2 !text-sm !text-red-800 !bg-red-50 !rounded-lg">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="!mt-6 !w-full !bg-amber-700 !text-white !py-2.5 !rounded-lg !shadow-md !hover:!bg-amber-800 !transition !font-medium"
            >
              Login
            </motion.button>
          </form>

          <p className="!text-center !text-sm !text-neutral-600 !mt-4">
            Don't have an account?
            <span className="!text-amber-700 !font-medium !hover:!underline !cursor-pointer !ml-1">
              <Link to="../Register">Register Now</Link>
            </span>
          </p>
        </motion.div>
      </div>
    </>
  );
}



