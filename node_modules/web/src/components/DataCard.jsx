import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DataCard = ({ title, value, description, icon: Icon, trend, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full transition-all duration-200 hover:shadow-lg border-border bg-card">
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg font-semibold text-card-foreground">{title}</CardTitle>
            {Icon && (
              <div className="p-2 rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-card-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>
              {value}
            </p>
            {description && (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
            {trend && (
              <p className={`text-sm font-medium ${trend > 0 ? 'text-primary' : 'text-destructive'}`}>
                {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% from baseline
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DataCard;