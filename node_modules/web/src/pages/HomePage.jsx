import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import { Zap, Users, TrendingDown, Leaf } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <>
      <Helmet>
        <title>Cape York Solar Initiative - Reliable power for essential load</title>
        <meta name="description" content="Designing reliable energy systems for the Lama Lama community at Yintjingga (Port Stewart), prioritising essential loads with minimal generator reliance." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <HeroSection
            backgroundImage="https://horizons-cdn.hostinger.com/284ef9b8-8a0c-4b2b-ad0a-b15017f38872/9e95c05451ecc5319ca854cac1511dda.png"
            title="Reliable power for a sustainable future"
            subtitle="Designing smart relay systems to eliminate energy waste and reduce diesel dependence for the Lama Lama community at Yintjingga, Cape York Peninsula"
            ctaText="Learn more"
            onCtaClick={handleLearnMore}
          />

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our mission</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  The Cape York Solar Initiative addresses Design Area 3.1: Reliable Power for Essential Load. We are designing energy systems that prioritise refrigeration, communications, lighting, and small tools for the Lama Lama community, with minimal reliance on diesel generators.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary/10 mt-1">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Capture wasted energy</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          The existing system wastes 5.3kW of excess solar energy. Our smart relay diverts 3.0kW of that surplus directly into hot water heating, turning waste into a free resource.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary/10 mt-1">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Community-led design</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Working directly with the Lama Lama people at Yintjingga (Port Stewart) to create energy solutions that respect their vision of standing on Country together as one community.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary/10 mt-1">
                        <TrendingDown className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Eliminate fuel costs</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          By eliminating LPG for hot water and reducing diesel consumption, the community saves over $21,000 per year in fuel costs alone.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary/10 mt-1">
                        <Leaf className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Reduce diesel dependence</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Port Stewart previously relied on diesel generators for 7-8 hours per day. Our solution reduces generator runtime and supports the transition to clean, renewable energy.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1695118848390-2332eeaf25dd"
                    alt="Solar panel installation supporting the Lama Lama community"
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-secondary text-secondary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to learn more?</h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Discover how our smart relay design supports the Lama Lama community's vision for reliable, sustainable energy at Yintjingga.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                >
                  Get in touch
                </button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
