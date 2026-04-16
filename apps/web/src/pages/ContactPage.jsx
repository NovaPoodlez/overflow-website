import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    community: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('Message sent successfully. We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        community: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact - Cape York Solar Initiative</title>
        <meta name="description" content="Get in touch with our team about the smart relay project for the Lama Lama community at Yintjingga." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get in touch</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Interested in learning more about our smart relay project for the Lama Lama community? We'd love to hear from you.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Project team</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Our team is working on Design Area 3.1: Reliable Power for Essential Load as part of the EWB Challenge. We're designing energy systems that prioritise the essential services of the Lama Lama community at Yintjingga (Port Stewart), Cape York Peninsula.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary/10 mt-1">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                        <a href="mailto:info@capeyorksolar.org" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                          info@capeyorksolar.org
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary/10 mt-1">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Tutorial</h3>
                        <p className="text-muted-foreground">
                          Tutorial 1, Aaron Ngan
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary/10 mt-1">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Project location</h3>
                        <p className="text-muted-foreground">
                          Yintjingga (Port Stewart), Cape York Peninsula, Queensland
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-secondary text-secondary-foreground">
                    <h3 className="text-xl font-semibold mb-3">Team members</h3>
                    <ul className="space-y-2 opacity-90">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Adrian - Design Solution, Acknowledgement of Country</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Jasmine - Design Criteria, Community Needs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Dario - Background and Problem</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Lav - Design Requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Jay - Design Opportunity, Summary</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Parham - Group Declaration, Design Area</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border">
                    <h2 className="text-2xl font-bold mb-6 text-card-foreground">Send us a message</h2>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-card-foreground">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-2 bg-background text-foreground border-input placeholder:text-muted-foreground"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-card-foreground">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2 bg-background text-foreground border-input placeholder:text-muted-foreground"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="community" className="text-card-foreground">Organisation (optional)</Label>
                        <Input
                          id="community"
                          name="community"
                          type="text"
                          value={formData.community}
                          onChange={handleChange}
                          className="mt-2 bg-background text-foreground border-input placeholder:text-muted-foreground"
                          placeholder="Your organisation or university"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-card-foreground">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="mt-2 bg-background text-foreground border-input placeholder:text-muted-foreground"
                          placeholder="Tell us about your interest in the Lama Lama energy project..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-200 active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
