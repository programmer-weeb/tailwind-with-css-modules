'use client'
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "tXfI736NbsI8eCHfMS-6X",
      domain: "www.chatbase.co",
    };

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/tXfI736NbsI8eCHfMS-6X"
        width="100%"
        style={{ height: "100%", minHeight: "700px" }}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
