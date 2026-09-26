import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/hooks/useTheme'
import { Layout } from '@/components/layout/Layout'
import Home from '@/pages/Home'
import PowerPlatformHome from '@/pages/PowerPlatformHome'
import WebDevelopment from '@/pages/WebDevelopment'
import Services from '@/pages/Services'
import Solutions from '@/pages/Solutions'
import Industries from '@/pages/Industries'
import CaseStudies from '@/pages/CaseStudies'
import About from '@/pages/About'
import Training from '@/pages/Training'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import Contact from '@/pages/Contact'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="power-platform-development" element={<PowerPlatformHome />} />
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="services" element={<Services />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="industries" element={<Industries />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="about" element={<About />} />
          <Route path="training" element={<Training />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
