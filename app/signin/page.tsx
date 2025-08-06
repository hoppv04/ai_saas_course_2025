export default function SigninPage() {
  return (
    <div>
      <div>
        <div>
          <h1>Personalized AI Newsletter</h1>
          <p>Sign In to your account</p>
        </div>

        <div>
          <form>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" required id="email" name="email" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" required id="password" name="password" />
            </div>

            <div>
              <button type="submit">Sign In</button>
            </div>
          </form>

          <div>
            <button>Don't have an account? Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
