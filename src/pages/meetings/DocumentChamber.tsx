import React, { useState } from 'react';
import { FileText, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const DocumentChamber = () => {
  const [signed, setSigned] = useState(false);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 mt-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
        <FileText className="text-blue-600" /> Document Chamber
      </h2>
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4 text-sm text-blue-800">
        Please sign the Investment Agreement to proceed.
      </div>
      <div className="h-20 bg-gray-50 border-2 border-dashed border-gray-300 rounded flex items-center justify-center italic text-gray-500 mb-4">
        {signed ? <span className="text-green-600 font-bold text-xl">Signed ✓</span> : "Click below to sign"}
      </div>
      <Button 
        onClick={() => setSigned(true)}
        className={`w-full ${signed ? 'bg-green-600' : 'bg-blue-600'}`}
        disabled={signed}
      >
        {signed ? "Completed" : "Sign Document"}
      </Button>
    </div>
  );
};