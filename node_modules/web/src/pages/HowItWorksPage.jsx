import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Cpu, Battery, Gauge, Shield } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <>
      <Helmet>
        <title>How it works - Cape York Solar Initiative</title>
        <meta name="description" content="Learn how the smart relay and solar diverter system captures wasted energy and eliminates fuel costs for the Lama Lama community." />
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">How the smart relay works</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Understanding the Catch Power Relay and solar diverter system that turns wasted energy into free hot water
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1680050973249-096ba76ad2f1"
                    alt="Solar panel installation with energy diverter technology"
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-4 text-foreground">The energy waste problem</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The existing 6.5kWp solar system at Port Stewart outputs 4.5kW, but the community load is only 1.2kW. Without a diverter, the remaining 3.3kW of surplus solar energy is simply dumped as waste heat. Meanwhile, the community burns LPG gas for hot water at 0.12 kg/hr, costing $4,769 per year.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This means the community is wasting free solar energy while simultaneously paying for expensive fossil fuel to heat water. The gas instant hot water system operates at only 60% efficiency, while a solar-powered immersion heater achieves 99%.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our smart relay solution fixes this by redirecting surplus solar energy to an immersion heater in a hot water tank, eliminating the need for LPG entirely.
                  </p>
                </motion.div>
              </div>

              <div className="mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">How the system works</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Four key stages from solar generation to free hot water
                  </p>
                </motion.div>

                <div className="space-y-12">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                  >
                    <div className="md:col-span-2 flex justify-center md:justify-start">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>1</span>
                      </div>
                    </div>
                    <div className="md:col-span-10">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-primary/10 mt-1">
                          <Gauge className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-3 text-foreground">Solar generation</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            The 6.5kWp solar array generates up to 4.5kW of power. The community's essential loads (refrigeration, lighting, communications, small tools) draw approximately 1.2kW, leaving a significant surplus of energy available during peak sun hours.
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
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                  >
                    <div className="md:col-span-2 flex justify-center md:justify-start">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>2</span>
                      </div>
                    </div>
                    <div className="md:col-span-10">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-primary/10 mt-1">
                          <Cpu className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-3 text-foreground">Smart relay detection</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            The Catch Power Relay monitors the energy flow in real time. When it detects that solar generation exceeds the community's current demand, it automatically activates the diverter to redirect surplus energy rather than letting it go to waste.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                  >
                    <div className="md:col-span-2 flex justify-center md:justify-start">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>3</span>
                      </div>
                    </div>
                    <div className="md:col-span-10">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-primary/10 mt-1">
                          <Battery className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-3 text-foreground">Energy diversion to hot water</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            The diverter channels 3.0kW of excess solar energy directly into an immersion heater inside a hot water tank. This replaces the old LPG instant gas system (which wasted 40% of its energy) with a 99% efficient solar-electric immersion heater, heating water for free.
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
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                  >
                    <div className="md:col-span-2 flex justify-center md:justify-start">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>4</span>
                      </div>
                    </div>
                    <div className="md:col-span-10">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-primary/10 mt-1">
                          <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-3 text-foreground">Generator stays off</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            With the smart relay managing energy flow, the diesel generator (Kubota GL9000, 8.8kVA / 7kW) remains off during solar production hours. The community's essential loads are powered by solar, hot water is heated for free, and diesel is reserved only for heavy appliances or extended cloudy periods.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold mb-6">Before vs. after comparison</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Without smart relay</h3>
                    <ul className="space-y-2 opacity-90">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>5.3kW of excess solar energy wasted as heat</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>LPG gas burned for hot water at 0.12 kg/hr</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>$4,769/yr spent on LPG, $16,250/yr on diesel</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">With smart relay</h3>
                    <ul className="space-y-2 opacity-90">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>3.0kW of surplus diverted to free hot water</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>LPG eliminated entirely, saving $4,769/yr</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Diesel consumption drastically reduced, saving $16,250/yr</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HowItWorksPage;
