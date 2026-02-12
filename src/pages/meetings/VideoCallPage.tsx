import React, { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, Settings, MessageSquare } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const VideoCallPage: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] bg-gray-900 rounded-xl overflow-hidden text-white">
      {/* Video Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Main Participant (Investor) */}
        <div className="relative bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
           <p className="text-gray-400 font-medium">Investor (John Doe)</p>
           <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-xs">Live</div>
        </div>

        {/* Self View (Entrepreneur) */}
        <div className="relative bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
           {isVideoOff ? (
             <div className="text-gray-500 bg-gray-900 p-6 rounded-full font-bold">You</div>
           ) : (
             <p className="text-gray-400 font-medium">You (Preview)</p>
           )}
           <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-xs">Your Camera</div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="h-24 bg-gray-950 flex items-center justify-center gap-6">
        <Button 
          onClick={() => setIsMuted(!isMuted)}
          className={`rounded-full p-4 ${isMuted ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
        </Button>

        <Button 
          onClick={() => setIsVideoOff(!isVideoOff)}
          className={`rounded-full p-4 ${isVideoOff ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
        </Button>

        <Button className="bg-red-600 hover:bg-red-700 rounded-full p-4 px-8">
          <PhoneOff size={24} className="mr-2" /> End Call
        </Button>

        <div className="border-l border-gray-700 h-10 mx-2"></div>

        <Button className="bg-gray-700 hover:bg-gray-600 rounded-full p-4">
          <MessageSquare size={24} />
        </Button>
        <Button className="bg-gray-700 hover:bg-gray-600 rounded-full p-4">
          <Settings size={24} />
        </Button>
      </div>
    </div>
  );
};