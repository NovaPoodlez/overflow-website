import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Target, Heart, Sprout, Users2, ExternalLink } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About - Cape York Solar Initiative</title>
        <meta name="description" content="Learn about our project supporting the Lama Lama community at Yintjingga with reliable, renewable energy systems." />
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About our initiative</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Supporting the Lama Lama community at Yintjingga with reliable power for essential loads through smart relay technology
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
                    src="https://images.unsplash.com/photo-1695118848390-2332eeaf25dd"
                    alt="Solar energy infrastructure supporting remote communities"
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Background and problem</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Yintjingga (Port Stewart) is a remote Lama Lama community on the eastern coast of Cape York Peninsula in Far North Queensland. Before renewable energy systems were installed, the community relied on diesel generators for 7-8 hours per day. Fuel transport and ongoing maintenance created high costs and dependence on diesel, with the community consuming approximately 5,000 litres per year.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The region faces significant environmental challenges including cyclones, flooding, and extreme heat due to its tropical climate. During the wet season, heavy rainfall can render roads impassable, restricting fuel delivery and infrastructure maintenance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Despite existing Bushlight solar systems, the current setup wastes 5.3kW of excess solar energy and relies on LPG gas for hot water. Our project addresses this inefficiency with a smart relay solution.
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Design criteria: Essential loads</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Design Area 3.1 prioritises reliable power for the services that matter most to the community
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                      <Users2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">Refrigeration</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Supports safe food storage and preserves medicine for the community. Reliable refrigeration is critical for health and wellbeing in a remote location where supply runs are limited by seasonal road access.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">Communications</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Enables internet and phone access, keeping the community connected to essential services, emergency support, and the broader world. Communication is vital for safety in such a remote location.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">Lighting</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Improves safety and quality of life across community buildings, the schoolhouse, and ranger station. Reliable lighting extends productive hours and supports community activities after dark.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                      <Sprout className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">Small tools and living on Country</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Powers essential tools for maintenance, ranger work, and tourism operations. Reliable energy supports the Lama Lama vision of living on Country together, enabling community-led development, self-determination, and long-term growth.
                    </p>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 bg-muted/50 border border-border rounded-3xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Building on Bushlight's foundation</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The Bushlight renewable energy program installed solar systems at Moojeeba and Theethinji, providing a 48VDC system with a maximum daily AC load of 16.4 kWh/day. These systems use solar panels, batteries, and inverters to provide more reliable power than diesel generators alone.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Generator use has been reduced and is mainly needed for heavy appliances or extended cloudy periods. Our smart relay solution builds on this foundation by capturing the excess solar energy that the current system wastes, redirecting it to useful loads like hot water heating.
                    </p>
                    <Button asChild size="lg" className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <a
                        href="https://static1.squarespace.com/static/5450868fe4b09b217330bb42/t/55a4ae70e4b07587ecc461e3/1436855920428/Bushlight+Case+study+23+-+Port+Stewart.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read the Bushlight Case Study
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <div className="relative min-h-[300px] lg:min-h-full order-1 lg:order-2">
                    <img
                      src="https://horizons-cdn.hostinger.com/284ef9b8-8a0c-4b2b-ad0a-b15017f38872/6b4366cece65f8659d38d0d848af8416.png"
                      alt="Bushlight renewable energy system at Port Stewart"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20 bg-muted/50 border border-border rounded-3xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative min-h-[300px] lg:min-h-full order-1 lg:order-1">
                    <img
                      src="https://horizons-cdn.hostinger.com/284ef9b8-8a0c-4b2b-ad0a-b15017f38872/c454aa6adcd2c8d64db3200efd4327b3.png"
                      alt="Engineers Without Borders Australia collaboration"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-2">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Supported by Engineers Without Borders Australia</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      This project is part of the EWB Challenge, which partners university engineering students with real communities facing real infrastructure challenges. The Lama Lama community at Port Stewart was selected as the focus for the 2025-2026 challenge.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      EWB Australia provides the framework for community-centred design, ensuring that our smart relay solution is not only technically sound but also culturally appropriate and aligned with the Lama Lama people's aspirations for their Country.
                    </p>
                    <Button asChild size="lg" className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <a
                        href="https://www.ewb.org.au/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit EWB Australia
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary text-secondary-foreground rounded-3xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold mb-6">Impact at a glance</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-4xl font-bold mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>$21,019</p>
                    <p className="opacity-90">Annual savings by eliminating LPG and reducing diesel consumption</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>5,000 L</p>
                    <p className="opacity-90">Diesel consumed per year before renewable energy intervention</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>3.0 kW</p>
                    <p className="opacity-90">Excess solar energy now diverted to free hot water heating</p>
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

export default AboutPage;
