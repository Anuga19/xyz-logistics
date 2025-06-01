import React from 'react';
import { fetchAuthSession } from '@aws-amplify/auth';

export default function ClientDashboard({ signOut, user }) {
  const companyName = user?.attributes?.name || 'Apex Freight';
  const email = user?.attributes?.email || 'anugabro@gmail.com';

  // File Upload Handler
  const handleUpload = async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("file-upload");
    const file = fileInput.files[0];

    if (!file || !file.name.endsWith('.xlsx')) {
      alert("Please select a valid .xlsx file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Content = reader.result.split(',')[1];

      try {
        const session = await fetchAuthSession();
        const token = session.tokens?.idToken?.toString();

        const response = await fetch('https://1lf39ob670.execute-api.us-east-1.amazonaws.com/prod/upload', {
          method: 'POST',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            filename: file.name,
            file_content: base64Content
          }),
        });

        const result = await response.json();
        if (response.ok) {
          alert(" Upload successful");
        } else {
          alert("Upload failed: " + result.error);
        }
      } catch (error) {
        console.error("Upload failed", error);
        alert("An error occurred: " + error.message);
      }
    };

    reader.readAsDataURL(file);
  };


  const [uploadHistory, setUploadHistory] = React.useState([]);

  // Fetch Upload History on Load
  React.useEffect(() => {
    const fetchUploadHistory = async () => {
      try {
        const session = await fetchAuthSession();
        const token = session.tokens?.idToken?.toString();

        const res = await fetch("https://1lf39ob670.execute-api.us-east-1.amazonaws.com/prod/upload-history", {
          headers: {
            Authorization: token,
          },
        });

        const responseData = await res.json();

        // If Lambda returned a stringified body, parse it
        let history = responseData;
        if (responseData && typeof responseData.body === "string") {
          history = JSON.parse(responseData.body);
        }

        // Defensive check before setting state
        if (Array.isArray(history)) {
          setUploadHistory(history);
        } else {
          console.warn("Upload history is not an array:", history);
        }

      } catch (err) {
        console.error("Failed to fetch upload history:", err);
      }
    };

    fetchUploadHistory();
  }, []);



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-purple-700">XYZLogistics</h1>
        <button
          onClick={signOut}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Sign Out
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">

        {/* Account Info */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Account Info</h2>
          <p><strong>Company:</strong> {companyName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Role:</strong> client</p>
        </div>

        {/* Upload Excel File */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Upload Excel File</h2>
          <form onSubmit={handleUpload}>
            <input
              id="file-upload"
              type="file"
              accept=".xlsx"
              className="mb-4 block w-full border border-gray-300 rounded px-4 py-2"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
            >
              Upload
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Upload History</h2>
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr>
                <th className="p-2 font-semibold">Filename</th>
                <th className="p-2 font-semibold">Uploaded At</th>
                <th className="p-2 font-semibold">Shipment Count</th>
                <th className="p-2 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(uploadHistory) && uploadHistory.map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2">{item.filename}</td>
                  <td className="p-2">{item.upload_timestamp}</td>
                  <td className="p-2">{item.count}</td>
                  <td className="p-2 text-green-600 font-medium">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
    </div>
  );
}
