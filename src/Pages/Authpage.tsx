import React from 'react';
import axios from 'axios'

interface AuthPageProps {
  onAuth: (authData: { username: string; secret: string }) => void;
}

const AuthPage: React.FC<AuthPageProps> = (props) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value } = (e.target as HTMLFormElement)[0] as HTMLInputElement;
    axios.post('http://localhost:3001/authenticate',
      {username: value}
    )
    .then(r => props.onAuth({...r.data, secret: value}))
    .catch(e => console.log('error', e))
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
