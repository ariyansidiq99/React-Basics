 const plans = [
  {
    id: 'starter', name: 'Starter', monthly: 0, annual: 0,
    description: 'Perfect for testing Chatriox.',
    features: ['500 WhatsApp msgs/mo','1,000 emails/mo','Basic analytics','Email support'],
    cta: 'Start Free', variant: 'outline',
  },
  {
    id: 'pro', name: 'Pro', monthly: 49, annual: 39,
    description: 'For growing businesses.',
    features: ['Unlimited WhatsApp','Unlimited emails','Full analytics','Automation flows','Priority support'],
    cta: 'Get Started', variant: 'featured', badge: 'Most Popular',
  },
  {
    id: 'enterprise', name: 'Enterprise', monthly: null, annual: null,
    description: 'For large teams.',
    features: ['Everything in Pro','Dedicated manager','Custom integrations','SLA guarantee'],
    cta: 'Contact Sales', variant: 'outline',
  },
];
export default plans;