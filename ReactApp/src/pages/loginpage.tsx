import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulierte Überprüfung der Anmeldeinformationen
    if (username === 'admin' && password === 'password') {
      alert('Erfolgreich eingeloggt!');
      // Hier könntest du zur Hauptseite weiterleiten
    } else {
      setError('Ungültige Anmeldeinformationen');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Benutzername:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Passwort:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Einloggen</button>
      </form>
    </div>
  );
}

export default LoginPage;
