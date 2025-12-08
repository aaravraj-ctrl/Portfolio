import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Certifications from "@/pages/Certifications";
import Resume from "@/pages/Resume";
import Contact from "@/pages/Contact";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/">
          <PageWrapper>
            <Home />
          </PageWrapper>
        </Route>
        <Route path="/about">
           <PageWrapper>
            <About />
          </PageWrapper>
        </Route>
        <Route path="/projects">
           <PageWrapper>
            <Projects />
          </PageWrapper>
        </Route>
        <Route path="/certifications">
           <PageWrapper>
            <Certifications />
          </PageWrapper>
        </Route>
        <Route path="/resume">
           <PageWrapper>
            <Resume />
          </PageWrapper>
        </Route>
        <Route path="/contact">
           <PageWrapper>
            <Contact />
          </PageWrapper>
        </Route>
        <Route>
          <PageWrapper>
            <NotFound />
          </PageWrapper>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <div className="noise-bg" />
          <Navbar />
          <Router />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
