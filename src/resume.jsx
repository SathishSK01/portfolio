import axios from "axios";

const handleDownload = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/user/details",
      { responseType: "blob" }
    );

    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: "application/pdf" })
    );

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Sathish_Kumar_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
  }
};

export default handleDownload;