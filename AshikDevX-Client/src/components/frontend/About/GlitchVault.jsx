import { GlitchVault } from 'seraui';

function GlitchVault() {
  return (
    <GlitchVault
      glitchColor="#FF5733"
      glitchRadius={150}
      performanceMode="balanced"
      theme="dark"
    >
      <div className="p-6 bg-gray-800 text-white rounded-lg">
        <h2 className="text-xl font-semibold">Project Launch</h2>
        <p>Your application is ready for production deployment with all tests passing.</p>
        <div className="mt-4 flex justify-between">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Deploy Now</button>
          <button className="bg-gray-600 text-white py-2 px-4 rounded">View Details</button>
        </div>
      </div>
    </GlitchVault>
  );
}
