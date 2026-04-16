import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import DataCard from '@/components/DataCard.jsx';
import { TrendingDown, Zap, DollarSign, Users, Battery, Leaf, Home, Calendar, Truck, Wrench, Package, RotateCcw } from 'lucide-react';

const FeasibilityStudyPage = () => {
  return (
    <>
      <Helmet>
        <title>Feasibility study - Cape York Solar Initiative</title>
        <meta name="description" content="Design analysis, energy savings projections, and community impact metrics for the Lama Lama smart relay project at Port Stewart." />
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Design analysis and projections</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Data-driven analysis of the smart relay system's impact on energy efficiency and cost savings at Yintjingga
                </p>
              </motion.div>

              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold mb-4 text-foreground">System overview</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-4xl">
                    The Yintjingga (Port Stewart) community operates a 6.5kWp solar array outputting 4.5kW, paired with a Bushlight 48VDC battery system providing a maximum daily AC load of 16.4 kWh/day. With a community load of just 1.2kW, the system produces significant surplus energy. Our analysis quantifies the waste in the current configuration and the savings achieved by introducing the Catch Power Relay and solar diverter.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <DataCard
                    title="Solar capacity"
                    value="6.5 kWp"
                    description="Peak solar array capacity with 4.5kW effective output"
                    icon={Zap}
                    delay={0.1}
                  />
                  <DataCard
                    title="Annual fuel savings"
                    value="$21,019"
                    description="Combined LPG ($4,769) and diesel ($16,250) savings per year"
                    icon={DollarSign}
                    trend={100}
                    delay={0.2}
                  />
                  <DataCard
                    title="Community load"
                    value="1.2 kW"
                    description="Average essential load: refrigeration, lighting, comms, tools"
                    icon={Home}
                    delay={0.3}
                  />
                  <DataCard
                    title="Daily capacity"
                    value="16.4 kWh"
                    description="Maximum daily AC load from Bushlight 48VDC system"
                    icon={Calendar}
                    delay={0.4}
                  />
                </div>
              </div>

              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Energy waste vs. recovery</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-4xl mb-8">
                    The current system wastes significant energy that could be captured. Our smart relay recovers the majority of this surplus for productive use.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <DataCard
                    title="Energy wasted (before)"
                    value="5.3 kW"
                    description="Excess solar energy dumped as waste heat without a diverter"
                    icon={TrendingDown}
                    delay={0.1}
                  />
                  <DataCard
                    title="Energy recovered"
                    value="3.0 kW"
                    description="Surplus solar diverted to hot water heating via smart relay"
                    icon={Battery}
                    trend={56.6}
                    delay={0.2}
                  />
                  <DataCard
                    title="LPG eliminated"
                    value="100%"
                    description="Gas hot water replaced entirely by solar immersion heater"
                    icon={Leaf}
                    trend={100}
                    delay={0.3}
                  />
                </div>
              </div>

              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Efficiency comparison</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-4xl mb-8">
                    Replacing the LPG instant gas system with a solar-powered immersion heater delivers a dramatic improvement in energy efficiency.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <TrendingDown className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground">Gas instant hot water</h3>
                        <p className="text-3xl font-bold text-card-foreground mt-2" style={{ fontVariantNumeric: 'tabular-nums' }}>60%</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      The existing LPG instant hot water system operates at just 60% efficiency, with 40% of energy lost. It requires 1.7kW input to produce 1.0kW of hot water, while burning 0.12 kg/hr of LPG gas.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground">Solar immersion heater</h3>
                        <p className="text-3xl font-bold text-card-foreground mt-2" style={{ fontVariantNumeric: 'tabular-nums' }}>99%</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      The solar-powered immersion heater wastes almost nothing, achieving 99% efficiency. It uses free surplus solar energy, costs nothing to run, and eliminates the community's dependence on LPG gas entirely.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* COST REPORT SECTION */}
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Project cost report</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-4xl">
                    A detailed cost breakdown for supplying and installing the Rinnai Hotflo 315L electric tank and Catch Power Solar Relay at Yintjingga, including transport to the remote site, government rebates, and on-site labour.
                  </p>
                </motion.div>

                {/* Equipment */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" /> Equipment
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Hot water tank</p>
                      <p className="text-lg font-semibold text-card-foreground mb-1">Rinnai Hotflo 315L (EHFA315S36)</p>
                      <p className="text-2xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>~$1,105</p>
                      <p className="text-sm text-muted-foreground">Queensland/WA version. 3.6kW immersion element. Suits 3kW divert rate with capacity for variable community usage.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Smart relay / diverter</p>
                      <p className="text-lg font-semibold text-card-foreground mb-1">Catch Power Solar Relay (2CT)</p>
                      <p className="text-2xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>~$447</p>
                      <p className="text-sm text-muted-foreground">Monitors solar export and automatically diverts surplus to hot water tank. Compatible with Bushlight inverter setup.</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-xl bg-muted/50 border border-border flex justify-between items-center">
                    <span className="font-semibold text-foreground">Equipment subtotal</span>
                    <span className="text-xl font-bold text-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>~$1,552</span>
                  </div>
                </motion.div>

                {/* Rebates */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                    <RotateCcw className="h-5 w-5 text-primary" /> Government rebates
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Federal STC scheme</p>
                      <p className="text-2xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>−$300–$500</p>
                      <p className="text-sm text-muted-foreground">Replacing gas with electric qualifies. Far North QLD is Zone 1 — highest STC value. Installer typically deducts upfront at point of purchase.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <p className="text-sm text-muted-foreground mb-1">QLD Climate Smart Energy Saver</p>
                      <p className="text-2xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>−$800</p>
                      <p className="text-sm text-muted-foreground">Standard household rebate for replacing old gas hot water with an efficient electric system. Applied at installation. ($1,000 available for low-income households.)</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-xl bg-muted/50 border border-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">Total rebates</span>
                      <span className="text-xl font-bold text-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>~−$1,100–$1,300</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">Net equipment cost after rebates</span>
                      <span className="text-xl font-bold text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>~$252–$452</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Note: STC eligibility for community/ranger station classification should be confirmed with the Clean Energy Regulator.</p>
                </motion.div>

                {/* Transport */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                    <Truck className="h-5 w-5 text-primary" /> Transport to site
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">Port Stewart has no sealed road access. The tank (~80kg, ~1.6m tall) cannot travel as checked baggage. Three options were assessed:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-card-foreground">Option A — Sea Swift barge</p>
                        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">Slower</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>~$400–$700</p>
                      <p className="text-sm text-muted-foreground">Cairns → Port Stewart via Sea Swift Cape York service. Charged by weight/volume. Weekly schedule — unreliable during wet season.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card border border-border border-primary/40">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-card-foreground">Option B — Charter aircraft</p>
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">Recommended</span>
                      </div>
                      <p className="text-2xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>~$2,000</p>
                      <p className="text-sm text-muted-foreground">Hinterland Aviation or Skytrans light charter, Cairns to Port Stewart airstrip. Carries tank + relay + installer in one flight. Reliable year-round.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card border border-border opacity-75">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-card-foreground">Option C — 4WD overland</p>
                        <span className="text-xs px-2 py-1 rounded-full bg-destructive/10 text-destructive font-medium">Not recommended</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>~$600–$900</p>
                      <p className="text-sm text-muted-foreground">Cairns → Cooktown → overland via Cape York Peninsula. Dry season only. Extremely unreliable due to road wash-outs, high vehicle wear, and no wet season access.</p>
                    </div>
                  </div>
                  <div className="mt-2 p-4 rounded-xl bg-muted/50 border border-border flex justify-between items-center">
                    <span className="font-semibold text-foreground">Transport (recommended)</span>
                    <span className="text-xl font-bold text-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>~$2,000</span>
                  </div>
                </motion.div>

                {/* Labour */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" /> Labour — on-site installation
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">A licensed plumber and electrician travel together on the same charter to minimise trips. Remote area rates apply.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 pr-4 font-semibold text-foreground">Role</th>
                          <th className="text-left py-3 pr-4 font-semibold text-foreground">Rate</th>
                          <th className="text-left py-3 pr-4 font-semibold text-foreground">Time</th>
                          <th className="text-right py-3 font-semibold text-foreground">Cost</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border/50">
                          <td className="py-3 pr-4">Licensed plumber</td>
                          <td className="py-3 pr-4">~$120/hr (remote rate)</td>
                          <td className="py-3 pr-4">~4 hrs</td>
                          <td className="py-3 text-right">~$480</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 pr-4">Licensed electrician</td>
                          <td className="py-3 pr-4">~$120/hr (remote rate)</td>
                          <td className="py-3 pr-4">~3 hrs</td>
                          <td className="py-3 text-right">~$360</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 pr-4">Remote travel allowance (×2)</td>
                          <td className="py-3 pr-4">~$300/day per person</td>
                          <td className="py-3 pr-4">1 day</td>
                          <td className="py-3 text-right">~$600</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 rounded-xl bg-muted/50 border border-border flex justify-between items-center">
                    <span className="font-semibold text-foreground">Labour subtotal</span>
                    <span className="text-xl font-bold text-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>~$1,440</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">If existing Bushlight-trained staff on Country hold relevant certifications, labour costs could be significantly reduced or eliminated.</p>
                </motion.div>

                {/* Total + ROI */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-8 rounded-2xl bg-primary/10 border border-primary/20"
                >
                  <h3 className="text-xl font-semibold mb-6 text-foreground">Total project cost &amp; return on investment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Equipment (tank + relay)</span>
                        <span className="text-foreground">$1,552</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Less government rebates</span>
                        <span className="text-primary">−$1,100 to −$1,300</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Transport (charter)</span>
                        <span className="text-foreground">~$2,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Labour</span>
                        <span className="text-foreground">~$1,440</span>
                      </div>
                      <div className="border-t border-border/50 pt-3 flex justify-between">
                        <span className="font-bold text-foreground">Total project cost</span>
                        <span className="font-bold text-foreground text-lg" style={{ fontVariantNumeric: 'tabular-nums' }}>~$3,692–$3,892</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Annual savings (LPG eliminated)</p>
                        <p className="text-3xl font-bold text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>$4,769/yr</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Estimated payback period</p>
                        <p className="text-3xl font-bold text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>&lt; 12 months</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Payback period based on LPG savings alone. Diesel reduction savings ($16,250/yr) are additional, improving ROI further.</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold mb-6">Key findings</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="opacity-90 leading-relaxed">
                      The existing system wastes 5.3kW of excess solar energy, while simultaneously burning LPG for hot water at $4,769 per year.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="opacity-90 leading-relaxed">
                      Installing a Catch Power Relay and diverter captures 3.0kW of surplus energy for hot water heating, completely eliminating LPG consumption.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="opacity-90 leading-relaxed">
                      Combined annual savings of $21,019 ($4,769 LPG + $16,250 diesel) make the investment rapidly recoverable.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="opacity-90 leading-relaxed">
                      The remaining 2.3kW of uncaptured surplus can be addressed by duplicating the system for the neighbouring village, doubling the impact across the community.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="opacity-90 leading-relaxed">
                      Replacing the 60% efficient gas system with a 99% efficient solar immersion heater is a straightforward upgrade that delivers immediate, measurable benefits to the community.
                    </p>
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

export default FeasibilityStudyPage;
