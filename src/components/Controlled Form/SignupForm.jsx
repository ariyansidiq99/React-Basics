import React, { useState } from "react";

const RULES = {
  name: {
    validate: (v) => v.trim().length >= 2,
    msg: "Name must be at least 2 characters",
  },
  email: {
    validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    msg: "Enter a valid email address",
  },
  password: {
    validate: (v) => v.length >= 8,
    msg: "Password must be at least 8 characters",
  },
};

const SignupForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (name, value) => {
    const rule = RULES[name];
    return rule && !rule.validate(value) ? rule.msg : "";
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validate(name, value),
      }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, value),
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Validate all fields properly
    const newErrors = Object.fromEntries(
      Object.keys(RULES).map((k) => [k, validate(k, values[k])])
    );

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      password: true,
    });

    if (Object.values(newErrors).some(Boolean)) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="success-state">
        <div className="success-icon">✓</div>
        <h2>Welcome to Chatriox</h2>
        <p>Account created for {values.email}</p>
      </div>
    );
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <h2>Create Your Account</h2>

      {["name", "email", "password"].map((field) => (
        <div key={field} className="field">
          <label htmlFor={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>

          <input
            id={field}
            name={field}
            type={
              field === "password"
                ? "password"
                : field === "email"
                ? "email"
                : "text"
            }
            value={values[field]}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`field_input ${
              touched[field]
                ? errors[field]
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
          />

          {touched[field] && errors[field] && (
            <span className="field error">{errors[field]}</span>
          )}
        </div>
      ))}

      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Creating account..." : "Create Account"}
      </button>
    </form>
  );
};

export default SignupForm;