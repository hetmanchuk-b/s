interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <main className="auth">
      {children}
    </main>
  )
}

export default AuthLayout;
