
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PartyPopper, Skull } from "lucide-react";

const ThankYou: React.FC = () => {
  return (
    <div className="animate-fade-in mt-10">
      <Card className="bg-halloween-dark border border-halloween-purple spooky-shadow max-w-lg mx-auto">
        <CardContent className="pt-6 p-8 text-center">
          <div className="flex justify-center items-center mb-6">
            <PartyPopper className="text-halloween-orange mr-2" size={28} />
            <Skull className="text-halloween-green ml-2" size={28} />
          </div>
          
          <h2 className="text-3xl font-creepster text-white glow-text mb-4">Thanks for RSVPing!</h2>
          
          <p className="text-xl text-white mb-6">
            Your choices have been recorded. Get ready for a spooktacular time!
          </p>
          
          <div className="flex justify-center space-x-4">
            <span className="text-halloween-orange font-bold text-4xl">🎃</span>
            <span className="text-halloween-purple font-bold text-4xl">👻</span>
            <span className="text-halloween-green font-bold text-4xl">🧟‍♂️</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYou;
