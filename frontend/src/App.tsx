import { ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary-foreground"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <h1 className="text-xl font-bold text-primary-foreground">
              BankSys
            </h1>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-20">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Bank Management System
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              A comprehensive solution for managing banking operations, customer
              accounts, transactions, and employee data.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/login">
                  Employee Login <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/demo">View Demo</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Key Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Customer Management</h3>
                <p className="text-muted-foreground">
                  Manage customer profiles, accounts, and preferences with ease.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Transaction Processing
                </h3>
                <p className="text-muted-foreground">
                  Handle deposits, withdrawals, transfers, and other financial
                  transactions securely.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 12h-4" />
                    <path d="M18 8v8" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Employee Management</h3>
                <p className="text-muted-foreground">
                  Organize staff information, roles, permissions, and
                  performance metrics.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2H2v10h10V2z" />
                    <path d="M22 12h-10v10h10V12z" />
                    <path d="M12 12H2v10h10V12z" />
                    <path d="M22 2h-10v10h10V2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Intuitive Dashboard</h3>
                <p className="text-muted-foreground">
                  Access all system features through a clean, user-friendly
                  interface.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} BankSys. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Terms
            </Link>
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacy
            </Link>
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
