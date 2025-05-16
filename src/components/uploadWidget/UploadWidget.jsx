import { useEffect, useState } from "react";

function UploadWidget({ uwConfig, setState }) {
  const [widget, setWidget] = useState(null);

  useEffect(() => {
    const scriptId = "cloudinary-widget";

    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.id = scriptId;
      script.async = true;
      script.onload = () => {
        if (window.cloudinary) {
          const newWidget = window.cloudinary.createUploadWidget(
            uwConfig,
            (error, result) => {
              if (!error && result && result.event === "success") {
                console.log("Upload success:", result.info);
                // setAvatar(result.info.secure_url);
                setState((prev) => [...prev, result.info.secure_url]);
              }
            }
          );
          setWidget(newWidget);
        } else {
          console.error("Cloudinary failed to load");
        }
      };
      document.body.appendChild(script);
    };

    // Only load if not already present
    if (!document.getElementById(scriptId)) {
      loadScript();
    } else if (window.cloudinary) {
      const newWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Upload success:", result.info);
            // setAvatar(result.info.secure_url);
            setState((prev) => [...prev, result.info.secure_url]);
          }
        }
      );
      setWidget(newWidget);
    }
  }, [uwConfig, setState]);

  return (
    <button
      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      onClick={() => widget && widget.open()}
    >
      Upload
    </button>
  );
}

export default UploadWidget;











