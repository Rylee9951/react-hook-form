import React from "react"
import { useForm } from "react-hook-form"
import "../styles/form.css"

export default function App() {
  const { register, errors, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!errors.firstName ? (
        <span className="label">First Name</span>
      ) : (
        errors.firstName && (
          <span className="error">First name is required</span>
        )
      )}
      <input name="firstName" ref={register({ required: true })} />
      {!errors.email ? (
        <span className="label">Email</span>
      ) : (
        errors.email && <span className="error">Valid Email is required</span>
      )}
      <input
        name="email"
        placeholder="bluebill1049@hotmail.com"
        type="text"
        ref={register({
          required: true,
          pattern: {
            value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
            message: "Valid Email required"
          }
        })}
      />
      {!errors.username ? (
        <span className="label">Username</span>
      ) : (
        errors.username && <span className="error">Username is required</span>
      )}
      <input name="username" ref={register({ required: true })} />
      {!errors.password
        ? "Password"
        : errors.password && (
            <span className="error">Password is required</span>
          )}
      <input
        type="password"
        name="password"
        ref={register({
          required: true,
          minLength: {
            value: 6,
            message: "Password Length must be at least 6 characters"
          }
        })}
      />
      {!errors.confirmPassword ? (
        <span className="label">Confirm Password</span>
      ) : (
        errors.confirmPassword && (
          <span className="error">Password is required</span>
        )
      )}
      <input
        type="password"
        name="confirmPassword"
        ref={register({
          required: true,
          minLength: {
            value: 6,
            message: "Password Length must be at least 6 characters"
          }
        })}
      />
      <input type="submit" />
    </form>
  )
}
