import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Mettre à jour l'état pour que la prochaine
    // passe d'affichage affiche l'UI de repli.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez aussi envoyer l'erreur à un service de reporting d'erreurs
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez afficher n'importe quelle UI de repli.
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
