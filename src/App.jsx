import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PeekingMascot from './components/PeekingMascot'
import ScrollToTop from './components/ScrollToTop'

const Home   = lazy(() => import('./pages/Home'))
const About  = lazy(() => import('./pages/About'))
const Event  = lazy(() => import('./pages/Event'))
const Prizes = lazy(() => import('./pages/Prizes'))
const FAQ    = lazy(() => import('./pages/FAQ'))
const CodeOfConduct  = lazy(() => import('./pages/CodeOfConduct'))
const PrivacyPolicy  = lazy(() => import('./pages/PrivacyPolicy'))
const Terms  = lazy(() => import('./pages/Terms'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"        element={<Home />}   />
          <Route path="/about"   element={<About />}  />
          <Route path="/event"   element={<Event />}  />
          <Route path="/prizes"  element={<Prizes />} />
          <Route path="/faq"     element={<FAQ />}    />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/privacy-policy"  element={<PrivacyPolicy />} />
          <Route path="/terms"           element={<Terms />} />
        </Routes>
      </Suspense>
      <Footer />
      <PeekingMascot />
    </BrowserRouter>
  )
}
