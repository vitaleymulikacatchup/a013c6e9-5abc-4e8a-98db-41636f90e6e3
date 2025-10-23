"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Car, CreditCard, DollarSign, Handshake, MessageSquare, RotateCcw, Search, Shield, Star, Users, Wrench } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Inventory", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="CarHub"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Find Your Dream Car Today"
          description="Browse our extensive collection of premium vehicles from trusted brands. Professional service, competitive prices, and financing options available."
          tag="Premium Dealership"
          tagIcon={Car}
          buttons={[
            { text: "Browse Inventory", href: "product" },
            { text: "Get Quote", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/7144181/pexels-photo-7144181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern car showroom with luxury vehicles"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose CarHub"
          description="With over 15 years in the automotive industry, we provide exceptional service and quality vehicles to customers nationwide."
          tag="About Us"
          tagIcon={Shield}
          bulletPoints={[
            {
              title: "Premium Selection",
              description: "Hand-picked vehicles from top manufacturers with complete inspection reports",
              icon: Star
            },
            {
              title: "Expert Service",
              description: "Professional sales team with decades of automotive expertise",
              icon: Users
            },
            {
              title: "Financing Options",
              description: "Flexible payment plans and competitive rates for all credit types",
              icon: CreditCard
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7144177/pexels-photo-7144177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional car sales consultation"
          buttons={[
            { text: "Learn More", href: "contact" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Complete Car Buying Experience"
          description="From selection to delivery, we handle every detail to make your car buying journey seamless and stress-free."
          tag="Services"
          tagIcon={Wrench}
          features={[
            {
              title: "Vehicle Inspection",
              description: "Comprehensive 150-point inspection on every vehicle with detailed report",
              icon: Search
            },
            {
              title: "Financing Assistance",
              description: "Pre-approved financing options with competitive rates and flexible terms",
              icon: DollarSign
            },
            {
              title: "Extended Warranty",
              description: "Optional extended warranty coverage for peace of mind and protection",
              icon: Shield
            },
            {
              title: "Trade-In Evaluation",
              description: "Fair market value assessment for your current vehicle trade-in",
              icon: RotateCcw
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Vehicles"
          description="Explore our handpicked selection of premium vehicles from leading manufacturers."
          tag="Inventory"
          tagIcon={Car}
          products={[
            {
              id: "1",
              brand: "BMW",
              name: "530i Luxury Sedan",
              price: "$42,500",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/13101559/pexels-photo-13101559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "BMW 530i luxury sedan"
            },
            {
              id: "2",
              brand: "Porsche",
              name: "911 Carrera Convertible",
              price: "$89,900",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/17623967/pexels-photo-17623967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Porsche 911 Carrera convertible"
            },
            {
              id: "3",
              brand: "Range Rover",
              name: "Evoque HSE Dynamic",
              price: "$55,750",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://images.pexels.com/photos/14471686/pexels-photo-14471686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Range Rover Evoque SUV"
            },
            {
              id: "4",
              brand: "Tesla",
              name: "Model S Performance",
              price: "$94,990",
              rating: 5,
              reviewCount: "203",
              imageSrc: "https://images.pexels.com/photos/28772164/pexels-photo-28772164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tesla Model S electric sedan"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from satisfied customers who found their perfect vehicle with CarHub."
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Michael Johnson",
              role: "Business Executive",
              company: "TechCorp Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6869043/pexels-photo-6869043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Johnson"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8441826/pexels-photo-8441826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Williams"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Entrepreneur",
              company: "StartupLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Chen"
            },
            {
              id: "4",
              name: "Jennifer Martinez",
              role: "Finance Manager",
              company: "Global Investments",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6325981/pexels-photo-6325981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Jennifer Martinez"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Authorized Dealer Network"
          description="Proud partners with leading automotive brands worldwide."
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/5534978/pexels-photo-5534978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/195636/pexels-photo-195636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6894432/pexels-photo-6894432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6152797/pexels-photo-6152797.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/258083/pexels-photo-258083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get Your Free Quote Today"
          description="Ready to find your dream car? Contact our team for personalized assistance and competitive financing options."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "budget", type: "text", placeholder: "Budget Range", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your ideal vehicle or any specific requirements...",
            rows: 4,
            required: true
          }}
          buttonText="Get Quote"
          imageSrc="https://images.pexels.com/photos/4173196/pexels-photo-4173196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Car dealership consultation office"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Inventory",
              items: [
                { label: "New Vehicles", href: "product" },
                { label: "Pre-Owned Cars", href: "product" },
                { label: "Luxury Collection", href: "product" },
                { label: "Electric Vehicles", href: "product" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Financing", href: "contact" },
                { label: "Trade-In", href: "contact" },
                { label: "Warranty", href: "contact" },
                { label: "Inspection", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Reviews", href: "testimonial" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 CarHub. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}