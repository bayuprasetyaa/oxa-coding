import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { mockData } from '../mock';
import { 
  Sparkles, 
  Code, 
  Lightbulb, 
  Trophy, 
  Rocket, 
  Star,
  MessageSquare,
  Instagram,
  Send,
  Clock,
  Users,
  Gamepad2,
  Brain,
  Zap,
  Heart
} from 'lucide-react';
import { toast } from 'sonner';

const Landing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Thank you! We\'ll get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi OXA Coding! I'm interested in your coding class.");
    window.open(`https://wa.me/${mockData.contact.whatsapp.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="landing-page">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-pink-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="oxa-logo flex items-center gap-1">
              <span className="symbol-o">O</span>
              <span className="symbol-x">X</span>
              <span className="symbol-a">A</span>
            </div>
            <span className="font-bold text-xl text-gray-800">Coding</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="nav-link">About</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#testimonials" className="nav-link">Reviews</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <Button onClick={handleWhatsApp} className="cta-button">
            <MessageSquare className="w-4 h-4 mr-2" />
            Free Trial
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="pixel-stars mb-6">
              <Star className="pixel-star" />
              <Sparkles className="pixel-star" />
              <Rocket className="pixel-star" />
            </div>
            <h1 className="hero-title mb-6">
              Learn to Code the <span className="gradient-text">Fun Way</span> with OXA Coding!
            </h1>
            <p className="hero-subtitle mb-8">
              Fun and interactive coding classes for kids and beginners using Scratch, Python, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleWhatsApp} size="lg" className="cta-primary">
                <MessageSquare className="w-5 h-5 mr-2" />
                Join a Free Trial Class
              </Button>
              <Button size="lg" variant="outline" className="cta-secondary" onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}>
                <Gamepad2 className="w-5 h-5 mr-2" />
                See Our Programs
              </Button>
            </div>
            <div className="hero-badges mt-8 flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="pixel-badge">
                <Users className="w-4 h-4 mr-1" /> Ages 7-12
              </Badge>
              <Badge variant="secondary" className="pixel-badge">
                <Sparkles className="w-4 h-4 mr-1" /> Beginner Friendly
              </Badge>
              <Badge variant="secondary" className="pixel-badge">
                <Trophy className="w-4 h-4 mr-1" /> Project-Based
              </Badge>
            </div>
          </div>
        </div>
        <div className="pixel-decoration bottom"></div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
              <Code className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="section-title mb-6">Welcome to OXA Coding!</h2>
            <p className="section-text mb-6">
              OXA Coding is on a mission to make coding fun, accessible, and exciting for kids and beginners everywhere!
            </p>
            <p className="section-text">
              We use beginner-friendly tools like <strong>Scratch</strong>, <strong>Monkey Type</strong>, and <strong>Python</strong> to help 
              students build confidence, creativity, and essential 21st-century skills. Learning to code has never been this much fun!
            </p>
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="why-section py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Why Learn Coding with Us?</h2>
            <p className="section-subtitle">Discover the amazing benefits of coding for your child</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.whyLearn.map((item, index) => {
              const icons = [Sparkles, Brain, Trophy, Zap];
              const Icon = icons[index];
              return (
                <Card key={item.id} className="why-card">
                  <CardHeader>
                    <div className="icon-wrapper mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Our Training Programs</h2>
            <p className="section-subtitle">Choose the perfect coding adventure for your child</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.programs.map((program, index) => {
              const icons = [Gamepad2, Lightbulb, Code];
              const Icon = icons[index];
              return (
                <Card key={program.id} className="program-card">
                  <CardHeader>
                    <div className="program-icon mb-4">
                      <Icon className="w-10 h-10" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-blue-400" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-pink-400" />
                        <span>{program.ageRange}</span>
                      </div>
                      <Badge variant="outline" className="mt-2">{program.level}</Badge>
                    </div>
                    <div className="highlights">
                      <p className="text-sm font-semibold mb-2 text-gray-700">What You'll Learn:</p>
                      <ul className="space-y-1">
                        {program.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <Star className="w-3 h-3 mr-2 mt-1 text-yellow-400 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">What Parents Say</h2>
            <p className="section-subtitle">Real stories from happy families</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mockData.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="testimonial-text mb-4">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <Heart className="w-5 h-5 text-pink-400 mb-2" />
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Let's Connect!</h2>
            <p className="section-subtitle">Get in touch with us for class schedules or trial sessions</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="contact-card">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full cta-button">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="space-y-6">
              <Card className="social-card">
                <CardHeader>
                  <CardTitle>Quick Connect</CardTitle>
                  <CardDescription>Choose your favorite way to reach us</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full social-button whatsapp-button"
                    size="lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-xs opacity-90">Chat with us instantly</div>
                    </div>
                  </Button>
                  
                  <Button 
                    onClick={() => window.open(mockData.contact.instagram, '_blank')}
                    className="w-full social-button instagram-button"
                    size="lg"
                  >
                    <Instagram className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">Instagram</div>
                      <div className="text-xs opacity-90">Follow our journey</div>
                    </div>
                  </Button>
                  
                  <Button 
                    onClick={() => window.open(mockData.contact.tiktok, '_blank')}
                    className="w-full social-button tiktok-button"
                    size="lg"
                  >
                    <Sparkles className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">TikTok</div>
                      <div className="text-xs opacity-90">Fun coding videos</div>
                    </div>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section py-12 border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="oxa-logo flex items-center gap-1">
                <span className="symbol-o">O</span>
                <span className="symbol-x">X</span>
                <span className="symbol-a">A</span>
              </div>
              <span className="font-bold text-xl text-gray-800">Coding</span>
            </div>
            <nav className="flex flex-wrap gap-6 mb-6 md:mb-0">
              <a href="#about" className="footer-link">Home</a>
              <a href="#programs" className="footer-link">Programs</a>
              <a href="#contact" className="footer-link">Contact</a>
              <a href="#" className="footer-link">Privacy Policy</a>
            </nav>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">© 2025 OXA Coding. Making coding fun for everyone!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;