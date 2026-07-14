import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex items-center justify-center p-4"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          <div
            className="max-w-md w-full p-8 rounded-xl text-center"
            style={{
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
            }}
          >
            <div
              className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <AlertTriangle
                className="w-8 h-8"
                style={{ color: 'var(--accent-primary)' }}
              />
            </div>

            <h1
              className="text-2xl font-bold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Something went wrong
            </h1>

            <p
              className="mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>

            <button
              onClick={this.handleRetry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-colors duration-200"
              style={{
                backgroundColor: 'var(--button-bg)',
                color: 'var(--text-primary)',
              }}
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary
                  className="cursor-pointer text-sm"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Error Details (Development Only)
                </summary>
                <pre
                  className="mt-2 p-4 rounded-md text-xs overflow-auto"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
